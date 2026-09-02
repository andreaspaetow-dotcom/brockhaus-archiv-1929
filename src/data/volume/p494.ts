import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 494 · Scan 526 · Tafel Beeren II */
export const PAGE_494: EncPage = {
  printed: 494,
  scanFile: 526,
  headerLeft: "Beer",
  headerRight: "Beeren II",
  catchword: "Beethoven",
  scanSrc: "/scans/p494.jpg",
  left: [
    L(`<strong>Tafel: Beeren II.</strong>`),
    N(
      "Tafel Beeren II. Farbtafel (Zuschnitt morgen). 13 Johannisbeeren: a rote, b weiße, c schwarze. 14 Maulbeere: a schwarze, b weiße. 15 Fruchttragender Zweig einer Brombeere. 16 Rubus phoenicolasius (Ostasien). 17 Ackerbeere des hohen Nordens (Rubus arcticus): a blühender Stengel, b Beere. 18 Moltebeere (Rubus chamaemorus), Nordeuropa: a unreife, b reife Frucht. 19 Erdbeere: a gewöhnliche Walderdbeere, b Beere, c Früchtchenlängsschnitt, d Himbeere, e Blatt der Gartenerdbeere, f Ananaserdbeere; a blüten- und fruchttragender Zweig, b Fruchtstandlängsschnitt. 20 (weitere Beerenzweige). 19c vergrößert.",
    ),
  ],
  right: [],
};
