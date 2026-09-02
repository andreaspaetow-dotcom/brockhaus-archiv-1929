import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 524 · Scan 556 · Tafel Bein II */
export const PAGE_524: EncPage = {
  printed: 524,
  scanFile: 556,
  headerLeft: "Bein",
  headerRight: "Bein II",
  catchword: "Beinhaus",
  scanSrc: "/scans/p524.jpg",
  left: [
    L(`<strong>Tafel: Bein II.</strong>`),
    N(
      "Tafel Bein II (Zuschnitt morgen). Gefäße, Nerven und Muskeln der unteren Extremität. Erklärung auf S. 525.",
    ),
  ],
  right: [],
};
