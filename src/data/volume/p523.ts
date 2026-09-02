import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 523 · Scan 555 · Tafel Bein I */
export const PAGE_523: EncPage = {
  printed: 523,
  scanFile: 555,
  headerLeft: "Bein I",
  headerRight: "Bein",
  catchword: "Bein II",
  scanSrc: "/scans/p523.jpg",
  left: [
    L(`<strong>Tafel: Bein I.</strong>`),
    N(
      "Tafel Bein I (Zuschnitt morgen). Skelett der unteren Extremität: Hüftbein, Oberschenkel, Unterschenkel, Fuß; Hüftgelenk, Kniegelenk, Sprunggelenk. Erklärung auf S. 522.",
    ),
  ],
  right: [],
};
