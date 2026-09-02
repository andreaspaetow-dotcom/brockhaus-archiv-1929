import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 218 · Scan 250 · Tafel Bagger II */
export const PAGE_218: EncPage = {
  printed: 218,
  scanFile: 250,
  headerLeft: "Bagger II",
  headerRight: "Bagger",
  catchword: "festen",
  scanSrc: "/scans/p218.jpg",
  left: [
    L(`<strong>Bagger II.</strong>`),
    L(`1.&nbsp;Kabelbagger.`),
    L(`2.&nbsp;Brückenkabelbagger (Grube Vereinigte Ville).`),
    L(`3.&nbsp;Schwimmender Eimerkettenbagger.`),
  ],
  right: [
    L(`4.&nbsp;Saugbagger.`),
    L(`5.&nbsp;Schaufelradbagger.`),
    N("Tafel Bagger II (5 Abbildungen). Zuschnitt folgt."),
  ],
};
