# Mes cartes

Une ligne par texte écrit à la main dans **une** carte de votre `index.html` (semaine 9). Prenez les étiquettes dans `etiquettes.md` (semaine 10).

Carte relevée : « Appareil 1 » de l'écran Résultats, [e3/e3-1/2-resultats.html](e3/e3-1/2-resultats.html).

## La carte

Élément et classe de la carte entière (par exemple `article.carte`, ou `li` puis `a.carte`) : `li` puis `article.product-card`

## Ce qu'elle montre

| Texte écrit à la main | Étiquette de `data.json` qui le remplace | Élément et classe |
| --- | --- | --- |
| Appareil 1 | `marque` + `modele` → « Sony Alpha 7 IV » | `h3.product-name` > `label` |
| Illustration de l'Appareil 1 (texte de l'image) | `marque` + `modele` | `div.product-media`, attribut `aria-label` |
| `sel-1` (id de la case à cocher) | `id` | `input[type=checkbox]` dans `div.product-select.check` |
| Plein format · Sony E | `formatCapteur` + `monture` | `p.product-mount` |
| 33 Mpx · 10 i/s | `resolutionMpx` + `rafaleMaxIs` | `p.product-specs` |
| IBIS 5,5 IL · 4K 60p | `stabilisationCapteur` + `stabilisationIl` + `videoMax` | `p.product-specs` |
| 2 499 CHF | `prixLancementUsd` → « 2 499 USD » (data.json contient le prix de lancement en dollars) | `p.product-price` |

## Les étiquettes vrai ou faux

Pour chaque étiquette qui vaut `true` ou `false` : le texte et la classe à montrer dans chaque cas.

| Étiquette | Si `true` : texte, classe | Si `false` : texte, classe |
| --- | --- | --- |
| `stabilisationCapteur` | « IBIS 5,5 IL » (avec `stabilisationIl`), `p.product-specs` | « Sans IBIS », `p.product-specs` |

Les autres vrai/faux (`afDetectionOeil`, `afDetectionSujets`, `video4k60p`, `video10Bits`, `videoLog`) ne sont pas sur la carte : ils serviront aux filtres en semaine 12. Cas particulier en texte : si `videoMax` vaut `"Aucune"`, la carte montre « Pas de vidéo ».

## Le conteneur

L'élément qui contient toutes les cartes, et l'`id` que vous lui donnez : `ul.product-grid`, `id="liste-cartes"`. Au-dessus : `<p id="etat" role="status">` pour les messages.

## Une carte écrite à la main (copie avant suppression)

```html
          <li>
            <article class="product-card is-selected">
              <div class="product-media" role="img" aria-label="Illustration de l'Appareil 1"><svg class="camera-illu" viewBox="0 0 120 84" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"><path d="M10 26 h26 l4 -12 h24 l4 12 h42 a6 6 0 0 1 6 6 v40 a6 6 0 0 1 -6 6 h-100 a6 6 0 0 1 -6 -6 v-40 a6 6 0 0 1 6 -6 z"/><path d="M84 26 v-6 h16 v6"/><circle cx="54" cy="52" r="23"/><circle cx="54" cy="52" r="16" stroke-width="2"/><circle cx="54" cy="52" r="9"/><path d="M4 36 h8 M4 62 h8" stroke-width="2.5"/></g><circle cx="54" cy="52" r="3.5" fill="currentColor"/><rect x="92" y="34" width="12" height="7" rx="1.5" fill="currentColor"/></svg></div>
              <div class="product-body">
                <div class="product-select check"><input type="checkbox" id="sel-1" checked>
                  <h3 class="product-name"><label for="sel-1">Appareil 1</label></h3></div>
                <p class="product-mount">Plein format · Sony E</p>
                <p class="product-specs">33 Mpx · 10 i/s</p>
                <p class="product-specs">IBIS 5,5 IL · 4K 60p</p>
                <p class="product-price">2 499 CHF</p>
              </div>
            </article>
          </li>
```
