import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 407 · Scan 439 · Bauernhaus */
export const PAGE_407: EncPage = {
  printed: 407,
  scanFile: 439,
  headerLeft: "Bauernhaus",
  headerRight: "Baue",
  catchword: "Nordostholland",
  scanSrc: "/scans/p407.jpg",
  left: [
    L(
      `4)&nbsp;Das ostslawische B. mit zwei verschiedenen Formen, einmal einem ausgeprägten Niederhaus mit einem unmittelbar dem Erdboden aufsitzenden Bauwerk von geringer Höhe und vierflächigem Dach, vorherrschend in den Steppen, und dann bei den Nordgroßrussen einem Stockhaus, das auf Balkenwerk steht und im Unterraum Vorratskammer oder Viehstall einschließt.`,
    ),
    L(
      `der Raumlichkeiten (beim niedersächs. B. Dreschtenne im Mittelraum, Vieh in den Seitenschiffen, Ernte oben auf der Balkendecke, Abb.&nbsp;7–8; beim fries. B. Ernte im Mittelraum von unten auf, in einem Seitenschiff Großvieh, im andern Kleinvieh; Abb.&nbsp;9), außerdem hat das niedersächs. B. den Herdraum am Ende der Diele, die dort unter seitlicher Erweiterung Flett genannt wird, dahinter die Ofenstube (als heites`,
    ),
    N(
      "Abb. Bauernhaus: 7–8 niedersächs. Bauernhäuser (7 Aufriß; 8 Grundriß); 9 fries. Bauernhaus (Grundriß); 10–12 mittel- und oberdeutsche Bauernhäuser (10 Schwarzwaldhaus, Grundriß; 11 Einheitshaus, Blockhaus aus Hessen; 12 Vielhaus aus dem Kreiswalde Sachsen); 13–14 ostdeutsches Bauernhaus (13 Grundriß; 14 Aufriß).",
    ),
  ],
  right: [
    L(
      `5)&nbsp;Unter den deutschen Bauernhäusern (Karte 37a) lassen sich folgende Gruppen unterscheiden:`,
    ),
    L(
      `a)&nbsp;Das niederdeutsche B., ein Einhaus (Einheitshaus), mit zwei Hauptformen, der niedersächsischen (Tafel I, Abb.&nbsp;1–2) und friesischen (I, 3). Beiden Hauptformen ist gemeinsam die Dreischiffigkeit von Grundriß und Aufbau (ein hohes Mittelschiff und zwei niedrige angeklappte Seitenschiffe), die konstruktive Bedeutung der hohen Ständer am Mittelschiff als Hauptträger, die Lage des Wohnteils am unteren Giebelende (Abb.&nbsp;7–9); verschieden dagegen ist bei beiden Hauptformen die Benutzung der Raumlichkeiten (beim niedersächs. B. Dreschtenne im Mittelraum, Vieh in den Seitenschiffen, Ernte oben auf der Balkendecke; beim fries. B. Ernte im Mittelraum von unten auf). Das niedersächs. B. hat den Herdraum am Ende der Diele (Flett), dahinter die Ofenstube (Ergebnis mittel- und oberdeutschen Einflusses), während das fries. B. die Kammer mit dem Kamin roman. Herkunft erhielt. Das Gebiet des Niedersachsenhauses umfaßt den Niederrhein nebst Ostholland, Westfalen, Nordhessen, Hannover (→Altes Land, Abb.), Holstein, Mecklenburg und Pommern (nur die Küste); durchweg mit niedrigen Seitenschiffen, »Kübbungen«, versehen (Kübbungshaus), hat es in Südwestfalen und dem Leineberglande die hohen Außenwände des benachbarten mitteldeutschen Hauses übernommen, so daß im Querschnitt vier gleich hohe Ständerreihen erscheinen (Vierständerhaus). Das fries. B. beherrscht`,
    ),
  ],
};
