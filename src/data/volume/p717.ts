import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 717 · Scan 759 · Tafel Bett */
export const PAGE_717: EncPage = {
  printed: 717,
  scanFile: 759,
  headerLeft: "Bett",
  headerRight: "Bett",
  catchword: "bestimmte",
  scanSrc: "/scans/p717.jpg",
  left: [
    N(
      `Tafel Bett. 1.&nbsp;Ägyptisches Goldbett (Berlin, Ägypt. Museum). 2.&nbsp;Bronzenes römisches Bettgestell aus Pompeji (Berlin, Antiquarium). 3.&nbsp;Mittelalterliches deutsches Bett, 12.&nbsp;Jahrh. (aus Herrad von Landsbergs »Hortus deliciarum«). 4.&nbsp;Frühgotisches deutsches B., 13.&nbsp;Jahrh. (Wiederherstellung nach einem Relief).`,
    ),
  ],
  right: [
    N(
      `5.&nbsp;Italienisches B., 1.&nbsp;Hälfte 15.&nbsp;Jahrh. (nach einem Gemälde). 6.&nbsp;Gotisches deutsches halbes Himmelbett, 16.&nbsp;Jahrh. (Nürnberg, Germ. Museum). 7.&nbsp;Deutsches Himmelbett, 16.&nbsp;Jahrh. (Nürnberg, Germ. Museum). 8.&nbsp;Französisches B., Stil Ludwigs&nbsp;XVI., Ende 18.&nbsp;Jahrh. (B. der Marie Antoinette im Schloß zu Fontainebleau). 9.&nbsp;Französisches B., Stil der Empirezeit, 18.&nbsp;Jahrh. (B. Talleyrands, Mahagoni mit Bronzebeschlägen, Paris, Ministerium des Äußeren).`,
    ),
    L(
      `bestimmte Lagerstatt. (Hierzu Tafel.) Fortsetzung des Artikels auf dem folgenden Blatt.`,
    ),
  ],
};
