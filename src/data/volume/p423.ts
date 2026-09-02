import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 423 · Scan 455 · Tafel Baukunst des 19. u. 20. Jahrhunderts I */
export const PAGE_423: EncPage = {
  printed: 423,
  scanFile: 455,
  headerLeft: "Baukunst des 19. u. 20. Jahrhunderts I",
  headerRight: "Bauk",
  catchword: "",
  scanSrc: "/scans/p423.jpg",
  left: [
    L(`<strong>Tafel: Baukunst des 19. u. 20. Jahrhunderts I.</strong>`),
    N(
      "Tafel Baukunst des 19. u. 20. Jahrhunderts I (Zuschnitt morgen). 1. Karl Friedr. Schinkel: Schauspielhaus in Berlin, 1818–21. 2. Sir Charles Barry und August W. Pugin: Parlamentsgebäude in Westminster (London), nach 1834. 3. Harvey Lonsdale Elmes: St. George's Hall in Liverpool, 1841 begonnen. 4. Leo v. Klenze: Propyläen in München, 1846–62.",
    ),
  ],
  right: [
    N(
      "5. Gottfried Semper: Galeriegebäude in Dresden, 1847–56. 6. Charles Garnier: Große Oper in Paris, 1861–74. 7. Friedrich Schmidt: Neues Rathaus in Wien, 1872–83. 8. Ludwig Hoffmann: Reichsgericht in Leipzig, 1888–95.",
    ),
  ],
};
