# Fiche critique — design 3 · direction Moderne & Pragmatique (Piste C)

Fichiers évalués : `e2-5/design/propositions/*.html` + `css/piste-c-moderne.css`
Captures : [résultats](../captures/piste-c-moderne-2-resultats.png) · [comparaison](../captures/piste-c-moderne-3-comparaison.png)

## 2 forces

1. **Critère : Feedback** — preuve : une carte sélectionnée a une bordure orange `#FF5B1F`, une case cochée orange et des coins de viseur orange. Au survol, les cartes et les lignes du tableau changent de couleur (`.product-card:hover`, `tbody tr:hover`). Sur l'écran « Résultats », on voit d'un coup d'œil quels sont les 3 appareils retenus.
2. **Critère : Navigation** — preuve : la seule couleur vive (orange, **6,2:1** sur le fond `#0E0F11`) est sur tout ce qui fait avancer ou reculer : « Comparer (3) », bouton « + », compteur du comparateur, liens « ← Retour » et « Voir la fiche → ». Le header est compact (64 px) et les écrans sont denses (espacement de grille de 12 px, lignes de tableau d'environ 44 px). La page Comparaison complète se termine à environ 980 px de haut, contre environ 1 150 px pour la piste A et 1 215 px pour la piste B. Les valeurs sont en chiffres à chasse fixe (JetBrains Mono).

## 2 faiblesses

1. **Critère : Lisibilité** — preuve : texte courant à 15 px et petit texte à **12,5 px** (monture sous les noms d'appareils, compteur « 3 appareils sélectionnés »), en gris `#A2A7AF` sur fond quasi noir. Le contraste est correct (7,3:1), mais ces tailles sont fatigantes pour une lecture longue. Les titres en majuscules serrées (`-0.035em`) se lisent moins bien que des minuscules.
2. **Critère : Cohérence** — preuve : le brief réserve l'orange aux actions et aux éléments actifs, mais il est aussi utilisé sur des éléments **non cliquables** : étiquettes « 1. Filtres / 2. Choix », filet sous l'en-tête du tableau, point du logo. Ce n'est pas grave, mais cela affaiblit le code « orange = action ».

## Verdict

Je **garde** ce design parce que Camille veut **comparer en détail plusieurs appareils sur ordinateur, avec des chiffres précis**. La piste C est la seule qui affiche autant de specs sans défilement, qui aligne les chiffres pour les comparer et qui signale clairement la sélection et les actions. Ses deux faiblesses se corrigent par de simples variables CSS : agrandir `--fs-body` / `--fs-small` et retirer l'orange des étiquettes.
