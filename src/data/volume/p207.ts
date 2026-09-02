import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 207 · Scan 239 · Baden (Statistik — Verfassung) */
export const PAGE_207: EncPage = {
  printed: 207,
  scanFile: 239,
  headerLeft: "Baden",
  headerRight: "Bade",
  catchword: "begehrens",
  scanSrc: "/scans/p207.jpg",
  left: [
    L(`<strong>Statistische Übersicht.</strong>`),
    L(`Größe: 15071&nbsp;qkm.`),
    L(
      `Bevölkerung: 1810: rund 1&nbsp;Mill., 1875: 1507000, 1885: 1601000, 1895: 1725000, 1910: 1868000, 1919: 2196000, 1925: 2312500. 1925: 1115477 männl., 1197023 weibl.`,
    ),
    L(
      `<table><caption>Landeskommissärbezirke 1925</caption><thead><tr><th>Bezirk</th><th>Ämter</th><th>qkm</th><th>Einw.</th><th>auf 1 qkm</th><th>Städte</th><th>Landgem.</th></tr></thead><tbody><tr><td>Konstanz</td><td>10</td><td>3850</td><td>337508</td><td>88</td><td>30</td><td>419</td></tr><tr><td>Freiburg</td><td>13</td><td>5058</td><td>599998</td><td>119</td><td>40</td><td>449</td></tr><tr><td>Karlsruhe</td><td>7</td><td>2632</td><td>667653</td><td>254</td><td>20</td><td>229</td></tr><tr><td>Mannheim</td><td>10</td><td>3531</td><td>707303</td><td>200</td><td>33</td><td>337</td></tr><tr><td>Baden</td><td>40</td><td>15071</td><td>2312462</td><td>153</td><td>123</td><td>1434</td></tr></tbody></table>`,
    ),
    L(
      `Bewegung der Bevölkerung: Auf 1000 E. kamen 1925: 7,2 Eheschließungen, 21,5 Geborene, 12,6 Gestorbene. Geburtenüberschuß 0,9%.`,
    ),
    L(
      `<table><caption>Konfessionen 1925</caption><thead><tr><th>Bezirk</th><th>Evangelische</th><th>Röm.-Katholische</th><th>Altkatholiken</th><th>Israeliten</th><th>Sonstige</th></tr></thead><tbody><tr><td>Konstanz</td><td>45213</td><td>286485</td><td>3236</td><td>1281</td><td>1293</td></tr><tr><td>Freiburg</td><td>211336</td><td>381237</td><td>752</td><td>4341</td><td>2332</td></tr><tr><td>Karlsruhe</td><td>292070</td><td>363835</td><td>906</td><td>6904</td><td>3938</td></tr><tr><td>Mannheim</td><td>363254</td><td>318922</td><td>1615</td><td>11538</td><td>11974</td></tr><tr><td>Baden</td><td>911873</td><td>1350479</td><td>6509</td><td>24064</td><td>19537</td></tr></tbody></table>`,
    ),
    L(
      `Berufsgruppen: Von den 1271400 Erwerbstätigen sind tätig: 36,8% in der Landwirtschaft, 38,9% in Industrie und Handwerk, 14,1% in Handel und Verkehr, 4% in der Verwaltung, 2% im Gesundheitswesen, 4% in häuslichen Diensten.`,
    ),
    L(
      `<table><caption>Wohnplätze</caption><thead><tr><th>Gemeinden mit … Einwohnern</th><th>Zahl</th><th>absolut</th><th>%</th></tr></thead><tbody><tr><td>weniger als 2000 (Landgem.)</td><td>1356</td><td>870058</td><td>37,7</td></tr><tr><td>2000–5000 (Landstädte)</td><td>162</td><td>465959</td><td>20,1</td></tr><tr><td>5000–20000 (Kleinstädte)</td><td>32</td><td>283953</td><td>12,2</td></tr><tr><td>20000–100000 (Mittelstädte)</td><td>5</td><td>299312</td><td>13,0</td></tr><tr><td>über 100000 (Großstädte)</td><td>2</td><td>393180</td><td>17,0</td></tr><tr><td>Baden</td><td>1557</td><td>2312462</td><td>100,0</td></tr></tbody></table>`,
    ),
    L(
      `Städte über 25000 E.: Hauptstadt Karlsruhe 145700, Mannheim 247500, Freiburg 90500, Pforzheim 78900, Heidelberg 73000, Konstanz 31300, Baden-Baden 25700.`,
    ),
  ],
  right: [
    L(`<strong>Volkswirtschaft.</strong>`),
    L(
      `Bodennutzung: Von der gesamten Fläche entfallen: auf landw. Nutzfläche 61,2%, auf Forsten 32,7%, auf Ödland 1,6%. Von je 100&nbsp;ha landw. Nutzfläche entfallen auf Ackerland 66,13%, Wiesen 27,79%, Viehweiden 4,31%, Weinberge 1,77%. Landw. Nutzfläche 1926 in Hektar: Ackerland 529202, Wiesen 222334, Viehweiden und Hutungen 34480, Weinberge 14201, zusammen 800217.`,
    ),
    L(
      `<table><caption>Ernteflächen und Ernteertrag 1926</caption><thead><tr><th></th><th>Fläche (ha)</th><th>Ertrag (t)</th></tr></thead><tbody><tr><td>Roggen</td><td>44821</td><td>51616</td></tr><tr><td>Weizen</td><td>51178</td><td>71430</td></tr><tr><td>Winterspelz</td><td>22616</td><td>28491</td></tr><tr><td>Gerste</td><td>54764</td><td>81187</td></tr><tr><td>Hafer</td><td>56532</td><td>82857</td></tr><tr><td>Kartoffeln</td><td>88160</td><td>768168</td></tr><tr><td>Zuckerrüben</td><td>2581</td><td>70708</td></tr><tr><td>Wiesenheu</td><td>222334</td><td>1139454</td></tr><tr><td>Weinbau</td><td>12302</td><td>293556 hl Most</td></tr><tr><td>Hopfen</td><td>366</td><td>1930 dz</td></tr></tbody></table>`,
    ),
    L(
      `Viehbestand 1926: Pferde 69459, Maultiere (1925) 183, Esel (1925) 87, Rindvieh 622324, Schweine 486601, Schafe 44836, Ziegen 149367, Federvieh 2698946, Kaninchen (1925) 83155, Bienenstöcke (1925) 81583.`,
    ),
    L(
      `Industrie 1925: B. hat 73754 Industrie- und Handwerksbetriebe mit 495508 Arbeitnehmern, davon 134878 weiblichen. Die Leistung der zum Antrieb von Arbeitsmaschinen verwendeten Primär- und Sekundärmotoren beträgt 482356 PS.`,
    ),
    L(
      `Wasserwerke (1926) mit über 7500 PS: Murg, Schwarzenbach und Raumünzach, Horbach an der Murg, Neckargemünd am Neckar, Rheinfelden und Wyhlen am Rhein.`,
    ),
    L(
      `Verkehr. Eisenbahnen (1925): 1869,1&nbsp;km Reichsbahnen (1570,1&nbsp;km Haupt-, 299&nbsp;km Nebenbahnen), 241,5&nbsp;km Privatbahnen (15,6&nbsp;km Haupt-, 225,9&nbsp;km Nebenbahnen). Auf 1000&nbsp;qkm Fläche kommen 140&nbsp;km Bahnen, auf 100000 E. 91,3&nbsp;km. Landstraßen (1925): 10522&nbsp;km, davon 3058&nbsp;km Staats-, 1409 Kreisstraßen. Wasserstraßen: Rhein zwischen Kehl und Mannheim für Schiffe bis zu 2500&nbsp;t, zwischen Basel und Kehl für Schiffe bis zu 800&nbsp;t; Dampfschiffahrt zwischen Schaffhausen und Konstanz. Neckar für Schiffe bis zu 400&nbsp;t. Kraftfahrzeuge (1926): 8025 Personenkraftwagen (252 Kraftomnibusse), 3597 Lastkraftwagen, 10458 Krafträder, 825 Kleinkrafträder.`,
    ),
    L(
      `Wichtigste Binnenhäfen, Güterverkehr 1925 und 1926 (1000&nbsp;t; vorläufige Angaben für 1926): Kehl Ankunft 658,4 / 578,7, Abgang 64,3 / 184,3; Karlsruhe 944,3 / 1307,2 und 193,2 / 209,1; Mannheim 5491,5 / 4540,0 und 956,7 / 1397,0. Staatl. Kraftomnibuslinien (1927): 1795&nbsp;km. Flughäfen: Baden-Baden, Freiburg, Karlsruhe, Konstanz, Mannheim.`,
    ),
    L(
      `den größeren Städten, wie Freiburg, Offenburg, Mannheim, Karlsruhe, Pforzheim, Heidelberg, Durlach, gelangten Textil-, Maschinen- und chem. Industrie zu großer Bedeutung. Am Gebirgsfuß entstanden infolge der Mineralquellen berühmte Badeorte (Baden-Baden, Badenweiler u.&nbsp;a.), im Schwarzwald Luftkurorte, auf dem hohen Schwarzwald Lungenheilstätten. — B. hat 9 Industrie- und Handels-, 3 Handwerks-, 1 Landwirtschaftskammer.`,
    ),
    B(
      `Hecht: Die bad. Landwirtschaft am Anfang des 20.&nbsp;Jahrh. (1903); Die Industrie in B. i.&nbsp;J. 1925 auf Grund amtl. Materials (1926); Die Landwirtschaft in B. (1927); Handel und Verkehr in B. (1927).`,
    ),
    L(
      `7)&nbsp;<strong>Verkehrswesen</strong> (Statistik S.&nbsp;207). B. ist durch die Nordsüdbahn Frankfurt–Basel und durch den Rhein mit Norddeutschland und seinen bedeutenden Industriegebieten verbunden. Es ist wichtiges Durchgangsland nach der Schweiz und Frankreich. Der Schwarzwald wird von 3 Bahnen (Murg-, Kinzig-, Höllentalbahn) überschritten. Rhein und Bodensee sind für kleinere Dampfer, der Neckar für Kettenschiffahrt befahrbar. Das ganze Land ist von guten Straßen durchzogen, dem deutschen Luftverkehr durch mehrere Linien angeschlossen.`,
    ),
    L(`8)&nbsp;<strong>Außenhandel.</strong> —`),
    L(
      `9)&nbsp;<strong>Staatsrechtliche Stellung.</strong> Nach der Verfassung vom 21.&nbsp;März 1919 ist B. eine demokrat.-parlamentar. Republik. Die Staatsgewalt geht vom Volk aus. Der Landtag besteht aus 72 (je 1 Abgeordneter auf 10000 Stimmen) in allgemeiner, gleicher, geheimer, unmittelbarer Verhältniswahl auf 4 Jahre gewählten, mindestens 25 Jahre alten Abgeordneten und ist auflösbar durch Volksentscheid, nicht aber ohne weiteres durch das vom Landtag gewählte und von seinem Vertrauen abhängige Staatsministerium. Der Landtag wählt alljährlich einen Minister zum Ministerpräsidenten (Staatspräsident). 80000 Stimmberechtigte können ein Volksbegehren über Gesetze (jedoch nicht über Finanzfragen) und Landtagsauflösung stellen. Volksentscheid ist erforderlich bei Verfassungsänderungen, zulässig auf Grund eines Volks-`,
    ),
  ],
};
