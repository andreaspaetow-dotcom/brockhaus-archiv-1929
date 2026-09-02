import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 184 · Scan 216 · Tafel Babylonische Kunst II */
export const PAGE_184: EncPage = {
  printed: 184,
  scanFile: 216,
  headerLeft: "Babylonische Kunst II",
  headerRight: "Baby",
  catchword: "geschlossene",
  scanSrc: "/scans/p184.jpg",
  left: [
    L(`<strong>Babylonische Kunst II.</strong>`),
    L(`<em>Ältere Periode.</em>`),
    L(
      `<strong>Siegelzylinder:</strong> 1.&nbsp;des Bur-Sin von Ur (um 2400 v.&nbsp;Chr.); 3.&nbsp;des Ibi-Sin (um 2600 v.&nbsp;Chr.). 7.&nbsp;Silbervase des Entemena aus Lagasch (2900 v.&nbsp;Chr.).`,
    ),
    L(`<em>Jüngere Periode.</em>`),
    L(
      `2.&nbsp;Siegelzylinder des Burnaburiasch von Babylon (um 1500 v.&nbsp;Chr.). Grenzsteine: 4.&nbsp;des Königs Merodachbaladan (700 v.&nbsp;Chr.); 5.&nbsp;aus der Zeit des Melischipak (um 1250 v.&nbsp;Chr.). 6.&nbsp;Terrakotta der Göttin Nin-Mach. 8.&nbsp;Elfenbeinköpfchen aus Babylon.`,
    ),
  ],
  right: [
    N(
      "Tafel. Standorte: 1, 2, 4, 6, 8 Berlin, Museum; 3 London, Britisches Museum; 5, 7 Paris, Louvre. Maßstäbe: 1 = 1½, 3 = 8/10, 2 = 5/8, 6 = 1/2, 7 = 1/5, 4, 8 = 1/8, 5 = 1/7 nat. Gr. Zuschnitt der acht Abbildungen folgt.",
    ),
  ],
};
