import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 800 · Scan 843 · Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts III */
export const PAGE_800: EncPage = {
  printed: 800,
  scanFile: 843,
  headerLeft: "Bildhauerkunst",
  headerRight: "Bild",
  catchword: "Tafel",
  scanSrc: "/scans/p800.jpg",
  left: [
    N(
      `Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts III. 1. Jan Štursa (*1880): Tänzerin (Prag, Moderne Galerie). 2. Bernhard Hoetger (*1874): Tigerbrunnen in Elberfeld. 3. Fürst Paul Troubetzkoy (*1866): Büste Tolstois (Leipzig, Museum). 4. Manolo (Manuel Hugué): Büste des Cellisten Casals (mit Genehmigung der Galerie Simon, Paris).`,
    ),
  ],
  right: [
    N(
      `5. F. Derwent Wood: Athlet (Oxford, Ashmolean Museum). 6. Georg Wrba: Trinkender Silen auf Esel (1909; Dresden, Ratskeller). 7. Hermann Hahn (*1868): Reiterstandbild (vor der Kunsthalle in Hamburg). 8. August Gaul (1869–1921): Die Löwin (mit Genehmigung von Paul Cassirer, Berlin).`,
    ),
  ],
};
