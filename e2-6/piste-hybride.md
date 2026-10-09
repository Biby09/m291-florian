# S07-AV1 — Piste hybride : « Atelier de nuit »

**Principe** : on garde la **forme** de la piste B (Chaleureuse & Terroir) et on lui applique la **palette** de la piste C (Moderne & Pragmatique).

- **De la piste B** : typographie humaniste arrondie, grands arrondis, boutons en pilule, cartes aérées, tableau zébré et anneau de sélection épais.
- **De la piste C** : fond quasi noir, une seule couleur vive (orange `#FF5B1F`) réservée aux actions et aux éléments actifs, et contrastes tranchés.

**Sources** : [`design/propositions/css/piste-b-chaleureuse.css`](../design/propositions/css/piste-b-chaleureuse.css) (structure, tailles, arrondis) et [`css/piste-c-moderne.css`](../design/propositions/css/piste-c-moderne.css) (couleurs).
**Critique de référence** : [`design/critique.md`](../design/critique.md).

---

## 1. Forces retenues de chaque piste

| Ce qu'on prend | Piste | Pourquoi (preuve tirée de la critique e2-6) |
|---|:---:|---|
| Police **Nunito**, corps **17 px**, petit texte **14 px** | B | La piste C est pénalisée en lisibilité à cause de son corps de 15 px et de son petit texte de 12,5 px. La piste B monte à 17 / 14 px. |
| **Arrondis** : cartes 26 px, boutons, recherche et étiquettes en pilule | B | Ils donnent l'identité accueillante de la piste B et rendent les zones cliquables plus larges et plus repérables. |
| **Anneau de sélection de 3 px** autour des cartes, cases à cocher arrondies | B | C'est le meilleur feedback de forme. Son seul défaut était sa couleur : vert sauge à 2,94:1. |
| **Tableau zébré** avec critères en gras | B | On suit facilement une ligne de gauche à droite. |
| **Palette sombre** `#0E0F11` / `#16181B` / `#EDEEF0` | C | Texte à 16,5:1, et la plus forte densité perçue pour un « outil pro ». |
| **Un seul accent : orange `#FF5B1F`** sur les actions et la sélection | C | Il corrige le défaut de cohérence de la piste B : le terracotta y servait à la fois aux actions et aux prix, et le vert au header, aux liens et à la sélection. |
| **Focus orange** | C | Il corrige le défaut bloquant de la piste B : le focus était à 1,19:1 sur le header. L'orange est à 6,77:1 sur le header noir. |

**Ce qu'on laisse de côté** :
- les couleurs terroir de B (sauge, terracotta, sable) ;
- les angles vifs et la grille serrée de C ;
- les titres en majuscules de C ;
- l'orange sur les éléments non cliquables (étiquettes d'écran), pour respecter la règle « accent = action ».

## 2. Validation de la cohérence

### Palette

**Une seule teinte vive.** L'orange `#FF5B1F` est réservé aux éléments interactifs ou actifs :
- boutons principaux et bouton « + » ;
- liens (retour, « Voir la fiche ») ;
- compteur du comparateur ;
- cases cochées, carte sélectionnée et curseurs ;
- barres de benchmark, focus clavier.

Tout le reste est en gris neutres : 4 niveaux de fond (`#000000` → `#0E0F11` → `#16181B` → `#1F2226`), 2 niveaux de texte (`#EDEEF0`, `#A2A7AF`) et 1 couleur de bordure de contrôle (`#6B7078`).

| Couple testé (WCAG 2.2) | Ratio | Exigence | Résultat |
|---|:-:|:-:|:-:|
| Texte `#EDEEF0` / fond `#0E0F11` | 16,5:1 | 4,5:1 | ✅ |
| Texte secondaire `#A2A7AF` / carte `#16181B` | 7,4:1 | 4,5:1 | ✅ |
| Texte secondaire / ligne zébrée `#1A1C20` | 7,1:1 | 4,5:1 | ✅ |
| Étiquette `#EDEEF0` / pilule `#1F2226` | 13,8:1 | 4,5:1 | ✅ |
| Texte bouton `#0E0F11` / orange `#FF5B1F` | 6,2:1 | 4,5:1 | ✅ |
| Lien orange / fond `#0E0F11` | 6,2:1 | 4,5:1 | ✅ |
| Lien orange / encadré prix `#1F2226` | 5,2:1 | 4,5:1 | ✅ |
| **Focus orange / header `#000000`** | **6,8:1** | 3:1 | ✅ (piste B : 1,19:1 ❌) |
| **Anneau de sélection / carte** | **5,7:1** | 3:1 | ✅ (piste B : 2,94:1 ❌) |
| Bordure des champs `#6B7078` / fond | 3,9:1 | 3:1 | ✅ |
| Bordure des cases `#6B7078` / carte | 3,6:1 | 3:1 | ✅ |
| Placeholder `#8E939B` / recherche `#1F2226` | 5,2:1 | 4,5:1 | ✅ |

### Typographie

**Une seule famille, Nunito** (400 / 600 / 700 / 800), reprise telle quelle de la piste B.

| Rôle | Taille | Graisse |
|---|:-:|:-:|
| Titre h1 | 52 px | 800 |
| Titre h2 | 40 px | 800 |
| Titre de carte | 20 px | 800 |
| Corps | 17 px | 400 |
| Petit texte | 14 px | 700 |

- Pas de majuscules forcées, contrairement à la piste C.
- Les chiffres passent en `tabular-nums` dans le tableau, les specs et les benchmarks. On garde ainsi l'alignement des colonnes, qui était la force de la piste C, sans réintroduire une police mono.

### Arrondis

Échelle unique héritée de la piste B, appliquée partout :

| Arrondi | Éléments |
|---|---|
| **999 px** (pilule) | boutons, recherche, étiquettes, badges, tags, rails de curseur |
| **26 px** | cartes, tableau |
| **18–20 px** | images d'appareils |
| **7 px** | cases à cocher |
| **50 %** | bouton « + », poignées de curseur |

Aucun angle vif ne subsiste : les angles à 0 px de la piste C ne sont pas repris.

### Ombres

Sur fond sombre, les ombres brunes diffuses de la piste B deviennent invisibles. Elles sont donc adaptées :
- **Ombres noires plus denses** (`rgba(0,0,0,.45)`), complétées par une bordure `#2B2F35` pour détacher les cartes.
- **Lueur orange** (`rgba(255,91,31,.30)`) sous le bouton principal. Elle reprend l'idée du bouton terracotta « qui flotte » de la piste B.

---

## 4. Contre-épreuve

- **Erreur bloquante ?** Non. Tous les couples texte/fond atteignent au moins 4,5:1, et tous les indicateurs (focus, sélection, bordures de champs) au moins 3:1. Les deux défauts bloquants de la piste B sont corrigés.
- **Point de vigilance 1** : le rail des curseurs (`#2B2F35`) ne fait que 1,7:1 sur la carte. C'est acceptable, parce que l'information est portée par la poignée blanche (17,8:1) et la partie remplie en orange (5,7:1), pas par le rail.
- **Point de vigilance 2** : sur fond sombre, la piste reste moins « chaleureuse » que la piste B d'origine. Ce sont les formes arrondies, Nunito et la lueur des boutons qui portent l'identité accueillante, et plus la couleur.
- **Adéquation au persona** : Camille garde la densité et les chiffres alignés d'un outil pro (piste C). Elle gagne une taille de texte confortable et un feedback de sélection très visible (piste B), ce qui sert sa tâche principale : comparer plusieurs appareils.
