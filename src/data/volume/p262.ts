import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 262 · Scan 294 · Kartenblatt Balkan / Südosteuropa */
export const PAGE_262: EncPage = {
  printed: 262,
  scanFile: 294,
  headerLeft: "Balk",
  headerRight: "Balkan (Karte)",
  catchword: "Balkan",
  scanSrc: "/scans/p262.jpg",
  left: [
    L(`<strong>Balkan / Südosteuropa.</strong>`),
    L(
      `Kartenblatt zur Balkanhalbinsel (Farbkarte; Kolumnentitel Balk). Bildunterschriften im Scan nicht lesbar.`,
    ),
  ],
  right: [
    N(
      "Tafel/Karte Balkanhalbinsel (Kartenblatt, Scan 294). Zuschnitt morgen.",
    ),
  ],
};
