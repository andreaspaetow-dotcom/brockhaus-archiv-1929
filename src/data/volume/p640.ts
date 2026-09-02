import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 640 · Scan 672 · Tafel Berlin II (Übersichtsplan) */
export const PAGE_640: EncPage = {
  printed: 640,
  scanFile: 672,
  headerLeft: "Berl",
  headerRight: "Berlin, Übersichtsplan",
  catchword: "Berlin",
  scanSrc: "/scans/p640.jpg",
  left: [
    L(`<strong>Tafel: Berlin, Übersichtsplan.</strong>`),
    N(
      "Übersichtsplan von Groß-Berlin (Zuschnitt morgen). Maßstab und Gradnetz; Vororte Staaken, Seeburg, Kladow, Pfaueninsel, Wannsee, Potsdam, Tegel, Buch, Köpenick, Schmöckwitz. Originalkarte im Scan.",
    ),
  ],
  right: [
    N(
      "Tafel Berlin, Übersichtsplan (Forts.). Straßenbahn- und Eisenbahnlinien; Originalkarte, Zuschnitt morgen.",
    ),
  ],
};
