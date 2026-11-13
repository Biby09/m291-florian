// Focale — cartes de l'écran Résultats chargées depuis data.json
// Page : e3/e3-1/2-resultats.html (d'où le chemin ../../data.json)

const conteneur = document.getElementById("liste-cartes");
const zoneEtat = document.getElementById("etat");
const zoneCompte = document.getElementById("compte");
const modeleIllustration = document.getElementById("modele-illustration");

let tousLesLieux = [];

// Nombres à la française : 24,2 et 2 499
function formaterNombre(nombre) {
  return nombre.toLocaleString("fr-CH", { maximumFractionDigits: 1 }).replace(/[’']/g, " ");
}

// Une carte par fiche de la liste reçue
function afficherLieux(liste) {
  conteneur.textContent = "";

  for (const lieu of liste) {
    const nom = lieu.marque + " " + lieu.modele;
    const idCase = "sel-" + lieu.id;
    const estCoche = lieu.id <= 3; // comme la maquette : les 3 premiers sont cochés

    const element = document.createElement("li");

    const carte = document.createElement("article");
    carte.className = "product-card";
    if (estCoche) {
      carte.classList.add("is-selected");
    }

    // Illustration
    const illustration = document.createElement("div");
    illustration.className = "product-media";
    illustration.setAttribute("role", "img");
    illustration.setAttribute("aria-label", "Illustration du " + nom);
    illustration.append(modeleIllustration.content.cloneNode(true));

    // Corps de la carte
    const corps = document.createElement("div");
    corps.className = "product-body";

    const selection = document.createElement("div");
    selection.className = "product-select check";

    const caseACocher = document.createElement("input");
    caseACocher.type = "checkbox";
    caseACocher.id = idCase;
    caseACocher.checked = estCoche;

    const titre = document.createElement("h3");
    titre.className = "product-name";
    const etiquette = document.createElement("label");
    etiquette.htmlFor = idCase;
    etiquette.textContent = nom;
    titre.append(etiquette);

    selection.append(caseACocher, titre);

    const monture = document.createElement("p");
    monture.className = "product-mount";
    monture.textContent = lieu.formatCapteur + " · " + lieu.monture;

    const specsPhoto = document.createElement("p");
    specsPhoto.className = "product-specs";
    specsPhoto.textContent = formaterNombre(lieu.resolutionMpx) + " Mpx · " + formaterNombre(lieu.rafaleMaxIs) + " i/s";

    const texteStabilisation = lieu.stabilisationCapteur
      ? "IBIS " + formaterNombre(lieu.stabilisationIl) + " IL"
      : "Sans IBIS";
    const texteVideo = lieu.videoMax === "Aucune" ? "Pas de vidéo" : lieu.videoMax;

    const specsVideo = document.createElement("p");
    specsVideo.className = "product-specs";
    specsVideo.textContent = texteStabilisation + " · " + texteVideo;

    const prix = document.createElement("p");
    prix.className = "product-price";
    prix.textContent = formaterNombre(lieu.prixLancementUsd) + " USD";

    corps.append(selection, monture, specsPhoto, specsVideo, prix);
    carte.append(illustration, corps);
    element.append(carte);
    conteneur.append(element);
  }

  zoneCompte.textContent = liste.length + " appareils";
}

// ----- Votre code de la semaine 11 commence ici -----

zoneEtat.textContent = "Chargement des appareils…";

fetch("../../data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Fichier introuvable : code " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    zoneEtat.textContent = "";
    tousLesLieux = donnees;
    if (tousLesLieux.length === 0) {
      zoneEtat.textContent = "Aucun appareil pour le moment.";
      return;
    }
    afficherLieux(tousLesLieux);
  })
  .catch(function (erreur) {
    console.error(erreur);
    zoneEtat.textContent = "Impossible de charger les appareils. Rechargez la page dans un moment.";
  });
