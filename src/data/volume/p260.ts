import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 260 · Scan 292 · Kartenblatt Balkan / Südosteuropa */
export const PAGE_260: EncPage = {
  printed: 260,
  scanFile: 292,
  headerLeft: "Balk",
  headerRight: "Balkan (Karte)",
  catchword: "Balk",
  scanSrc: "/scans/p260.jpg",
  left: [
    L(`<strong>Balkan / Südosteuropa.</strong>`),
    L(
      `Kartenblatt zur Balkanhalbinsel (Farbkarte; Kolumnentitel Balk). Bildunterschriften im Scan nicht lesbar.`,
    ),
  ],
  right: [
    N(
      "Tafel/Karte Balkanhalbinsel (Kartenblatt, Scan 292). Zuschnitt morgen.",
    ),
  ],
};
