import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 417 · Scan 449 · Tafel Baukeramik I */
export const PAGE_417: EncPage = {
  printed: 417,
  scanFile: 449,
  headerLeft: "Baukeramik I",
  headerRight: "Bauk",
  catchword: "",
  scanSrc: "/scans/p417.jpg",
  left: [
    L(`<strong>Tafel: Baukeramik I.</strong>`),
    N(
      "Tafel Baukeramik I (Zuschnitt morgen). 1. Susa, Palast der Perserkönige, Fries mit schreitenden Kriegern. 4.&nbsp;Jahrh. v.&nbsp;Chr. (Paris, Louvre). 2. Fliesenfeld. 16.&nbsp;Jahrh. (Konia, Medresse Karatai). 3. Rathaus zu Tangermünde. 15.&nbsp;Jahrh.",
    ),
  ],
  right: [
    N(
      "4. Stirnziegel (Antefix) eines etrusk. Tempels. 6.&nbsp;Jahrh. v.&nbsp;Chr. (Berlin, Antiquarium). 5. Altaraufsatz. 15.&nbsp;Jahrh. (Florenz, S.&nbsp;Miniato). 6. Luca della Robbia: Madonna. 15.&nbsp;Jahrh. (Florenz, Museo Nazionale).",
    ),
  ],
};
