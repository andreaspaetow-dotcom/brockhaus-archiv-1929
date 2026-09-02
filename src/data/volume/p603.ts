import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 603 · Scan 635 · Übersicht Berge (Europa) */
export const PAGE_603: EncPage = {
  printed: 603,
  scanFile: 635,
  headerLeft: "Berge",
  headerRight: "Berge",
  catchword: "Berge",
  scanSrc: "/scans/p603.jpg",
  left: [
    L(`<strong>Berge.</strong>`),
    L(
      `Die Alpengipfel sind unberücksichtigt gelassen mit Ausnahme der höchsten Erhebungen der Staaten, die an den Alpen Anteil haben; die übrigen Alpengipfel sind in der Übersicht »Alpen« zusammengestellt. — Die Namen der zum Deutschen Reich und zu den ehemaligen deutschen Kolonien gehörigen Berge sind gesperrt.`,
    ),
    L(`<strong>I. Europa</strong> (ohne die arktischen Inseln).`),
    L(
      `<table><thead><tr><th>Gipfel</th><th>Gebirge (oder Länder)</th><th>Höhe m</th></tr></thead><tbody>
<tr><td>Montblanc</td><td>Savoyer Alpen (Frankreich)</td><td>4810</td></tr>
<tr><td>Monte Rosa (Dufourspitze)</td><td>Walliser Alpen (Schweiz und Italien)</td><td>4638</td></tr>
<tr><td>Großglockner</td><td>Hohe Tauern (Österreich)</td><td>3798</td></tr>
<tr><td>Mulhacén</td><td>Sierra Nevada</td><td>3481</td></tr>
<tr><td>Pico d’Aneto</td><td>Pyrenäen</td><td>3404</td></tr>
<tr><td>Mont-Perdu</td><td>Pyrenäen</td><td>3352</td></tr>
<tr><td>Vignemale</td><td>Pyrenäen</td><td>3290</td></tr>
<tr><td>Ätna</td><td>(Sizilien)</td><td>3274</td></tr>
<tr><td>Zugspitze</td><td>Bayerische Alpen</td><td>2963</td></tr>
<tr><td>Mus-Ala</td><td>Rilagebirge</td><td>2925</td></tr>
<tr><td>El Teide</td><td>Piringebirge [Teneriffa]</td><td>2920</td></tr>
<tr><td>Olymp</td><td>(Griechenland)</td><td>2918</td></tr>
<tr><td>Monte Corno (Gran Sasso d’Italia)</td><td>Abruzzen</td><td>2914</td></tr>
<tr><td>Pico de Encére</td><td>Pyrenäen (Andorra)</td><td>2911</td></tr>
<tr><td>Pic-du-Midi-de-Bigorre</td><td>Pyrenäen</td><td>2877</td></tr>
<tr><td>Monte Cinto</td><td>(Korsika)</td><td>2710</td></tr>
<tr><td>Schneekoppe</td><td>Riesengebirge</td><td>1603</td></tr>
<tr><td>Feldberg</td><td>Schwarzwald</td><td>1493</td></tr>
<tr><td>Großer Arber</td><td>Böhmer Wald</td><td>1457</td></tr>
<tr><td>Großer (Elsässer) Belchen</td><td>Vogesen</td><td>1423</td></tr>
<tr><td>Großer Schneeberg</td><td>Glazer Schneegebirge</td><td>1422</td></tr>
<tr><td>Brocken</td><td>Harz</td><td>1142</td></tr>
</tbody></table>`,
    ),
  ],
  right: [
    L(
      `<table><thead><tr><th>Gipfel</th><th>Gebirge (oder Länder)</th><th>Höhe m</th></tr></thead><tbody>
<tr><td>Roman Kosch</td><td>Jaila (Krim)</td><td>1540</td></tr>
<tr><td>Tschatyr-Dagh</td><td>Jaila (Krim)</td><td>1519</td></tr>
<tr><td>Großer Atter</td><td>Schwarzwald</td><td>1490</td></tr>
<tr><td>St. Eliasberg</td><td>(Euböa)</td><td>1475</td></tr>
<tr><td>Puy-de-Dôme</td><td>Auvergne</td><td>1465</td></tr>
<tr><td>Keilberg</td><td>Erzgebirge</td><td>1244</td></tr>
<tr><td>Fichtelberg</td><td>Erzgebirge</td><td>1215</td></tr>
<tr><td>Hornisgrinde</td><td>Schwarzwald</td><td>1164</td></tr>
<tr><td>Gerlsdorfer Spitze</td><td>Hohe Tatra</td><td>2663</td></tr>
<tr><td>Negoiu</td><td>Transsylvanische Alpen</td><td>2536</td></tr>
<tr><td>Galdhøpiggen</td><td>Jotunheim (Norwegen)</td><td>2481</td></tr>
<tr><td>Monte Vettore</td><td>Apennin</td><td>2478</td></tr>
<tr><td>Balkan (Jumruktschal)</td><td>Balkan</td><td>2375</td></tr>
<tr><td>Kebnekaise</td><td>(Schweden)</td><td>2135</td></tr>
<tr><td>Hekla</td><td>(Island)</td><td>1557</td></tr>
<tr><td>Wasserkuppe</td><td>Rhön</td><td>950</td></tr>
<tr><td>Inselsberg</td><td>Thüringer Wald</td><td>916</td></tr>
<tr><td>Schneeberg</td><td>Fichtelgebirge</td><td>1051</td></tr>
<tr><td>Lemberg</td><td>Schwäbische Alb</td><td>1015</td></tr>
<tr><td>Hohe Eule</td><td>Eulengebirge</td><td>1014</td></tr>
<tr><td>Auersberg</td><td>Erzgebirge</td><td>1013</td></tr>
<tr><td>Melibokus</td><td>Odenwald</td><td>517</td></tr>
</tbody></table>`,
    ),
  ],
};
