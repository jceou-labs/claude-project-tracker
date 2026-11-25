---
name: "project-tracker"
description: "Graphical tracking page for the user's projects (TRACKER_DIR/index.html): create a project's suivi.js data file and register it in the page, or update it. Use when the user wants to track a project in the page, at every important step completed in a project that has a suivi.js at its root, and before closing a session that changed the state of a tracked project."
---

# Project tracking: keeping the page up to date

TRACKER_DIR is the tracker kit folder on this PC (where `index.html` and `overview.html` are). If that word is
still written as is here, the kit is not installed: follow the kit's `INSTALL.md`, or ask the user for the path.

The page `TRACKER_DIR/index.html` shows, for each project, what is in place, what remains, the next step,
what is waiting for the user, and a timeline of work items per part. It contains nothing specific to a project: everything
comes from the `suivi.js` data file, stored at the project's root. The user reads the page, not the files: wrong or
late data misleads them. Field names and allowed values in the data files are French (`etat`, `chantiers`, `apres`...):
keep them as they are.

## Update (at every important step completed)

In the same motion as the project's handoff notes (HANDOFF.md, PLAN.md or equivalent), before the commit:
1. Work item finished: `etat: "fait"`, `date` (dd/mm), `ref` (step, commit or decision); remove `duree`, `qui`, `detail`.
2. New next step for Claude: `etat: "prochaine"` on a single work item.
3. What is waiting for the user (decision, action, agreement): `etat: "attente"`, `qui: "toi"` or `"ensemble"`.
4. Feature delivered: a line in the part's `fonctions`; idea abandoned: `ecartes` with the reason.
5. Durations revised if the plan moved; work items added or removed as in the project's plan.
6. `majLe` (today's date, dd/mm/yyyy) and `source` (files read, branch, short commit).
7. Check (below); if the project is under Git, the file is committed with the step, in the project's repository.

## Create a project's tracking

1. Copy `TRACKER_DIR/projects/_template.js` to `<project>/suivi.js`; replace `my-project` in it with the project's
   id (lowercase, digits, hyphens). The template describes each field at the top of the file; `projects/example.js` shows
   a filled-in project.
2. Fill it in from the project's files (plan, handoff notes, decisions, README) and from `git log` if there is one:
   two to four parts (each with a unique `code` letter, which prefixes its marker numbers), the features
   in place, the remaining work items with their `apres` dependencies (even across parts), their durations and who acts.
   What cannot be found in the project: ask the user, do not invent it.
3. Register the project in `TRACKER_DIR/projects/index.js`:
   `{ id: "<id>", nom: "<Name>", fichier: "<full path>/suivi.js" }` (forward slashes `/`, even on Windows).
   Writing outside the open project: ask the user's agreement first.
4. Offer the user a background for the project's card in the page: either one of the images in
   `TRACKER_DIR/backgrounds/` (list them), or their own image, copied into that folder. Then add the optional `fond`
   field to the project's entry in `projects/index.js`, with the path relative to `index.html`
   (e.g. `fond: "backgrounds/rocket.jpg"`). Without a `fond`, the page draws its own terrain.
5. If the project has a `CLAUDE.md`, add the rule to it: "at every step completed, keep `suivi.js` up to date (skill `project-tracker`)".
6. Remove the example projects (`example`, `example-2`) from `projects/index.js` at the first real project registered,
   with the user's agreement.
7. Check, then give the link `TRACKER_DIR/index.html?projet=<id>`.

## Check

Windows (headless Edge, read-only):
```powershell
& "TRACKER_DIR/check.ps1" -Project <id>    # prints "ok" or the list of problems
```
Elsewhere: open `index.html?projet=<id>` in the browser; problems appear in a banner at the top.
The page checks the file (missing fields, unknown state, duplicate id, `apres` pointing to a missing work item,
malformed duration, no "prochaine"). Fix until "ok".

## Overview

`TRACKER_DIR/overview.html` shows all projects on one page (percentage of work items done, status, next
step, what is waiting for the user, pace of items completed per day). It recomputes itself from the `suivi.js` files:
nothing to do there for a tracked project. Only projects without a `suivi.js` are noted by hand in
`TRACKER_DIR/projects/untracked.js`: fix their line when they move, remove it when they get their own page.

## Rules

- The user runs no command for the tracking: the session that finishes a work item updates `suivi.js` and
  saves it itself (commit with the work item if the project is under Git).
- Nothing invented: every state, date and figure comes from the project; a figure carries `nature: "mesuré"` or `"estimé"`
  (measured or estimated). A duration nobody can estimate: `inconnue: true`, never a random number.
- A finished work item always carries its `date`: without it, it does not count in the overview's pace.
- No person's name, secret or real data in `suivi.js` (it may be committed); `"toi"` means the user.
- Plain words: a `detail` says what will be done in one sentence.
- Do not modify `index.html` or `overview.html` for a project: if the page cannot display something, suggest it
  to the user.
