import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 616 · Scan 648 · Tafel Bergbau IV–V */
export const PAGE_616: EncPage = {
  printed: 616,
  scanFile: 648,
  headerLeft: "Berg",
  headerRight: "Tafel Bergbau IV. V",
  catchword: "Bergbau",
  scanSrc: "/scans/p616.jpg",
  left: [
    L(`<strong>Tafel: Bergbau IV. V.</strong>`),
    N(
      "Tafel Bergbau IV–V (Zuschnitt morgen). Schnitt durch ein Steinkohlenbergwerk. Ausrichtung und Vorrichtung der Lagerstätten: 15 Steinkohlenflöze, 12 Bohrloch, 6 Schacht, 39 Schachtab, mit taubem Gestein (Berge) ausgefüllte Abbaue, 27 Hereinbrechen von Kohle, 17 zu Bruch gegangene Förderstrecke, 24 Abdämmung eines Flözes. — Förderung: 1 Kesselhaus, Fördermaschine, 3 Förderturm, 4 Hängebank, 6 Förderschacht, 13 Lokomotive, 30 Mannschaftsförderung (Ausfahrt), 31 Hauptstreckenförderung durch Pferde, 32 Kettelförderung.",
    ),
  ],
  right: [
    N(
      "Tafel Bergbau IV–V (Forts.). Wasserhaltung: 35 unterirdische Pumpenanlage, 36 Schachtsumpf, 7 Kesselhaus, 19 Dampfleitung zur Wasserhaltungsmaschine, 20 Steigleitung für das Grubenwasser. Wetterführung: 11 Wetterschacht, 8 Ventilator mit Wetterkanal, 10 Verschluß des Wetterschachtes, 14 Wetterkanal nach dem Ventilator, 33 Hochbrechen des Wetterschachtes von Sohle III. Abbau: 26 flacher Abbau, 23 Abbau in absteigender Richtung. Gewinnung: 5 Druckluftanlage, 18 Druckluftleitung zu den Gewinnungsmaschinen. 21 Querschläge, 9 Pinge.",
    ),
  ],
};
