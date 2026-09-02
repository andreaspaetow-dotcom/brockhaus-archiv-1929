import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 731 · Scan 773 · Tafel Bevölkerung (Karte 10) */
export const PAGE_731: EncPage = {
  printed: 731,
  scanFile: 773,
  headerLeft: "Bevölkerung",
  headerRight: "Bevölkerung",
  catchword: "Karte",
  scanSrc: "/scans/p731.jpg",
  left: [
    N(
      `Karte 10. Bevölkerungsdichte der Erde. Die Karte veranschaulicht die ungleiche Verteilung der Menschen über die Erdteile: dichte Besiedlung in Mittel- und Westeuropa, Ostasien und Indien, geringe Dichte in den Polar- und Wüstengebieten sowie in großen Teilen Afrikas, Australiens und des inneren Asiens.`,
    ),
  ],
  right: [
    N(
      `Erläuterung zur Dichtekarte. Stufen der Einwohnerzahl auf 1 qkm; Städte über 100000 E. Besonders dichte Räume: Mitteleuropa, Ganges- und Jangtsebecken, Japan. Dünn besiedelt: Sahara, Arabien, Innerasien, Amazonasbecken, Australien. (Hierzu Karte 10 a: Bevölkerungswachstum seit 1800.)`,
    ),
  ],
};
