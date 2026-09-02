import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 804 · Scan 847 · Tafel Bildtelegraphie */
export const PAGE_804: EncPage = {
  printed: 804,
  scanFile: 847,
  headerLeft: "Bildtelegraphie",
  headerRight: "Bild",
  catchword: "je",
  scanSrc: "/scans/p804.jpg",
  left: [
    N(
      `Tafel Bildtelegraphie. 1. Wesen der Bildtelegraphie. Sendeseite: Abtasten des Bildes durch einen Lichtstrahl a und Umwandlung der reflektierten Helligkeitswerte in elektrische Stromstöße in einer besonderen Vorrichtung b. Empfangsseite: Umwandlung der ankommenden elektrischen Stromstöße in entsprechende Helligkeitswerte durch Veränderung der Helligkeit eines Lichtstrahles c in einer besonderen Vorrichtung d und Fixierung der Helligkeitswerte auf der Empfangstrommel.`,
    ),
    N(
      `3. Schematische Darstellung der Wirkungsweise einer Photozelle: a Lichtquelle, b Photozelle, c Batterie, d Anode, e Kaliumschicht, f Elektronenstrom.`,
    ),
  ],
  right: [
    N(
      `5. Schematische Darstellung des Kerreffektes: a Lichtstrahl, b Nicol, c Kerrzelle, d Nicol, e durch die angelegte Spannung veränderter Lichtstrahl.`,
    ),
    N(
      `7. Sende- und Empfangsgerät des Systems Telefunken-Karolus: a Sendetrommel, b Photozelle, c Karoluszelle, d verschlossene Empfangstrommel.`,
    ),
    N(
      `8. Wie ein Bildtelegramm befördert wird: A. Einspannen des Bildes in die Sendetrommel, B. Entwickeln des empfangenen Bildes, C. Zustellung des Bildes durch Rohrpost mit Aufklebeadresse für Bildtelegramme.`,
    ),
  ],
};
