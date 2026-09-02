import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 343 · Scan 375 · Tafel Barock III */
export const PAGE_343: EncPage = {
  printed: 343,
  scanFile: 375,
  headerLeft: "Barock III",
  headerRight: "Baro",
  catchword: "Barock",
  scanSrc: "/scans/p343.jpg",
  left: [
    L(`<strong>Tafel: Barock III (Malerei).</strong>`),
    N(
      "Tafel Barock III. 1. Michelangelo Merisi da Caravaggio (* um 1560–65, † 1609) oder Giovanni Baglione (Nachfolger des Cavalier d'Arpino): Amor als Sieger (Berlin, Kaiser-Friedrich-Museum). 2. Jusepe de Ribera (1588–1652): Die alte Trinkerin (München, Alte Pinakothek). 3. Francisco Zurbarán: Der heilige Bonaventura (1629; Dresden, Gemäldegalerie). 4. Peter Paul Rubens (1577–1640): Raub der Töchter des Leukippos (München, Alte Pinakothek). Zuschnitt morgen.",
    ),
  ],
  right: [],
};
