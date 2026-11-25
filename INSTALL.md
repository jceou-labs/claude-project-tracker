# Installing the tracker kit (for Claude to do)

This file is addressed to Claude Code. The user simply pastes:

> Install the project tracker in this folder by following INSTALL.md.

## Steps for Claude

1. The kit must stay in a fixed place (the pages and the skill point to it). If it is in Downloads or on the
   Desktop, offer to move it, for example to `~/project-tracker/`, and wait for the user's answer.
2. Note the full path of the kit folder, with forward slashes `/` (e.g. `C:/Users/<name>/project-tracker`).
3. With the user's agreement (writing to `~/.claude/`): copy `skill/project-tracker/SKILL.md` to
   `~/.claude/skills/project-tracker/SKILL.md`, then replace every `TRACKER_DIR` in that copy with the noted path.
   Do not modify the kit's own `SKILL.md`.
4. Open `index.html` then `overview.html` in the browser (or, on Windows, run
   `check.ps1 -Project example`, which must answer "ok") to show the example projects.
5. Explain in three lines: to track a project, open a Claude Code session in that project and say
   "add this project to the tracking page"; after that, every session keeps the page up to date on its own.

The skill is loaded by Claude Code sessions opened after the installation (not by the one doing the installing).
