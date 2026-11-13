# Exercice 1 — Phare charge ses fiches : réponses aux questions

- **Étape 3.** `tousLesLieux` est une pile vide `[]` tant que `data.json` n'est pas arrivé. Avec une liste de 3 fiches, `afficherLieux` viderait la zone des cartes puis afficherait 3 cartes (nom, quartier, Ouvert ou Fermé, bruit).
- **Étape 5.** Avec seulement les deux premières fiches, la console afficherait `2` : `donnees.length` compte les fiches de la pile.
- **Étape 6.** La première fiche a le numéro `0`. `donnees[1].nom` donne « Salle 204 ».
- **Étape 6 (boucle).** La boucle a tourné 30 fois : la console affiche 30 noms, un par tour.
- **Étape 7.** La carte montre « Café de la Gare » parce que le code lit `donnees[0].nom`, le nom de la première fiche.
- **Étape 8.** Les noms sont différents parce que, dans la boucle, `lieu` devient une fiche différente à chaque tour, et la carte lit `lieu.nom`.
- **Étape 9.** Le texte sous le nom vient de l'étiquette `quartier` de chaque fiche de `data.json`. Avec `lieu.quartiers` (avec un s), l'étiquette n'existe pas : la valeur est `undefined`, et le paragraphe du quartier reste vide sur toutes les cartes, sans aucune erreur dans la console. C'est une erreur muette : seule la page la montre.
- **Étape 10.** Les cartes montrent « Ouvert » et le bruit parce que c'est maintenant `afficherLieux` qui les fabrique, et elle écrit aussi `lieu.ouvert` et `lieu.bruit`.
- **Étape 12.** En double-clic, l'adresse commence par `file://` et la page reste sans carte. La première ligne rouge de la console : `Access to fetch at 'file:///…/data.json' from origin 'null' has been blocked by CORS policy`. Avec Live Server, l'adresse est `http://127.0.0.1:5500` : un serveur donne le fichier à `fetch`, ce que le navigateur refuse pour un fichier ouvert directement.
