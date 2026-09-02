import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 639 · Scan 671 · Tafel Berlin I */
export const PAGE_639: EncPage = {
  printed: 639,
  scanFile: 671,
  headerLeft: "Berlin",
  headerRight: "Tafel Berlin I",
  catchword: "Berlin",
  scanSrc: "/scans/p639.jpg",
  left: [
    L(`<strong>Tafel: Berlin I.</strong>`),
    N(
      "Tafel Berlin I (Zuschnitt morgen). Ansichten der Reichshauptstadt: Schloß, Lustgarten, Dom, Museumsinsel, Unter den Linden. Originalgrafiken im Scan.",
    ),
  ],
  right: [
    N(
      "Tafel Berlin I (Forts.). Originalgrafiken; Zuschnitt morgen.",
    ),
  ],
};
