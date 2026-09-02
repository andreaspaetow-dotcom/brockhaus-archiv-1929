import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 456 · Scan 488 · Karte 50b Berchtesgadener Land */
export const PAGE_456: EncPage = {
  printed: 456,
  scanFile: 488,
  headerLeft: "Baye",
  headerRight: "50b. Berchtesgadener Land",
  catchword: "",
  scanSrc: "/scans/p456.jpg",
  left: [
    L(`<strong>Karte 50b. Berchtesgadener Land.</strong>`),
    N(
      "Karte 50b: Berchtesgadener Land (Zuschnitt morgen). Maßstab 1:250000. Orts- und Bergnamen u. a. Berchtesgaden, Königssee, Watzmann, Hochkalter, Untersberg, Reiteralpe, Hoher Göll, Jenner, Hintersee, Weißbach, Teufelshorn.",
    ),
  ],
  right: [
    N("Fortsetzung der Karte 50b (südl. und östl. Hochalpenanteil)."),
  ],
};
