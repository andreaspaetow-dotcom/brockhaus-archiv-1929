import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 68 · PDF-S. 86 · Aufwertungstabelle, Aufwiegelung */
export const PAGE_68: EncPage = {
  printed: 68,
  scanFile: 86,
  headerLeft: "Aufwertungspartei — Aufwiegelung",
  headerRight: "Aufw",
  catchword: "reizung",
  scanSrc: "/scans/p68.jpg",
  left: [
    L(
      `<strong>Aufwertung</strong> (Umrechnungstabelle nach dem Ges. v.&nbsp;16.&nbsp;Juli 1925). Auszug der gesetzl. Goldmarkwerte von Papiermark; vollständige Monatswerte 1918–Nov.&nbsp;1923 im Originalscan.`,
    ),
    L(
      `<em>1918:</em> Jan.–Juni 10&nbsp;M. = 8,00&nbsp;GM; Juli 7,14; Aug. 6,90; Sept.–Okt. 6,15; Nov. 5,71; Dez. 5,00. <em>1919:</em> Jan. 5,13; Febr. 4,65; März 4,00; April 3,41; Mai 3,32; Juni 3,11; Juli 2,86; Aug. 2,29; Sept. 1,88; Okt. 1,66; Nov. 1,26; Dez. 1,04 (je 10&nbsp;M.).`,
    ),
    L(
      `<em>1920</em> (je 100&nbsp;M.): Jan. 1.–10. 9,67; 11.–20. 7,75; 21.–31. 5,76; Febr. 4,90–5,06; März 4,87–6,12; April 7,00–7,10; Mai 7,86–11,01; Juni 10,32–11,19; Juli 11,10–10,05; Aug. 9,23–8,40; Sept. 8,24–5,80; Okt. 5,87–5,22; Nov. 5,57–6,65; Dez. 6,28–6,20.`,
    ),
    L(
      `<em>1921</em> (je 100&nbsp;M.): Jan. 6,05–7,41; Febr. 6,90–7,26; März 7,01–7,12; April 7,24–6,77; Mai 6,77–7,42; Juni 6,88–6,39; Juli 6,34–5,88; Aug. 5,32–5,01; Sept. 4,82–4,07; Okt. 3,88–2,98; Nov. 2,24–1,92; Dez. 2,37–2,55.`,
    ),
    L(
      `<em>1922:</em> Jan.–Juni je 100&nbsp;M. von 2,52 auf 1,26&nbsp;GM; Juli 1000&nbsp;M. = 13,50–8,46; Aug. 6,06–3,16; Sept. 3,33–3,03; Okt. 2,13–1,11; Nov. 10000&nbsp;M. = 7,60–6,62; Dez. 6,80–6,34.`,
    ),
    L(
      `<em>1923:</em> Jan. 10000&nbsp;M. = 4,94–1,87; Febr. 1,85–1,86; März 1,95–2,04; April 2,02–1,57; Mai 1,29–8,40 (100000&nbsp;M.); Juni 100000&nbsp;M. 6,47–2,87; Juli 2,73 bis 1&nbsp;Mill. = 4,37; Aug. 1&nbsp;Mill. 3,98 bis 10&nbsp;Mill. 4,53; Sept. 10&nbsp;Mill. 3,62 bis 100&nbsp;Mill. 1,78; Okt. 100&nbsp;Mill. 1,35 bis 100&nbsp;Mrd. 2,57; Nov. 100&nbsp;Mrd. 1,53 bis 1&nbsp;Billion = 1,00 (ab 20.&nbsp;Nov. und folgende Tage).`,
    ),
    L(`<strong>Aufwertungspartei</strong>, →Volksrechtspartei.`),
    L(
      `<strong>Aufwertungssteuer.</strong> Die 3.&nbsp;Steuernotverordnung vom 14.&nbsp;Febr. 1924 führte, um die Vorteile, die viele Schuldner aus der Geldentwertung gezogen haben, soweit als möglich zu erfassen, eine →Geldentwertungssteuer ein und verpflichtete die Länder und Gemeinden zur Erhebung einer →Miet`,
    ),
  ],
  right: [
    L(
      `zinssteuer (→Hauszinssteuer). Die Erhebung einer A. von unbebauten Grundstücken, die mit Papiermarkhypotheken belastet waren, und die sog. Holzsteuer, eine A. für Kredithilfe von Holz aus Forsten der öffentl. Körperschaften, wurde den Ländern überlassen.`,
    ),
    L(
      `<strong>Aufwiegelung</strong>, die an mehrere Personen des Soldatenstandes gerichtete Aufforderung oder An`,
    ),
  ],
};
