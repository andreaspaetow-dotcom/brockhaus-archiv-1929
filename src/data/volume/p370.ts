import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 370 · Scan 402 · Basel (Stadt) */
export const PAGE_370: EncPage = {
  printed: 370,
  scanFile: 402,
  headerLeft: "Base",
  headerRight: "Basel",
  catchword: "der",
  scanSrc: "/scans/p370.jpg",
  left: [
    L(
      `genannt: die Predigerkirche (1269 vollendet), die Barfüßerkirche (14.&nbsp;Jahrh.), die St.-Leonhards-Kirche (15.&nbsp;Jahrh.), die 1856–65 in spätgot. Stil erbaute Elisabethkirche, die Matthäuskirche in Kleinbasel (1896) und die neue katholische Kirche (1927). An weltl. Bauten verdienen Erwähnung das Rathaus (1508–27 erbaut, zuletzt 1900–03 erneuert) mit prächtigem Sitzungssaal, das Zeughaus, das Museum (1849) mit naturhistor., ethnogr. und Kunstsammlungen, die Kunsthalle (1872), das Theater (1875), und mit ihr verbunden der Botan. Garten, das Bernoullianum (1874) mit den naturwissenschaftl. Instituten, das Vesalianum (zur Anatomie und Physiologie) und die verschiedenen mediz. Institute und Kliniken. Ferner bestehen ein Gymnasium, eine Oberrealschule mit 3 Handelsklassen, eine Unterrealschule, allgem. Gewerbeschule mit Gewerbemuseum, höhere Mädchenschule und zahlreiche mit priv. Mitteln erhaltene Fachschulen und Fürsorgeanstalten. Im 15. und 16.&nbsp;Jahrh. blühte in B. die Buchdruckerkunst,`,
    ),
    N("Abb. Basel: Stadtplan."),
    L(
      `der Musiksaal, die Schulturnhalle, zahlreiche Gebäude für soziale und gemeinnützige Zwecke, viele alte Zunfthäuser und Patrizierhäuser, der Centralbahnhof, in dessen Nähe der Zoolog. Garten liegt, und der neue Bad. Bahnhof in Kleinbasel. — Die Bürgergem. B.s wird durch einen von den Stadtbürgern auf 3 Jahre gewählten »weiteren Bürgerrat« verwaltet, welcher zur Besorgung der Geschäfte auf dieselbe Amtsdauer einen »engeren Bürgerrat« (6 unbesoldete Mitglieder) wählt. — Die 1459 von Papst Pius II. gestiftete Universität hatte im Sommersemester 1927: 157 Dozenten und 1325 Studierende und Hörer (232 weibl.); außer der Bibliothek (etwa 300000 Bde., 1500 Handschriften)`,
    ),
  ],
  right: [
    L(
      `und auch jetzt noch sind Buchdruckerei und Buchhandel bedeutend. In der Geschichte der deutschen Kunst wird B. als Wohnsitz der Künstlerfamilie Holbein genannt. Unter den Baseler Künstlern der neuesten Zeit sind die Maler Böcklin und A. Stückelberg, der Bildhauer Schlöth und der Kupferstecher Weber die bekanntesten. Für die Pflege der Wissenschaft und Künste, bes. der Musik, sorgen zahlreiche Gesellschaften. Berühmt ist die Bibelgesellschaft (1804) und die 1815 gegr. Evang. Missionsgesellschaft. — Seit Jahrhunderten ist B. eine der wichtigsten Fabrikstädte und die erste Handelsstadt der Schweiz (→Basel 1&nbsp;b). Für den Handel ist die Lage an der Grenze von Elsaß, Baden und der Schweiz, nahe der burgund. Pforte am Rhein,`,
    ),
  ],
};
