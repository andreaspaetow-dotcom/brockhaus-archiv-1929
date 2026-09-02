import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 341 · Scan 373 · Tafel Barock I */
export const PAGE_341: EncPage = {
  printed: 341,
  scanFile: 373,
  headerLeft: "Barock I",
  headerRight: "Baro",
  catchword: "Barock",
  scanSrc: "/scans/p341.jpg",
  left: [
    L(`<strong>Tafel: Barock I (Baukunst).</strong>`),
    N(
      "Tafel Barock I. Baukunst: 1. Giacomo Barozzi da Vignola: Il Gesù, Rom. 2. Lorenzo Bernini: Kolonnaden von St. Peter, Rom. 3. Francesco Borromini: S. Carlo alle Quattro Fontane, Rom. 4. Baldassare Longhena: S. Maria della Salute, Venedig. 5. Johann Bernhard Fischer von Erlach: Karlskirche, Wien. 6. Balthasar Neumann: Treppenhaus der Residenz Würzburg. 7. Matthäus Daniel Pöppelmann: Zwinger, Dresden. 8. Johann Lukas von Hildebrandt: Oberes Belvedere, Wien. Zuschnitt morgen.",
    ),
  ],
  right: [],
};
