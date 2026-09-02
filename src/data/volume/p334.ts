import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 334 · Scan 366 · Tafel Stadtplan Barmen */
export const PAGE_334: EncPage = {
  printed: 334,
  scanFile: 366,
  headerLeft: "Barmen",
  headerRight: "Barm",
  catchword: "Barm",
  scanSrc: "/scans/p334.jpg",
  left: [
    L(`<strong>Tafel: Stadtplan von Barmen.</strong>`),
    N(
      "Tafel Stadtplan Barmen (Blatt mit Gitternetz A–F / 1–8 und Nebenkarte). Bahnhöfe Unterbarmen, Gemarke, Oberbarmen, Rittershausen, Wichlinghausen; Wupper von O nach W; Barmer Wald; Toelleturm. Zuschnitt morgen.",
    ),
  ],
  right: [],
};
