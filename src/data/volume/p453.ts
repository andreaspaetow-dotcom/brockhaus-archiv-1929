import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 453 · Scan 485 · Karte 50a Allgäuer Alpen */
export const PAGE_453: EncPage = {
  printed: 453,
  scanFile: 485,
  headerLeft: "Baye",
  headerRight: "50a. Allgäuer Alpen",
  catchword: "",
  scanSrc: "/scans/p453.jpg",
  left: [
    L(`<strong>Karte 50a. Allgäuer Alpen.</strong>`),
    N(
      "Karte 50a: Allgäuer Alpen (Zuschnitt morgen). Maßstab 1:250000. Orts- und Bergnamen u. a. Oberstdorf, Immenstadt, Sonthofen, Hindelang, Nebelhorn, Mädelegabel, Hochvogel, Widderstein, Hoher Ifen.",
    ),
  ],
  right: [
    N("Fortsetzung der Karte 50a (östl. Blattteil)."),
  ],
};
