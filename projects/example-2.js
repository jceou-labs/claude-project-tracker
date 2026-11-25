// Second example project, entirely made up, to fill the overview page.
// Delete it (with its line in projects/index.js) once your real projects are registered.
window.SUIVI_PROJETS = window.SUIVI_PROJETS || {};
window.SUIVI_PROJETS["example-2"] = {
  nom: "Club Website",
  resume: "Website for a sports club: match calendar, sign-ups and news.",
  majLe: "18/11/2026",
  source: "The project's PLAN.md, commit 9f8e7d6 (made-up example)",

  parties: [
    {
      id: "site",
      code: "S",
      nom: "Public site",
      nomCourt: "Site",
      couleur: "#6b2fb3",
      but: "Members find the calendar and the news without searching.",
      fonctions: [
        { groupe: "Pages", nom: "Home and news", ref: "Gate 1", date: "09/11" },
        { groupe: "Pages", nom: "Match calendar", ref: "Gate 2", date: "14/11" }
      ],
      chantiers: [
        { id: "s-1", nom: "Home and news", etat: "fait", date: "09/11", ref: "Gate 1" },
        { id: "s-2", nom: "Match calendar", etat: "fait", date: "14/11", ref: "Gate 2" },
        { id: "s-3", nom: "Get the texts approved by the club committee", etat: "attente", qui: "ensemble", inconnue: true },
        { id: "s-4", nom: "Go live", detail: "Publish the site on the chosen host.", etat: "afaire", qui: "claude", duree: [0.5, 1], apres: ["s-3", "i-2"] }
      ]
    },
    {
      id: "inscriptions",
      code: "I",
      nom: "Sign-ups",
      couleur: "#b8641a",
      but: "Sign up for the season online, no paperwork.",
      fonctions: [],
      chantiers: [
        { id: "i-1", nom: "Sign-up form", detail: "Name, category, medical certificate to attach.", etat: "prochaine", qui: "claude", duree: [1, 2] },
        { id: "i-2", nom: "Confirmation sent by email", etat: "afaire", qui: "claude", duree: [1, 1], apres: ["i-1"] }
      ]
    }
  ]
};
