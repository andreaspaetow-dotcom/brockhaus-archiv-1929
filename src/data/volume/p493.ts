import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 493 · Scan 525 · Tafel Beeren I */
export const PAGE_493: EncPage = {
  printed: 493,
  scanFile: 525,
  headerLeft: "Beeren I",
  headerRight: "Beer",
  catchword: "Beeren",
  scanSrc: "/scans/p493.jpg",
  left: [
    L(`<strong>Tafel: Beeren I.</strong>`),
    N(
      "Tafel Beeren I. Farbtafel (Zuschnitt morgen). 1–4 Gartenstachelbeeren: 1 Früheste weiße, 2 Rote Triumphbeere, 3 Grüne Riesenbeere, 4 Früheste gelbe. 5 Stachelbeerblüte: a von oben, b von der Seite, c im Längsschnitt. 6 Blühender Stachelbeerzweig. 7 Blühender Johannisbeerzweig. 8 Johannisbeerblüte: a von oben, b im Längsschnitt. 9 Preiselbeere: a blühender Zweig, b Blütenlängsschnitt, c fruchttragende Pflanze, d Beere. 10 Färberstachelbeere (Ribes). 11 Heidelbeere. 12 Moosbeere. 5, 8, 9b, 9d, 11a, 11b, 11d vergrößert.",
    ),
  ],
  right: [],
};
