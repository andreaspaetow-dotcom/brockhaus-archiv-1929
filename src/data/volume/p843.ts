import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 843 · Scan 886 · Tafel Bismarck II */
export const PAGE_843: EncPage = {
  printed: 843,
  scanFile: 886,
  headerLeft: "Bismarck II",
  headerRight: "Bism",
  catchword: "zen",
  scanSrc: "/scans/p843.jpg",
  left: [
    N(
      `Tafel Bismarck II. 1. Schloß Schönhausen (Blick auf das Geburtszimmer). 2. Schloß Varzin. 3. Fürstin Johanna v. B. 4. Haus Friedrichsruh (Altan). 5. Der Lotse geht (Karikatur des »Punch« zu B.s Sturz). 6. B.s Studentenwohnung am Wall in Göttingen. 7. B. gibt dem Kladderadatsch seine drei Haare zurück (Karikatur des »Kladderadatsch« zu B.s Sturz).`,
    ),
  ],
  right: [
    N(
      `Bildfolge zu Leben und Sturz des Reichskanzlers: Stammsitz, pommersches Gut, Fürstin Johanna, Alterssitz Friedrichsruh, engl. Punch-Karikatur »Dropping the pilot«, Göttinger Corpswohnung und Abschied vom Kladderadatsch. (Großer Brockhaus, Bd. 2.)`,
    ),
  ],
};
