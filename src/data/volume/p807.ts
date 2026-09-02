import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 807 · Scan 850 · Tafel Bildnismalerei II */
export const PAGE_807: EncPage = {
  printed: 807,
  scanFile: 850,
  headerLeft: "Bildnismalerei",
  headerRight: "Bild",
  catchword: "diesem",
  scanSrc: "/scans/p807.jpg",
  left: [
    N(
      `Tafel Bildnismalerei II. 1. Tizian: L'homme au gant (1518–22; Paris, Louvre). 2. Albrecht Dürer: Ratsherr Jakob Muffel (vor 1526; Berlin, Kaiser-Friedrich-Museum). 3. Hans Holbein d. J.: Georg Gisze (1532; Berlin, Kaiser-Friedrich-Museum). 4. François Clouet: Elisabeth von Österreich (um 1570; Paris, Louvre). 5. Frans Hals: Willem van Heythuysen (um 1630; Brüssel, Museum). 6. Anthon van Dyck (1599–1641): Marchese Spinola (Berlin, Kaiser-Friedrich-Museum).`,
    ),
  ],
  right: [
    N(
      `7. Diego de Silva Velazquez: Infantin Margarete (nach 1656; Wien, Kunsthistorisches Museum). 8. Sir Joshua Reynolds: Nelly O'Brien (1763; London, Wallace Collection). 9. Jean Auguste Dominique Ingres: Bertin (1832; Paris, Louvre). 10. Franz von Lenbach: Papst Leo XIII. (1885; München, Pinakothek). 11. Lovis Corinth: Eduard Meyer (1910–11; Hamburg, Kunsthalle). 12. Edvard Munch: Dänischer Schriftsteller (1908; Stockholm, Nationalmuseum).`,
    ),
  ],
};
