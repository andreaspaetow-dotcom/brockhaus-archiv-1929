import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 217 · Scan 249 · Tafel Bagger I */
export const PAGE_217: EncPage = {
  printed: 217,
  scanFile: 249,
  headerLeft: "Bagger I",
  headerRight: "Bagger",
  catchword: "Bagger",
  scanSrc: "/scans/p217.jpg",
  left: [
    L(`<strong>Bagger I.</strong>`),
    L(`1.&nbsp;Eimerkettenbagger.`),
    L(`2.&nbsp;Eimerkettenbagger (Hoch- und Tiefbagger).`),
    L(`3.&nbsp;Schrämbagger.`),
  ],
  right: [
    L(`4.&nbsp;Löffelbagger.`),
    L(`5.&nbsp;Greiferbagger.`),
    N("Tafel Bagger I (5 Abbildungen). Zuschnitt folgt."),
  ],
};
