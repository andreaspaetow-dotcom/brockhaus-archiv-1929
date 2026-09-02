import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 726 · Scan 768 · Tafel Beuteltiere II */
export const PAGE_726: EncPage = {
  printed: 726,
  scanFile: 768,
  headerLeft: "Beuteltiere II",
  headerRight: "Beuteltiere II",
  catchword: "Gewerbe",
  scanSrc: "/scans/p726.jpg",
  left: [
    N(
      `Tafel Beuteltiere II. 1. Koala, Beutelbär (Phascolarctos cinereus). 2. Wombat (Phascolomys wombat). 3. Felsenkänguruh (Petrogale penicillata).`,
    ),
  ],
  right: [
    N(
      `4. Riesenkänguruh (Macropus giganteus). 5. Baumkänguruh (Dendrolagus). 6. Beutelmaulwurf, Beutelmull (Notoryctes typhlops).`,
    ),
  ],
};
