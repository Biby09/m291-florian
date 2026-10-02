/*
 * Sélecteur de piste graphique.
 * Remplace la feuille de style <link id="piste-css"> par celle choisie,
 * mémorise le choix d'une page à l'autre (localStorage)
 * et accepte aussi un paramètre d'URL : ?piste=a | b | c
 */
(function () {
  const PISTES = {
    a: { nom: 'A · Éditoriale & Sobre', css: 'css/piste-a-editoriale.css' },
    b: { nom: 'B · Chaleureuse & Terroir', css: 'css/piste-b-chaleureuse.css' },
    c: { nom: 'C · Moderne & Pragmatique', css: 'css/piste-c-moderne.css' }
  };
  const CLE = 'focale-piste';
  const lien = document.getElementById('piste-css');
  if (!lien) return;

  function lire() {
    try { return localStorage.getItem(CLE); } catch (e) { return null; }
  }
  function enregistrer(piste) {
    try { localStorage.setItem(CLE, piste); } catch (e) { /* stockage indisponible */ }
  }
  function appliquer(piste) {
    if (!PISTES[piste]) return;
    lien.href = PISTES[piste].css;
    document.documentElement.dataset.piste = piste;
    enregistrer(piste);
  }

  // Appliqué tout de suite (script dans le <head>) pour éviter un flash de l'ancien style
  const parUrl = new URLSearchParams(location.search).get('piste');
  let actuelle = PISTES[parUrl] ? parUrl : lire();
  if (!PISTES[actuelle]) {
    actuelle = Object.keys(PISTES).find((p) => lien.getAttribute('href') === PISTES[p].css) || 'a';
  }
  appliquer(actuelle);

  // Panneau flottant, avec ses propres styles pour rester identique dans les 3 pistes
  function creerPanneau() {
    const panneau = document.createElement('div');
    panneau.setAttribute('role', 'group');
    panneau.setAttribute('aria-label', 'Choix de la piste graphique');
    panneau.style.cssText = [
      'position:fixed', 'right:16px', 'bottom:16px', 'z-index:9999',
      'display:flex', 'align-items:center', 'gap:8px', 'padding:8px 12px',
      'background:#111', 'color:#fff', 'border:1px solid #fff', 'border-radius:8px',
      'font:14px/1.2 system-ui, -apple-system, sans-serif',
      'box-shadow:0 4px 16px rgba(0,0,0,.35)'
    ].join(';');

    const label = document.createElement('label');
    label.htmlFor = 'choix-piste';
    label.textContent = 'Piste';

    const select = document.createElement('select');
    select.id = 'choix-piste';
    select.style.cssText = 'font:inherit;padding:4px 6px;color:#111;background:#fff;border:0;border-radius:4px';
    Object.entries(PISTES).forEach(([cle, piste]) => {
      select.add(new Option(piste.nom, cle, false, cle === actuelle));
    });
    select.addEventListener('change', () => appliquer(select.value));

    panneau.append(label, select);
    document.body.append(panneau);

    // Raccourcis clavier : touches 1, 2, 3 (hors champs de saisie)
    document.addEventListener('keydown', (e) => {
      if (e.target.closest('input, select, textarea') || e.ctrlKey || e.metaKey || e.altKey) return;
      const piste = { 1: 'a', 2: 'b', 3: 'c' }[e.key];
      if (piste) { appliquer(piste); select.value = piste; }
    });
  }

  if (document.body) creerPanneau();
  else document.addEventListener('DOMContentLoaded', creerPanneau);
})();
