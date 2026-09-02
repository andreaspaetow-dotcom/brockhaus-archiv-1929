import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 421 · Scan 453 · Tafel Baukunst des 19. u. 20. Jahrhunderts III */
export const PAGE_421: EncPage = {
  printed: 421,
  scanFile: 453,
  headerLeft: "Baukunst des 19. u. 20. Jahrhunderts III",
  headerRight: "Bauk",
  catchword: "",
  scanSrc: "/scans/p421.jpg",
  left: [
    L(`<strong>Tafel: Baukunst des 19. u. 20. Jahrhunderts III.</strong>`),
    N(
      "Tafel Baukunst des 19. u. 20. Jahrhunderts III (Zuschnitt morgen). 1. Alfred Messel: Warenhaus Wertheim in Berlin (1896). 2. Erik Lallerstedt: Technische Hochschule in Stockholm (1917). 3. H.&nbsp;P. Berlage: Neue Börse in Amsterdam (1898–1903). 4. Otto Wagner: Postsparkassengebäude in Wien (1905).",
    ),
  ],
  right: [
    N(
      "5. Rud. Schilling und Jul. Gräbner: Christuskirche in Dresden-Strehlen (1906). 6. Leopold Bauer: Wohnhäuserblock (Gemeindebau) in Wien (1926–27). 7. Pfeifer und Großmann: Stadthalle in Mülheim a. d. Ruhr (1923–25).",
    ),
  ],
};
