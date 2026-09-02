import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 495 · Scan 527 · Tafel Beethoven I */
export const PAGE_495: EncPage = {
  printed: 495,
  scanFile: 527,
  headerLeft: "Beethoven I",
  headerRight: "Beet",
  catchword: "Beethoven",
  scanSrc: "/scans/p495.jpg",
  left: [
    L(`<strong>Tafel: Beethoven I.</strong>`),
    N(
      "Tafel Beethoven I (Zuschnitt morgen). 1. Schattenriß vom Bonner Maler Neesen; 1786 (16 J.). 2. Elisen-Miniatur von G. von Kügelgen in Mannheim; 1803 (33 J.). 3. Ölgemälde von Ferdinand Schimon; 1818 (48 J.). 4. Beethoven, nach dem Gemälde von Waldmüller, 1823. 5. Beethoven auf dem Sterbebett. Zeichnung von J. Danhauser, 1827. 6. Totenmaske, 27. März 1827. 7. Beethoven-Denkmal in Wien von Zumbusch, 1880. 8. Autograph der Sonate in Cis-Moll (erschienen 1802).",
    ),
  ],
  right: [],
};
