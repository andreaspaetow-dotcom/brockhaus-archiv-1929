import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 335 · Scan 367 · Tafel Stadtplan Elberfeld (Barmen-Blatt) */
export const PAGE_335: EncPage = {
  printed: 335,
  scanFile: 367,
  headerLeft: "Barm",
  headerRight: "Barmen — Elberfeld",
  catchword: "Aderstr.",
  scanSrc: "/scans/p335.jpg",
  left: [
    L(`<strong>Tafel: Stadtplan von Elberfeld</strong> (Anschlußblatt zum Plan von Barmen).`),
    N(
      "Tafel Stadtplan Elberfeld (westl. Anschluß an Barmen; Hauptbahnhof, Zoologischer Garten, Hardtanlage, Königstraße). Zuschnitt morgen.",
    ),
  ],
  right: [],
};
