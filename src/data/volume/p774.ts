import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 774 · Scan 817 · Tafel Biene und Bienenzucht I */
export const PAGE_774: EncPage = {
  printed: 774,
  scanFile: 817,
  headerLeft: "Biene",
  headerRight: "Bienenzucht",
  catchword: "Tafel",
  scanSrc: "/scans/p774.jpg",
  left: [
    N(
      `Tafel Biene und Bienenzucht I. 1. Zunge der Arbeitsbiene. 2. Fühler der Arbeitsbiene. 3. Putzscharte am Vorderbein der Arbeitsbiene. 4. Hinterbein mit Körbchen (a) der Arbeitsbiene. 5. a Honigblase, b Ventiltrichter, c vorderer Teil des Mitteldarms. 6. Stachelapparat: a Giftdrüse, b Giftblase, c Schmierdrüse, d Chitinplatten für Muskelansatz, e Stachelscheide, f Stechborsten.`,
    ),
  ],
  right: [
    N(
      `7. a Teil des Hinterflügels mit Häkchen, b Teil des Vorderflügels mit Haftfalte. 8. Eine der beiden Stechborsten mit Seitentasche. 9. Königin, von Arbeitsbienen gefüttert. 10. Brutnestordnung: a Brutbezirk, b Pollenkranz, c Honigkranz. 11. Schwarmtraube. 12. a Larve, b Puppe. 13. Wintertraube (Blick in einen umgelegten Bienenkorb, oben Waben). 1–4, 7, 8 Mikrophotographie; 5, 6, 12 nach Modell.`,
    ),
  ],
};
