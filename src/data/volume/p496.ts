import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 496 · Scan 528 · Tafel Beethoven II */
export const PAGE_496: EncPage = {
  printed: 496,
  scanFile: 528,
  headerLeft: "Beet",
  headerRight: "Beethoven II",
  catchword: "Bedja",
  scanSrc: "/scans/p496.jpg",
  left: [
    L(`<strong>Tafel: Beethoven II.</strong>`),
    N(
      "Tafel Beethoven II. Umgebung und Zeitgenossen (Zuschnitt morgen). Bildnisse aus den mittleren Lebensjahren; Gräfin Therese Brunsvik (galt lange Zeit für Beethovens »Unsterbliche Geliebte«); Neffe Karl van Beethoven; Ignaz Schuppanzigh u.&nbsp;a. Personen aus Beethovens Kreis.",
    ),
  ],
  right: [],
};
