import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 812 · Scan 855 · Tafel Bildwirkerei I */
export const PAGE_812: EncPage = {
  printed: 812,
  scanFile: 855,
  headerLeft: "Bildwirkerei",
  headerRight: "Bild",
  catchword: "Tafel",
  scanSrc: "/scans/p812.jpg",
  left: [
    N(
      `Tafel Bildwirkerei I. Wandteppiche und Wirkereien: flämisch-niederländische, französische (Aubusson, Gobelin) und deutsche Arbeiten des 16.–18. Jahrhunderts.`,
    ),
  ],
  right: [
    N(
      `Darunter Teniers-Szenen, Aubusson-Wirkerei und weitere Folgen der Gobelinmanufaktur. (Großer Brockhaus, Bd. 2.)`,
    ),
  ],
};
