import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 864 · Scan 907 · Tafel Blatt I */
export const PAGE_864: EncPage = {
  printed: 864,
  scanFile: 907,
  headerLeft: "Blatt I",
  headerRight: "Blatt",
  catchword: "Tafel",
  scanSrc: "/scans/p864.jpg",
  left: [
    N(
      `Tafel Blatt I. Blattformen und Blattumbildungen. 1–7 einfaches Laubblatt (Zitterpappel, Schwarzpappel, Linde, Ampfer, Pfeilkraut, Haselwurz, Kapuzinerkresse). 8–12 Niederblätter, Knospenschuppen, Hochblätter. 13–16 Blatteile und Blattnebengebilde (Nebenblätter, Blattscheide, Ligula).`,
    ),
  ],
  right: [
    N(
      `17–20 Blattentwicklung am Vegetationskegel. 21–24 Blattumbildungen (sukkulente Speicherblätter, Zwiebelschuppen, Blattdornen der Berberitze, Blattranken der Erbse). 25 Blattrandformen. 26–34 Blattgliederung (einfach, dreiteilig, gefingert, handförmig, gefiedert, fußförmig). (Großer Brockhaus, Bd. 2.)`,
    ),
  ],
};
