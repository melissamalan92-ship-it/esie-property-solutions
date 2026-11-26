# Guide pages and Explore areas: what Melissa should check

Added on the `seo-fixes` branch (26 Nov 2026), so each thing international buyers search for has its own page
on the site. Written only from what the site already said (services, FAQ, how it works), in the same voice.
Nothing here is new advice; where a fact wasn't on the site, the guide stays general.

## The pages

| Page | Written for the search |
|---|---|
| /guides | (the list of guides) |
| /guides/buying-property-in-cape-town-as-a-foreigner | buying property in cape town as a foreigner |
| /guides/non-resident-mortgages-in-south-africa | non resident mortgage south africa |
| /guides/moving-money-to-buy-property-in-south-africa | buy property in south africa from abroad |
| /guides/own-name-company-or-trust | can foreigners buy property in south africa |
| /guides/property-tax-for-foreign-owners | property investment cape town for foreigners |
| /guides/buying-a-holiday-home-in-cape-town | buying a holiday home in cape town |

The words are all in `src/app/guides-content.ts` (one block per guide); change them there.
Links to the guides: a new "Guides" column in the footer, and "Read the guide" on five of the service cards.

The Explore page shows the six area write-ups again (Clifton, Camps Bay, Llandudno, Sea Point, Constantia,
the Winelands), in the layout the site already had for them. Their words are in `src/app/esie-content.ts`
(and `public/esie.js`; `npm run check` fails if the two differ).

## Please check

1. Read each guide: is everything accurate for how ESIE works? Two sentences go slightly beyond the old site:
   - Tax guide: "Some purchases carry VAT instead [of transfer duty]" and "dividends tax can apply when the
     company pays money out".
   - Buying guide, step 5: "Contracts are checked before you sign" (from "Assistance with contracts").
2. Facts that would make the guides much stronger (add where they fit):
   - How ESIE's fee works, or a "from" price.
   - The documents banks ask non-resident buyers for.
   - Roughly how much of the price banks lend to non-residents.
   - Whether ESIE introduces property managers for holiday homes that are let out.
   - Who you'll work with (Melissa's background), for every guide's "How ESIE helps".
3. Design: the guides use the Privacy page's reading layout under the usual page header. Add a photo to each
   header, and adjust the footer's new Guides column, as you like.
