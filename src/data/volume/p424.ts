import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 424 · Scan 456 · Tafel Baukunst des 19. u. 20. Jahrhunderts II */
export const PAGE_424: EncPage = {
  printed: 424,
  scanFile: 456,
  headerLeft: "Baukunst des 19. u. 20. Jahrhunderts II",
  headerRight: "Bauk",
  catchword: "gegeben",
  scanSrc: "/scans/p424.jpg",
  left: [
    L(`<strong>Tafel: Baukunst des 19. u. 20. Jahrhunderts II.</strong>`),
    N(
      "Tafel Baukunst des 19. u. 20. Jahrhunderts II (Zuschnitt morgen). 1. Nationalpalast in Mexiko. 2. Post- und Telegraphenamt in Panama. 3. Martin Nyrop: Neues Rathaus in Kopenhagen (1905). 4. Holger Sinding-Larsen: Universitätsbibliothek in Oslo (1914).",
    ),
  ],
  right: [
    N(
      "5. Municipal Offices in Bombay (1884–93). 6. Cass Gilbert: Woolworthgebäude in New York (241&nbsp;m hoch; 1905). 7. McKenzie, Voorhees und Gmelin: Telephone- und Telegraphengebäude in New York (148&nbsp;m hoch; 1926).",
    ),
  ],
};
