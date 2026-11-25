// Example project, entirely made up, so the page is filled in from the first opening.
// Delete it (with its line in projects/index.js) once your real projects are registered.
window.SUIVI_PROJETS = window.SUIVI_PROJETS || {};
window.SUIVI_PROJETS["example"] = {
  nom: "Recipe Book",
  resume: "Small web app to store your recipes, search them by ingredient and produce the week's shopping list.",
  majLe: "20/11/2026",
  source: "The project's PLAN.md and HANDOFF.md, commit 1a2b3c4 (made-up example)",

  parties: [
    {
      id: "base",
      code: "B",
      nom: "Recipes and search",
      nomCourt: "Recipes",
      couleur: "#0f7b5f",
      but: "Enter a recipe in two minutes and find it again by an ingredient.",
      fonctions: [
        { groupe: "Entry", nom: "Recipe card: ingredients, steps, times", ref: "Gate 1", date: "06/11" },
        { groupe: "Entry", nom: "Import a recipe from a link", ref: "Gate 2", date: "12/11" },
        { groupe: "Search", nom: "Search by ingredient, ignoring accents and plurals", ref: "Gate 3", date: "17/11" }
      ],
      ecartes: [
        { nom: "Photos of the dishes", raison: "Too heavy for the first version, to revisit later." }
      ],
      chantiers: [
        { id: "b-1", nom: "Recipe card", etat: "fait", date: "06/11", ref: "Gate 1" },
        { id: "b-2", nom: "Import from a link", etat: "fait", date: "12/11", ref: "Gate 2" },
        { id: "b-3", nom: "Search by ingredient", etat: "fait", date: "17/11", ref: "Gate 3" },
        { id: "b-4", nom: "Tags (quick, vegetarian...)", detail: "Add tags to recipes and filter on them.", etat: "prochaine", qui: "claude", duree: [1, 1] },
        { id: "b-5", nom: "Choose the starting tags", etat: "attente", qui: "toi", inconnue: true, apres: ["b-4"] }
      ],
      blocs: [
        { type: "chiffres", titre: "Where we stand", note: "Counted in the test database.",
          elements: [
            { valeur: "42", libelle: "recipes entered", nature: "mesuré" },
            { valeur: "2 min", libelle: "to enter a recipe", nature: "estimé" }
          ] }
      ]
    },
    {
      id: "courses",
      code: "C",
      nom: "Shopping list",
      nomCourt: "Shopping",
      couleur: "#2756d6",
      but: "Pick the week's meals and get the shopping list, sorted by aisle.",
      fonctions: [
        { groupe: "Week", nom: "Choosing the week's meals", ref: "Gate 4", date: "19/11" }
      ],
      chantiers: [
        { id: "c-1", nom: "Meal selection", etat: "fait", date: "19/11", ref: "Gate 4" },
        { id: "c-2", nom: "List grouped by aisle", detail: "Add up the quantities and sort by store aisle.", etat: "afaire", qui: "claude", duree: [1, 2], apres: ["c-1"] },
        { id: "c-3", nom: "Two-week trial", etat: "usage", qui: "toi", jours: [10, 14], apres: ["c-2"] },
        { id: "c-4", nom: "Share the list by link", etat: "facultatif", qui: "claude", duree: [0.5, 1], apres: ["c-2"] }
      ]
    }
  ]
};
