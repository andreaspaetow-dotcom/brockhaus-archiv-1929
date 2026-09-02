import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 204 · Scan 236 · Tafel Bad II */
export const PAGE_204: EncPage = {
  printed: 204,
  scanFile: 236,
  headerLeft: "Bad II",
  headerRight: "Bad",
  catchword: "die",
  scanSrc: "/scans/p204.jpg",
  left: [
    L(`<strong>Bad II.</strong>`),
    L(
      `1.&nbsp;Dampfbad im Städt. Volksbad Berlin-Lichtenberg. Im Hintergrund Liegeterrassen aus Marmor. Links Dampfstrahlbüsche, Warm- und Kaltwasserduschen, Trinkbrunnen usw.`,
    ),
    L(
      `2.&nbsp;Hauptbadehalle des Heilbades der Kruppschen Krankenanstalten, Essen. Luftschächer mit betriebenen Duscheinrichtungen. Links und rechts vorn Marmor-Misch- und Wadebassins. An der Längswand bewegliche Sitzwannen mit Hähnen für Sauerstoff- und Kohlensäurebäder. Im Hintergrund Ruhe- und Massageraum.`,
    ),
    L(
      `3.&nbsp;Volksbad Lister Mühle der Stadt Hannover am Mittellandkanal, erbaut 1927. Lehrbecken und Strandbad für Nichtschwimmer, 100-m-Schwimmbahn für Sportveranstaltungen, 10&nbsp;m hoher Sprungturm, Sand- und Rasenfläche für Sonnen- und Luftbad, Auskleideräume, Spielplatz.`,
    ),
  ],
  right: [
    L(
      `4.&nbsp;Brausebad in der Konrad-Haenisch-Schule in Frankfurt a.&nbsp;M. Duschzellen, Becken mit darüber befindlichen Duschrohren.`,
    ),
    L(
      `5.&nbsp;Thermal-Wildbad im Staatl. Augustabad in Baden-Baden. Staubiger Zulauf aus der auf Badetemperatur abgekühlten 68°&nbsp;C heißen Kochsalzquelle. Becken aus Fliesen mit Marmoreinfassung; Boden mit Quarzsandbelag.`,
    ),
    L(`6.&nbsp;Schwimmhalle auf dem Oceandampfer »Resolute« der Hamburg-Amerika-Linie, Hamburg.`),
    L(
      `7.&nbsp;Elektrisches Licht- und Schwitzbad auf dem Oceandampfer »Kolumbus« des Norddeutschen Lloyd, Bremen.`,
    ),
    N("Tafel Bad II (7 Abbildungen). Zuschnitt folgt."),
  ],
};
