import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 454 · Scan 486 · Karte 50 Bayern (Übersicht) */
export const PAGE_454: EncPage = {
  printed: 454,
  scanFile: 486,
  headerLeft: "Baye",
  headerRight: "50. Bayern",
  catchword: "",
  scanSrc: "/scans/p454.jpg",
  left: [
    L(`<strong>Karte 50. Bayern.</strong> Anschluß: Karte 49 (O Bayern).`),
    N(
      "Karte 50: Bayern, westl. Blatt (Zuschnitt morgen). Höhenschichten: über 2000&nbsp;m; 1000–2000; 700–1000; 500–700; 300–500; unter 300&nbsp;m. 11° östl. Länge v. Greenwich.",
    ),
  ],
  right: [
    N("Fortsetzung der Übersichtskarte Bayern (westl. Hochfläche, Alpenvorland, Schwaben)."),
  ],
};
