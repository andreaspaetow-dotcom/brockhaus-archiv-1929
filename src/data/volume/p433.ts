import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 433 · Scan 465 · Tafel Baumwolle I */
export const PAGE_433: EncPage = {
  printed: 433,
  scanFile: 465,
  headerLeft: "Baumwolle I",
  headerRight: "Baum",
  catchword: "",
  scanSrc: "/scans/p433.jpg",
  left: [
    L(`<strong>Tafel: Baumwolle I.</strong>`),
    N(
      "Tafel Baumwolle I (Zuschnitt morgen). 1. Baumwollplantage, die zur Bekämpfung von Schädlingen von einem Flugzeug mit einem Rauchschleier von Kaliumarsen belegt wird. 2. Plantage zur Erntezeit. 3. Abwiegen der geernteten Baumwolle. 4. Abernten einer noch jungen Plantage mit Erntemaschine.",
    ),
  ],
  right: [
    N(
      "5. Amerikanische Erntemaschine, deren seitliche Luftröhren die Baumwolle einsaugen. 6. Durchsehen und Verpacken der Baumwolle in Ägypten. 7. Baumwolldampfer auf dem Mississippi. 8a südamerikanischer Baumwollballen (124×50×43&nbsp;cm), 8b ägyptischer (130×80×56&nbsp;cm), 8c ostindischer (100×60×60&nbsp;cm).",
    ),
  ],
};
