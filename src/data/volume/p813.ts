import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 813 · Scan 856 · Tafel Bildwirkerei II */
export const PAGE_813: EncPage = {
  printed: 813,
  scanFile: 856,
  headerLeft: "Bildwirkerei",
  headerRight: "Bild",
  catchword: "bilinear",
  scanSrc: "/scans/p813.jpg",
  left: [
    N(
      `Tafel Bildwirkerei II. 1. Spätantike Wirkerei; Ägypten, 6.–7. Jahrh. n. Chr. (Berlin, Schloßmuseum). 2. Peruanische Wirkarbeit; Grabfund (Berlin, Völkerkunde-Museum). 3. Karlsteppich (Ausschnitt); romanische Arbeit, Niedersachsen, um 1220–1230 (Halberstadt, Dom).`,
    ),
  ],
  right: [
    N(
      `4. Himmelfahrt und Krönung Mariae; Brüssel, Meister Philipp, um 1510 (Berlin, Kunstgewerbemuseum). 5. Einhornteppich aus Schloß Boussac, Touraine; Anfang des 16. Jahrh. (Paris, Cluny-Museum).`,
    ),
  ],
};
