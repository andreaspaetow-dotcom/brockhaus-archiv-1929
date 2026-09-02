import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 227 · Scan 259 · Tafel Bahnhöfe II */
export const PAGE_227: EncPage = {
  printed: 227,
  scanFile: 259,
  headerLeft: "Bahn",
  headerRight: "Bahnhöfe II",
  catchword: "Bahn",
  scanSrc: "/scans/p227.jpg",
  left: [
    L(`<strong>Bahnhöfe II. Empfangsgebäude der Personenbahnhöfe.</strong>`),
    L(`1.&nbsp;Kopfbahnhof.`),
    L(`2.&nbsp;Durchgangsbahnhof.`),
    L(`3.&nbsp;Inselbahnhof.`),
    L(`4.&nbsp;Keilbahnhof.`),
  ],
  right: [
    L(`5.&nbsp;Turmbahnhof.`),
    L(`6.&nbsp;Vereinigter Kopf- und Durchgangsbahnhof.`),
    L(`7.&nbsp;Grundriß eines Empfangsgebäudes.`),
    N("Tafel Bahnhöfe II (Grundrisse). Zuschnitt folgt."),
  ],
};
