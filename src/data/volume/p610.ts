import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 610 · Scan 642 · Tafel Bergbau II */
export const PAGE_610: EncPage = {
  printed: 610,
  scanFile: 642,
  headerLeft: "Bergbau",
  headerRight: "Tafel Bergbau II",
  catchword: "Bergbau",
  scanSrc: "/scans/p610.jpg",
  left: [
    L(`<strong>Tafel: Bergbau II.</strong>`),
    N(
      "Tafel Bergbau II (Zuschnitt morgen). Bergbautechnik: Schacht und Querschläge, Sohlen und Zwischen-schächte, Abbauverfahren (Firnstenbau, Stoßbau, Strebau, Pfeilerbruchbau, Spülversatz u. a.). Bildunterschriften im Originalscan.",
    ),
  ],
  right: [
    N(
      "Tafel Bergbau II (Forts.). Originalgrafiken; Zuschnitt morgen.",
    ),
  ],
};
