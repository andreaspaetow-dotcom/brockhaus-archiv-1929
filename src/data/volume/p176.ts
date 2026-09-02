import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 176 · Scan 208 · Baar — Babar */
export const PAGE_176: EncPage = {
  printed: 176,
  scanFile: 208,
  headerLeft: "Baar",
  headerRight: "Baar — Babar",
  catchword: "Babarinseln",
  scanSrc: "/scans/p176.jpg",
  left: [
    L(
      `<strong>Baalbek</strong>, rum. Heliopolis, Stadt im Großen Libanon (Syrische Republik), (1925) etwa 8000&nbsp;E., 1170&nbsp;m ü.&nbsp;M., am Ostrand der Bekaa, berühmt durch die gewaltigen Tempelruinen. Der große Tempel (Jupiter Heliopolitanus) steht auf einer substruerten Terrasse; in der Nähe steht ein kleiner Rundtempel der Venus oder Fortuna. Ein nicht erhaltener Merkurtempel stand auf einer benachbarten Anhöhe. Sehenswert sind auch die Reste der Stadtmauer mit einem Prachtor. Der Venuskult wurde von Konstantin unterdrückt. Theodosius baute den kleineren Vorhof des Haupttempels zu einer christl. Kirche um. Nachdem der große Tempel im Jahre 554 durch Blitzschlag und Brand zerstört war, wurde im großen Vorhof eine christl. Basilika erbaut. Nach der Einnahme durch die Araber (634) wurden die verfallenen Tempel in eine starke Festung umgewandelt. 1759 wurden Stadt und Burg durch Erdbeben zerstört. Kaiser Wilhelm&nbsp;II. ließ die Tempelruinen durch Puchstein und Schulz freilegen (1900–1904).`,
    ),
    N("Abb. Baalbek: Tempel der Venus-Atargatis."),
    B(
      `Puchstein: Führer durch die Ruinen von B. (1905); Puchstein und Lübke: B., 80 Ansichten der deutschen Ausgrabungen (1905); B., Ergebnisse der Ausgrabungen und Untersuchungen in den Jahren 1898–1905 (3&nbsp;Bde., 1921–25).`,
    ),
    L(`<strong>Baar</strong>, asiat. und afrik. Handelsgewicht, →Bahar.`),
    L(
      `<strong>Baar.</strong> 1)&nbsp;B. [ahd. bara ›abgegrenztes Land‹], südwestdeutsche Landschaft, kleines Hochland zwischen Schwarzwald und Schwäbischer Alb, mehr als 700&nbsp;m ü.&nbsp;M., klimatisch rauh, hat Landwirtschaft und Industrie (Uhren). Hauptort ist Villingen. Trotz ihrer Höhe ist die B. ein vielbenutztes Durchgangsgebiet für den Nord-Süd-Verkehr. Im SO liegt die Baaralb mit dem Lupfen (976&nbsp;m). Die B. bildete den größten Teil des 1806 mediatisierten Fürstentums Fürstenberg. — Bereits im 8.&nbsp;Jahrh. erscheint die Berchtoldsbaar, benannt nach ihren Landgrafen aus dem Geschlecht der Bertholde. Bedeutend verkleinert, kam die Landgftsch. B. im 13.&nbsp;Jahrh. an die Grafen von Fürstenberg.`,
    ),
  ],
  right: [
    L(
      `2)&nbsp;Dorf im schweiz. Kanton Zug (Karte 55, F&nbsp;2), 448&nbsp;m ü.&nbsp;M., auf dem fruchtbaren Baarerboden, hat (1920) 5660 kath.&nbsp;E., Pfarrkirche aus dem 15.&nbsp;Jahrh. (1888 renoviert); große Baumwollspinnerei und -weberei, Papierfabrik, Mühlen; bedeutender Obstbau. Östl. von B. zwei schöne Tropfsteingrotten in der sog. Höll.`,
    ),
    L(`<strong>Baarle</strong>, Caspar van, niederländ. Dichter, →Barlaeus.`),
  ],
};
