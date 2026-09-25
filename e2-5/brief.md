Tu es un·e designer UI et intégrateur·rice front-end. Tu vas produire **3 propositions graphiques radicalement différentes** pour la même webapp, à partir du brief et du wireframe ci-dessous. Le contenu et la structure sont identiques dans les 3 pistes : seule la direction artistique change.

## 1. Brief du projet

**Produit** : une webapp de comparaison d'appareils photo.

**Problème** : choisir un appareil photo sur des critères techniques précis est un casse-tête. Chaque marque utilise son propre jargon, et les données chiffrées ou benchmarks fiables sont difficiles à trouver.

**Solution** : comparer plusieurs appareils côte à côte, avec toutes les caractéristiques techniques détaillées (capteur, autofocus, stabilisation, plage ISO, rafale, vidéo, monture) dans un **vocabulaire unifié pour toutes les marques**, des filtres précis et des benchmarks chiffrés.

**Différenciation** :
- comparaison multi-appareils illimitée ;
- données chiffrées et vocabulaire expert, sans simplification ;
- prix transparents et fiches à jour.

**Persona – Camille Dubois**, 26 ans, Lausanne, photographe freelance et créatrice de contenu voyage. Elle utilise surtout un **ordinateur**. Elle maîtrise la technique mais le jargon propre à chaque marque la perd.
- Besoins : comparer en détail plusieurs modèles, filtrer sur des critères techniques précis, s'appuyer sur des chiffres.
- Irritants : fiches trop simplifiées, impossible de comparer plus de deux appareils, manque de benchmarks, prix peu transparents.
- Citation : « Je veux les vraies specs techniques, avec des chiffres précis, pour comparer les appareils précisément. »

## 2. Structure (wireframe commun, version desktop)

Le parcours comporte 4 écrans. Toutes les pages partagent un **header** : logo à gauche, champ de recherche au centre, icône « comparateur » avec un compteur à droite.

1. **Filtres** – titre « Filtres ». Grille de 4 colonnes de cartes de filtres : Capteur (cases à cocher : Moyen format, Plein format, APS-C, Micro 4/3), Résolution (curseur double 20–60 Mpx), Autofocus (cases à cocher), Stabilisation (cases à cocher), ISO (curseur double), Vidéo (cases à cocher : 4K 60p, 10 bits, Profil Log), Prix (curseur double 1 000–3 500 CHF). Bouton principal en bas à droite : « Voir les résultats ».
2. **Choix des appareils** – titre « Résultats » + bouton secondaire « Filtres ». Grille de cartes d'appareils (4 colonnes × 2 rangées) : image, case à cocher, nom, 2 lignes de specs clés, prix. Les 3 premiers sont cochés. Bouton principal en bas à droite : « Comparer (3) ».
3. **Comparaison** – titre « Comparaison » + bouton rond « + » pour ajouter un appareil. En-tête avec l'image et le nom des 3 appareils, puis un tableau : critères dans la colonne de gauche, une colonne par appareil.
4. **Fiche appareil** – lien retour. À gauche une grande image. À droite le nom, 3 étiquettes de specs clés, un encadré avec le prix et le bouton principal « + Comparer ». En dessous, sur deux colonnes : « Specs » (liste libellé / valeur) et « Benchmarks » (barres horizontales).

### Contenu à utiliser (identique dans les 3 pistes)

| Critère | Appareil 1 | Appareil 2 | Appareil 3 |
|---|---|---|---|
| Monture | Sony E | Canon RF | Nikon Z |
| Capteur | Plein format | Plein format | Plein format |
| Résolution | 33 Mpx | 24,2 Mpx | 45,7 Mpx |
| Plage dynamique | 14,7 IL | 14,4 IL | 14,8 IL |
| Collimateurs AF | 759 | 1 053 | 493 |
| Stabilisation (IBIS, norme CIPA) | 5,5 IL | 8 IL | 6 IL |
| Plage ISO native | 100 – 51 200 | 100 – 102 400 | 64 – 25 600 |
| Rafale (obturateur électronique) | 10 i/s | 40 i/s | 20 i/s |
| Vidéo | 4K 60p | 6K 60p | 8K 30p |
| Prix | 2 499 CHF | 2 199 CHF | 3 299 CHF |

