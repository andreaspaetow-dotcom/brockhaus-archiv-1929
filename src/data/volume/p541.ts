import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 541 · Scan 573 · Tafel Beleuchtung III */
export const PAGE_541: EncPage = {
  printed: 541,
  scanFile: 573,
  headerLeft: "Beleuchtung III",
  headerRight: "Bele",
  catchword: "Beleuchtung IV",
  scanSrc: "/scans/p541.jpg",
  left: [
    L(`<strong>Tafel: Beleuchtung III.</strong>`),
    N(
      "Tafel Beleuchtung III (Zuschnitt morgen). 1. Arbeitsplatzbeleuchtung: a mangelhafte Beleuchtung durch blendende Lampe; b gute Beleuchtung durch eine einstellbare Gelenklampe. 2. Saalbeleuchtung: a schlecht beleuchteter Stickereisaal durch frei aufgehängte Glühlampen; b gut beleuchteter Maschinensaal durch wenige lichtstarke, hoch aufgehängte Lampen (direkte Beleuchtung). 3. Innenraumbeleuchtung: a schlecht beleuchtetes Konferenzzimmer; b gut beleuchtet durch indirektes Licht. 4. Schaufensterbeleuchtung: a schlechte Beleuchtung durch frei aufgehängte Lampen; b gute Beleuchtung durch verdeckt angeordnete Lampen, gleichmäßige Aufhellung der Auslagen. 1–4 Körting & Mathiesen, Leipzig.",
    ),
  ],
  right: [],
};
