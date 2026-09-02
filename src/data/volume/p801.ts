import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 801 · Scan 844 · Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts IV */
export const PAGE_801: EncPage = {
  printed: 801,
  scanFile: 844,
  headerLeft: "Bildhauerkunst",
  headerRight: "Bild",
  catchword: "Figur",
  scanSrc: "/scans/p801.jpg",
  left: [
    N(
      `Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts IV. 1. Georg Kolbe (*1877): Tänzerin (1911). 2. Hermann Haller (*1880): Stehendes Mädchen (Frankfurt a. M., Städelsches Institut). 3. Karl Albiker (*1878): Trauernde. 4. Alexander Archipenko (*1887): Weibliche Gestalt (mit Genehmigung der Österreichischen Galerie, Wien).`,
    ),
  ],
  right: [
    N(
      `5. Wilhelm Lehmbruck (1881–1919): Die Kniende (Berlin, Kronprinzenpalais). 6. Rudolf Belling: Kopf in Messing (1925; Berlin, Nationalgalerie). 7. Ernst Barlach (*1870): Der Versteinerte (mit Genehmigung von Paul Cassirer, Berlin). 8. Ernesto De Fiori: Büste des Boxers Jack Dempsey (1925; Berlin, Nationalgalerie; mit Genehmigung der Galerie Flechtheim, Berlin).`,
    ),
  ],
};
