import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 410 · Scan 442 · Tafel Bauernhaus II */
export const PAGE_410: EncPage = {
  printed: 410,
  scanFile: 442,
  headerLeft: "Baue",
  headerRight: "Bauernhaus II",
  catchword: "",
  scanSrc: "/scans/p410.jpg",
  left: [
    L(`<strong>Tafel: Bauernhaus II.</strong>`),
    N(
      "Tafel Bauernhaus II (Zuschnitt morgen). Mittel- und oberdeutsche Bauernhäuser: 1. Kärntner B. 2. Steiermärkische Rauchstube. 3. Tiroler B. 4. Tiroler B., Anbau. 5. Berner Haus.",
    ),
  ],
  right: [
    N(
      "Ostdeutsche Bauernhäuser: 6. Masurisches Blockhaus. 7. u. 8. B. aus dem sächsisch-schlesischen Grenzbezirk (8. mit »Umgebinde«).",
    ),
  ],
};
