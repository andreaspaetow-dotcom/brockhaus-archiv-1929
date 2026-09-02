import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 422 · Scan 454 · Tafel Baukunst des 19. u. 20. Jahrhunderts IV */
export const PAGE_422: EncPage = {
  printed: 422,
  scanFile: 454,
  headerLeft: "Baukunst des 19. u. 20. Jahrhunderts IV",
  headerRight: "Bauk",
  catchword: "",
  scanSrc: "/scans/p422.jpg",
  left: [
    L(`<strong>Tafel: Baukunst des 19. u. 20. Jahrhunderts IV.</strong>`),
    N(
      "Tafel Baukunst des 19. u. 20. Jahrhunderts IV (Zuschnitt morgen). 1. J. Crouwel: Haupthalle des Postamtes in Utrecht (1918–24). 2. Fritz Höger: Kontorhaus Chilehaus in Hamburg (1922–23). 3. Peter Behrens: Oberlichthalle mit Treppenhaus im Verwaltungsgebäude der Höchster Farbwerke (1920–24). 4. Bruno Taut: Gewerkschaftshaus in Berlin (1922–23).",
    ),
  ],
  right: [
    N(
      "5. Paul Bonatz: Verwaltungsgebäude der Vereinigten Stahlwerke in Düsseldorf (1922–25). 6. Barkhin: Investitionsgebäude in Moskau (1927–28). 7. Erich Mendelsohn: Kaufhaus Schocken in Stuttgart (1928).",
    ),
  ],
};
