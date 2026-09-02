import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 542 · Scan 574 · Tafel Beleuchtung IV */
export const PAGE_542: EncPage = {
  printed: 542,
  scanFile: 574,
  headerLeft: "Bele",
  headerRight: "Beleuchtung IV",
  catchword: "Beleuchtung",
  scanSrc: "/scans/p542.jpg",
  left: [
    L(`<strong>Tafel: Beleuchtung IV.</strong>`),
    N(
      "Tafel Beleuchtung IV (Zuschnitt morgen). Straßenbeleuchtung (1–4): Tiefstrahler und Breitstrahler; Vergleich örtlicher Bodenbeleuchtung und Fassadenaufhellung. 5. Flutlicht- oder Fassadenbeleuchtung: Anleuchten von Gebäuden mit scheinwerferartigen Geräten. 6. Effektbeleuchtung: farbiges Licht, Leuchtröhren oder Glühlampen, die die Konturen eines Bauwerks, z. B. einer Brücke, hervorheben.",
    ),
  ],
  right: [],
};
