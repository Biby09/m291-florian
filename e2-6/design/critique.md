# e2-6 — Critique comparative & arbitrage de direction artistique

**Projet** : Focale, webapp de comparaison d'appareils photo
**Persona** : Camille Dubois, 26 ans, photographe freelance. Sur ordinateur, elle veut comparer **plusieurs** appareils avec des **chiffres précis**.
**Propositions évaluées** (atelier e2-5) : 4 pages HTML identiques (`e2-5/design/propositions/`), 3 feuilles de style :

| Piste | Direction | Fichier CSS |
|---|---|---|
| A | Éditoriale & Sobre | `css/piste-a-editoriale.css` |
| B | Chaleureuse & Terroir | `css/piste-b-chaleureuse.css` |
| C | Moderne & Pragmatique | `css/piste-c-moderne.css` |

Le détail des forces et faiblesses de chaque piste se trouve dans les fiches critiques : [design 1](fiches/fiche-critique-design-1.md) · [design 2](fiches/fiche-critique-design-2.md) · [design 3](fiches/fiche-critique-design-3.md). Les captures (1 440 px de large) sont dans [captures/](captures/).

## 1. Matrice d'évaluation comparative

Notes de 1 (insuffisant) à 5 (excellent).

| Critère | Piste A — Éditoriale | Piste B — Chaleureuse | Piste C — Moderne |
|---|:---:|:---:|:---:|
| **Lisibilité** | 4 | 4 | 3 |
| **Navigation** | 4 | 4 | 5 |
| **Feedback** | 2 | 4 | 5 |
| **Cohérence** | 5 | 3 | 4 |
| **Accessibilité** | 5 | 2 | 4 |
| **Total / 25** | **20** | **17** | **21** |

### Justification des notes (preuves mesurables)

**Lisibilité**
- A (4) : corps 17 px, texte 14,5:1, chiffres en police mono dans le tableau. Mais les critères du tableau sont en italique à empattements, ce qui est moins net, et les étiquettes sont en petites majuscules espacées.
- B (4) : corps 17 px, texte 11,2:1, tableau zébré facile à suivre ligne par ligne. Mais les chiffres ne sont pas en police mono, donc moins bien alignés d'une colonne à l'autre.
- C (3) : chiffres mono bien alignés, mais corps de **15 px**, petit texte à **12,5 px** et titres en majuscules serrées sur fond sombre.

**Navigation**
- A (4) : header clair avec compteur, liens retour sur chaque page. Mais les actions sont discrètes : boutons de 14 px, et le fond, le texte et l'action principale ont la même couleur bleu nuit.
- B (4) : header vert bien repérable et grands boutons en pilule. Mais page très aérée (marges de 80 px).
- C (5) : une seule couleur vive (orange `#FF5B1F`) sur toutes les actions de parcours : Comparer, +, Retour, Voir la fiche, compteur. Header compact de 64 px et contenu dense : la page Comparaison fait environ 980 px de haut, contre environ 1 150 px (A) et 1 215 px (B).

**Feedback**
- A (2) : une carte sélectionnée ne change que par une bordure de 1 px et un filet de 3 px, et aucun survol n'est prévu sur les cartes.
- B (4) : anneau sauge de 3 px et ombre renforcée sur la sélection, cases pleines. Mais l'anneau n'atteint que 2,94:1.
- C (5) : bordure, case et coins de viseur orange sur la sélection, et survol sur les cartes et les lignes du tableau.

**Cohérence**
- A (5) : une seule couleur principale (bleu nuit), mêmes filets fins et mêmes petits arrondis de 2 px sur tous les écrans.
- B (3) : le terracotta signifie à la fois « action » (boutons) et « prix » (non cliquable), et le vert à la fois « header », « lien » et « sélection ».
- C (4) : système très strict (angles vifs, grille serrée). Mais l'orange est aussi sur des éléments non cliquables (étiquettes d'écran, logo), contrairement à la règle « accent = action ».

**Accessibilité** (WCAG 2.2 AA)
- A (5) : tous les textes ≥ 4,5:1 et focus bleu nuit à 14,9:1.
- B (2) : **le focus terracotta sur le header vert ne fait que 1,19:1** (minimum 3:1), donc il est invisible au clavier sur le logo, la recherche et le comparateur. L'anneau de sélection est aussi sous 3:1.
- C (4) : textes ≥ 5,7:1, focus orange à 6,2:1, bordure des cases à cocher à 3,6:1. Pénalisé seulement par le texte de 12,5 px.

## 2. Arbitrage motivé

> **Nous retenons la Piste C (Moderne & Pragmatique) pour son adéquation avec la tâche principale de Camille, comparer plusieurs appareils chiffres à l'appui. Nous lui intégrons l'échelle typographique de la Piste A (corps 17 px, texte minimum 14 px).**

La piste C obtient le meilleur total (21/25). Surtout, elle domine sur les deux critères qui comptent le plus pour le parcours du persona. **Navigation** : l'orange guide de Filtres à Résultats, puis Comparaison, puis Fiche. **Feedback** : on voit immédiatement quels appareils sont sélectionnés. Sa densité et ses chiffres à chasse fixe répondent directement à la citation de Camille : « Je veux les vraies specs techniques, avec des chiffres précis ».

La piste A est la plus lisible et la plus accessible, mais son feedback est trop faible pour une tâche de sélection multiple (2/5). La piste B est la plus chaleureuse, mais elle est éliminée à cause d'un défaut d'accessibilité bloquant : le focus clavier est invisible dans le header (1,19:1).

**Corrections à apporter à la piste C avant l'intégration** (uniquement dans `css/piste-c-moderne.css`) :

1. `--fs-body: 15px` → `17px` et `--fs-small: 12.5px` → `14px`, pour reprendre l'échelle de la piste A.
2. Passer `--label-text` (étiquettes d'écran) de l'orange à `--color-muted`, pour que l'orange reste réservé aux actions et aux éléments actifs.
3. Garder les titres en majuscules seulement pour les `h1`, et relâcher l'interlettrage (`--tracking-heading: -0.02em`).

## 3. Vérification & contre-épreuve

**L'arbitrage est-il fondé sur des critères objectifs et vérifiables ?** Oui :
- **Contrastes** : ratios calculés avec la formule de luminance relative WCAG 2.x, à partir des codes hex des variables `:root` de chaque fichier CSS.
- **Tailles et espacements** : relevés dans les custom properties (`--fs-body`, `--fs-small`, `--header-h`, `--gap-grid`, `--space-xl`).
- **Hauteurs de page et états de sélection** : mesurés sur des captures à 1 440 px de large (dossier [captures/](captures/)).
- **Persona** : chaque verdict est relié à sa tâche principale, comparer plusieurs appareils avec des chiffres précis, et non à un goût personnel.

**Contre-épreuve** : si l'on retirait le critère Feedback, A (18) dépasserait C (16). Le choix de C repose donc sur l'importance donnée à la sélection et à la comparaison multi-appareils, ce qui est justement le cœur du produit et le premier irritant du persona : « impossible de comparer plus de deux appareils ».
