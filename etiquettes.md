# Étiquettes de data.json — Focale

Méthode en 6 questions appliquée au brief (écrans 1. Filtres, 2. Résultats, 3. Comparaison, 4. Fiche appareil).

| Étiquette | Écran(s) | Sert à | Sorte | Unique | Exemple |
|---|---|---|---|---|---|
| `id` | aucun (technique) | identifier la fiche | nombre | oui | `1` |
| `marque` | Résultats, Comparaison, Fiche | afficher, rechercher | texte | non | `"Sony"` |
| `modele` | Résultats, Comparaison, Fiche | afficher, rechercher | texte | oui | `"Alpha 7 IV"` |
| `anneeSortie` | Fiche | afficher, trier (plus récent) | nombre | non | `2021` |
| `monture` | Résultats, Comparaison, Fiche | afficher, filtrer | texte | non | `"Sony E"` |
| `formatCapteur` | Filtres, Résultats, Comparaison, Fiche | filtrer (Capteur), afficher | texte | non | `"Plein format"` |
| `resolutionMpx` | Filtres, Résultats, Comparaison, Fiche | filtrer (curseur Résolution), trier, afficher | nombre | non | `33` |
| `isoMin` | Filtres, Comparaison, Fiche | filtrer (curseur ISO), afficher | nombre | non | `100` |
| `isoMax` | Filtres, Comparaison, Fiche | filtrer (curseur ISO), afficher | nombre | non | `51200` |
| `afDetectionOeil` | Filtres, Fiche | filtrer (Autofocus), afficher | vrai/faux | non | `true` |
| `afDetectionSujets` | Filtres, Fiche | filtrer (Autofocus), afficher | vrai/faux | non | `true` |
| `stabilisationCapteur` | Filtres, Comparaison, Fiche | filtrer (Stabilisation capteur), afficher | vrai/faux | non | `true` |
| `stabilisationIl` | Filtres, Résultats, Comparaison, Fiche | filtrer (Efficacité ≥ 5 IL), trier, afficher | nombre | non | `5.5` |
| `rafaleMaxIs` | Résultats, Comparaison, Fiche | afficher, trier | nombre | non | `10` |
| `videoMax` | Résultats, Comparaison, Fiche | afficher | texte | non | `"4K 60p"` |
| `video4k60p` | Filtres | filtrer (Vidéo 4K 60p) | vrai/faux | non | `true` |
| `video10Bits` | Filtres, Fiche | filtrer (Vidéo 10 bits), afficher | vrai/faux | non | `true` |
| `videoLog` | Filtres, Fiche | filtrer (Vidéo Profil Log), afficher | vrai/faux | non | `true` |
| `prixLancementUsd` | Filtres, Résultats, Comparaison, Fiche | filtrer (curseur Prix), trier, afficher | nombre | non | `2499` |

## Règles de mesure (pour que les fiches soient comparables entre marques)

Toutes les valeurs viennent des fiches techniques officielles des fabricants, boîtier nu.

- **resolutionMpx** : pixels effectifs, en mégapixels.
- **isoMin / isoMax** : plage ISO **native** pour la photo, sans les valeurs étendues (« ISO L / H »).
- **afDetectionOeil** : l'autofocus reconnaît l'œil humain. **afDetectionSujets** : il reconnaît aussi d'autres sujets (animaux, oiseaux, véhicules…).
- **stabilisationIl** : efficacité **maximale annoncée** selon la norme CIPA, en IL (stops), avec un objectif stabilisé compatible quand la marque l'indique. `0` si le boîtier n'a pas de stabilisation capteur.
- **rafaleMaxIs** : cadence maximale annoncée en **pleine définition et en RAW**, tous obturateurs confondus. Les modes recadrés ou JPEG seul ne comptent pas.
- **videoMax** : la plus haute définition enregistrée **dans le boîtier**, avec sa cadence maximale. `"Aucune"` si l'appareil ne filme pas.
- **video4k60p / video10Bits / videoLog** : enregistrement **interne** (pas seulement via un enregistreur HDMI externe). Le 4K 60p compte même avec un recadrage.
- **prixLancementUsd** : prix officiel de lancement aux États-Unis, en dollars, boîtier nu. C'est le seul prix public, daté et identique pour toutes les marques ; les prix en CHF varient selon les revendeurs.

## Valeurs autorisées

- `formatCapteur` : `"Moyen format"`, `"Plein format"`, `"APS-C"`, `"Micro 4/3"` (les mêmes mots que les cases du filtre Capteur).
- `monture` : `"Sony E"`, `"Canon RF"`, `"Nikon Z"`, `"Fujifilm X"`, `"Fujifilm G"`, `"Monture L"`, `"Micro 4/3"`, `"Hasselblad XCD"`.
