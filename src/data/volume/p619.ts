import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 619 · Scan 651 · Bergbau (Gefahren, Volkswirtschaft, Geschichte) */
export const PAGE_619: EncPage = {
  printed: 619,
  scanFile: 651,
  headerLeft: "Bergbau",
  headerRight: "Bergbau",
  catchword: "Bergbau",
  scanSrc: "/scans/p619.jpg",
  left: [
    L(
      `meisten Unglücksfälle auf Stein- oder Kohlenfall zurückzuführen sind. Im Jahre 1925 ereigneten sich in Preußen in den Bergbaubetrieben 113169 Unfälle, wovon 1564 tödlich verliefen. Von diesen Unfällen ereigneten sich unter Tage:`,
    ),
    L(
      `<table><thead><tr><th></th><th>Insgesamt</th><th>Davon tödlich</th></tr></thead><tbody>
<tr><td>durch Stein- und Kohlenfall</td><td>28341</td><td>526</td></tr>
<tr><td>durch Gewinnungswerkzeuge und -maschinen</td><td>1219</td><td>7</td></tr>
<tr><td>in Hauptschächten</td><td>2780</td><td>87</td></tr>
<tr><td>in kleinen Blindschächten und Strecken</td><td>7702</td><td>239</td></tr>
<tr><td>durch Sprengstoffe und Zündmittel</td><td>434</td><td>49</td></tr>
<tr><td>durch Gase und Kohlenstaub</td><td>320</td><td>238</td></tr>
<tr><td>auf sonstige Weise</td><td>7729</td><td>20</td></tr>
<tr><td>Summe unter Tage</td><td>87444</td><td>1306</td></tr>
</tbody></table>`,
    ),
    L(
      `An sich ist der Beruf des Bergmanns nicht der gefährlichste von allen. Vergleichsweise entfielen auf 1000 Vollarbeiter in einem Jahr an Unfällen: in der Fuhrwerks-Berufsgenossenschaft 26,5, in der Baugewerbe-Berufsgenossenschaft 16,8, in der Müllerei-Berufsgenossenschaft 16,1, in der Knappschafts- (Bergbau-) Berufsgenossenschaft 15,5, im Durchschnitt aller gewerblichen Berufe 9,5.`,
    ),
    L(
      `Die Sicherung erstreckt sich in erster Linie auf die Bekämpfung der Schlagwetter durch eine geordnete Wetterführung, Einführung von Schlagwetteranzeigern, Beschränkung der Schießarbeit und Verwendung von Sicherheitssprengstoffen, deren Explosionstemperatur zur Zündung von Schlagwettern nicht ausreicht. Zur Vermeidung von Kohlenstaubexplosionen kommen in Betracht: Gewinnung der Kohle mit geringster Staubentwicklung, Ersatz der Schießarbeit durch maschinelle Gewinnung, Befeuchtung und Berieselung des abgelagerten Staubes mit Druckwasser und schließlich (als sog. Gesteinstaubverfahren) Bestreuung mit einem unbrennbaren Material, dem Gesteinsstaub. Für die erste Hilfe bei etwa eintretenden Grubenunfällen sind in allen Bergrevieren Hauptrettungsstellen und bei einer großen Anzahl von Gruben Bezirksrettungsstellen errichtet. Außer den auf allen Unfallstationen für erste Hilfe bei Unfällen vorhandenen Einrichtungen verfügen diese Rettungsstellen über Gasschutzgeräte und Sauerstoffapparate zum Eindringen in vergaste Räume sowie andere für die Wiederbelebung erforderliche Einrichtungen. Besonders unterrichtete Rettungskolonnen werden in dauernden Geräteübungen teils in vergasbaren Räumen, teils unter Tage auf wirksames Eingreifen in ernsten Fällen vorbereitet.`,
    ),
  ],
  right: [
    L(
      `<strong>III. Volkswirtschaftliche Bedeutung.</strong> Das Vorhandensein von Lagerstätten nutzbarer Mineralien und ihre bergbauliche Gewinnung bilden die wichtigste Grundlage für die industrielle Entwicklung eines Landes. Dies gilt bes. von der Kohle, dem Eisenerz und dem Erdöl. Deutschland hat vor dem Weltkrieg einen hochentwickelten Bergbau gehabt. Durch den Versailler Vertrag von 1919 wurden wichtige bergbauliche Gebiete von Deutschland abgetrennt: das Eisenerz- (Minette-) Gebiet und das Lothringer Steinkohlenrevier, die Kalisalz- und Erdöllagerstätten im Elsaß, in Ostoberschlesien mit seinen ungeheuren, noch für mehr als tausend Jahre ausreichenden Steinkohlenschätzen und der reichen Blei-Zinkerzausbeute von Beuthen, und schließlich ist bis auf weiteres das Steinkohlengebiet an der Saar Deutschland entzogen. Auch Österreich hat durch die Friedensschlüsse starke Einbußen seines B. erlitten. Es verblieben ihm noch der Eisenerzbergbau in Steiermark und der Hüttenberger Erzberg in Kärnten sowie einige kleinere Erzbergwerke. Die reichen Erdöl- und Salzschätze Galiziens mußte es an Polen abtreten.`,
    ),
    L(
      `Auf den jetzigen Gebietsumfang (1925) berechnet, wurden in 1000&nbsp;t im Deutschen Reich gewonnen in den Jahren:`,
    ),
    L(
      `<table><thead><tr><th></th><th>1913</th><th>1925</th></tr></thead><tbody>
<tr><td>Steinkohlen</td><td>140753</td><td>132732</td></tr>
<tr><td>Braunkohlen</td><td>87228</td><td>139804</td></tr>
<tr><td>Eisenerz</td><td>7309</td><td>5923</td></tr>
<tr><td>Schwefelkies</td><td>269</td><td>223</td></tr>
<tr><td>Steinsalz</td><td>1348</td><td>1767</td></tr>
<tr><td>Kalirohsalz</td><td>11607</td><td>12030</td></tr>
</tbody></table>`,
    ),
    L(
      `Der Absatz der bergbaulichen Produkte ist gewöhnlich durch Preisabkommen oder durch Syndikate geregelt. In Deutschland ist die Kohlenwirtschaft auf Grund des Kohlenwirtschaftsges. v.&nbsp;23.&nbsp;März 1919 und die Kaliwirtschaft auf Grund des Kaliwirtschaftsges. v.&nbsp;24.&nbsp;April 1919 gemeinwirtschaftlich geregelt. Danach unterstehen alle dem Absatz und der Preisbildung für Kohle dienenden Angelegenheiten dem Reichskohlenverband unter Mitwirkung des Reichskohlenrats und 11 angeschlossenen Kohlensyndikaten, für die Kalisalze dem Kalisyndikat unter Mitwirkung des Reichskalirats. Über die gesetzl. Regelung des B. →Bergrecht.`,
    ),
    B(
      `Volkstümliche Schriften. Wedding: Bergbau (o. J.); Nothjung: Bergmännisches Handbuch für Schule und Haus (2 Bde., Bd.&nbsp;1 in 2.&nbsp;Aufl. 1923–25); Pfeiffer: Das Bergwerk im Bild (3.&nbsp;Aufl. 1928). — Wissenschaftliche Werke. Agricola: De re metallica libri XII (1556; deutsch 1557, neue Ausg. 1928); Höfer: Taschenbuch für Bergmänner (2 Bde., 3.&nbsp;Aufl. 1911); Heise und Herbst: Lehrbuch der Bergbaukunde mit besonderer Berücksichtigung des Steinkohlenbergbaus (2 Bde., 4.&nbsp;u.&nbsp;5.&nbsp;Aufl. 1923); Treptow: Grundzüge der Bergbaukunde (2 Bde., 6.&nbsp;Aufl. 1925); Stein: Handbuch für den Deutschen Braunkohlenbergbau (3.&nbsp;Aufl. 1927); Dötting und Kinternett: Die deutsche Bergwirtschaft der Gegenwart (1928). — Zeitschriften. Zeitschrift für das Berg-, Hütten- und Salinenwesen im preußischen Staate (seit 1853); Österreichische Zeitschrift für Berg- und Hüttenwesen (1853–1914); Zeitschrift des Oberschlesischen Berg- und Hüttenmännischen Vereins (seit 1861); Glückauf, Berg- und Hüttenmännische Zeitschrift (seit 1865); Braunkohle (seit 1902); Metall und Erz (seit 1904); Montanistische Rundschau (seit 1908); Annales des mines (seit 1795); Mining Journal (seit 1850); Engineering and Mining Journal (seit 1862).`,
    ),
    L(
      `<strong>IV. Geschichte.</strong> Vorgeschichte. Bereits gegen Ende des Frühneolithikums und dann in der Jungsteinzeit wurde Feuerstein in Belgien, Frankreich, England, Schweden, Portugal, Italien durch einfache Tagebaue (Gruben) oder auch durch richtige Bergwerksanlagen (mit Schacht-, Stollen- und Grubenfeldbetrieb, mit Wetterführung usw.) gewonnen; nur Schacht- und Stollenausrüstungen (Bergzimmerungen und Förderungsanlagen) waren damals noch nicht üblich. In der Bronzezeit ist dann Kupfer gleichfalls durch Tagebaue (England, Irland, Frankreich, Spanien, Ungarn) und durch umfangreiche Bergwerksanlagen gewonnen worden. Von diesen Bergwerken sind eine ganze Reihe in den salzburgisch-tirolischen Alpen durch den modernen Bergbau wieder erschlossen worden (Mitterbergalpe bei Bischofshofen, Einödsberg bei Außerfelden, Fermasstollen bei Viehhofen) und geben einen sehr weitgehenden Einblick in alle Einzelheiten des Bergbaubetriebes, wie sie in der Abb. S.&nbsp;554 durch einen idealen Querschnitt durch ein Abbaufeld und einen`,
    ),
  ],
};
