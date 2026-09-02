import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 842 · Scan 885 · Tafel Bismarck I */
export const PAGE_842: EncPage = {
  printed: 842,
  scanFile: 885,
  headerLeft: "Bismarck I",
  headerRight: "Bism",
  catchword: "Tafel",
  scanSrc: "/scans/p842.jpg",
  left: [
    N(
      `Tafel Bismarck I. Otto Fürst von Bismarck, Reichskanzler. Porträt nach Lenbach: stehend, in der Uniform des Kürassier-Regiments Magdeburg Nr. 7, mit Pickelhaube, umgürtetem Säbel, Ordensstern und Band. (Großer Brockhaus, Bd. 2.)`,
    ),
  ],
  right: [
    N(
      `Der Reichskanzler im Feldgrau des Magdeburger Kürassiers, der Blick nach vorn, die Rechte am Säbelgriff. Nach dem Gemälde von Franz von Lenbach.`,
    ),
  ],
};
