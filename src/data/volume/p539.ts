import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 539 · Scan 571 · Tafel Beleuchtung I */
export const PAGE_539: EncPage = {
  printed: 539,
  scanFile: 571,
  headerLeft: "Beleuchtung I",
  headerRight: "Bele",
  catchword: "Beleuchtung II",
  scanSrc: "/scans/p539.jpg",
  left: [
    L(`<strong>Tafel: Beleuchtung I.</strong>`),
    N(
      "Tafel Beleuchtung I (Zuschnitt morgen). 1. Beleuchtung mit direktem Licht. Der größte Teil des Lichts wird durch die obere Schale nach unten geworfen. Ein kleiner Teil dient zur Aufhellung der Decke. Ausgeprägte Schatten, aber hohe Beleuchtungsstärke auf der Arbeitsfläche. 2. Beleuchtung mit halb indirektem Licht. Der größte Teil des Lichtes wird durch die untere Opalglasschale nach der (weißen) Decke geworfen und von dort zurückgestrahlt. Der übrige Teil dringt nach unten durch. Weiche, angenehme Schatten. 3. Beleuchtung mit ganz indirektem Licht. Alles Licht wird nach der (weißen) Decke reflektiert und von dort zurückgeworfen. Die Decke ist der eigentliche Lichtspender. Nahezu schattenlos. 4. Innenraum-Luzette für direkte Beleuchtung. 5. Innenraum-Luzette für halb indirekte Beleuchtung. 6. Innenraum-Luzette für ganz indirekte Beleuchtung. 7. Tiefstrahler. 8. Breitstrahler. 9. Schrägstrahler. 1–3 Körting & Mathiesen, Leipzig; 4–9 Siemens-Schuckert, Berlin.",
    ),
  ],
  right: [],
};
