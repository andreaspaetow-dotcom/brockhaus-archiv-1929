import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 457 · Scan 489 · Bayern, statistische Übersicht */
export const PAGE_457: EncPage = {
  printed: 457,
  scanFile: 489,
  headerLeft: "Bayern",
  headerRight: "Baye",
  catchword: "Ernteflächen",
  scanSrc: "/scans/p457.jpg",
  left: [
    L(`<strong>Statistische Übersicht zu Bayern.</strong> (Bei allen Angaben bleibt das Saargebiet unberücksichtigt.)`),
    L(
      `<em>Größe:</em> Bayern r. des Rheins 70492,41&nbsp;qkm; Bayern l. des Rheins 5503,96&nbsp;qkm; zusammen 75996,37&nbsp;qkm.`,
    ),
    L(
      `<em>Bevölkerung:</em> 1880: 5285000, 1895: 5818000, 1910: 6887000, 1919: 7066000, 1925: 7379000. 1925: 3553857 männl., 3825737 weibl.`,
    ),
    L(
      `<table><caption>Regierungsbezirke 1925</caption><thead><tr><th>Regierungsbezirk</th><th>kreisfreie Städte</th><th>Bezirksämter</th><th>Fläche qkm</th><th>Wohnbev. 1925</th><th>Dichte</th><th>Hauptstadt</th></tr></thead><tbody><tr><td>Oberbayern</td><td>6</td><td>27</td><td>16882,65</td><td>1684766</td><td>101</td><td>München</td></tr><tr><td>Niederbayern</td><td>4</td><td>22</td><td>10744,65</td><td>755769</td><td>70</td><td>Landshut</td></tr><tr><td>Pfalz</td><td>8</td><td>14</td><td>5503,96</td><td>931755</td><td>169</td><td>Speyer</td></tr><tr><td>Oberpfalz</td><td>5</td><td>20</td><td>9657,48</td><td>629262</td><td>65</td><td>Regensburg</td></tr><tr><td>Oberfranken</td><td>10</td><td>20</td><td>7506,63</td><td>757515</td><td>101</td><td>Bayreuth</td></tr><tr><td>Mittelfranken</td><td>9</td><td>17</td><td>7600,84</td><td>998386</td><td>131</td><td>Ansbach</td></tr><tr><td>Unterfranken</td><td>5</td><td>22</td><td>8444,72</td><td>762744</td><td>90</td><td>Würzburg</td></tr><tr><td>Schwaben</td><td>11</td><td>20</td><td>9855,54</td><td>859397</td><td>87</td><td>Augsburg</td></tr><tr><td>Bayern</td><td>58</td><td>162</td><td>76196,47</td><td>7379594</td><td>97</td><td>München</td></tr></tbody></table>`,
    ),
    L(
      `<em>Bewegung der Bevölkerung:</em> Auf 1000 E. kamen 1925: 7,2 Eheschließungen, 22,7 Geborene, 13,5 Gestorbene. Geburtenüberschuß 9,2.`,
    ),
  ],
  right: [
    L(
      `<table><caption>Ortsanwesende Bevölkerung 1910/25</caption><thead><tr><th>Regierungsbezirk</th><th>1910</th><th>1925</th><th>Geburtenüberschuß 1910–25</th><th>Wanderung ±</th><th>± %</th></tr></thead><tbody><tr><td>Oberbayern</td><td>1511952</td><td>1704869</td><td>90639</td><td>+82175</td><td>11,4</td></tr><tr><td>Niederbayern</td><td>724331</td><td>757918</td><td>77925</td><td>−46487</td><td>4,3</td></tr><tr><td>Pfalz (ohne Saargebiet)</td><td>857213</td><td>926810</td><td>95439</td><td>−20897</td><td>8,7</td></tr><tr><td>Oberpfalz</td><td>599461</td><td>632046</td><td>64993</td><td>−35192</td><td>5,0</td></tr><tr><td>Oberfranken</td><td>733137</td><td>761088</td><td>58480</td><td>−34102</td><td>3,3</td></tr><tr><td>Mittelfranken</td><td>933053</td><td>991088</td><td>60631</td><td>+4702</td><td>7,0</td></tr><tr><td>Unterfranken</td><td>713124</td><td>769777</td><td>60097</td><td>−10477</td><td>7,0</td></tr><tr><td>Schwaben</td><td>809966</td><td>867933</td><td>63366</td><td>−13953</td><td>6,1</td></tr><tr><td>Bayern</td><td>6882237</td><td>7411529</td><td>571570</td><td>−74231</td><td>7,2</td></tr></tbody></table>`,
    ),
    L(
      `<table><caption>Konfessionen 1925</caption><thead><tr><th>Regierungsbezirk</th><th>Evangelische</th><th>Katholische</th><th>Andere Christen</th><th>Israeliten</th><th>Sonstige</th></tr></thead><tbody><tr><td>Oberbayern</td><td>145108</td><td>1515002</td><td>3460</td><td>10790</td><td>10406</td></tr><tr><td>Niederbayern</td><td>9444</td><td>745430</td><td>273</td><td>348</td><td>274</td></tr><tr><td>Pfalz</td><td>520164</td><td>393833</td><td>805</td><td>7850</td><td>9103</td></tr><tr><td>Oberpfalz</td><td>50029</td><td>577459</td><td>221</td><td>1181</td><td>372</td></tr><tr><td>Oberfranken</td><td>454512</td><td>298294</td><td>192</td><td>2544</td><td>1973</td></tr><tr><td>Mittelfranken</td><td>691353</td><td>283457</td><td>1019</td><td>13719</td><td>8838</td></tr><tr><td>Unterfranken</td><td>139664</td><td>611848</td><td>206</td><td>9879</td><td>1147</td></tr><tr><td>Schwaben</td><td>116164</td><td>737783</td><td>510</td><td>2834</td><td>2106</td></tr><tr><td>Bayern</td><td>2126438</td><td>5163106</td><td>6686</td><td>49145</td><td>34219</td></tr></tbody></table>`,
    ),
    L(
      `<em>Berufsgruppen 1925:</em> Von den Erwerbstätigen waren beschäftigt: 43,8% in der Land-, Forstwirtschaft und Gärtnerei, 33,7% in Industrie und Handwerk, 12,6% in Handel und Verkehr, 4,4% in Verwaltung, Heerwesen, Kirche und freien Berufen, 1,6% im Gesundheitswesen usw., 3,9% in häuslichen Diensten.`,
    ),
    L(
      `<em>Städte über 25000 E.:</em> München 680700, Nürnberg 392500, Augsburg 165500, Ludwigshafen a. Rhein 101900, Würzburg 89900, Regensburg 77000, Fürth 73700, Kaiserslautern 59300, Bamberg 50100, Pirmasens 43000, Hof 41400, Schweinfurt 36300, Bayreuth 35300, Aschaffenburg 34000, Erlangen 29600, Ingolstadt 26600, Amberg 26300, Landshut 26100, Speyer 25600.`,
    ),
    L(
      `<em>Bodennutzung</em> (Ende Mai 1926): von der gesamten Fläche 48,1% Ackerland, 23,7% Wiesen, 22,1% Forsten, 4,8% Ödland. Von je 100&nbsp;ha landw. Nutzfläche entfallen auf Ackerland 62,31, Wiesen 31,74, Viehweiden 5,47, Weinberge 0,48.`,
    ),
  ],
};
