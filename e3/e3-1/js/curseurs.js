/* Curseurs doubles (min / max) des filtres
   Chaque .range contient deux <input type="range"> superposés.
   - data-unit  : unité affichée (ex. "Mpx")
   - data-steps : liste de paliers (ex. ISO) ; les curseurs donnent alors l'indice du palier
   Le texte au-dessus (.range-output) et les champs Min / Max restent synchronisés. */

function formaterNombre(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

document.querySelectorAll(".range").forEach(function (range) {
    const [curseurMin, curseurMax] = range.querySelectorAll(".range-input");
    if (!curseurMin || !curseurMax) return;

    const fieldset = range.closest("fieldset");
    const sortie = fieldset.querySelector(".range-output");
    const [champMin, champMax] = fieldset.querySelectorAll(".range-values input");
    const unite = range.dataset.unit || "";
    const paliers = range.dataset.steps ? range.dataset.steps.split(",").map(Number) : null;

    // Valeur réelle d'un curseur (palier ou nombre direct)
    function valeur(curseur) {
        const v = Number(curseur.value);
        return paliers ? paliers[v] : v;
    }

    // Position du curseur la plus proche d'une valeur tapée dans un champ
    function position(v) {
        if (!paliers) return v;
        let meilleur = 0;
        paliers.forEach(function (p, i) {
            if (Math.abs(Math.log(p) - Math.log(v)) < Math.abs(Math.log(paliers[meilleur]) - Math.log(v))) meilleur = i;
        });
        return meilleur;
    }

    function texte(v) {
        return unite ? formaterNombre(v) + " " + unite : "ISO " + formaterNombre(v);
    }

    function pourcentage(curseur) {
        return ((curseur.value - curseur.min) / (curseur.max - curseur.min)) * 100;
    }

    function mettreAJour() {
        const min = valeur(curseurMin);
        const max = valeur(curseurMax);

        range.style.setProperty("--from", pourcentage(curseurMin) + "%");
        range.style.setProperty("--to", pourcentage(curseurMax) + "%");

        // Quand les deux poignées sont au bout à droite, le min doit rester attrapable
        curseurMin.style.zIndex = pourcentage(curseurMin) > 90 ? 2 : "";

        curseurMin.setAttribute("aria-valuetext", texte(min));
        curseurMax.setAttribute("aria-valuetext", texte(max));
        sortie.textContent = formaterNombre(min) + " – " + formaterNombre(max) + (unite ? " " + unite : "");
        champMin.value = formaterNombre(min);
        champMax.value = formaterNombre(max);
    }

    // Les poignées ne peuvent pas se croiser
    curseurMin.addEventListener("input", function () {
        if (Number(curseurMin.value) > Number(curseurMax.value)) curseurMin.value = curseurMax.value;
        mettreAJour();
    });
    curseurMax.addEventListener("input", function () {
        if (Number(curseurMax.value) < Number(curseurMin.value)) curseurMax.value = curseurMin.value;
        mettreAJour();
    });

    // Saisie dans les champs Min / Max : on déplace le curseur correspondant
    [[champMin, curseurMin], [champMax, curseurMax]].forEach(function ([champ, curseur]) {
        champ.addEventListener("change", function () {
            const v = Number(champ.value.replace(/\D/g, ""));
            if (v > 0) curseur.value = position(v);
            curseur.dispatchEvent(new Event("input"));
        });
    });

    mettreAJour();
});
