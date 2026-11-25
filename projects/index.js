// List of tracked projects, in the order of the page's menu.
// id: letters, digits, hyphens (the same as in window.SUIVI_PROJETS["<id>"] of the data file).
// nom: display name.
// fichier: full path of the data file, stored at the project's root (suivi.js).
//   Windows: "C:/Users/<you>/MyProject/suivi.js"; Mac or Linux: "/Users/<you>/MyProject/suivi.js".
// fond (optional): background image of the project's card, used instead of the drawn terrain. Path relative to
//   index.html, e.g. "backgrounds/rocket.jpg" (landscape image about 1600 px wide). Pick one of the images in
//   backgrounds/ or copy your own image into that folder. Without a fond, the page draws its own terrain.
// Without a "fichier", the page looks for projects/<id>.js next to itself (examples and trials only).
// Adding a project: skill project-tracker, or README.md.
// The two projects below are made-up examples: remove them once your real projects are registered.
window.SUIVI_LISTE = [
  { id: "example", nom: "Recipe Book (example)", fond: "backgrounds/kitchen.jpg" },
  { id: "example-2", nom: "Club Website (example)", fond: "backgrounds/workshop.jpg" }
];
