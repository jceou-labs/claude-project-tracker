// Projects without a suivi.js file, shown at the bottom of overview.html. Maintained by hand: fix the line when a project
// moves, and remove it from here the day it gets its own page (skill project-tracker, then projects/index.js).
// classe (status colour): "cours" (Claude is working on it), "toi" (waiting for an action from you),
//   "attente" (paused or in use), "fini" (finished).
// date: day of the information (dd/mm/yyyy), not the day the line was written.
// The lines below are made-up examples: replace them with your own, or empty the list (projets: []).
window.SUIVI_HORS = {
  majLe: "20/11/2026",
  projets: [
    { nom: "Backup script", statut: "Paused", classe: "toi", date: "02/11/2026",
      note: "First version written. Still to choose the destination drive." },
    { nom: "Expense sheet", statut: "Personal use", classe: "attente", date: "15/10/2026",
      note: "Used every month, nothing planned for it." }
  ]
};
