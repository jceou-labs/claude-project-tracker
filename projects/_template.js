// Template to copy for a new project: copy it to <project folder>\suivi.js, replace "my-project" below with the
// project's id (letters, digits, hyphens), fill it in from PLAN.md, HANDOFF.md, DECISIONS.md and git log,
// then register the project in the page's projects\index.js (full procedure: skill project-tracker).
// All values below are made up. No person's name, secret or real data.
// Field names and allowed values stay in French: the pages and check.ps1 depend on them. Their meaning:
//
// Project: nom (project name), resume (one-sentence summary), majLe (last update, dd/mm/yyyy),
//   source (files and commit the states come from),
//   accroche (optional, two-line title, defaults to ["Where we are with", nom]).
//   parties (the project's parts, see below).
// Part (partie): id, code (one unique letter: prefix of the marker numbers, M1, M2...), nom (name),
//   nomCourt (short name for the menu, optional), couleur (colour, #rrggbb), but (goal of the part),
//   fonctions (what is finished: { groupe, nom, ref, date }), ecartes (discarded ideas and why: { nom, raison }),
//   chantiers (work items), blocs (optional extra blocks).
// Work item (chantier): id (unique across the whole project), nom (name), detail (optional, one sentence),
//   etat, qui, duration, apres, and for a finished item: date (dd/mm) and ref (gate or decision).
//   etat (state), one of:
//     "fait"       done
//     "prochaine"  what Claude does next (normally only one)
//     "afaire"     to do, later
//     "attente"    waiting for your decision or action
//     "usage"      real-world use time, measured on the calendar
//     "facultatif" optional
//   qui (who acts), one of: "claude", "toi" (you), "ensemble" (together).
//   duration, one of: duree: [min, max] in sessions (1 session is about one evening);
//     jours: [min, max] days, for a wait on the calendar;
//     inconnue: true when nobody can estimate it.
//   apres (after): ids of the work items that must finish first, even in another part.
// Optional blocks of a part (blocs):
//   { type: "tableau" (table), titre (title), note, colonnes (columns): [...], lignes (rows): [[...]] },
//   { type: "chiffres" (figures), titre, note, elements: [{ valeur (value), libelle (label), nature: "mesuré" (measured) | "estimé" (estimated) }] },
//   { type: "texte" (text), titre, texte }.
window.SUIVI_PROJETS = window.SUIVI_PROJETS || {};
window.SUIVI_PROJETS["my-project"] = {
  nom: "Example project",
  resume: "One sentence saying what the project does.",
  majLe: "01/01/2027",
  source: "The project's PLAN.md and HANDOFF.md, commit abc1234",

  parties: [
    {
      id: "coeur",
      code: "C",
      nom: "Project core",
      nomCourt: "Core",
      couleur: "#0f7b5f",
      but: "What this part must make possible.",
      fonctions: [
        { groupe: "First group", nom: "A feature that already works", ref: "D1", date: "01/01" }
      ],
      ecartes: [
        { nom: "A discarded idea", raison: "Why it is discarded." }
      ],
      chantiers: [
        { id: "c-1", nom: "Phase 1: foundations", etat: "fait", date: "01/01", ref: "Gate 1" },
        { id: "c-2", nom: "Phase 2: main feature", detail: "What will be done.", etat: "prochaine", qui: "claude", duree: [1, 2] },
        { id: "c-3", nom: "Real-world trial", etat: "usage", qui: "toi", jours: [3, 7], apres: ["c-2"] },
        { id: "c-4", nom: "Decision: publish or not", etat: "attente", qui: "toi", inconnue: true, apres: ["c-3"] }
      ]
    },
    {
      id: "ecran",
      code: "E",
      nom: "Screen",
      couleur: "#2756d6",
      but: "What the user sees.",
      fonctions: [],
      chantiers: [
        { id: "e-1", nom: "Mockup", etat: "afaire", qui: "ensemble", duree: [1, 1] },
        { id: "e-2", nom: "Dark mode", etat: "facultatif", qui: "claude", duree: [0.5, 1], apres: ["e-1"] }
      ]
    }
  ]
};
