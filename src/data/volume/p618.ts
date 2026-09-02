import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 618 · Scan 650 · Tafel Bergbau VI */
export const PAGE_618: EncPage = {
  printed: 618,
  scanFile: 650,
  headerLeft: "Bergbau",
  headerRight: "Tafel Bergbau VI",
  catchword: "Bergbau",
  scanSrc: "/scans/p618.jpg",
  left: [
    L(`<strong>Tafel: Bergbau VI.</strong>`),
    N(
      "Tafel Bergbau VI (Zuschnitt morgen). Tagesanlagen und Schachtförderung: Fördergerüst, Seilscheibe, Fördermaschine, Förderkorb in mehreren Etagen, Pumpenkammer unter Tage. Originalgrafiken im Scan.",
    ),
  ],
  right: [
    N(
      "Tafel Bergbau VI (Forts.). Originalgrafiken; Zuschnitt morgen.",
    ),
  ],
};
