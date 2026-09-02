import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 668 · Scan 676 · Berlin (Magistrat, Wappen, Verwaltung, Wirtschaft, Verkehr) */
export const PAGE_668: EncPage = {
  printed: 668,
  scanFile: 676,
  headerLeft: "Berlin",
  headerRight: "Berlin",
  catchword: "den",
  scanSrc: "/scans/p668.jpg",
  left: [
    L(
      `nige Beamte und 20 unbesoldete Stadträte. Der Magistrat ist die eigentliche Stadtbehörde, die Stadtverordnetenversammlung die beschließende. Der Oberbürgermeister (seit 1921 Böß) und der Bürgermeister (seit 1926 Scholz) werden auf 12 Jahre, die Stadträte auf 12 bezw. 4 Jahre gewählt. Der Magistrat zerfällt in 18 Dezernate.`,
    ),
    L(
      `<em>Wappen</em> (s. nebenstehend). Das Wappen der Stadt B. ist ein in Silber auf grünem Rasen schreitender, rotbezungter schwarzer Bär. Der preuß. Adler über dem Schild, den die Könige Friedrich&nbsp;I. und Friedrich Wilhelm&nbsp;I. der Stadt verliehen hatten, ist 1920 wieder entfernt worden.`,
    ),
    L(
      `<em>Verwaltung.</em> Die Stadt B. bildet einen besonderen Verwaltungsbezirk der Provinz Brandenburg, untersteht jedoch nicht dem Oberpräsidenten, sondern unmittelbar dem Staatsministerium. An der Spitze der staatl. Verwaltung steht der Polizeipräsident. Die Stadt ist in 20 Verwaltungsbezirke eingeteilt (→S.&nbsp;667). Jeder Bezirk hat ein Bezirksamt aus einem Bezirksbürgermeister und mehreren Stadträten sowie eine Bezirksversammlung aus 15–45 Bezirksverordneten; außerdem gehören die 225 Stadtverordneten den einzelnen Bezirksversammlungen als Mitglieder an.`,
    ),
    L(
      `Die 20 Bezirksämter haben umfangreiche Selbstverwaltungsaufgaben (Armen-, Schul-, Bau-, Gesundheitswesen u.&nbsp;a.). Die einheitliche Leitung der Gesamtstadt liegt beim Magistrat.`,
    ),
    L(
      `<em>Polizei.</em> Das Polizeipräsidium (Alexanderplatz) umfaßt Schutzpolizei, Kriminalpolizei, polit. Polizei, Gewerbepolizei, Verkehrspolizei u.&nbsp;a. 1926: 14700 Schutzpolizisten, 3200 Kriminalbeamte. Die Feuerwehr zählte 1926: 32 Wachen mit 2100 Mann.`,
    ),
    L(
      `<em>Wirtschaft.</em> B. ist die größte Industriestadt des Kontinents. Die Industrie ist haupt-`,
    ),
  ],
  right: [
    L(
      `sächlich in der Bearbeitung der Metalle, Maschinen, Apparate und Fahrzeuge, in der Elektroindustrie, in der Konfektion und in der chem. Industrie beschäftigt. Die wichtigsten Industriezweige (1925):`,
    ),
    L(`<table>
<thead><tr><th>Industriezweig</th><th>Arbeiter</th><th>Umsatz Mill.&nbsp;RM</th></tr></thead>
<tbody>
<tr><td>Elektroindustrie</td><td>148000</td><td>1200</td></tr>
<tr><td>Maschinenbau</td><td>92000</td><td>850</td></tr>
<tr><td>Konfektion</td><td>80000</td><td>900</td></tr>
<tr><td>Metallwaren</td><td>45000</td><td>380</td></tr>
<tr><td>Chemische Industrie</td><td>28000</td><td>420</td></tr>
<tr><td>Nahrungsmittelindustrie</td><td>42000</td><td>560</td></tr>
<tr><td>Papier- und Druckgewerbe</td><td>35000</td><td>310</td></tr>
<tr><td>Holzindustrie</td><td>25000</td><td>180</td></tr>
</tbody>
</table>`),
    L(
      `Dazu kommen Bauindustrie, graphisches Gewerbe, Optik und Feinmechanik. Großbetriebe: Siemens & Halske / Siemens-Schuckert (Siemensstadt), AEG (Oberschöneweide, Brunnenstraße), Borsig (Tegel), Loewe, Schwartzkopff, Osram, Schering, National-Krupp-Registrierkassen u.&nbsp;a.`,
    ),
    L(
      `<em>Handel.</em> B. ist nach Hamburg der bedeutendste Handelsplatz Deutschlands. 1925 waren im Handel 185000 Personen in rund 52000 Betrieben tätig. Der Großhandel umfaßt vor allem Konfektion, Kolonialwaren, Metallwaren, Maschinen, Chemikalien, Papier. Die Stadt hat 9 Großmarkthallen, darunter die Zentralmarkthalle am Alexanderplatz. Banken: Reichsbank-Direktorium, Deutsche Bank, Disconto-Gesellschaft (1929 fusioniert), Dresdner Bank, Darmstädter und Nationalbank u.&nbsp;a. Die Berliner Börse ist die führende deutsche Wertpapierbörse.`,
    ),
    L(
      `<em>Verkehr.</em> B. ist der größte Eisenbahnknotenpunkt des Kontinents. 1926: 11 Fernbahnhöfe (Anhalter, Potsdamer, Stettiner, Lehrter, Schlesischer, Görlitzer u.&nbsp;a.). Stadtbahn, Ringbahn und das ab 1928 elektrifizierte S-Bahn-Netz, ferner U-Bahn, Straßenbahn (1926: 89 Linien, 634&nbsp;km) und Omnibus. Der Luftverkehr benützt den Zentralflughafen Tempelhofer Feld (1926: 20100 Fluggäste). Die Wasserstraßen, die B. mit`,
    ),
  ],
};
