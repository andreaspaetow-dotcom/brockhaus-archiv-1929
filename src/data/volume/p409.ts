import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 409 · Scan 441 · Tafel Bauernhaus I */
export const PAGE_409: EncPage = {
  printed: 409,
  scanFile: 441,
  headerLeft: "Bauernhaus I",
  headerRight: "Baue",
  catchword: "",
  scanSrc: "/scans/p409.jpg",
  left: [
    L(`<strong>Tafel: Bauernhaus I.</strong>`),
    N(
      "Tafel Bauernhaus I (Zuschnitt morgen). Niederdeutsche Bauernhäuser: 1. u. 2. Niedersächsisches B., Außen- und Innenansicht. 3. Friesisches B. (Haubarg).",
    ),
  ],
  right: [
    N(
      "Mittel- und oberdeutsche Bauernhäuser: 4. Schwarzwaldhaus. 5. Hessisches B. 6. u. 7. Fränkische Formen (7. Unterelsaß). 8. Salzburger B.",
    ),
  ],
};
