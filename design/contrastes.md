# Contrastes mesurés (WebAIM)

**Outil** : [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Chaque ratio du tableau est un lien qui ouvre WebAIM avec les deux couleurs déjà remplies.
**Maquettes mesurées** : [`propositions/`](propositions/), une feuille CSS par piste (couleurs relevées dans les variables `:root`).
**Norme visée** : WCAG 2.2, niveau **AA**.

| Seuil AA | Ratio minimum |
|---|:-:|
| Texte normal (< 24 px, ou < 18,66 px en gras) | **4,5:1** |
| Grand texte (≥ 24 px, ou ≥ 18,66 px en gras) | **3:1** |
| Composant d'interface : focus, bordure de champ, case à cocher, état sélectionné | **3:1** |

**Résumé** :

| Piste | Couples mesurés | Conformes AA | Problèmes |
|---|:-:|:-:|---|
| A — Sobre (Éditoriale) | 13 | 13 / 13 | aucun |
| B — Chaleureuse (Terroir) | 16 | 13 / 16 | focus dans le header (1,19:1), anneau de sélection et cases à cocher (2,94:1) |
| C — Audacieuse (Moderne) | 15 | 15 / 15 | aucun |

## Piste A — Sobre (Éditoriale)

Fichier : `propositions/css/piste-a-editoriale.css`

| Élément | Texte / premier plan | Fond | Ratio (WebAIM) | AA texte normal | AA grand texte | AA composant |
|---|---|---|:-:|:-:|:-:|:-:|
| Texte courant | `#1D2433` | `#FAF7F0` | [14,51:1](https://webaim.org/resources/contrastchecker/?fcolor=1D2433&bcolor=FAF7F0) | ✅ | ✅ | — |
| Titres | `#14213D` | `#FAF7F0` | [14,93:1](https://webaim.org/resources/contrastchecker/?fcolor=14213D&bcolor=FAF7F0) | ✅ | ✅ | — |
| Texte secondaire (specs, compteur) | `#5B6273` | `#FAF7F0` | [5,71:1](https://webaim.org/resources/contrastchecker/?fcolor=5B6273&bcolor=FAF7F0) | ✅ | ✅ | — |
| Texte secondaire sur carte | `#5B6273` | `#FFFDF8` | [6,01:1](https://webaim.org/resources/contrastchecker/?fcolor=5B6273&bcolor=FFFDF8) | ✅ | ✅ | — |
| Étiquette d'écran (accent) | `#8A6D3B` | `#FAF7F0` | [4,53:1](https://webaim.org/resources/contrastchecker/?fcolor=8A6D3B&bcolor=FAF7F0) | ✅ | ✅ | — |
| Placeholder recherche | `#6B7080` | `#FAF7F0` | [4,61:1](https://webaim.org/resources/contrastchecker/?fcolor=6B7080&bcolor=FAF7F0) | ✅ | ✅ | — |
| Bouton principal | `#FFFDF8` | `#14213D` | [15,71:1](https://webaim.org/resources/contrastchecker/?fcolor=FFFDF8&bcolor=14213D) | ✅ | ✅ | — |
| Badge comparateur | `#FFFDF8` | `#14213D` | [15,71:1](https://webaim.org/resources/contrastchecker/?fcolor=FFFDF8&bcolor=14213D) | ✅ | ✅ | — |
| Lien (retour, voir la fiche) | `#14213D` | `#FAF7F0` | [14,93:1](https://webaim.org/resources/contrastchecker/?fcolor=14213D&bcolor=FAF7F0) | ✅ | ✅ | — |
| Pied de page | `#5B6273` | `#FAF7F0` | [5,71:1](https://webaim.org/resources/contrastchecker/?fcolor=5B6273&bcolor=FAF7F0) | ✅ | ✅ | — |
| Focus clavier | `#14213D` | `#FAF7F0` | [14,93:1](https://webaim.org/resources/contrastchecker/?fcolor=14213D&bcolor=FAF7F0) | — | — | ✅ |
| Bordure case à cocher | `#14213D` | `#FFFDF8` | [15,71:1](https://webaim.org/resources/contrastchecker/?fcolor=14213D&bcolor=FFFDF8) | — | — | ✅ |
| Bordure carte sélectionnée | `#14213D` | `#FFFDF8` | [15,71:1](https://webaim.org/resources/contrastchecker/?fcolor=14213D&bcolor=FFFDF8) | — | — | ✅ |

## Piste B — Chaleureuse (Terroir)

Fichier : `propositions/css/piste-b-chaleureuse.css`

| Élément | Texte / premier plan | Fond | Ratio (WebAIM) | AA texte normal | AA grand texte | AA composant |
|---|---|---|:-:|:-:|:-:|:-:|
| Texte courant | `#3B2E25` | `#F3ECDF` | [11,15:1](https://webaim.org/resources/contrastchecker/?fcolor=3B2E25&bcolor=F3ECDF) | ✅ | ✅ | — |
| Texte secondaire | `#6B5A4C` | `#F3ECDF` | [5,60:1](https://webaim.org/resources/contrastchecker/?fcolor=6B5A4C&bcolor=F3ECDF) | ✅ | ✅ | — |
| Texte secondaire sur carte | `#6B5A4C` | `#FFFAF2` | [6,33:1](https://webaim.org/resources/contrastchecker/?fcolor=6B5A4C&bcolor=FFFAF2) | ✅ | ✅ | — |
| Texte du header | `#FFFAF2` | `#4D6B4F` | [5,72:1](https://webaim.org/resources/contrastchecker/?fcolor=FFFAF2&bcolor=4D6B4F) | ✅ | ✅ | — |
| Placeholder recherche | `#6B5A4C` | `#FFFAF2` | [6,33:1](https://webaim.org/resources/contrastchecker/?fcolor=6B5A4C&bcolor=FFFAF2) | ✅ | ✅ | — |
| Étiquette d'écran | `#3E5A40` | `#DCE5D5` | [5,91:1](https://webaim.org/resources/contrastchecker/?fcolor=3E5A40&bcolor=DCE5D5) | ✅ | ✅ | — |
| Bouton principal | `#FFFAF2` | `#B4532F` | [4,79:1](https://webaim.org/resources/contrastchecker/?fcolor=FFFAF2&bcolor=B4532F) | ✅ | ✅ | — |
| Badge comparateur | `#3B2E25` | `#E8B89A` | [7,33:1](https://webaim.org/resources/contrastchecker/?fcolor=3B2E25&bcolor=E8B89A) | ✅ | ✅ | — |
| Lien (retour, voir la fiche) | `#4D6B4F` | `#F3ECDF` | [5,06:1](https://webaim.org/resources/contrastchecker/?fcolor=4D6B4F&bcolor=F3ECDF) | ✅ | ✅ | — |
| Prix | `#9A4426` | `#FFFAF2` | [6,26:1](https://webaim.org/resources/contrastchecker/?fcolor=9A4426&bcolor=FFFAF2) | ✅ | ✅ | — |
| Étiquette de spec (tag) | `#7E3A20` | `#F6DFD0` | [6,52:1](https://webaim.org/resources/contrastchecker/?fcolor=7E3A20&bcolor=F6DFD0) | ✅ | ✅ | — |
| Pied de page | `#EFE5D4` | `#3B2E25` | [10,50:1](https://webaim.org/resources/contrastchecker/?fcolor=EFE5D4&bcolor=3B2E25) | ✅ | ✅ | — |
| Focus clavier sur le fond | `#B4532F` | `#F3ECDF` | [4,24:1](https://webaim.org/resources/contrastchecker/?fcolor=B4532F&bcolor=F3ECDF) | — | — | ✅ |
| Focus clavier dans le header | `#B4532F` | `#4D6B4F` | [1,19:1](https://webaim.org/resources/contrastchecker/?fcolor=B4532F&bcolor=4D6B4F) | — | — | ❌ |
| Anneau carte sélectionnée | `#7E9B7E` | `#FFFAF2` | [2,94:1](https://webaim.org/resources/contrastchecker/?fcolor=7E9B7E&bcolor=FFFAF2) | — | — | ❌ |
| Bordure case à cocher | `#7E9B7E` | `#FFFAF2` | [2,94:1](https://webaim.org/resources/contrastchecker/?fcolor=7E9B7E&bcolor=FFFAF2) | — | — | ❌ |

## Piste C — Audacieuse (Moderne)

Fichier : `propositions/css/piste-c-moderne.css`

| Élément | Texte / premier plan | Fond | Ratio (WebAIM) | AA texte normal | AA grand texte | AA composant |
|---|---|---|:-:|:-:|:-:|:-:|
| Texte courant | `#EDEEF0` | `#0E0F11` | [16,52:1](https://webaim.org/resources/contrastchecker/?fcolor=EDEEF0&bcolor=0E0F11) | ✅ | ✅ | — |
| Titres | `#FFFFFF` | `#0E0F11` | [19,18:1](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=0E0F11) | ✅ | ✅ | — |
| Texte secondaire | `#A2A7AF` | `#0E0F11` | [7,93:1](https://webaim.org/resources/contrastchecker/?fcolor=A2A7AF&bcolor=0E0F11) | ✅ | ✅ | — |
| Texte secondaire sur carte | `#A2A7AF` | `#16181B` | [7,35:1](https://webaim.org/resources/contrastchecker/?fcolor=A2A7AF&bcolor=16181B) | ✅ | ✅ | — |
| Placeholder recherche | `#8E939B` | `#16181B` | [5,76:1](https://webaim.org/resources/contrastchecker/?fcolor=8E939B&bcolor=16181B) | ✅ | ✅ | — |
| Étiquette d'écran (gris, après l'itération du test utilisateur) | `#A2A7AF` | `#0E0F11` | [7,93:1](https://webaim.org/resources/contrastchecker/?fcolor=A2A7AF&bcolor=0E0F11) | ✅ | ✅ | — |
| Bouton principal | `#0E0F11` | `#FF5B1F` | [6,18:1](https://webaim.org/resources/contrastchecker/?fcolor=0E0F11&bcolor=FF5B1F) | ✅ | ✅ | — |
| Badge comparateur | `#0E0F11` | `#FF5B1F` | [6,18:1](https://webaim.org/resources/contrastchecker/?fcolor=0E0F11&bcolor=FF5B1F) | ✅ | ✅ | — |
| Lien (retour, voir la fiche) | `#FF5B1F` | `#0E0F11` | [6,18:1](https://webaim.org/resources/contrastchecker/?fcolor=FF5B1F&bcolor=0E0F11) | ✅ | ✅ | — |
| Lien sur carte / tableau | `#FF5B1F` | `#16181B` | [5,73:1](https://webaim.org/resources/contrastchecker/?fcolor=FF5B1F&bcolor=16181B) | ✅ | ✅ | — |
| Pied de page | `#A2A7AF` | `#000000` | [8,68:1](https://webaim.org/resources/contrastchecker/?fcolor=A2A7AF&bcolor=000000) | ✅ | ✅ | — |
| Focus clavier | `#FF5B1F` | `#0E0F11` | [6,18:1](https://webaim.org/resources/contrastchecker/?fcolor=FF5B1F&bcolor=0E0F11) | — | — | ✅ |
| Focus clavier dans le header | `#FF5B1F` | `#000000` | [6,77:1](https://webaim.org/resources/contrastchecker/?fcolor=FF5B1F&bcolor=000000) | — | — | ✅ |
| Bordure carte sélectionnée | `#FF5B1F` | `#16181B` | [5,73:1](https://webaim.org/resources/contrastchecker/?fcolor=FF5B1F&bcolor=16181B) | — | — | ✅ |
| Bordure case à cocher | `#6B7078` | `#16181B` | [3,57:1](https://webaim.org/resources/contrastchecker/?fcolor=6B7078&bcolor=16181B) | — | — | ✅ |

## Problèmes relevés et correction (avant / après)

Les 3 échecs se trouvent tous dans la piste B, et ce sont des **composants d'interface** (seuil 3:1). Tous les textes des 3 pistes passent le niveau AA.

| Problème (piste B) | Avant | Correction proposée | Après |
|---|:-:|---|:-:|
| Focus terracotta `#B4532F` invisible sur le header vert `#4D6B4F` : au clavier, on ne voit pas où l'on est sur le logo, la recherche et le comparateur | [1,19:1](https://webaim.org/resources/contrastchecker/?fcolor=B4532F&bcolor=4D6B4F) ❌ | Focus crème `#FFFAF2` dans le header (`.site-header :focus-visible`) | [5,72:1](https://webaim.org/resources/contrastchecker/?fcolor=FFFAF2&bcolor=4D6B4F) ✅ |
| Anneau de sélection sauge `#7E9B7E` trop pâle sur la carte `#FFFAF2` | [2,94:1](https://webaim.org/resources/contrastchecker/?fcolor=7E9B7E&bcolor=FFFAF2) ❌ | Sauge foncé `#4D6B4F` (`--selected-color`) | [5,72:1](https://webaim.org/resources/contrastchecker/?fcolor=4D6B4F&bcolor=FFFAF2) ✅ |
| Bordure des cases à cocher `#7E9B7E` | [2,94:1](https://webaim.org/resources/contrastchecker/?fcolor=7E9B7E&bcolor=FFFAF2) ❌ | Même correction : `--check-border: 2px solid #4D6B4F` | [5,72:1](https://webaim.org/resources/contrastchecker/?fcolor=4D6B4F&bcolor=FFFAF2) ✅ |

## Points de vigilance (conformes, mais justes)

- **Piste A** : l'étiquette d'écran dorée `#8A6D3B` est à **4,53:1**, juste au-dessus du seuil de 4,5:1. Il ne faut pas l'éclaircir.
- **Piste B** : le bouton principal (`#FFFAF2` sur `#B4532F`) est à **4,79:1**. Il passe, mais sa couleur de survol doit rester plus foncée (`#9A4426` = 6,26:1), jamais plus claire.
- **Piste C** (retenue) : tous les couples passent. En revanche, un bon ratio ne compense pas une petite taille : le texte de 12,5 px reste à agrandir (voir [critique.md](critique.md)).
