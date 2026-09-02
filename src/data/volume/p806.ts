import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 806 · Scan 849 · Tafel Bildnismalerei I */
export const PAGE_806: EncPage = {
  printed: 806,
  scanFile: 849,
  headerLeft: "Bildnismalerei",
  headerRight: "Bild",
  catchword: "Tafel",
  scanSrc: "/scans/p806.jpg",
  left: [
    N(
      `Tafel Bildnismalerei I. 1. Jan van Eyck (um 1390–1441): Der Mann mit den Nelken (Berlin, Kaiser-Friedrich-Museum). 2. Giorgione (1477 bis etwa 1511): Bildnis eines jungen Mannes (Berlin, Kaiser-Friedrich-Museum). 3. Rembrandt Harmensz van Rijn: Saskia mit der roten Blume (1641; Dresden, Gemäldegalerie).`,
    ),
  ],
  right: [
    N(
      `4. Antoine Pesne (1683–1757): Friedrich d. Gr. (1739; Berlin, Kaiser-Friedrich-Museum). 5. Vincent van Gogh (1853–90): Dr. Gachet (1890; Frankfurt am Main, Städelsches Institut). 6. Max Liebermann (*1847): Selbstbildnis (1909; Hamburg, Kunsthalle. Mit Genehmigung von Paul Cassirer, Berlin).`,
    ),
  ],
};
