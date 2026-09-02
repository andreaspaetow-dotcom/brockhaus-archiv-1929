import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 462 · Scan 494 · Karte 131 Bayern, geschichtlich (West) */
export const PAGE_462: EncPage = {
  printed: 462,
  scanFile: 494,
  headerLeft: "Baye",
  headerRight: "131. Bayern, geschichtlich",
  catchword: "",
  scanSrc: "/scans/p462.jpg",
  left: [
    L(`<strong>Karte 131. Bayern, geschichtlich.</strong> Westlicher Blattteil.`),
    N(
      "Karte 131: Bayern, geschichtlich (Zuschnitt morgen). Westl. Blatt mit Pfalz, Rhein, Württemberg, Reichsstadt Ulm (1803). 10° östl. Länge von Greenwich.",
    ),
  ],
  right: [
    N("Fortsetzung der historischen Karte (Rheinpfalz, Zweibrücken, geistliche Gebiete)."),
  ],
};
