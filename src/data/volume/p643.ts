import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 643 · Scan 675 · Berlin (Statistik, Bevölkerung) */
export const PAGE_643: EncPage = {
  printed: 643,
  scanFile: 675,
  headerLeft: "Berlin",
  headerRight: "Berl",
  catchword: "Berlin",
  scanSrc: "/scans/p643.jpg",
  left: [
    L(`<strong>Statistik.</strong>`),
    L(
      `Geographische Lage des Alt-Berliner Rathauses: 52°&nbsp;31′ n. Br., 13°&nbsp;25′ ö. L., 36&nbsp;m ü.&nbsp;M. Höchste Punkte des Stadtgebiets: Kreuzberg 66&nbsp;m, Havelberg im Grunewald 97&nbsp;m, Müggelberge 115&nbsp;m.`,
    ),
    L(`Größe des Stadtgebiets: 87846 ha.`),
    L(
      `Klima: Temperatur im Jahresmittel 8,3°&nbsp;C, Jan. −0,4°, Juli 18,1°. Mittlere jährl. Niederschlagshöhe 577&nbsp;mm.`,
    ),
    L(`<em>Einteilung in 20 Verwaltungsbezirke.</em>`),
    L(
      `<table><thead><tr><th>Nr.</th><th>Name</th><th>ha</th><th>16.&nbsp;Juni 1925</th></tr></thead><tbody><tr><td>1</td><td>Mitte</td><td>1043</td><td>295837</td></tr><tr><td>2</td><td>Tiergarten</td><td>1355</td><td>283581</td></tr><tr><td>3</td><td>Wedding</td><td>1306</td><td>351798</td></tr><tr><td>4</td><td>Prenzlauer Berg</td><td>1013</td><td>326311</td></tr><tr><td>5</td><td>Friedrichshain</td><td>877</td><td>336338</td></tr><tr><td>6</td><td>Kreuzberg</td><td>1065</td><td>377253</td></tr><tr><td>7</td><td>Charlottenburg</td><td>3364</td><td>345139</td></tr><tr><td>8</td><td>Spandau</td><td>8969</td><td>111629</td></tr><tr><td>9</td><td>Wilmersdorf</td><td>5125</td><td>174884</td></tr><tr><td>10</td><td>Zehlendorf</td><td>5243</td><td>44288</td></tr><tr><td>11</td><td>Schöneberg</td><td>1098</td><td>231664</td></tr><tr><td>12</td><td>Steglitz</td><td>2805</td><td>160580</td></tr><tr><td>13</td><td>Tempelhof</td><td>4033</td><td>68009</td></tr><tr><td>14</td><td>Neukölln</td><td>4896</td><td>290327</td></tr><tr><td>15</td><td>Treptow</td><td>4143</td><td>97524</td></tr><tr><td>16</td><td>Köpenick</td><td>12372</td><td>65765</td></tr><tr><td>17</td><td>Lichtenberg</td><td>7900</td><td>198832</td></tr><tr><td>18</td><td>Weißensee</td><td>4637</td><td>58114</td></tr><tr><td>19</td><td>Pankow</td><td>7739</td><td>100825</td></tr><tr><td>20</td><td>Reinickendorf</td><td>8863</td><td>105467</td></tr><tr><td></td><td>Stadt Berlin</td><td>87846</td><td>4024165</td></tr></tbody></table>`,
    ),
  ],
  right: [
    L(
      `Übersicht der 1920 zu Groß-Berlin vereinigten Stadtgemeinden (St), Landgemeinden (L) und Gutsbezirke (G). Die Volkszählung v.&nbsp;8.&nbsp;Okt. 1919 zählte u.&nbsp;a.: Berlin (St, Bz.&nbsp;1–6) 1902509 E.; Charlottenburg (St, 7) 322714; Neukölln (St, 14) 262414; Schöneberg (St, 11) 178207; Lichtenberg (St, 17) 144986; Wilmersdorf (St, 9) 139468; Spandau (St, 8) 95373; Steglitz (L, 12) 83370; Pankow (L, 19) 57962; Lichterfelde (L, 12) 47386; Weißensee (L, 18) 45949; Reinickendorf (L, 20) 41289; Tempelhof (L, 13) 34026; Treptow (L, 15) 30717; Köpenick (St, 16) 32589; Friederikenfelde (L, 17) 24414; Friedenau (L, 11) 43864; Zehlendorf (L, 10) 20562; Adlershof (L, 15) 12656; Berlin-Britz (L, 14) 13475. Weitere ehemal. Gemeinden und Gutsbezirke (Buch, Tegel, Wannsee, Grunewald, Heiligensee, Staaken, Schmöckwitz u.&nbsp;a.) im Scan.`,
    ),
    L(`<strong>Bevölkerung.</strong>`),
    L(
      `Entwicklung der Einwohnerzahl Alt-Berlins (ohne die Vororte): um 1500: 12000, im Dreißigjährigen Krieg: 6000, um 1700: 26000, 1709 (Vereinigung von Berlin und Cölln): 57000, 1790: 151000, 1825: 220000, 1847: 400000, 1861: 550000, 1871: 826800, 1889: 1500000, 1900: 1890000, 1910: 2076172, 1919: 1907466.`,
    ),
    L(
      `Jährliche Zunahme: 1816–70: 2,66%, 1871–90: 4,81%, 1890–1900: 1,96%, 1900–10: 0,97%.`,
    ),
    L(
      `Zunahme der Vororte 1871 → 1919: Charlottenburg 20876 → 325084; Neukölln (Rixdorf) 11442 → 279447; Schöneberg 4555 → 218926; Lichtenberg 9617 → 183706; Wilmersdorf 2106 → 157944.`,
    ),
    L(
      `Wohnbevölkerung von Groß-Berlin 8.&nbsp;Okt. 1919: 3804049, 16.&nbsp;Juni 1925: 4024165, davon 1848859 männlich, 2175306 weiblich. Am 1.&nbsp;Jan. 1927 betrug die fortgeschriebene Bevölkerung 4141792.`,
    ),
    L(
      `Bekenntnisse 1925: 3083196 (75,5%) evang., 403780 (10%) röm.-kath., 11480 sonstige Christen, 172672 (4,3%) Juden, 42606 sonstige Nichtchristen, 288948 ohne Bekenntnis, 21483 ohne Angabe.`,
    ),
    L(
      `Bevölkerungsbewegung: Geburtenziffer 1913: 19,3‰, 1923: 9,9‰, 1926: 11‰. Sterbefälle in Alt-Berlin: 1872: 32,9‰, 1900: 19,0‰, 1913: 13,5‰, 1926: 11,8‰. Der frühere Geburtenüberschuß verwandelte sich 1925 in ein Minus von 11000, 1926 von 139. Dagegen übertraf die Zahl der Zuwandernden die der Fortgezogenen 1924 um 73000, 1925 um 105000, 1926 um 48500.`,
    ),
  ],
};
