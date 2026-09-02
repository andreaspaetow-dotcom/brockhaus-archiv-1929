import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 261 · Scan 293 · Kartenblatt Balkan / Südosteuropa */
export const PAGE_261: EncPage = {
  printed: 261,
  scanFile: 293,
  headerLeft: "Balk",
  headerRight: "Balkan (Karte)",
  catchword: "Balk",
  scanSrc: "/scans/p261.jpg",
  left: [
    L(`<strong>Balkan / Südosteuropa.</strong>`),
    L(
      `Kartenblatt zur Balkanhalbinsel (Farbkarte; Kolumnentitel Balk). Bildunterschriften im Scan nicht lesbar.`,
    ),
  ],
  right: [
    N(
      "Tafel/Karte Balkanhalbinsel (Kartenblatt, Scan 293). Zuschnitt morgen.",
    ),
  ],
};
