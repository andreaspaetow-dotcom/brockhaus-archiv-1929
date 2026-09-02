import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 418 · Scan 450 · Tafel Baukeramik II */
export const PAGE_418: EncPage = {
  printed: 418,
  scanFile: 450,
  headerLeft: "Bauk",
  headerRight: "Baukeramik II",
  catchword: "",
  scanSrc: "/scans/p418.jpg",
  left: [
    L(`<strong>Tafel: Baukeramik II.</strong>`),
    N(
      "Tafel Baukeramik II (Zuschnitt morgen). 1. Monumentales Steinzeugrelief »Die Wäscherin«. 1895. Entwurf: Alexandre Charpentier, Ausführung: Müller & Cie., Paris. (Dresden, Albertinum). 2. Wartesaal im Bahnhof Berlin-Steglitz (Ausschnitt aus einer Mosaik-Keramik-Wandfüllung). 1912. Entwurf: J.&nbsp;Wackerle. 3. Brunnenanlage, Rathaus Berlin-Friedenau. 1914. Entwurf: Bildhauer Hosaeus.",
    ),
  ],
  right: [
    N(
      "4. Reklamehalle der Seifenfabrik Wahlsen. 1913. Entwurf: Ludw. Werthöver. 5. Deutsche Bank, Berlin, Verbindungsbrücke über die Straße (Teilansicht der Innenwand). 1913–14. Entwurf: Prof. Kaufmann. 6. Logenhalle in Beeck (Kevelaer) (Ausschnitt), 1924. Entwurf: Otto Gutsche. Ausführung von 3, 4: Ernst Teichert, Meißen; von 2, 5, 6: Staatl. Majolika-Manufaktur, Karlsruhe.",
    ),
  ],
};
