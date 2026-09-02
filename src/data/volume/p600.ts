import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 600 · Scan 632 · Tafel Berg II */
export const PAGE_600: EncPage = {
  printed: 600,
  scanFile: 632,
  headerLeft: "Berg",
  headerRight: "Tafel Berg II",
  catchword: "Beresina",
  scanSrc: "/scans/p600.jpg",
  left: [
    L(`<strong>Tafel: Berg II.</strong>`),
    N(
      "Tafel Berg II (Zuschnitt morgen). Bergformen: Tafelberge bei flachlagernden durchlässigen Sedimentgesteinen oder flachen Lavadecken; breite Rücken, Dome bei alten Massengesteinen und gefalteten Sedimenten; Türme, Zinnen, Zacken und Spitzen in brüchigem Dolomit und Kalk; Gratberge und Pyramiden (Matterhorn) in ehemals vergletscherten Hochgebirgen; unregelmäßige Kuppen bei Vulkanrestbergen; regelmäßige Kegel bei jungen Vulkanen (→Tafel Vulkane).",
    ),
  ],
  right: [
    N(
      "Tafel Berg II (Forts.). Bildunterschriften im Originalscan; Zuschnitt der Originalgrafiken morgen.",
    ),
  ],
};
