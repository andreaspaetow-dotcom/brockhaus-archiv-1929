import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 448 · Scan 480 · Karte 49a Nürnberg und die Fränkische Schweiz */
export const PAGE_448: EncPage = {
  printed: 448,
  scanFile: 480,
  headerLeft: "Baye",
  headerRight: "49a. Nürnberg und die Fränkische Schweiz",
  catchword: "",
  scanSrc: "/scans/p448.jpg",
  left: [
    L(`<strong>Karte 49a. Nürnberg und die Fränkische Schweiz.</strong>`),
    N(
      "Karte 49a: Nürnberg und die Fränkische Schweiz (Zuschnitt morgen). Maßstab 1:250000. Ortsnamen u. a. Hersbruck, Hiltpoltstein, Forchheim, Erlangen, Schwabach, Rothenberg, Altdorf, Lauf, Pegnitz, Velden, Pottenstein, Gößweinstein, Streitberg, Muggendorf, Wendelstein.",
    ),
  ],
  right: [
    N("Fortsetzung der Karte 49a (östl. Blattteil)."),
  ],
};
