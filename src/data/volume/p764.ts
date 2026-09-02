import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 764 · Scan 807 · Tafel Bibliothek I */
export const PAGE_764: EncPage = {
  printed: 764,
  scanFile: 807,
  headerLeft: "Bibliothek",
  headerRight: "Bibliothek",
  catchword: "Tafel",
  scanSrc: "/scans/p764.jpg",
  left: [
    N(
      `Tafel Bibliothek I. 1. Leseraum, 16. Jahrhundert. 2. Pultbibliothek, in der die Bücher mit Ketten an die Pulte angeschlossen sind. Hauptsaal der Laurentiana in Florenz.`,
    ),
  ],
  right: [
    N(
      `3. Magazinsystem. Handmagazin in der Deutschen Bücherei in Leipzig. 4. Galeriesystem. Großer Büchersaal der Schloßbibliothek in Mannheim.`,
    ),
  ],
};
