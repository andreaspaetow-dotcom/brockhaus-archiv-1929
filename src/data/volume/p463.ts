import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 463 · Scan 495 · Karte 131 Bayern, geschichtlich (Ost / Legende) */
export const PAGE_463: EncPage = {
  printed: 463,
  scanFile: 495,
  headerLeft: "Baye",
  headerRight: "131. Bayern, geschichtlich",
  catchword: "",
  scanSrc: "/scans/p463.jpg",
  left: [
    L(`<strong>Karte 131. Bayern, geschichtlich.</strong> Östlicher Blattteil mit Legende.`),
    N(
      "Karte 131, Fortsetzung (Zuschnitt morgen). Signaturen: Kurfürstentum Bayern; Kurpfalz; Herzogtum Zweibrücken; geistliche Gebiete; Reichsstädte; österreichische Gebiete; Ansbach-Bayreuth (1791 preuß.); Reichsritterschaftl. Gebiete; Gebiete der Fugger; übrige weltl. Herrschaften; Freistaat Coburg; Saargebiet 1919. Wichtigste wittelsbachische Stammlande = Besitz Ottos I. Zahlen: Jahr der Erwerbung, (1810) = Jahr der Abtretung. Maßstab 1:2000000. Kartographische Anstalt F. A. Brockhaus, Leipzig.",
    ),
  ],
  right: [
    N(
      "Abkürzungen: A. = Abtei, B. = Bistum, F. = Fürstentum, Gf. = Grafschaft, H. = Herrschaft, Hz. = Herzogtum, Lgf. = Landgrafschaft, Mgf. = Markgrafschaft.",
    ),
  ],
};
