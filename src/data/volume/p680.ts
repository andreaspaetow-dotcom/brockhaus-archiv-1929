import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 680 · Scan 722 · Berufsstatistik (Übersichten) */
export const PAGE_680: EncPage = {
  printed: 680,
  scanFile: 722,
  headerLeft: "Berufsstatistik",
  headerRight: "Berufsstatistik",
  catchword: "Zählung",
  scanSrc: "/scans/p680.jpg",
  left: [
    L(
      `<em>Die berufliche Gliederung der Bevölkerung in einigen Ländern Europas und Amerikas.</em> Von 1000 Erwerbstätigen gehörten zu den folgenden Berufsabteilungen:`,
    ),
    L(`<table>
<thead><tr><th>Länder</th><th>Zählungs&shy;jahr</th><th>Land- und Forst&shy;wirtschaft, Fischerei</th><th>Industrie, Bergbau</th></tr></thead>
<tbody>
<tr><td>Deutsches Reich</td><td>1907</td><td>352</td><td>400</td></tr>
<tr><td>Frankreich</td><td>1911</td><td>407</td><td>358</td></tr>
<tr><td>Großbritannien (ohne Irland)</td><td>1921</td><td>78</td><td>515</td></tr>
<tr><td>Italien</td><td>1911</td><td>555</td><td>275</td></tr>
<tr><td>Niederlande</td><td>1920</td><td>236</td><td>380</td></tr>
<tr><td>Norwegen</td><td>1920</td><td>368</td><td>294</td></tr>
<tr><td>Schweden</td><td>1910</td><td>462</td><td>257</td></tr>
<tr><td>Schweden</td><td>1920</td><td>260</td><td>447</td></tr>
<tr><td>Tschechoslowakei</td><td>1921</td><td>403</td><td>368</td></tr>
<tr><td>Ungarn</td><td>1910</td><td>641</td><td>163</td></tr>
<tr><td>Dänemark</td><td>1921</td><td>356</td><td>281</td></tr>
<tr><td>Ver. St. v. Amerika</td><td>1920</td><td>263</td><td>344</td></tr>
</tbody></table>`),
    L(
      `<em>Die Erwerbstätigen der Wirtschaftsgruppen nach der Stellung im Beruf 1925.</em> Von je 1000 Erwerbstätigen waren Selbständige / Angestellte und Beamte / Arbeiter / mithelfende Familienangehörige (Auswahl):`,
    ),
    L(`<table>
<thead><tr><th>Wirtschaftsgruppe</th><th>Selbst.</th><th>Angest./Beamte</th><th>Arbeiter</th><th>Mithelf.</th></tr></thead>
<tbody>
<tr><td>Landwirtschaft, Tierzucht usw.</td><td>228</td><td>13</td><td>207</td><td>552</td></tr>
<tr><td>Forstwirtschaft und Fischerei</td><td>92</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>A. Land- und Forstwirtschaft</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Bergbau</td><td>86</td><td>38</td><td>—</td><td>—</td></tr>
<tr><td>Industrie der Steine und Erden</td><td>102</td><td>71</td><td>—</td><td>—</td></tr>
<tr><td>Eisen- und Metallgewinnung</td><td>187</td><td>24</td><td>—</td><td>—</td></tr>
<tr><td>Textilindustrie</td><td>197</td><td>172</td><td>—</td><td>—</td></tr>
<tr><td>Baugewerbe</td><td>315</td><td>100</td><td>—</td><td>—</td></tr>
<tr><td>B. Industrie und Handwerk</td><td>173</td><td>165</td><td>492</td><td>170</td></tr>
<tr><td>C. Handel und Verkehr</td><td>227</td><td>421</td><td>273</td><td>79</td></tr>
<tr><td>D. Verwaltung, freie Berufe</td><td>121</td><td>767</td><td>109</td><td>3</td></tr>
<tr><td>E. Gesundheitswesen usw.</td><td>284</td><td>384</td><td>318</td><td>14</td></tr>
</tbody></table>`),
    N(
      "Die vollständige Gliederung aller 26 Wirtschaftsgruppen mit den vier Stellungsspalten steht im Scan.",
    ),
  ],
  right: [
    L(
      `Innerhalb der einzelnen Wirtschaftsabteilungen und Berufe ist die Erwerbstätigkeit der Bevölkerung recht verschieden. Das gilt bes. auch von dem zahlenmäßigen Verhältnis zwischen Erwerbstätigen und Berufszugehörigen. Die Verhältnisse haben sich in der Periode von 1907–25 in dieser Hinsicht nicht unerheblich verändert.`,
    ),
    L(
      `Das wirtschaftlich wichtigste Ergebnis der verschiedenen Zählungen besteht in der absoluten und relativen Abnahme der in der Landwirtschaft tätigen Bevölkerung und dem starken Wachstum der in Industrie, Handel und Verkehr Beschäftigten. Es ist dies eine Entwicklung, die fast alle an Zahl stark wachsenden Völker durchmachen müssen, sofern nicht durch Auswanderung in fremde Länder ein erheblicher Teil des Geburtenüberschusses dem eigenen Lande entzogen wird. Diese Berufsverschiebungen von der Landwirtschaft zu Industrie, Handel und Verkehr sind es auch, die in der Öffentlichkeit unter den Schlagworten »Agrar- oder Industriestaat« oder »Zug nach der Stadt« und »Landflucht« eine so große Rolle spielen.`,
    ),
    L(
      `3)&nbsp;<em>Die Stellung im Beruf.</em> Den wirtschaftl. Wandlungen, die sich in den dargestellten Berufsverschiebungen äußern, stehen dann, nicht minder bedeutsam in ihren Wirkungen, die großen sozialen Umschichtungen gegenüber. Zur Gruppe der Selbständigen gehören die Betriebsinhaber und die leitenden Beamten; zur zweiten Gruppe gehören die nichtleitenden Beamten, also das ganze wissenschaftlich, technisch und kaufmännisch gebildete Verwaltungs- und Aufsichtspersonal. Zur Gruppe der Arbeiter zählt die große Masse der Lohnempfänger ohne Rücksicht auf die Dauer des Arbeitsverhältnisses. Wie diese Verhältnisse in den einzelnen Wirtschaftsabteilungen und Wirtschaftsgruppen nach der`,
    ),
  ],
};
