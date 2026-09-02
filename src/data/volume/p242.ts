import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 242 · Scan 274 · Tafel Bakterien II */
export const PAGE_242: EncPage = {
  printed: 242,
  scanFile: 274,
  headerLeft: "Bakt",
  headerRight: "Bakterien II",
  catchword: "Bakterien",
  scanSrc: "/scans/p242.jpg",
  left: [
    L(`<strong>Bakterien II.</strong>`),
    L(`Formen, Größe und Wachstum der Bakterien.`),
    L(`1.–11. Bildunterschriften auf S.&nbsp;243.`),
  ],
  right: [
    N("Tafel Bakterien II (Formen, Kulturen, Teilung). Zuschnitt folgt."),
  ],
};
