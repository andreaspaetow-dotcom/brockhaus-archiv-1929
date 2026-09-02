import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 599 · Scan 631 · Tafel Berg I */
export const PAGE_599: EncPage = {
  printed: 599,
  scanFile: 631,
  headerLeft: "Berg",
  headerRight: "Tafel Berg I",
  catchword: "Berg",
  scanSrc: "/scans/p599.jpg",
  left: [
    L(`<strong>Tafel: Berg I.</strong>`),
    N(
      "Tafel Berg I (Zuschnitt morgen). 1 Galgengipfel, Maggen, spitzer Kegelberg im Urgestein. 2 Hohenzollern, Zeugenberg der Schwäbischen Alb. 3 Höfats, Kalkspitzen der bayerischen Voralpen. 4 Drei Zinnen, »Türme« und »Wände« im Dolomit, mit Schutthängen.",
    ),
  ],
  right: [
    N(
      "Tafel Berg I (Forts.). 5 Gurnigel, rundlicher Alpenberg im Faltungsland. 6 Mühlauskegel östl. der Stadt Mexiko, Aufschüttungsberg. 7 Mausberg, Altmühltal, von der Altmühl umflossener »Umlaufberg« (Phot. Prof. v. Drygalski, München).",
    ),
  ],
};
