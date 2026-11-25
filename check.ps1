# READ-ONLY: opens a project's tracking page in headless Edge and says whether its data file is correct.
#   .\check.ps1 -Project example
# Output: "ok", the list of problems found by the page, or the reason it displayed nothing.
# Exit code: 0 if ok, 1 otherwise.
param([Parameter(Mandatory = $true)][ValidatePattern('^[a-zA-Z0-9_-]+$')][string]$Project)

$ErrorActionPreference = 'Stop'
$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") |
  Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { Write-Output 'Edge not found.'; exit 1 }

$page = 'file:///' + ((Join-Path $PSScriptRoot 'index.html') -replace '\\', '/') + "?projet=$Project"
# Throwaway profile specific to this run (--headless: never a visible window), deleted at the end.
$token = [guid]::NewGuid().ToString('N').Substring(0, 8)
$profileDir = Join-Path $env:TEMP "edge-check-tracker-$token"
$outFile = Join-Path $env:TEMP "tracker-dom-$token.html"
cmd /c "`"$edge`" --headless=new --user-data-dir=`"$profileDir`" --virtual-time-budget=5000 --dump-dom `"$page`" > `"$outFile`" 2>nul"
$dom = $null
for ($i = 0; $i -lt 40 -and $null -eq $dom; $i++) {
  try { $dom = [IO.File]::ReadAllText($outFile, [Text.Encoding]::UTF8) } catch { Start-Sleep -Milliseconds 250 }
}
for ($i = 0; $i -lt 20 -and (Test-Path $profileDir); $i++) {
  try { Remove-Item $profileDir, $outFile -Recurse -Force -ErrorAction Stop } catch { Start-Sleep -Milliseconds 250 }
}
if ($null -eq $dom) { Write-Output 'Edge did not render the page in time.'; exit 1 }

if ($dom -notmatch 'data-suivi="([^"]+)"') { Write-Output 'The page did not load.'; exit 1 }
$status = $Matches[1]
if ($status -eq 'ok') { Write-Output 'ok'; exit 0 }

function Get-PlainText([string]$html) { [Net.WebUtility]::HtmlDecode((($html -replace '</h1>', ' : ') -replace '<[^>]+>', '')).Trim() }
# Only read what the page displayed (#app), not the page's own code, which contains the same tags.
$start = $dom.IndexOf('<div id="app">'); $end = $dom.IndexOf('<script', [Math]::Max(0, $start))
if ($start -ge 0 -and $end -gt $start) { $dom = $dom.Substring($start, $end - $start) }
if ($status -like 'problemes:*') {
  Write-Output "Problems in the data file ($($status.Split(':')[1])):"
  [regex]::Matches($dom, '(?s)<div class="alerte".*?</ul>') | ForEach-Object {
    [regex]::Matches($_.Value, '(?s)<li>(.*?)</li>') | ForEach-Object { Write-Output ('- ' + (Get-PlainText $_.Groups[1].Value)) }
  }
} else {
  $m = [regex]::Match($dom, '(?s)<div class="erreur">(.*?)</div>')
  Write-Output ("Page error: " + (Get-PlainText $m.Groups[1].Value))
}
exit 1
