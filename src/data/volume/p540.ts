import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 540 · Scan 572 · Tafel Beleuchtung II */
export const PAGE_540: EncPage = {
  printed: 540,
  scanFile: 572,
  headerLeft: "Bele",
  headerRight: "Beleuchtung II",
  catchword: "Beleuchtung III",
  scanSrc: "/scans/p540.jpg",
  left: [
    L(`<strong>Tafel: Beleuchtung II.</strong>`),
    N(
      "Tafel Beleuchtung II (Zuschnitt morgen). 1. Blendung vermeiden! a schlechte Beleuchtung durch aufgehängte Schirmlampen; b gute Beleuchtung durch tiefstrahlende Werkstattleuchten. 2. Blendung kann auch durch Spiegelung auftreten: a falsche Stellung der Lampe direkt im Blickfeld; b richtige Stellung der Lampe. 3. Störende Schlagschatten vermeiden! a schlechte Beleuchtung, Licht fällt von rechts ein; b gute Beleuchtung, Licht fällt von links oben ein. 4. Einfluß der richtigen Verteilung von Licht und Schatten: a gänzliche Schattenlosigkeit macht das Erkennen der Körper unmöglich; b Schatten lassen die Körper erkennen. 1 u. 2 Körting & Mathiesen, Leipzig.",
    ),
  ],
  right: [],
};
