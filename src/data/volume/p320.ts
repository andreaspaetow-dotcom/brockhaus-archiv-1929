import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 320 · Scan 352 · Tafel Bären und Kleinbären II */
export const PAGE_320: EncPage = {
  printed: 320,
  scanFile: 352,
  headerLeft: "Barc",
  headerRight: "Bären und Kleinbären II",
  catchword: "sie",
  scanSrc: "/scans/p320.jpg",
  left: [
    L(`<strong>Tafel: Bären und Kleinbären II.</strong>`),
    N(
      "Tafel Bären und Kleinbären II. 1. Baribal (Ursus americanus); Länge bis 2&nbsp;m, Schulterhöhe etwa 1&nbsp;m. 2. Bambusbär (Ailuropus melanoleucus); Länge bis 1,5&nbsp;m, Schulterhöhe bis 0,7&nbsp;m. 3. Lippenbär (Melursus ursinus); Länge bis 1,8&nbsp;m, Schulterhöhe bis 0,8&nbsp;m. 4. Kragenbär (Ursus tibetanus); Länge bis 1,8&nbsp;m, Schulterhöhe bis 0,8&nbsp;m. 5. Grislybär (Ursus horribilis); Länge bis 2,5&nbsp;m, Schulterhöhe bis 1,5&nbsp;m. 6. Waschbär (Procyon lotor); Länge bis 0,65&nbsp;m, Schulterhöhe bis 0,35&nbsp;m, Schwanz 0,25&nbsp;m. 7. Panda (Ailurus fulgens); Länge bis 0,6&nbsp;m, Schulterhöhe bis 0,35&nbsp;m, Schwanz 0,5&nbsp;m. Zuschnitt morgen.",
    ),
  ],
  right: [],
};
