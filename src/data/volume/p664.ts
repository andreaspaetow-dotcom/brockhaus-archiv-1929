import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 664 · Scan 706 · Tafel Bernstein (Kunstgewerbe) */
export const PAGE_664: EncPage = {
  printed: 664,
  scanFile: 706,
  headerLeft: "Bernstein",
  headerRight: "Bernstein",
  catchword: "Bernstein",
  scanSrc: "/scans/p664.jpg",
  left: [
    L(
      `Pacht gegeben, seit 1837 aber meistbietend versteigert; und zwar meist an die anliegenden Strandbewohner, seit 1860 namentlich an die Firma Stantien & Becker in Königsberg. Gegen Zahlung eines Kaufpreises von etwa 9 Mill. M nahm der preuß. Fiskus den Betrieb 1899 in eigene Verwaltung.`,
    ),
    L(`<strong>Tafel: Bernstein.</strong>`),
    N(
      "Bernsteinarbeiten: 1 Altar (Danzig, 17. Jahrh.); 2–4 Perlen und Anhänger der Steinzeit; 5 Dose; 6 Leuchter; 7 Kästchen; 8 Statuette (von Dobbermann, um 1725, Boreas und Oreithyia); 9 Kruzifix; 10 Pokal; 11 Schachfigur; 12 Spielstein; 13 Reliefbildnis des Kurfürsten Friedrich&nbsp;III. von Brandenburg (Ende 17. Jahrh.); 14 Schale (17. Jahrh.); 15 Stockgriff (um 1700); 16 Dose (erste Hälfte des 18. Jahrh.); 17 Degengriff, einst im Besitz der Kaiserin Katharina&nbsp;II. von Rußland (Ende des 18. Jahrh.); 18 Tabaksdose (Anfang des 18. Jahrh.).",
    ),
    N(
      "8, 10 Aquileja, Museum; 13, 14 Berlin, Kunstgewerbemuseum; 1, 9 Dresden, Albertinum; 15 Hamburg, Museum für Kunst und Gewerbe; 16 Gotha, Museum; 17, 18 Leningrad, Eremitage.",
    ),
  ],
  right: [],
};
