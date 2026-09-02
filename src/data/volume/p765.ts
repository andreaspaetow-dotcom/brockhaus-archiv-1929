import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 765 · Scan 808 · Tafel Bibliothek II */
export const PAGE_765: EncPage = {
  printed: 765,
  scanFile: 808,
  headerLeft: "Bibliothek",
  headerRight: "Bibliothek",
  catchword: "eine",
  scanSrc: "/scans/p765.jpg",
  left: [
    N(
      `Tafel Bibliothek II. 5. Lesesaal des Peabody-Instituts in Baltimore (Ver. St. v. A.).`,
    ),
  ],
  right: [
    N(`6. Eine Volkslesehalle der Gemeinde Wien.`),
  ],
};
