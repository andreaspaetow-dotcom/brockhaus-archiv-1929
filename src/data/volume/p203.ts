import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 203 · Scan 235 · Tafel Bad I */
export const PAGE_203: EncPage = {
  printed: 203,
  scanFile: 235,
  headerLeft: "Bad I",
  headerRight: "Bad",
  catchword: "Dampfbade",
  scanSrc: "/scans/p203.jpg",
  left: [
    L(`<strong>Bad I.</strong>`),
    L(
      `1.&nbsp;Marmorwannen im Gymnasium zu Priene in Kleinasien.`,
    ),
    L(`2.&nbsp;Römische Thermenanlage (Grundriß).`),
    L(`3.&nbsp;Judenbad (Mikwe) in Speyer.`),
    L(`4.&nbsp;Maurisches Bad in Spanien.`),
    L(`5.&nbsp;Bad des Fuggerhauses in Augsburg (1570).`),
  ],
  right: [
    N(
      "Tafel Bad I (8 Abbildungen). Standorte und Maßstäbe im Original. Zuschnitt folgt.",
    ),
  ],
};