Les appareils 4 à 8 de l'écran « Résultats » peuvent reprendre des valeurs plausibles du même ordre. Les images d'appareils sont des emplacements neutres (bloc de couleur ou SVG simple) : pas d'images externes.

## 3. Contrat technique (strict)

- **HTML5 sémantique** : `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `form`, `fieldset`, `legend`, `label`, `table` avec `thead`/`th scope`, etc.
- **CSS moderne avec variables** : toutes les couleurs, polices, tailles, espacements et arrondis sont des custom properties dans `:root` (ex. `--color-primary`, `--font-heading`, `--radius`, `--space-m`). Utilise Grid et Flexbox.
- **Zéro framework externe** : pas de Tailwind, Bootstrap, React, ni bibliothèque JS ou d'icônes. Seule exception autorisée : une police Google Fonts chargée par `<link>`. Sinon, utilise des piles de polices système.
- Un **fichier HTML autonome par piste**, avec le CSS dans une balise `<style>`. Les 4 écrans sont empilés verticalement dans la même page, chacun dans une `section` séparée par un titre discret (« 1. Filtres », « 2. Choix »…), pour pouvoir faire une seule capture pleine page.
- Largeur de référence : **1440 px** (desktop). La mise en page ne doit pas casser en dessous.
- **Accessibilité** : contraste texte/fond d'au moins 4,5:1 (WCAG AA), états `:focus-visible` visibles, labels associés à chaque champ, `alt` sur les images.
- Même contenu, même structure et mêmes classes HTML dans les 3 fichiers : **seules les variables CSS et les règles de style changent**.

## 4. Les 3 directions artistiques

Les 3 pistes doivent se distinguer **au premier coup d'œil** par la typographie, la palette, les formes, les ombres et la densité.

### Piste A – Éditoriale & Sobre → `piste-a-editoriale.html`
- Typographie **avec empattements** pour les titres (type magazine), texte courant très lisible.
- **Fond blanc chaud** (ivoire, papier), palette **institutionnelle** : bleu nuit comme couleur principale, gris perle pour les surfaces et les séparateurs.
- Filets fins, peu ou pas d'ombres, petits arrondis, beaucoup d'espace blanc, hiérarchie portée par la typographie. Le tableau de comparaison ressemble à un tableau de revue spécialisée.

### Piste B – Chaleureuse & Terroir → `piste-b-chaleureuse.html`
- Typographie **humaniste arrondie**.
- Teintes **végétales et minérales** : vert sauge, terracotta, sable, brun doux.
- **Formes douces** : grands arrondis, boutons en pilule, ombres diffuses, cartes aérées. Une ambiance accueillante et artisanale, comme une boutique photo de quartier.

### Piste C – Moderne & Pragmatique → `piste-c-moderne.html`
- Typographie **sans empattements nette** (grotesque ou géométrique), chiffres tabulaires pour les specs.
- **Contrastes tranchés** : base noir/blanc ou gris très foncé, et **une seule couleur d'accent vive** (orange électrique, jaune ou vert fluo), réservée aux boutons d'action et aux éléments actifs.
- Angles vifs ou très petits arrondis, grille serrée, densité d'information élevée, look outil professionnel.

## 5. Ce que tu dois me rendre

1. Les **3 fichiers HTML complets**, l'un après l'autre, chacun prêt à ouvrir dans un navigateur.
2. Pour chaque piste, **3 lignes max** qui résument ses choix : polices, palette (codes hex) et formes.

Ne change ni le contenu ni la structure entre les pistes, et n'ajoute pas d'écran supplémentaire.