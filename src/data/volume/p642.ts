import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 642 · Scan 674 · Berlin, Planverzeichnis */
export const PAGE_642: EncPage = {
  printed: 642,
  scanFile: 674,
  headerLeft: "Berl",
  headerRight: "Berlin, Planverzeichnis",
  catchword: "Berlin",
  scanSrc: "/scans/p642.jpg",
  left: [
    L(
      `<strong>Verzeichnis der im Plan enthaltenen Namen,</strong> soweit sie außerhalb des Planes »Berlin, innere Stadt« liegen.`,
    ),
    N(
      "Planverzeichnis Groß-Berlin (Zuschnitt morgen). Originalkarte S. 640; Auswahl der wichtigsten Ortsnamen mit Planquadraten.",
    ),
    L(
      `Adlershof F3. Ahrensfelde FG2. Alt-Glienicke F3/4. Auguste-Viktoria-Krankenhaus D3. Bahnhof Charlottenburg C2; Grunewald BC3; Heiligensee BC1; Spandau-Johannisstift AB2; Teltow C4. Berlin-Spandauer Schiffahrtskanal C2. Biesdorf F2. Biologische Anstalt C3. Botanischer Garten C3. Buch E1. Charlottenburg C2. Cladow A3. Köpenick FG3. Dahme G3/4. Grunewald BC3. Havelberg B3. Heiligensee B1. Hohenschönhausen EF2. Jungfernheide C2. Kreuzberg D3. Lichtenberg EF2. Lichterfelde C3. Müggelberge G3/4. Müggelsee GH3. Neukölln E3. Pankow DE2. Pfaueninsel A3. Reinickendorf D2. Schmöckwitz GH4. Schöneberg D3. Siemensstadt C2. Spandau B2. Staaken A2. Steglitz CD3. Tegel C1/2. Tegeler See C2. Teltowkanal B/F4/3. Tempelhof DE3. Treptow E3. Wannsee AB3/4. Wedding D2. Weißensee E2. Wilmersdorf C3. Wittenau C1. Zehlendorf BC3. Zentralflughafen D3. Zitadelle Spandau B2.`,
    ),
  ],
  right: [
    L(`<em>Verwaltungsbezirke von Groß-Berlin</em> (Planquadrate).`),
    L(
      `I Mitte D2. II Tiergarten D2. III Wedding D2. IV Prenzlauer Berg E2. V Friedrichshain E2. VI Kreuzberg D3. VII Charlottenburg C2. VIII Spandau B2. IX Wilmersdorf B3. X Zehlendorf C3. XI Schöneberg D3. XII Steglitz CD3. XIII Tempelhof D3. XIV Neukölln E3. XV Treptow F3. XVI Köpenick G3. XVII Lichtenberg F2. XVIII Weißensee E2. XIX Pankow E1. XX Reinickendorf C1.`,
    ),
    N(
      "Vollständiges Ortsverzeichnis im Scan (mehrere hundert Namen mit Planquadraten); Zuschnitt morgen.",
    ),
  ],
};
