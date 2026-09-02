import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 798 · Scan 841 · Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts I */
export const PAGE_798: EncPage = {
  printed: 798,
  scanFile: 841,
  headerLeft: "Bildhauerkunst",
  headerRight: "Bild",
  catchword: "Tafel",
  scanSrc: "/scans/p798.jpg",
  left: [
    N(
      `Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts I. 1. Christian Rauch: Grabmal der Königin Luise (1815; Charlottenburg, Mausoleum im Schloßpark). 2. Antonio Canova: Pauline Borghese, Schwester Napoleons I. (1807; Rom, Galerie Borghese). 3. Gottfried Schadow: Gruppe der Kronprinzessin Luise und ihrer Schwester (1797; Berlin, Schloßmuseum). 4. Bertel Thorwaldsen: Gruppe der drei Grazien (nach 1800; Kopenhagen, Thorwaldsenmuseum).`,
    ),
  ],
  right: [
    N(
      `5. John Gibson (1790–1866): Gruppe der Psyche (Rom, Palazzo Corsini). 6. François Rude: Auszug der Freiwilligen von 1792 (Le chant du départ; seit 1832; Hochreliefgruppe am Triumphbogen in Paris). 7. Reinhold Begas: Neptunbrunnen in Berlin (1891). 8. Jean Baptiste Carpeaux: Der Tanz (1869; an der Schauseite der Großen Oper in Paris).`,
    ),
  ],
};
