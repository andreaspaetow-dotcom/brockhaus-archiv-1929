import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 183 · Scan 215 · Tafel Babylonische Kunst I */
export const PAGE_183: EncPage = {
  printed: 183,
  scanFile: 215,
  headerLeft: "Babylonische Kunst I",
  headerRight: "Baby",
  catchword: "geschlossene",
  scanSrc: "/scans/p183.jpg",
  left: [
    L(`<strong>Babylonische Kunst I.</strong>`),
    L(`<em>Ältere Periode.</em>`),
    L(
      `<strong>Statuen:</strong> 1.&nbsp;Lugaldalu von Adab (3000 v.&nbsp;Chr.); 2.&nbsp;Lamgi-Mari von Mari (um 2800 v.&nbsp;Chr.); 3.&nbsp;Gudea von Lagasch (2400 v.&nbsp;Chr.).`,
    ),
    L(
      `<strong>Reliefe:</strong> 4.&nbsp;Reliefplatte des Urnina aus Lagasch (3000 v.&nbsp;Chr.); 5.&nbsp;Weihreliefplatte aus Nippur.`,
    ),
    L(
      `<strong>Stelen:</strong> 6.&nbsp;des Naram-Sin von Akkad (2600 v.&nbsp;Chr.); 8.&nbsp;des Hammurapi von Babylon (2000 v.&nbsp;Chr., in Susa gefunden).`,
    ),
    L(`<strong>Bronze:</strong> 7.&nbsp;Statue einer Korbträgerin (2200 v.&nbsp;Chr.).`),
  ],
  right: [
    N(
      "Tafel. Standorte: 7 Berlin, Museum; 1, 2, 5 Konstantinopel, Antikenmuseum; 3, 4, 6, 8 Paris, Louvre. Maßstäbe: 7 = 1/5, 5 = 1/4, 3, 4 = 1/8, 1, 8 = 1/12, 2 = 1/25, 6 = 1/30 nat. Gr. Zuschnitt der acht Abbildungen folgt.",
    ),
  ],
};
