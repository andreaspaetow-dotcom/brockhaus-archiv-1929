import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 349 · Scan 381 · Barometrische Höhenmessung — Barosma */
export const PAGE_349: EncPage = {
  printed: 349,
  scanFile: 381,
  headerLeft: "Barometrische Höhenmessung — Barosma",
  headerRight: "Baro",
  catchword: "runden",
  scanSrc: "/scans/p349.jpg",
  left: [
    L(
      `werden durch diese Vorrichtung in vergrößertem Maße auf die Bewegung des Zeigers übertragen, der vor einer nach mm Quecksilber geeichten Skala spielt.`,
    ),
    L(
      `Zur fortlaufenden Aufzeichnung der Luftdruckänderungen dient das registrierende B. oder der Barograph (Abb.&nbsp;5); er ist entweder ein mit einem Schreibhebel verbundenes Aneroidbarometer, dessen Empfindlichkeit durch Hintereinanderschaltung mehrerer Dosen beträchtlich vergrößert ist, oder ein selbstschreibendes Quecksilberbarometer, wie der bes. empfindliche und zuverlässige Laufgewichtsbarograph von Sprung-Fuess.`,
    ),
    B(
      `Torricelli: Esperienze dell'Argento Vivo (Neudruck, Berlin 1897); Winkelmann: Handb. d. Physik, I, 2 (1908).`,
    ),
    L(
      `<strong>Barometrische Höhenmessung,</strong> Bestimmung der Höhe mit Hilfe des Barometers. Mit wachsender Höhe nimmt der Luftdruck ab. Die Quecksilbersäule des Barometers sinkt um eine Länge, die sich zu dem Höhenunterschied verhält wie das spez. Gew. der Luft zu dem des Quecksilbers, also wie 0,0012 : 13,6 oder rund 1 : 11000, d.&nbsp;h. auf 11&nbsp;m Anstieg in der Nähe des Erdbodens sinkt das Barometer um 1&nbsp;mm. Da das spez. Gew. der Luft dem Barometerstand aber selber proportional ist, nimmt der Barometerstand in geometr. Progression mit wachsender Höhe ab, und der Logarithmus des Barometerstandes ist der Höhe proportional. Der Höhenunterschied h in Metern zwischen zwei benachbarten Stationen ergibt sich angenähert zu`,
    ),
    L(
      `h = 18400(1 + 0,004 t) (log b₁ − log b₂),`,
    ),
    L(
      `worin t die mittlere Temperatur, b₁ und b₂ die gleichzeitigen Barometerstände bedeuten. Genauere Formeln berücksichtigen u.&nbsp;a. den Gehalt der Luft an Wasserdampf und die geogr. Breite. Es gilt bei einer Temperatur von 0°:`,
    ),
    L(
      `<table><thead><tr><th>Barometerstand mm</th><th>Höhe m</th><th>Barometerstand mm</th><th>Höhe m</th></tr></thead><tbody><tr><td>760</td><td>0</td><td>400</td><td>5170</td></tr><tr><td>700</td><td>680</td><td>300</td><td>7480</td></tr><tr><td>650</td><td>1275</td><td>200</td><td>10700</td></tr><tr><td>600</td><td>1920</td><td>100</td><td>16200</td></tr><tr><td>550</td><td>2615</td><td>50</td><td>21700</td></tr><tr><td>500</td><td>3380</td><td>10</td><td>34600</td></tr><tr><td>450</td><td>4200</td><td>1</td><td>53000</td></tr></tbody></table>`,
    ),
    L(
      `Man verwendet zu Höhenmessungen Aneroid- oder Federbarometer, seltener Siedethermometer und transportable Quecksilberbarometer (Reisebarometer).`,
    ),
    B(
      `Jordan-Eggert: Handb. der Vermessungskunde, Bd.&nbsp;2 (8.&nbsp;Aufl. 1914); Hopfner: Vermessungskunde in »Hütte«, des Ingenieurs Taschenbuch, Bd.&nbsp;1 (25.&nbsp;Aufl. 1925).`,
    ),
    L(`<strong>Barometrisches Gefälle,</strong> →Gradient, barometrischer.`),
    L(
      `<strong>Barometrograph</strong> [grch.], seltener Barograph, (→Barometer).`,
    ),
    L(`<strong>Baromez</strong> [russ. baromez], Lammkrautdroge, →Cibotium.`),
  ],
  right: [
    L(
      `<strong>Baron</strong> [engl. bärən, frz. barõ], lat. baro, liber baro, in England und im alten Frankreich ein Kronvasall, der sein Lehn unmittelbar vom König empfing und ihm als Lord oder Pair im Großen Rat zur Seite stand. Zur alten Lehnsbaronie trat in England seit Richard II. die Patentbaronie, die auf kgl. Ernennung beruhte. Heute ist der B. der niedrigste Titel des engl. hohen Adels; noch immer aber erscheint die urspr. Gleichsetzung von B. und Lord darin, daß allein der B. im Briefstil mit Lord angeredet wird, während die übrigen Peers bis zum Marquis zwar auch Lords sind, aber im Briefstil ihr besonderes Adelsprädikat erhalten. In Frankreich nahmen auch viele Aftervasallen, die Lehnsleute der hauts barons, den Titel B. an; der hohe Adel wurde hier seitdem auf die Rangstufen des Prinzen, Herzogs, Marquis und Grafen beschränkt. Dem B. entsprach im alten Deutschen Reich der Reichsfreiherr. Die roman. Wortform B., die erst im 17.&nbsp;Jahrh. nach Deutschland kam, wurde hier gleichbedeutend mit Freiherr.`,
    ),
    L(
      `<strong>Baron</strong> [barõ], Michel, Schauspieler, *&nbsp;Paris 8.&nbsp;Okt. 1653, †&nbsp;das. 3.&nbsp;Dez. 1729, wurde, als Schüler und Hausgenosse Molières, ein vorzüglicher Darsteller komischer und tragischer Rollen in Paris, wo er bis 1691 und von 1720 bis zu seinem Tode wirkte. Er schrieb selbst Lustspiele, erschienen als »Théâtre de Michael Baron« (1736 und 1759).`,
    ),
    B(`Young: M.&nbsp;B., acteur et auteur (1904).`),
    L(`<strong>Baronesse,</strong> frz. baronne, Baronin, Freifrau, Freifräulein.`),
    L(
      `<strong>Baronet</strong> [bärənet, engl. ›kleiner Baron‹], Titel der jüngsten engl. Adelsklasse, die 1611 durch Jakob I. als Zwischenstufe zwischen Baron und Ritter (knight) geschaffen wurde. Die Klasse der B. gehört nicht mehr zu den →Pairs, sondern bildet mit den Knights zusammen die Klasse der Gentry, des niederen Adels. Die Würde des B. ist erblich. Er führt den Titel Sir vor dem Vornamen, seine Gattin den Titel Lady. B. wird abgekürzt Bart. (hinter dem Familiennamen).`,
    ),
    B(`Pixley: A history of the baronetage (1900).`),
    L(
      `<strong>Baronnga,</strong> Bantustamm im südl. Mosambik, Osttransvaal und Swasiland, verwandt mit den Zulu.`,
    ),
    L(`<strong>Baronie,</strong> der Grundbesitz eines →Barons.`),
    L(
      `<strong>Baronius,</strong> Cäsar, kath. Kirchenhistoriker, Kardinal, *&nbsp;Sora (Kampanien) 31.&nbsp;Okt. 1538, †&nbsp;Rom 30.&nbsp;Juni 1607, seliggesprochen 1745; Leiter der Oratorianer in Rom, Beichtvater des Papstes Clemens VIII., Bibliothekar der Vatikan. Bibliothek. Hauptwerk: »Annales ecclesiastici a Christo nato ad annum 1198« (12&nbsp;Bde., 1588–93 u.&nbsp;ö.), das Gegenstück zu den →Magdeburger Zenturien. Eine Kritik darüber schrieb Pagi (4&nbsp;Bde., 1705). Fortsetzungen der Annalen gaben Rinaldi (1646–77), Laderchi (1728), Theiner (1856–57). B. gab auch das »Martyrologium Romanum« (1586) heraus.`,
    ),
    B(
      `Kerr: Life of Caesar B. (1898); Lämmer: De Caesaris Baronii literarum commercio diatriba (Freiburg 1903).`,
    ),
    L(
      `<strong>Baron of beef</strong> [bärən əv bīf, engl.], in der Küchensprache Rindsrücken mit beiden Lenden.`,
    ),
    L(`<strong>Baronsk,</strong> früherer Name von →Marxstadt in Rußland.`),
    L(`<strong>Baronskrone,</strong> →Freiherrnkrone.`),
    L(
      `<strong>Barop,</strong> Adgem. im Ldkr. Hörde des preuß. RgBz. Arnsberg (Prov. Westfalen), 6&nbsp;km südwestl. von Dortmund, 97&nbsp;m ü.&nbsp;M., an der Bahn Witten–Dortmund, mit Dortmund und Hörde durch elektrische Straßenbahn verbunden, hat (1925) 11330 vorwiegend evang. E. (2780 kath., 740 Sonstige); Bergbau, Maschinenbau, Drahtnagel- und Kerzenfabriken.`,
    ),
    L(
      `<strong>Baroskop</strong> [grch. ›Druckanzeiger‹], ältere Bezeichnung für das →Barometer, später der Name eines Spielzeugs in Gestalt einer zugeschmolzenen Glasröhre, aus deren Alkoholfüllung sich bei sinkender Temperatur gelöste Stoffe als Flocken ausschieden. Es wurde als »Wetterglas« angepriesen, hatte aber mit dem Luftdruck und dem Wetter nichts zu tun.`,
    ),
    L(
      `<strong>Barosma,</strong> Gatt. der Rautengewächse (Rutaceen) mit etwa 15 Arten, im Kaplande. Es sind aufrechtästige Sträucher mit meist gegenständigen, kleinen,`,
    ),
  ],
};
