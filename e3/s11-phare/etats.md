# Les quatre états de Phare

Remplissez une ligne par test, avec ce que vous **voyez**, pas ce que vous attendiez. Recopiez les messages de la console tels quels, même en anglais.

| Test | Ce que montre la page | Ce que dit la console | Onglet Réseau : fichier et code |
| --- | --- | --- | --- |
| 1. `data.json`, réseau lent (3G) | Le titre « Phare » et « Chargement des lieux… » pendant environ 3 secondes, puis les 30 cartes ; le message disparaît | `30`, puis les 30 noms | `data.json` 200, avec un temps de quelques secondes |
| 2. `data-absent.json`, sans `.catch` | « Chargement des lieux… » reste affiché pour toujours, aucune carte | `Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON` | `data-absent.json` 404 |
| 3. `data-absent.json`, avec `.catch` | « Impossible de charger les lieux. Rechargez la page dans un moment. », aucune carte | `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON` | `data-absent.json` 404 |
| 4. `data-absent.json`, avec le contrôle `reponse.ok` | « Impossible de charger les lieux. Rechargez la page dans un moment. », aucune carte | `Error: Fichier introuvable : code 404` | `data-absent.json` 404 |
| 5. `casse.json` | « Impossible de charger les lieux. Rechargez la page dans un moment. », aucune carte | `SyntaxError: Expected double-quoted property name in JSON at position 673 (line 28 column 3)` : la virgule en trop est à la fin de la ligne 27, après `"horaire"` de la fiche 3 | `casse.json` 200 |
| 6. `vide.json`, avant le contrôle de la liste vide | Le titre seul : aucune carte, aucun message (le message de chargement a été effacé) | `0` | `vide.json` 200 |

Remarque sur le test 6 : avec les lignes `console.log(donnees[0]);` et `console.log(donnees[0].nom);` de l'exercice 1 encore en place, la page affichait le message d'erreur et la console `TypeError: Cannot read properties of undefined (reading 'nom')`, car une pile vide n'a pas de fiche 0. Ces deux lignes de test ont été retirées ; sinon le contrôle de la liste vide n'est jamais atteint.

Remarque sur les tests 2 et 3 : le texte de l'erreur dépend du serveur. Ici, la page d'erreur 404 commence par `<!DOCTYPE` ; avec Live Server, elle commence par « Cannot GET », et la console parle alors du jeton `'C'`.

## Deux questions

1. Dans quel test l'onglet Réseau dit-il `200` alors que la page échoue ? Pourquoi ?

   Réponse : au test 5, avec `casse.json`. Le fichier existe, donc le serveur le donne avec le code 200. C'est sa lecture qui échoue : `reponse.json()` tombe sur la virgule en trop et ne peut pas en faire une pile de fiches.

2. Au test 2, que devient le message « Chargement des lieux… » ? Qu'est-ce que la personne qui attend en conclut ?

   Réponse : il reste affiché indéfiniment, car l'erreur arrête le code avant la ligne qui l'efface, et rien ne le remplace. La personne croit que la page charge encore : elle attend pour rien, sans savoir qu'il y a un problème ni qu'il faut recharger.
