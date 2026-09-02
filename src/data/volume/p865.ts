import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 865 · Scan 908 · Tafel Blatt II */
export const PAGE_865: EncPage = {
  printed: 865,
  scanFile: 908,
  headerLeft: "Blatt II",
  headerRight: "Blatt",
  catchword: "Erklärung",
  scanSrc: "/scans/p865.jpg",
  left: [
    N(
      `Tafel Blatt II. Blattanatomie. 1–5 Blattanfägung (gestielt, sitzend, stengelumfassend, durchwachsen, verwachsen). 6 Oberhautstück mit Spaltöffnung. 7–12 Blattnervatur (parallel-, bogen-, netz-, fädig-dichotom). 13–16 Cuticula und Verteilung der Spaltöffnungen bei Dikotylen und Monokotylen.`,
    ),
  ],
  right: [
    N(
      `17–24 Haargebilde der Blätter (Schildhaar, Wollhaar, Drüsenhaar). 25 Endigung eines Blattnervs. 26–30 Querschnitte von Sonnen- und Schattenblatt, Unterwasserblatt ohne Spaltöffnungen. (Großer Brockhaus, Bd. 2.)`,
    ),
  ],
};
