// Light / dark theme of the tracking pages. Loaded in <head> so the theme is set before first paint (no white flash).
// The stored values "clair" (light) and "sombre" (dark) are internal identifiers, also used by theme.css.
(function(){
  "use strict";
  var CLE = "suivi-theme", racine = document.documentElement, t = null;
  try { t = localStorage.getItem(CLE); } catch (e) {}
  if (t !== "sombre" && t !== "clair") t = (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "sombre" : "clair";
  racine.setAttribute("data-theme", t);
  function etiquette(){ return racine.getAttribute("data-theme") === "sombre" ? "Switch to light mode" : "Switch to dark mode"; }
  // Button HTML, to place in the top bar of each page.
  window.suiviBoutonTheme = function(){
    return '<button type="button" class="bascule-theme" data-bascule-theme aria-label="' + etiquette() + '" title="' + etiquette() + '">' +
      '<svg class="lune" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' +
      '<svg class="soleil" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>';
  };
  document.addEventListener("click", function(e){
    var b = e.target && e.target.closest ? e.target.closest("[data-bascule-theme]") : null;
    if (!b) return;
    t = racine.getAttribute("data-theme") === "sombre" ? "clair" : "sombre";
    racine.setAttribute("data-theme", t);
    try { localStorage.setItem(CLE, t); } catch (e2) {}
    Array.prototype.forEach.call(document.querySelectorAll("[data-bascule-theme]"), function(x){ x.setAttribute("aria-label", etiquette()); x.title = etiquette(); });
  });
})();
