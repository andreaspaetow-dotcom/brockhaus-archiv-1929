import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 455 · Scan 487 · Karte 50 Bayern, östlicher Teil */
export const PAGE_455: EncPage = {
  printed: 455,
  scanFile: 487,
  headerLeft: "Baye",
  headerRight: "50. Bayern (östlicher Teil)",
  catchword: "",
  scanSrc: "/scans/p455.jpg",
  left: [
    L(`<strong>Karte 50. Bayern, östlicher Teil.</strong>`),
    N(
      "Karte 50, östlicher Teil (Zuschnitt morgen). Anschluß an das westl. Blatt; Grenze gegen Österreich. Kartographische Anstalt F. A. Brockhaus, Leipzig.",
    ),
  ],
  right: [
    N("Fortsetzung: Inn, Salzach, Bayerischer Wald, Berchtesgadener Alpen."),
  ],
};
