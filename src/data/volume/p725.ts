import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 725 · Scan 767 · Tafel Beuteltiere I */
export const PAGE_725: EncPage = {
  printed: 725,
  scanFile: 767,
  headerLeft: "Beuteltiere I",
  headerRight: "Beuteltiere I",
  catchword: "Tafel",
  scanSrc: "/scans/p725.jpg",
  left: [
    N(
      `Tafel Beuteltiere I. 1. Tüpfelbeutelmarder (Dasyurus viverrinus); Körperlänge 40 cm. 2. Opossum (Didelphys virginiana); 47 bis 50 cm. 3. Schwimmbeutler (Chironectes minimus); 40 cm.`,
    ),
  ],
  right: [
    N(
      `4. Fuchskusu (Trichosurus vulpecula); 60 cm. 5. Eichhörnchenflugbeutler (Petaurus sciureus); etwa 20 cm. 6. Beutelwolf (Thylacinus cynocephalus); 100–130 cm.`,
    ),
  ],
};
