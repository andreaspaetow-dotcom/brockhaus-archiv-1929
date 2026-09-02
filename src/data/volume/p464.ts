import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 464 · Scan 496 · Karte 131b Bayern im Jahre 1810 */
export const PAGE_464: EncPage = {
  printed: 464,
  scanFile: 496,
  headerLeft: "Baye",
  headerRight: "131b. Bayern im Jahre 1810",
  catchword: "",
  scanSrc: "/scans/p464.jpg",
  left: [
    L(`<strong>Karte 131b. Bayern im Jahre 1810.</strong>`),
    N(
      "Karte 131b: Bayern im Jahre 1810 (Zuschnitt morgen). Größte Ausdehnung unter Napoleon (Tirol, Vorarlberg, Salzburg, Innviertel, Ansbach, Bayreuth, Regensburg).",
    ),
  ],
  right: [
    N("Fortsetzung der Karte 131b (östl. und südl. Erwerbungen 1805–1810)."),
  ],
};
