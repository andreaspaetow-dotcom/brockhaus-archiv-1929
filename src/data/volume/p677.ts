import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 677 · Scan 719 · Übersicht Berufsgenossenschaften 1926 */
export const PAGE_677: EncPage = {
  printed: 677,
  scanFile: 719,
  headerLeft: "Berufsgenossenschaften",
  headerRight: "Berufsgenossenschaften",
  catchword: "tung",
  scanSrc: "/scans/p677.jpg",
  left: [
    L(
      `<em>Übersicht über die reichsdeutschen Berufsgenossenschaften 1926.</em> Spalten der Vorlage: versicherungspflichtige Betriebe; versicherte Personen 1926 (und 1925); Unfälle; darunter Getötete; neu hinzugekommene; Verletzte, für die oder für deren Hinterbliebene 1926 Entschädigungen gezahlt wurden; Entschädigungssumme (1000&nbsp;RM). Die vollständige Ziffernfolge jeder Einzelgenossenschaft steht im Scan.`,
    ),
    L(`<em>I. Gewerbliche Berufsgenossenschaften</em> (Auswahl):`),
    L(`<table>
<thead><tr><th>Berufsgenossenschaft (Sitz)</th><th>Betriebe</th><th>Versicherte 1926</th><th>Unfälle</th><th>Getötete</th></tr></thead>
<tbody>
<tr><td>Sächsische Textil-B. (Chemnitz)</td><td>82098</td><td>278318</td><td>10367</td><td>35</td></tr>
<tr><td>Schlesische Textil-B. (Reichenbach)</td><td>20824</td><td>473718</td><td>15052</td><td>27</td></tr>
<tr><td>Süddeutsche Textil-B. (Augsburg)</td><td>10015</td><td>214000</td><td>1455</td><td>9</td></tr>
<tr><td>Rheinisch-Westfälische Textil-B. (Mönchengladbach)</td><td>15329</td><td>175466</td><td>15227</td><td>21</td></tr>
<tr><td>Mittlere Rheinische-B. (Mainz)</td><td>23968</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Norddeutsche Eisen-B. (Hannover)</td><td>7092</td><td>179874</td><td>9614</td><td>2</td></tr>
<tr><td>Süddeutsche Eisen- und Stahl-B. (Mainz)</td><td>10787</td><td>262773</td><td>14557</td><td>—</td></tr>
<tr><td>Rheinisch-Westfälische Hütten- und Walzwerks-B.</td><td>214</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Maschinenbau- und Kleineisen-B. (Leipzig)</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Norddeutsche Metall-B. (Berlin)</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Süddeutsche Metall-B. (Stuttgart)</td><td>1506</td><td>163284</td><td>1851</td><td>2</td></tr>
<tr><td>B. der chemischen Industrie (Berlin)</td><td>14091</td><td>—</td><td>14112</td><td>21</td></tr>
<tr><td>Steinbruchs-B. (Berlin)</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Baugewerks-B. (mehrere Bezirke)</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>See-B. (Hamburg)</td><td>3676</td><td>72149</td><td>5479</td><td>148</td></tr>
<tr><td>Binnenschiffahrts-B. (Berlin)</td><td>17665</td><td>80715</td><td>8293</td><td>90</td></tr>
<tr><td>Privatbahn-B. (Berlin)</td><td>151</td><td>43766</td><td>5777</td><td>39</td></tr>
<tr><td>Straßenbahn-B. (Berlin)</td><td>99</td><td>66820</td><td>11327</td><td>38</td></tr>
<tr><td>Fleischerei-B. (Mainz)</td><td>41297</td><td>129773</td><td>8683</td><td>13</td></tr>
<tr><td>Brauerei- und Mälzerei-B. (Berlin)</td><td>13691</td><td>137640</td><td>14131</td><td>32</td></tr>
<tr><td>Mühlen-B. (Stendal)</td><td>18022</td><td>75097</td><td>7553</td><td>45</td></tr>
<tr><td>Zucker-B. (Magdeburg)</td><td>511</td><td>72764</td><td>8473</td><td>18</td></tr>
<tr><td>Speditions-, Speicherei- und Kellerei-B. (Berlin)</td><td>11725</td><td>129535</td><td>13960</td><td>40</td></tr>
<tr><td>Fuhrwerks-B. (Berlin)</td><td>100358</td><td>322437</td><td>18955</td><td>173</td></tr>
<tr><td>Tabak-B. (Dresden)</td><td>20000</td><td>146535</td><td>1647</td><td>5</td></tr>
<tr><td>Papiererzeugungs-B. (Berlin)</td><td>1523</td><td>91735</td><td>10200</td><td>17</td></tr>
<tr><td>Druck- und Papierverarbeitung (Berlin)</td><td>19580</td><td>255773</td><td>8060</td><td>11</td></tr>
<tr><td>Lederindustrie-B. (Berlin)</td><td>4309</td><td>72422</td><td>4735</td><td>9</td></tr>
<tr><td>Schuh- und Lederverarbeitung (Erfurt)</td><td>8003</td><td>137437</td><td>3511</td><td>3</td></tr>
<tr><td>Bekleidungsindustrie-B. (Berlin)</td><td>81829</td><td>340773</td><td>2739</td><td>7</td></tr>
<tr><td>Feinmechanik-B. (Berlin)</td><td>5446</td><td>108137</td><td>3533</td><td>7</td></tr>
<tr><td>Musikinstrumenten-B. (Leipzig)</td><td>1614</td><td>—</td><td>1061</td><td>3</td></tr>
<tr><td>Gas- und Wasserwerke (Berlin)</td><td>1489</td><td>86661</td><td>1996</td><td>21</td></tr>
<tr><td>Töpferei-B. (Berlin)</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Ziegel-B. (Berlin)</td><td>6971</td><td>—</td><td>7585</td><td>7</td></tr>
</tbody>
</table>`),
  ],
  right: [
    L(
      `<em>Zusammenfassung 1926</em> (Klammer: Stand 1925):`,
    ),
    L(`<table>
<thead><tr><th>Gruppe</th><th>Zahl</th><th>Betriebe</th><th>Versicherte</th><th>Unfälle</th><th>Getötete</th><th>Entschädigte</th></tr></thead>
<tbody>
<tr><td>I. Gewerbliche B.</td><td>66</td><td>846014<br/>(548094)</td><td>10470331<br/>(8486031)</td><td>605937</td><td>2010</td><td>78553</td></tr>
<tr><td>II. Landwirtschaftl. B.</td><td>45</td><td>4973183</td><td>14286531</td><td>2486031</td><td>—</td><td>—</td></tr>
<tr><td>III. Ausführungsbehörden</td><td>19</td><td>875747</td><td>56018</td><td>1328</td><td>—</td><td>466</td></tr>
</tbody>
</table>`),
    N(
      "Die vollständige Einzelübersicht der 66 gewerblichen, 45 landwirtschaftlichen Berufsgenossenschaften und 19 Ausführungsbehörden steht im Scan dieser Seite (Druck 677). Kustos »tung«: Fortsetzung Berufskrankheiten (Vergif-tungzustände) auf der folgenden Textseite.",
    ),
    L(
      `Die landw. Berufsgenossenschaften sind nach Ländern und preuß. Provinzen gegliedert (Ostpreußen, Brandenburg, Pommern, Grenzmark, Niederschlesien, Oberschlesien, Sachsen, Schleswig-Holstein, Hannover, Westfalen, Hessen-Nassau, Rheinprovinz, Hohenzollern, Berlin; Bayern, Sachsen, Württemberg, Baden, Thüringen, Hessen, Hamburg, Mecklenburg, Oldenburg, Braunschweig, Anhalt, Lippe, Lübeck, Bremen). Die Ausführungsbehörden umfassen Reich, Länder, Gemeinden, Reichsbahn, Reichspost und die besonderen Zweige des öffentl. Dienstes.`,
    ),
  ],
};
