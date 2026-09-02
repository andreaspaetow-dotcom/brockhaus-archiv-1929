import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 226 · Scan 258 · Tafel Bahnhöfe I */
export const PAGE_226: EncPage = {
  printed: 226,
  scanFile: 258,
  headerLeft: "Bahn",
  headerRight: "Bahnhöfe I",
  catchword: "Bahn",
  scanSrc: "/scans/p226.jpg",
  left: [
    L(`<strong>Bahnhöfe I.</strong>`),
    L(`1.&nbsp;Abstellbahnhof.`),
    L(`2.&nbsp;Lageplan eines Güterbahnhofs.`),
    L(`3.&nbsp;Verschiebebahnhof (Ablaufbahnhof): A Grundriß, B Längsschnitt.`),
  ],
  right: [
    L(`4.&nbsp;Verschiebebahnhof (Gefällbahnhof).`),
    L(`5.&nbsp;Lokomotivbahnhof.`),
    N("Tafel Bahnhöfe I (5 Lagepläne). Zuschnitt folgt."),
  ],
};
