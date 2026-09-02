import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 605 · Scan 637 · Bergakademien / Berge (Forts.) */
export const PAGE_605: EncPage = {
  printed: 605,
  scanFile: 637,
  headerLeft: "Bergakademien",
  headerRight: "Bergakademien",
  catchword: "Bergaldi",
  scanSrc: "/scans/p605.jpg",
  left: [
    L(
      `<table><thead><tr><th>Gipfel</th><th>Gebirge (oder Länder)</th><th>Höhe m</th></tr></thead><tbody>
<tr><td>Aconcagua</td><td>Kordilleren (Argentinien)</td><td>7040</td></tr>
<tr><td>Coropuna</td><td>Westl. Kordilleren (Peru)</td><td>6613</td></tr>
<tr><td>Illimani</td><td>Östl. Kordilleren (Bolivien)</td><td>6462</td></tr>
<tr><td>Cumbre de Tres Cruces</td><td>Kordilleren (Chile)</td><td>6750</td></tr>
<tr><td>Nevado de Huascarán</td><td>Westl. Kordilleren (Peru)</td><td>6768</td></tr>
<tr><td>Llullaillaco</td><td>Kordilleren (Chile)</td><td>6723</td></tr>
<tr><td>Tupungato</td><td>Kordilleren (Argentinien)</td><td>6550</td></tr>
<tr><td>Sorata (Illampu)</td><td>Östl. Kordilleren (Bolivien)</td><td>6550</td></tr>
<tr><td>Chimborazo</td><td>Östl. Kordilleren (Ecuador)</td><td>6310</td></tr>
<tr><td>Cotopaxi</td><td>Östl. Kordilleren (Ecuador)</td><td>5897</td></tr>
<tr><td>Mauna Kea</td><td>(Insel Hawaii)</td><td>4205</td></tr>
<tr><td>Mauna Loa</td><td>(Insel Hawaii)</td><td>4170</td></tr>
<tr><td>Mount Cook</td><td>(Neuseeland, Südinsel)</td><td>3764</td></tr>
<tr><td>Wilhelminaberg</td><td>(Niederländ.-Neuguinea)</td><td>4750</td></tr>
<tr><td>Erebus</td><td>(Erebusinsel, Victorialand)</td><td>4023</td></tr>
<tr><td>Petermannspitze</td><td>(Grönland)</td><td>2940</td></tr>
<tr><td>Mount Ross</td><td>(Kerguelen)</td><td>1960</td></tr>
</tbody></table>`,
    ),
    L(
      `auf dem Gebiete des Veda. Neben kleineren linguist. und stilistisch-metrischen Artikeln veröffentlichte er als Hauptwerk »La religion védique« (Bd.&nbsp;1–3, 1878–83; Bd.&nbsp;4 mit Index von Bloomfield, 1897).`,
    ),
  ],
  right: [
    L(
      `<strong>Bergakademien,</strong> Hochschulen zur wissensch. Ausbildung zum höheren Berg- und Hüttenbeamten. Die bedeutendsten B. sind in Berlin (gegr. 1770, seit 1916 Abteilung der Techn. Hochschule), Klausthal (1775 gegr., 1811 neu organisiert), Freiberg i.&nbsp;S. (1765), Aachen (1867, jetzt Abteilung für Berg- und Hüttenwesen an der Techn. Hochschule); in Österreich Leoben (1840) und Příbram; ferner Schemnitz, Petersburg, Paris (École des mines), London, Denver u.&nbsp;a.`,
    ),
    B(
      `Großer Brockhaus Bd.&nbsp;2, Übersicht der Bergakademien und bergmänn. Hochschulen.`,
    ),
  ],
};
