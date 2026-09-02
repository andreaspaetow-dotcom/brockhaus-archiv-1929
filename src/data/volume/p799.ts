import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 799 · Scan 842 · Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts II */
export const PAGE_799: EncPage = {
  printed: 799,
  scanFile: 842,
  headerLeft: "Bildhauerkunst",
  headerRight: "Bild",
  catchword: "Tafel",
  scanSrc: "/scans/p799.jpg",
  left: [
    N(
      `Tafel Bildhauerkunst des 19. u. 20. Jahrhunderts II. 1. Aristide Maillol (*1861): Statuette (Essen, Folkwangmuseum). 2. Auguste Rodin (1840–1917): Der Denker (1889; Paris, Luxembourgmuseum). 3. Max Klinger (1857–1920): Badendes Mädchen (Leipzig, Museum). 4. Constantin Meunier (1831–1905): Der Puddler (Brüssel, Museum).`,
    ),
  ],
  right: [
    N(
      `5. Joseph Lambeaux (1852–1908): Die Ringer (um 1890; Brüssel, Museum). 6. Georges Minne (*1866): Schlauchausgießer (Halle, Museum). 7. Adolf Hildebrand (1847–1921): Der Kugelspieler.`,
    ),
  ],
};
