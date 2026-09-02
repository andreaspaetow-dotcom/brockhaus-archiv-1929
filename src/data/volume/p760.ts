import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 760 · Scan 803 · Bibliothek */
export const PAGE_760: EncPage = {
  printed: 760,
  scanFile: 803,
  headerLeft: "Bibliothek",
  headerRight: "Bibliothek",
  catchword: "Kanada",
  scanSrc: "/scans/p760.jpg",
  left: [
    L(
      `<em>Italien.</em> Neapel, B. Naz. 1000000 Bde., 11800 Hss.; Florenz, National-B. 700000, 22000; Rom, B. Naz. Centr. Vittorio Emanuele 600000, 2200; Mailand, Ambrosiana 400000, 10000; Turin, U.-B. 400000; Rom, Vaticana 350000, 50000; Pavia, U.-B. 326000; Parma, Palatina 325000; Venedig, Marciana 320000, 12000; Padua, U.-B. 314000; Florenz, Marucelliana 305000; Vicenza, Stadt-B. usw.`,
    ),
    L(
      `<em>Polen.</em> Warschau, U.-B.; Krakau, U.-B.; Lemberg, Ossoliński; Wilno. Zahlreiche Volks-B.`,
    ),
    L(
      `<em>Sowjetrußland.</em> Leningrad, Öffentl. B. 4200000 Bde., 231746 Hss.; Moskau, Öffentl. B. 3000000; Leningrad, Akademie-B. 2000000; Moskau, Museums-B. 1100000.`,
    ),
    L(
      `<em>Tschechoslowakei.</em> Prag, U.-B. 576000 Bde., 3930 Hss.; Brünn, Landes- und U.-B. 400000; Prag, Nationalmuseum 371000, 7076. Aufstrebende Volks-B., sowohl im deutschen wie im tschech. Teil, im ganzen 6562, bes. in Prag (Zentral-B. mit 44 Filialen, fast 400000 Bde.), Aussig, Reichenberg, Zittau. Die Tschechoslowakei hat ein Büchereigesetz.`,
    ),
    L(`<em>Jugoslawien.</em> Agram, U.-B. 304000 Bde.; Belgrad, National-B. 200000.`),
    L(
      `<em>Ungarn.</em> Budapest, U.-B. 544000 Bde., 3401 Hss.; Budapest, Nationalmuseum 400000; Budapest, Ungar. Akad. d. Wiss. 200000; Budapest, Stadt-B. 145000.`,
    ),
    L(
      `<em>Rumänien.</em> Klausenburg, Siebenb. Nationalmuseum 300000 Bde., 4000 Hss.; Bukarest, B. der Academia Româna 270000, 7159; Klausenburg, U.-B. 217000; Jassy, U.-B. 160000; Czernowitz, U.-B. 151000.`,
    ),
    L(`<em>Bulgarien.</em> Sofia, National-B. 200000 Bde., 5500 Hss.`),
    L(`<em>Griechenland.</em> Athen, National- und U.-B. 400000 Bde., 3800 Hss.`),
    L(`<em>Türkei.</em> Konstantinopel, U.-B. 200000 Bde.`),
    L(
      `<em>Orient.</em> Jerusalem, Jüd. National- und U.-B. 150000 Bde.; Jerusalem, Patriarchal-B. 2736 Hss.; Sinai, Katharinenkloster 3100 Hss.; Beirut, B. Orientale 30000; Beirut, American U.-B. 25000.`,
    ),
    L(
      `<em>Afrika.</em> Kairo, Ägypt. B. 120000 Bde., 23000 Hss.; Algier, U.-B. 92000; Kapstadt, P. L. 160000. In Südafrika 220 Public Libraries mit 1500000 Bdn.`,
    ),
    L(`<em>Indien.</em> Kalkutta, Kaiserl. B. 152000 Bde.`),
    L(`<em>Sibirien.</em> Tomsk, U.-B. 270000 Bde.`),
    L(`<em>China.</em> Peking, U.-B. 300000 chines., 30000 europ. Bücher.`),
    L(`<em>Japan.</em> Tokio, U.-B. 700000 Bde.; Kioto, U.-B. 500000; Tokio, Kaiserl. B. 380000.`),
  ],
  right: [
    L(
      `<em>Vereinigte Staaten von Amerika.</em> Washington, L. of Congress 3500000 Bde.; New York, P. L. 2800000; Cambridge, Harvard U. L. 2325000; New Haven, Yale U. L. 1400000; Boston, P. L. 1400000; Chicago, P. L. 1350000; New York, Columbia U. L. 1025000; Brooklyn, P. L. 970000; Cleveland, P. L. 935000; Detroit, P. L. 930000; Ithaca, Cornell U.-B. 750000; Chicago, General U. L. 700000; St. Louis, P. L. 670000; Cincinnati, P. L. 660000; Albany, New York State L. 630000; Ann Arbor, U. L. 600000; Berkeley, U. L. 590000; Philadelphia, Free P. L. 584000; Milwaukee, P. L. 580000; Princeton, U. L. 525000; Pittsburgh, Carnegie L. 520000; Chicago, John Crerar L. 500000; Chicago, Newberry L. 430000; Buffalo, P. L. 430000; Minneapolis, U. L. 425000; Minneapolis, P. L. 405000. Im ganzen etwa 11500 Public Libraries mit etwa 130 Mill. Bdn., davon 3000 mit mehr als 5000 Bdn. Büchereigesetzgebung wie in England.`,
    ),
  ],
};
