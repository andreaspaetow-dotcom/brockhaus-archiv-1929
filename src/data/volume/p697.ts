import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 697 · Scan 739 · Besoldung (Reichsbesoldungstafeln) */
export const PAGE_697: EncPage = {
  printed: 697,
  scanFile: 739,
  headerLeft: "Besoldung",
  headerRight: "Besoldung",
  catchword: "Deichsel",
  scanSrc: "/scans/p697.jpg",
  left: [
    L(`<em>Besoldung der Reichsbeamten mit festen Gehältern.</em> Nach dem Reichsbesoldungsgesetz vom 16.&nbsp;Dezember 1927.`),
    L(`<table>
<thead><tr><th>Gruppe</th><th>Berufsgattung</th><th>Gehalt RM</th><th>Wohnungsgeldzuschuß</th></tr></thead>
<tbody>
<tr><td>1</td><td>Reichskanzler</td><td>—</td><td>Tarifklasse I</td></tr>
<tr><td>2–3</td><td>Staatssekretäre, Präsidenten des Reichsgerichts, Reichsverwaltungsgerichts, Reichsfinanzhofs, Rechnungshofs</td><td>—</td><td>Tarifklasse I</td></tr>
<tr><td>4–6</td><td>Senatspräsidenten beim Reichsgericht, Reichsfinanzhof; Präsidenten der größeren Postdirektionen</td><td>—</td><td>Tarifklasse I–II</td></tr>
<tr><td>7</td><td>Ministerialdirigenten, Gesandte und Generalkonsuln</td><td>—</td><td>Tarifklasse II</td></tr>
<tr><td>8</td><td>Reichsverwaltungsgerichtsräte, Reichsfinanzräte</td><td>—</td><td>Tarifklasse II</td></tr>
</tbody>
</table>`),
    L(`<em>Besoldung der Reichsbeamten mit steigendem Gehalt.</em>`),
    L(`<table>
<thead><tr><th>Gruppe</th><th>Berufsgattung</th><th>Anfangs- und Endgehalt RM</th></tr></thead>
<tbody>
<tr><td>1</td><td>Ministerialräte</td><td>8400–12600</td></tr>
<tr><td>2a</td><td>Oberregierungsräte in gehobener Stellung</td><td>8400–12600</td></tr>
<tr><td>2b</td><td>Oberregierungsräte, Konsuln I. Klasse, Oberpostdirektoren</td><td>7000–9700</td></tr>
<tr><td>2c</td><td>Regierungsräte, Postdirektoren</td><td>5400–9700</td></tr>
<tr><td>2d</td><td>Ministerialamtmänner</td><td>4800–8400</td></tr>
<tr><td>4b</td><td>Amtmänner</td><td>4800–7000</td></tr>
<tr><td>4c</td><td>Oberinspektoren und -sekretäre in gehobener Stellung</td><td>3000–5800</td></tr>
<tr><td>5a</td><td>Oberinspektoren</td><td>2800–5800</td></tr>
<tr><td>5b</td><td>Obersekretäre</td><td>2400–5000</td></tr>
<tr><td>6</td><td>Photographen, Lithographen</td><td>2300–4200</td></tr>
<tr><td>7</td><td>Kanzleisekretäre</td><td>2000–3600</td></tr>
<tr><td>8a</td><td>Oberwerkmeister</td><td>1700–3500</td></tr>
<tr><td>8b</td><td>Registratursekretäre</td><td>1600–2700</td></tr>
<tr><td>9</td><td>Assistenten in gehobener Stellung; Postassistenten; Kanzleiassistenten; Amtsgehilfen; Heizer, Hauswärter, Postboten</td><td>1500–2700</td></tr>
</tbody>
</table>`),
  ],
  right: [
    L(`<em>Wohnungsgeldzuschuß.</em> Nach dem Reichsbesoldungsgesetz vom 16.&nbsp;Dezember 1927. Jahresbetrag für Tarifklasse (RM).`),
    L(`<table>
<thead><tr><th>Ortsklasse</th><th>I</th><th>II</th><th>III</th><th>IV</th><th>V</th><th>VI</th><th>VII</th></tr></thead>
<tbody>
<tr><td>Sonderklasse</td><td>2100</td><td>1680</td><td>1320</td><td>960</td><td>720</td><td>528</td><td>336</td></tr>
<tr><td>A</td><td>1800</td><td>1440</td><td>1140</td><td>840</td><td>612</td><td>444</td><td>288</td></tr>
<tr><td>B</td><td>1500</td><td>1200</td><td>900</td><td>660</td><td>504</td><td>372</td><td>240</td></tr>
</tbody>
</table>`),
    L(
      `Der Wohnungsgeldzuschuß steigt mit der Dienstaltersstufe: in den unteren Gruppen zunächst Tarifklasse IV–VI, von einer bestimmten Stufe an die nächsthöhere. Ledige unter 45 Jahren werden um eine Ortsklasse niedriger eingestuft.`,
    ),
  ],
};
