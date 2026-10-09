# Fiche critique — design 2 · direction Chaleureuse & Terroir (Piste B)

Fichiers évalués : [`design/propositions/`](../propositions/) (4 pages HTML) + [`css/piste-b-chaleureuse.css`](../propositions/css/piste-b-chaleureuse.css)
Captures : [résultats](../captures/piste-b-chaleureuse-2-resultats.png) · [comparaison](../captures/piste-b-chaleureuse-3-comparaison.png)

## 2 forces

1. **Critère : Lisibilité** — preuve : texte courant à 17 px en Nunito, texte brun `#3B2E25` sur sable `#F3ECDF` = **11,2:1**. Dans le tableau de comparaison, les lignes alternent deux tons (zébrage) et les critères sont en vert gras : on suit facilement une ligne de gauche à droite.
2. **Critère : Feedback** — preuve : une carte sélectionnée reçoit un anneau vert sauge de 3 px **et** une ombre plus marquée. Les cases cochées sont pleines (vert `#4D6B4F`). Le bouton « Comparer (3) » en pilule terracotta porte une ombre colorée qui le fait ressortir.

## 2 faiblesses

1. **Critère : Accessibilité** — preuve : le contour de focus est terracotta `#B4532F`. Sur le header vert `#4D6B4F`, son contraste n'est que de **1,19:1** (minimum WCAG 2.2 pour un indicateur de focus : 3:1). Au clavier, on ne voit pas où l'on est sur le logo, la recherche et le lien « Comparateur ». L'anneau de sélection sauge `#7E9B7E` sur la carte `#FFFAF2` fait 2,94:1, aussi sous 3:1.
2. **Critère : Cohérence** — preuve : la même famille terracotta sert à la fois aux **actions** (bouton principal `#B4532F`) et aux **prix** (`#9A4426`), alors que le vert sert aux liens, à la sélection et au header. On ne sait pas si un prix terracotta est cliquable. Les grands arrondis (26 px) et les marges de 80 px réduisent aussi la densité d'information.

## Verdict

J'**élimine** ce design parce que Camille veut **des chiffres précis et une comparaison efficace**, avec un « look » d'outil plutôt que de boutique. L'ambiance chaleureuse est réussie et le feedback est bon, mais le focus clavier invisible dans le header est un défaut d'accessibilité bloquant. La double signification de la couleur terracotta brouille aussi ce qui est cliquable.
