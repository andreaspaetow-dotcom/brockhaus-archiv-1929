import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 342 · Scan 374 · Tafel Barock II */
export const PAGE_342: EncPage = {
  printed: 342,
  scanFile: 374,
  headerLeft: "Barock II",
  headerRight: "Baro",
  catchword: "Barock",
  scanSrc: "/scans/p342.jpg",
  left: [
    L(`<strong>Tafel: Barock II (Baukunst).</strong>`),
    N(
      "Tafel Barock II. Baukunst (Schlösser und Innenräume): 1. Jules Hardouin-Mansart: Schloß Versailles, Gartenfassade. 2. Inneres von St. Peter, Rom (Maderna/Bernini). 3. Balthasar Neumann: Treppenhaus der Residenz Würzburg. 4. Röm. Kircheninneres mit Deckenmalerei (Andrea Pozzo / Pietro da Cortona). 5. Francesco Borromini: ovales Kircheninneres (S. Carlo alle Quattro Fontane bzw. S. Ivo). 6. Jakob Prandtauer: Stiftskirche Melk. 7. Johann Balthasar Neumann: Wallfahrtskirche Vierzehnheiligen. Zuschnitt morgen.",
    ),
  ],
  right: [],
};
