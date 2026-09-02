import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 228 · Scan 260 · Tafel Bahnhöfe III */
export const PAGE_228: EncPage = {
  printed: 228,
  scanFile: 260,
  headerLeft: "Bahn",
  headerRight: "Bahnhöfe III",
  catchword: "ausziehgleis",
  scanSrc: "/scans/p228.jpg",
  left: [
    L(`<strong>Bahnhöfe III.</strong>`),
    L(`1.&nbsp;Bahnsteighalle Hauptbahnhof Hamburg (1905–06).`),
    L(`2.&nbsp;Empfangsgebäude Pennsylvania-Station, New York.`),
    L(`3.&nbsp;Station Santa Fe, San Diego, Kalifornien, USA.`),
    L(`4.&nbsp;Empfangsgebäude Bergen, Norwegen (1915).`),
  ],
  right: [
    L(
      `5.&nbsp;Empfangsgebäude Oldenburg (Anlehnung an oldenburgischen Bauernhausstil; 1911–15).`,
    ),
    L(`6.&nbsp;Untergrundbahnhof Breitenbachplatz, Berlin (1910–13).`),
    L(`7.&nbsp;Querbahnsteighalle, Hauptbahnhof Leipzig (1915 vollendet).`),
    L(`8.&nbsp;Empfangsgebäude Hauptbahnhof Stuttgart (1922).`),
    N("Tafel Bahnhöfe III (8 Abbildungen). Zuschnitt folgt."),
  ],
};
