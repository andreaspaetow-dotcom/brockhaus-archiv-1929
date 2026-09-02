import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 734 · Scan 777 · Tafel Bewässerung */
export const PAGE_734: EncPage = {
  printed: 734,
  scanFile: 777,
  headerLeft: "Bewässerung",
  headerRight: "Bewässerung",
  catchword: "Sonne",
  scanSrc: "/scans/p734.jpg",
  left: [
    N(
      `Tafel Bewässerung. 1. Grabeneinstau (Grabenstaubau). 2. Furchenberieselung. 3. Stauberieselung. 4. Grabenüberstau (Überstauung, Stauwiesenbau).`,
    ),
  ],
  right: [
    N(
      `5. Hangbau und Rückenbau beim Wiesenrieseln. 6–7. Beregnung: Stammrohrleitung, fliegende Feldleitungen und Streudüsen (fahr- oder tragbare Beregnungsgeräte).`,
    ),
  ],
};
