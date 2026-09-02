import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 609 · Scan 641 · Tafel Bergbau I */
export const PAGE_609: EncPage = {
  printed: 609,
  scanFile: 641,
  headerLeft: "Bergbau",
  headerRight: "Tafel Bergbau I",
  catchword: "Bergbau",
  scanSrc: "/scans/p609.jpg",
  left: [
    L(`<strong>Tafel: Bergbau I.</strong>`),
    N(
      "Tafel Bergbau I (Zuschnitt morgen). 1 Einfahrt. 2 Auf dem Wege zur Arbeitsstelle. 3 Vor Ort. 4 Abprobieren der Arbeitsstelle mit der Sicherheitslampe auf Schlagwetter hin.",
    ),
  ],
  right: [
    N(
      "Tafel Bergbau I (Forts.). 5 Hauer im steilen Flöz. 6 Abbau mit dem Abbauhammer. 7 Abbau mit der Säulenschrämmaschine. 8 Abbau mit der Kettenschrämmaschine. 1–4 Friemann & Wolf, Zwickau; 6–8 Demag, Duisburg.",
    ),
  ],
};
