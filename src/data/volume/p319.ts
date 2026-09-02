import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 319 · Scan 351 · Tafel Bären und Kleinbären I */
export const PAGE_319: EncPage = {
  printed: 319,
  scanFile: 351,
  headerLeft: "Bären und Kleinbären I",
  headerRight: "Barc",
  catchword: "Bären",
  scanSrc: "/scans/p319.jpg",
  left: [
    L(`<strong>Tafel: Bären und Kleinbären I.</strong>`),
    N(
      "Tafel Bären und Kleinbären I. 1. Brauner Bär (Ursus arctos); Länge bis 2,20&nbsp;m, Schulterhöhe bis 1,25&nbsp;m. 2. Malaienbär (Ursus malayanus); Länge bis 1,4&nbsp;m, Schulterhöhe bis 0,70&nbsp;m. 3. Eisbär (Ursus maritimus); Länge bis 2,8&nbsp;m, Schulterhöhe bis 1,4&nbsp;m. 4. Weißrüsselbär (Nasua narica); Länge etwa 0,6&nbsp;m, Schulterhöhe 0,3&nbsp;m, Schwanz 0,45&nbsp;m. 5. Coati (Nasua rufa); Länge bis 0,65&nbsp;m, Schulterhöhe bis 0,3&nbsp;m, Schwanz 0,45&nbsp;m. 6. Wickelbär (Potos flavus); Länge bis 0,45&nbsp;m, Schulterhöhe etwa 0,17&nbsp;m, Schwanz 0,47&nbsp;m. (Abb. 1 und 3–6: Zool. Garten, Breslau.) Zuschnitt morgen.",
    ),
  ],
  right: [],
};
