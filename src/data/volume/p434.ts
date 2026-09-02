import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 434 · Scan 466 · Tafel Baumwolle II */
export const PAGE_434: EncPage = {
  printed: 434,
  scanFile: 466,
  headerLeft: "Baum",
  headerRight: "Baumwolle II",
  catchword: "mehrungs",
  scanSrc: "/scans/p434.jpg",
  left: [
    L(`<strong>Tafel: Baumwolle II.</strong>`),
    N(
      "Tafel Baumwolle II. Fabrikationsverlauf in einer Baumwollspinnerei (Zuschnitt morgen). 1. Auflockern der Ballen durch Ballenbrecher. 2. Reinigen und Auflösen der Flocken in einer Schlagmaschine und Verdichten der Fasern zu einer Watteschicht auf dem der Schlagmaschine angeschlossenen Wickelapparat.",
    ),
  ],
  right: [
    N(
      "3. Krempeln (Reinigen und Ordnen der Einzelfasern) sowie Bandbildung durch Krempel. 4. Vergleichmäßigen und Gleichrichten des Bandes auf der Strecke. 5. Vorspinnen auf dem Flyer. 6. Fertigspinnen auf dem Selfaktor oder auf Ringspinnmaschinen.",
    ),
  ],
};
