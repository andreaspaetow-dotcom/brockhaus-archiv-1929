import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 344 · Scan 376 · Tafel Barock IV */
export const PAGE_344: EncPage = {
  printed: 344,
  scanFile: 376,
  headerLeft: "Barock IV",
  headerRight: "Baro",
  catchword: "Barock",
  scanSrc: "/scans/p344.jpg",
  left: [
    L(`<strong>Tafel: Barock IV (Bildhauerkunst).</strong>`),
    N(
      "Tafel Barock IV. 1. Lorenzo Bernini (1598–1680): Grabdenkmal Urbans VIII. (Rom, Peterskirche). 2. José de Mora (1638–1725): Heiliger Bruno (Granada, Kartause). 3. Pierre Puget (1622–94): Milon von Kroton (Paris, Louvre). 4. Gabriel Grupello: Reiterstandbild Johann Wilhelms von der Pfalz (1703–11; Düsseldorf). 5. Francesco Mochi: ehernes Reiterstandbild Alessandros I. Farnese (1625; Piazza dei Cavalli, Piacenza). 6. Andreas Schlüter (1664–1714): Maske eines sterbenden Kriegers (Berlin, Zeughaus). 7. François Girardon (1628–1715): Büste des Dichters Boileau-Despréaux (Paris, Louvre). 8. Johann Reichle: Bronzegruppe vom Giebel des Zeughauses in St. Ulrich und Afra zu Augsburg (1606/07). Zuschnitt morgen.",
    ),
  ],
  right: [],
};
