import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 461 · Scan 493 · Karte 131a Wittelsbachische Lande */
export const PAGE_461: EncPage = {
  printed: 461,
  scanFile: 493,
  headerLeft: "Baye",
  headerRight: "131a. Wittelsbachische Lande",
  catchword: "",
  scanSrc: "/scans/p461.jpg",
  left: [
    L(`<strong>Karte 131a. Wittelsbachische Lande im 13.–15.&nbsp;Jahrh.</strong>`),
    N(
      "Karte 131a: Wittelsbachische Lande (Zuschnitt morgen). Maßstab 1:7500000. Die Zahlen bezeichnen das Jahr der Erwerbung. Signaturen: Niederbayern, Oberbayern, Pfalz, Erwerbungen Ludwigs des Bayern, wittelsbachische Stammlande. Östl. Länge von Greenwich.",
    ),
  ],
  right: [
    N("Fortsetzung der historischen Karte (Pfalz, Niederlande, Brandenburg, Tirol)."),
  ],
};
