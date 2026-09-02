import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 775 · Scan 818 · Tafel Biene und Bienenzucht II */
export const PAGE_775: EncPage = {
  printed: 775,
  scanFile: 818,
  headerLeft: "Biene",
  headerRight: "Bienenzucht",
  catchword: "den",
  scanSrc: "/scans/p775.jpg",
  left: [
    N(
      `Tafel Biene und Bienenzucht II. 1. Kasten: Albertis Blätterstock mit Hinterbehandlung; unten Brutraum, oben Honigraum. 2. Korb-Bienenstand: a Lüneburger Stülper, b Stabhorst-Stülper, c Korb mit flachem Dach für Kastenaufsatz, d Lüneburger Stülper. 3. Kasten: Gerstungsbeute, oben und hinten geöffnet; oben Honigraum mit Absperrgitter, unten Brutraum. Warmbauordnung. 4. Bienenhaus für Oberbehandlungs-Kästen. 5. Innere eines Bienenhauses für Ober- und Hinterbehandlung. 6. Zerlegbarer Wanderstand mit fünf Oberbehandlungskästen.`,
    ),
  ],
  right: [
    N(
      `7. Wanderbeute (Brutraum) geöffnet. 8. 2 hängende Futterballons im Nebenstock; der Futterteller ist in das Futterloch versenkt. 9. Absperrgitter. 10. Sonnenwachsschmelzer; Deckel geöffnet, oben Wachspfanne, darunter Wanne zur Aufnahme des geschmolzenen Wachses. 11. Wabenpresse. 12. Weiselkäfig mit Weisenzelle. 13. Futterrahmen.`,
    ),
  ],
};
