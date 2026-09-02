import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 792 · Scan 835 · Tafel Bilderschrift I */
export const PAGE_792: EncPage = {
  printed: 792,
  scanFile: 835,
  headerLeft: "Bilderschrift",
  headerRight: "Bild",
  catchword: "Tafel",
  scanSrc: "/scans/p792.jpg",
  left: [
    N(
      `Tafel Bilderschrift I. 1. Erstes und zweites Viertel eines mexikanischen Tonalamatl (Cod. Vaticanus 3773); links der »Baum des Ostens« mit dem Vogel Quetzal (oben), dem Symbol der Fruchtbarkeit und Kostbarkeit; rechts der »Baum des Nordens« mit dem Adler (oben), dem Symbol der Dürre, des Todes und des Krieges; unten zehn der zwanzig 13tägigen Perioden des Tonalamatl, von links nach rechts: Krokodil, Wind, Haus, Eidechse, Schlange, Tod, Hirsch, Kaninchen, Wasser, Hund.`,
    ),
  ],
  right: [
    N(
      `2. Seite eines Maria-Tonalamatl (aus dem Codex Trocortesianus, Blatt 10); oben die Bezeichnungen der 13tägigen Perioden, darunter Ziffern (Punkt = 1, Strich = 5); unten Gottheiten, die zu den Tagen in Beziehung stehen.`,
    ),
  ],
};
