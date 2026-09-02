import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 501 · Scan 533 · Tafel Beethoven I */
export const PAGE_501: EncPage = {
  printed: 501,
  scanFile: 533,
  headerLeft: "Beethoven I",
  headerRight: "Beet",
  catchword: "Beethoven",
  scanSrc: "/scans/p501.jpg",
  left: [
    L(`<strong>Tafel: Beethoven I.</strong>`),
    N(
      "Tafel Beethoven I (Zuschnitt morgen). 1. Schattenriß vom Bonner Maler Neesen; 1786 (16 J.). 2. Elisen-Miniatur von G. von Kügelgen in Mannheim; 1803 (33 J.). 3. Ölgemälde von Ferdinand Schimon; 1818 (48 J.). 4. Beethoven im eiligen Gang und Beethovenkopf. Zeichnung von Johann Peter Lyser; 1825. 5. Gesichtsmaske nach dem Leben von Franz Klein; 1812. 6. Totenmaske. 7. Faksimile des Anfangs des Heiligenstädter Testaments (6. Okt. 1802). 8. Faksimile des Anfangs vom 1. Satz der Klaviersonate Cis-Moll (erschienen 1802).",
    ),
  ],
  right: [],
};
