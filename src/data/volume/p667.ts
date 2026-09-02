import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 667 · Scan 675 · Berlin (Geographie, Klima, Bevölkerung, Schulen) */
export const PAGE_667: EncPage = {
  printed: 667,
  scanFile: 675,
  headerLeft: "Berl",
  headerRight: "Berlin",
  catchword: "nige",
  scanSrc: "/scans/p667.jpg",
  left: [
    L(
      `die Lage des Alt-Berliner Rathauses: 52°&nbsp;31′ n.&nbsp;Br., 13°&nbsp;25′ ö.&nbsp;L., 36&nbsp;m ü.&nbsp;M. Höchste Punkte des Stadtgebietes: Kreuzberg 66&nbsp;m, Habelberg im Grunewald 97&nbsp;m, Müggelberge 115&nbsp;m.`,
    ),
    L(
      `Größe des Stadtgebietes: 87841&nbsp;ha = 878,41&nbsp;qkm (am 1.&nbsp;Okt. 1919: 6544&nbsp;ha = 65,44&nbsp;qkm). Größte Ausdehnung in der Richtung N–S 43&nbsp;km, O–W 45&nbsp;km. Vom Stadtgebiet entfallen auf: Ackerland 18,4, Gartenland 7,9, Wiesen 4,7, Weiden 1,3, Forsten und Holzungen 17,4, Öd- und Unland 0,4, Hofräume, Haus- und Gebäudeflächen 17,3, Straßen, Wege, Eisenbahnen und Friedhöfe 17,2, Gewässer 5,7, öffentl. Parkanlagen 2,3, Sport- und Spielplätze 1,2, sonstiges 6,2&nbsp;Prozent.`,
    ),
    L(
      `<em>Geologie.</em> Fast das ganze Stadtgebiet besteht aus Diluvium (Talsand, Geschiebemergel) und Alluvium. Der nächste anstehende Muschelkalk liegt bei Rüdersdorf.`,
    ),
    L(
      `<em>Klima.</em> Das Klima ist das der norddeutschen Tiefebene: mäßig warm, mit vorherrschenden Winden aus SW und W. Mittlere Temperatur, Niederschlag, relative Feuchtigkeit und Zahl der Tage mit Niederschlag (Schnee) nach 30–50jährigen Beobachtungen:`,
    ),
    L(`<table>
<thead><tr><th></th><th>Jan.</th><th>Juli</th><th>Jahr</th></tr></thead>
<tbody>
<tr><td>Temperatur</td><td>0,1°</td><td>18,7°</td><td>9,3°</td></tr>
<tr><td>Niederschlag mm</td><td>42</td><td>74</td><td>581</td></tr>
<tr><td>Relative Feuchtigkeit %</td><td>85</td><td>70</td><td>76</td></tr>
<tr><td>Tage mit Niederschlag</td><td>10</td><td>12</td><td>154</td></tr>
<tr><td>Tage mit Schnee</td><td>8</td><td>—</td><td>33</td></tr>
</tbody>
</table>`),
    L(
      `<em>Bevölkerung.</em> Die Einwohnerzahl betrug nach der Volkszählung vom 16.&nbsp;Juni 1925: 4024286 (1910748 männl., 2113538 weibl.), 4581 auf 1&nbsp;qkm (1919 auf dem Gebiet von 1920: 3888044). Darunter waren 164996 Ausländer (4,1&nbsp;Prozent). Die Bevölkerungsbewegung zeigt einen Überschuß der Sterbefälle über die Geburten (1924: 11,1 Geburten und 12,6 Sterbefälle, 1926: 11,0 und 11,4 auf 1000 Einw.). Der Überschuß der Gestorbenen über die Geborenen betrug 1924: 5748, 1926: 1394. Dagegen übertraf die Zahl der Zuwandernden die der Fortgezogenen 1924 um 48000, 1925 um 73500, 1926 um 48500.`,
    ),
    L(
      `Die Bevölkerung nach Verwaltungsbezirken 1925 (E. = Einwohner, D. = auf 1&nbsp;qkm):`,
    ),
    L(`<table>
<thead><tr><th>Verwaltungsbezirk</th><th>E.</th><th>D.</th></tr></thead>
<tbody>
<tr><td>Mitte</td><td>284245</td><td>10666</td></tr>
<tr><td>Tiergarten</td><td>266886</td><td>13227</td></tr>
<tr><td>Wedding</td><td>337206</td><td>15186</td></tr>
<tr><td>Prenzlauer Berg</td><td>294166</td><td>10996</td></tr>
<tr><td>Friedrichshain</td><td>328023</td><td>13280</td></tr>
<tr><td>Hallesches Tor</td><td>366732</td><td>34303</td></tr>
<tr><td>Charlottenburg</td><td>324248</td><td>10433</td></tr>
<tr><td>Spandau</td><td>111496</td><td>1294</td></tr>
<tr><td>Wilmersdorf</td><td>176451</td><td>10173</td></tr>
<tr><td>Zehlendorf</td><td>48102</td><td>695</td></tr>
<tr><td>Schöneberg</td><td>221081</td><td>22809</td></tr>
<tr><td>Steglitz</td><td>143143</td><td>13927</td></tr>
<tr><td>Tempelhof</td><td>72731</td><td>1776</td></tr>
<tr><td>Neukölln</td><td>272012</td><td>23212</td></tr>
<tr><td>Treptow</td><td>56882</td><td>1368</td></tr>
<tr><td>Cöpenick</td><td>51389</td><td>404</td></tr>
<tr><td>Lichtenberg</td><td>196971</td><td>9174</td></tr>
<tr><td>Weißensee</td><td>58882</td><td>4512</td></tr>
<tr><td>Pankow</td><td>100774</td><td>2488</td></tr>
<tr><td>Reinickendorf</td><td>73473</td><td>2728</td></tr>
</tbody>
</table>`),
    L(
      `<em>Religionen.</em> Nach der Volkszählung von 1925 waren 78,5&nbsp;Prozent (3159065) evangelisch, 10,0&nbsp;Prozent (402447) katholisch, 4,3&nbsp;Prozent (172672) Juden, 6,7&nbsp;Prozent (269394) Dissidenten, 0,5&nbsp;Prozent (20108) andere. Die evang. Kirche umfaßt 3 Kirchenkreise (Berlin-Stadt, Berlin-Land I und II) mit 98 Kirchen-`,
    ),
  ],
  right: [
    L(
      `gemeinden; an der Spitze steht ein Generalsuperintendent. Die kath. Kirche bildet den Bistumsbezirk Berlin des Fürstbistums Breslau mit 75 Pfarreien. Die Juden haben 6 Synagogengemeinden.`,
    ),
    L(
      `<em>Bildungswesen.</em> Hochschulen: Universität, Techn. Hochschule Charlottenburg, Handelshochschule, Landwirtschaftl. Hochschule, Tierärztl. Hochschule; ferner Kunsthochschulen, Musikhochschule, Hochschule für Leibesübungen, Verwaltungshochschule, Volkshochschule. 1926: 4 Universitäten mit 12861 Studierenden (dar. 2773 weiblich). Die Univ.-Bibliothek zählte 1926: 813000 Bände. Staatl. Museen, Nationalgalerie, Schloßmuseum, Museum für Völkerkunde, Kunstgewerbemuseum, Museum für deutsche Volkskunde, Verkehr- und Baumuseum, Märkisches Museum, Hohenzollernmuseum u.&nbsp;a.`,
    ),
    L(
      `Die städt. Schulen 1926 (ohne private und ohne Hochschulen):`,
    ),
    L(`<table>
<thead><tr><th>Schulart</th><th>Zahl</th><th>Lehrer</th><th>Lehrerinnen</th><th>Schüler</th><th>Schülerinnen</th><th>Zus.</th></tr></thead>
<tbody>
<tr><td>Volksschulen</td><td>601</td><td>3404</td><td>5342</td><td>198190</td><td>193721</td><td>391911</td></tr>
<tr><td>Hilfsschulen</td><td>28</td><td>204</td><td>206</td><td>4546</td><td>3553</td><td>8099</td></tr>
<tr><td>Mittelschulen</td><td>24</td><td>276</td><td>215</td><td>6033</td><td>4323</td><td>10356</td></tr>
<tr><td>Oberlyzeen</td><td>8</td><td>48</td><td>312</td><td>—</td><td>5433</td><td>5433</td></tr>
<tr><td>Studienanstalten</td><td>10</td><td>82</td><td>222</td><td>—</td><td>4738</td><td>4738</td></tr>
<tr><td>Realschulen</td><td>9</td><td>200</td><td>11</td><td>4062</td><td>—</td><td>4062</td></tr>
<tr><td>Oberrealschulen</td><td>21</td><td>586</td><td>17</td><td>11764</td><td>—</td><td>11764</td></tr>
<tr><td>Realgymnasien</td><td>21</td><td>570</td><td>16</td><td>11216</td><td>—</td><td>11216</td></tr>
<tr><td>Gymnasien</td><td>21</td><td>610</td><td>13</td><td>11340</td><td>—</td><td>11340</td></tr>
</tbody>
<tfoot><tr><td>Gesamt</td><td>743</td><td>5980</td><td>6354</td><td>247151</td><td>211768</td><td>458919</td></tr></tfoot>
</table>`),
    L(
      `Dazu kamen 1926: 86 Berufsschulen mit 2177 Lehrern und 109234 Schüler(innen), 14 Fachschulen mit 394 Lehrern und 8743 Schüler(innen), 8 Sonderschulen. An privaten Schulen bestanden 1926: 132 mit 2311 Lehrern und 33412 Schüler(innen).`,
    ),
    L(
      `<em>Stadtverordnete.</em> Die Stadtverordnetenversammlung besteht aus 225 Mitgliedern, die auf 4 Jahre nach den Grundsätzen der Verhältniswahl gewählt werden. Die letzte Wahl (25.&nbsp;Okt. 1925) ergab: Sozialdemokraten 74, Deutschnationale 41, Kommunisten 43, Deutsche Volkspartei 21, Demokraten 16, Zentrum 15, Wirtschaftspartei 9, Deutschvölkische 6. Den Vorsitz führt der Stadtverordnetenvorsteher.`,
    ),
    L(
      `<em>Magistrat.</em> Der Magistrat besteht aus dem Oberbürgermeister, dem Bürgermeister, 18 besoldeten stä-`,
    ),
  ],
};

