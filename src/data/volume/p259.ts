import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 259 · Scan 291 · Karte 69a Südosteuropa: physische Verhältnisse */
export const PAGE_259: EncPage = {
  printed: 259,
  scanFile: 291,
  headerLeft: "Balk",
  headerRight: "Südosteuropa: physische Verhältnisse",
  catchword: "Balk",
  scanSrc: "/scans/p259.jpg",
  left: [
    L(`<strong>69a. Südosteuropa: physische Verhältnisse.</strong>`),
    L(
      `<strong>Niederschläge</strong> 1&nbsp;:&nbsp;20000000. unter 500&nbsp;mm; 500–750; 750–1000; 1000–1500; 1500–2000; über 2000. nach A.&nbsp;Hettner.`,
    ),
    L(
      `<strong>Temperaturen</strong> 1&nbsp;:&nbsp;20000000. Januar-Isotherme; Juli-Isotherme in C°. nach A.&nbsp;Hettner.`,
    ),
    L(
      `<strong>Geolog. Bau</strong> (Zeichenerklärung): kristalline Zonen und Massive; Kalkschollen; Gräben; Kalk; Horste; Flysch und Falten; Einbrüche; Tafelland; Verwerfungen; Alter Rumpf mit Tafeldecke; vulkan. Gebiete; Tertiär- und quartäres Hügelland; Anschwemmungstiefland. nach A.&nbsp;Hettner.`,
    ),
  ],
  right: [
    L(
      `<strong>Pflanzenkleid</strong> 1&nbsp;:&nbsp;20000000. Steppen; mediterrane Wälder u.&nbsp;Gebüsch; mitteleurop. sommergrüne Wälder; Nadelholzregion; Hochgebirgsregion. nach A.&nbsp;Hettner.`,
    ),
    N(
      "Karte 69a. Südosteuropa: physische Verhältnisse (vier thematische Kärtchen: Niederschläge, Temperaturen, geolog. Bau, Pflanzenkleid; Maßstab 1&nbsp;:&nbsp;20000000, nach A.&nbsp;Hettner). Zuschnitt morgen.",
    ),
  ],
};
