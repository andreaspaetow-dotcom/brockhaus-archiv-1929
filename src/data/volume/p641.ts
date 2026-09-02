import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 641 · Scan 673 · Tafel Berlin III (innere Stadt) */
export const PAGE_641: EncPage = {
  printed: 641,
  scanFile: 673,
  headerLeft: "Berlin",
  headerRight: "Tafel Berlin, innere Stadt",
  catchword: "Berlin",
  scanSrc: "/scans/p641.jpg",
  left: [
    L(`<strong>Tafel: Berlin, innere Stadt.</strong>`),
    N(
      "Plan der inneren Stadt Berlin (Zuschnitt morgen). Spreeinsel, Schloß, Lustgarten, Unter den Linden, Friedrichstadt, Gendarmenmarkt, Museumsinsel. Originalkarte im Scan.",
    ),
  ],
  right: [
    N(
      "Tafel Berlin, innere Stadt (Forts.). Originalkarte; Zuschnitt morgen. Verzeichnis der im Plan enthaltenen Namen folgt S. 642.",
    ),
  ],
};
