import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 615 · Scan 647 · Tafel Bergbau III */
export const PAGE_615: EncPage = {
  printed: 615,
  scanFile: 647,
  headerLeft: "Berg",
  headerRight: "Tafel Bergbau III",
  catchword: "Bergbau",
  scanSrc: "/scans/p615.jpg",
  left: [
    L(`<strong>Tafel: Bergbau III.</strong>`),
    N(
      "Tafel Bergbau III (Zuschnitt morgen). 1 Abziehen des gewonnenen Gutes von dem oberen Abbau durch ein Rolloch. 2 Förderung mit der Schüttelrutsche (Winkelmann, Essen). 3 Kahnförderung. 4 Streckenförderung mit Druckluftlokomotive (Demag, Duisburg).",
    ),
  ],
  right: [
    N(
      "Tafel Bergbau III (Forts.). 5 Ladestation (Demag, Duisburg). 6 Füllort mit pneumatischer Wageneinstoßvorrichtung (Demag, Duisburg). 7 Schachtzugang auf der Hängebank (Demag, Duisburg). 8 Kreiselwipper zum Entladen der vollen Wagen (Demag, Duisburg).",
    ),
  ],
};
