import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 502 · Scan 534 · Tafel Beethoven II */
export const PAGE_502: EncPage = {
  printed: 502,
  scanFile: 534,
  headerLeft: "Beet",
  headerRight: "Beethoven II",
  catchword: "Beethoven",
  scanSrc: "/scans/p502.jpg",
  left: [
    L(`<strong>Tafel: Beethoven II.</strong>`),
    N(
      "Tafel Beethoven II. Umgebung, Wohnstätten (Zuschnitt morgen). 1–2 Bildnisse aus den mittleren Lebensjahren. 3. Gräfin Therese Brunsvik, galt lange Zeit für Beethovens »Unsterbliche Geliebte«. 4. Neffe Karl van Beethoven. 5. Ignaz Schuppanzigh, der Geiger, mit dem Beethoven lange Jahre zusammen arbeitete. 6. Geburtshaus in Bonn. 7. Pasqualati-Haus in Wien (1804–1815). 8. Schwarzspanierhaus in Wien (Sterbehaus).",
    ),
  ],
  right: [],
};
