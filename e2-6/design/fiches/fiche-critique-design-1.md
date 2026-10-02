# Fiche critique — design 1 · direction Éditoriale & Sobre (Piste A)

Fichiers évalués : `e2-5/design/propositions/*.html` + `css/piste-a-editoriale.css`
Captures : [résultats](../captures/piste-a-editoriale-2-resultats.png) · [comparaison](../captures/piste-a-editoriale-3-comparaison.png)

## 2 forces

1. **Critère : Lisibilité** — preuve : texte courant à 17 px en IBM Plex Sans, texte `#1D2433` sur fond ivoire `#FAF7F0` = **14,5:1**. Le plus petit texte fait 14 px. Les valeurs du tableau de comparaison sont en IBM Plex Mono : les chiffres sont alignés et faciles à comparer d'une colonne à l'autre.
2. **Critère : Accessibilité** — preuve : tous les couples texte/fond mesurés sont ≥ 4,5:1 (texte secondaire `#5B6273` = 5,7:1, bouton = 15,7:1). Le contour de focus bleu nuit `#14213D` atteint **14,9:1** sur le fond : il est visible partout, y compris dans le header.

## 2 faiblesses

1. **Critère : Feedback** — preuve : sur l'écran « Résultats », une carte sélectionnée se distingue seulement par une bordure de 1 px qui passe du gris perle au bleu nuit, et un filet intérieur de 3 px. Hors cases à cocher, il n'y a aucun changement de fond ni de couleur, et aucun survol n'est prévu sur les cartes. Les 3 appareils cochés se repèrent mal d'un coup d'œil.
2. **Critère : Navigation / densité** — preuve : header de 88 px, marges de section de 72 px, lignes de tableau d'environ 54 px de haut. Sur un écran de 1 400 px de haut, le tableau de comparaison commence à 625 px. L'ambiance « magazine » coûte de la place à une utilisatrice qui veut voir un maximum de specs. Les boutons (14 px, majuscules espacées) sont aussi plus discrets que les titres.

## Verdict

Je **élimine** ce design parce que Camille (photographe freelance, sur ordinateur) doit **comparer plusieurs appareils et repérer vite ceux qu'elle a sélectionnés**. Or la piste A est très lisible et exemplaire en accessibilité, mais elle donne un retour visuel trop faible sur la sélection et elle est trop aérée pour une tâche de comparaison dense. Sa taille de texte reste une bonne référence à reprendre.
