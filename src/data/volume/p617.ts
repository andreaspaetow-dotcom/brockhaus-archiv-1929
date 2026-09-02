import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 617 · Scan 649 · Tafel Bergbau IV–V (Legende, Forts.) */
export const PAGE_617: EncPage = {
  printed: 617,
  scanFile: 649,
  headerLeft: "Bergbau",
  headerRight: "Tafel Bergbau IV–V",
  catchword: "Bergbau",
  scanSrc: "/scans/p617.jpg",
  left: [
    L(`<strong>Tafel: Bergbau IV–V</strong> (Legende, Forts.).`),
    N(
      "Schnitt durch ein Steinkohlenbergwerk (Zuschnitt morgen). In IV Sohlen, 21 Querschläge, 9 Pinge. — Abbau: 26 flacherer Abbau, 23 Abbau in absteigender Richtung, 16 mit taubem Gestein versetzte Abbaue. — Gewinnung: 5 Druckluftanlage, 18 Druckluftleitung zu den Gewinnungsmaschinen, 37, 38 Gewinnung mit Abbauhammer.",
    ),
  ],
  right: [
    N(
      "Förderung: 22 Füllort, 25 gefüllte Wagen zur Förderung über Tage, 28 Bremsbergförderung, 29 Streckenförderung mit Druckluftlokomotive. — Wasserhaltung: 7 Kesselhaus, 19 Dampfleitung zur Wasserhaltungsmaschine, 20 Steigleitung für das Grubenwasser. Wetterführung: 10 Verschluß des Wetterschachtes, 14 Wetterkanal nach dem Ventilator, 33 Hochbrechen des Wetterschachtes von Sohle III.",
    ),
  ],
};
