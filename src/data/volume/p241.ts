import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 241 · Scan 273 · Tafel Bakterien I */
export const PAGE_241: EncPage = {
  printed: 241,
  scanFile: 273,
  headerLeft: "Bakt",
  headerRight: "Bakterien I",
  catchword: "Bakt",
  scanSrc: "/scans/p241.jpg",
  left: [
    L(`<strong>Bakterien I.</strong>`),
    L(
      `Bakterien und andere krankheitserregende Mikroorganismen (gefärbte Präparate bei starker Vergrößerung).`,
    ),
    L(`1.–17. Bildunterschriften auf S.&nbsp;240.`),
  ],
  right: [
    N("Tafel Bakterien I (17 Mikroaufnahmen). Zuschnitt folgt."),
  ],
};
