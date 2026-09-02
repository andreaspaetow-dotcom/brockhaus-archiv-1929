import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 115 · Scan 137 · Tafel/Tabelle Außenhandel der Länder der Erde */
export const PAGE_115: EncPage = {
  printed: 115,
  scanFile: 137,
  headerLeft: "Außenhandel",
  headerRight: "",
  catchword: "Prozentuale",
  scanSrc: "/scans/p115.jpg",
  left: [
    L(
      `<strong>Außenhandel der Länder der Erde.</strong> Summe der Einfuhr und Ausfuhr in Mill.&nbsp;RM und Anteil in % am Gesamtumlauf.`,
    ),
    L(
      `<em>Europa</em> (Summe): 1913 103241,2 = 62,3%; 1921 91503,5 = 51,0%; 1924 125951,2 = 53,3%; 1926 129185,8 = 50,9%. Darunter Deutsches Reich 20866,9 / 10196,7 / 15634,4 / 20416,0; Belgien-Luxemburg 6699,7 / 5465,1 / 6101,0 / 5896,0; Dänemark 1773,8 / 2436,6 / 3168,8 / 3211,7; Frankreich 12394,3 / 13311,2 / 18074,5 / 16275,3; Großbritannien 28673,2 / 30634,5 / 41139,8 / 36103,5; Italien 4987,4 / 4590,3 / 6168,3 / 7283,5; Niederlande 5905,3 / 5097,1 / 6450,7 / 7060,6; Österreich 5256,0 / 2222,2 / 3202,4 / 2649,5; Rußland 6251,4 / 497,2 / 1124,3 / 2692,6; Schweiz 2670,0 / 3229,7 / 3499,6 / 3394,5; Tschechoslowakei — / 2636,5 / 4078,4 / 4122,8.`,
    ),
    L(
      `<em>Afrika</em> (Summe): 5760,2 = 3,5%; 6442,8 = 3,6%; 8167,1 = 3,4%; 8522,7 = 3,4%. Darunter Ägypten 1247,2 / 1624,0 / 2243,0 / 1943,5; Britisch-Südafrika 2209,5 / 1906,4 / 2659,3 / 2952,9.`,
    ),
    N("Tabelle: Außenhandel der Länder der Erde (Erdteile Europa, Afrika, Asien, Amerika, Australien; Jahre 1913, 1921, 1924, 1926). Zuschnitt morgen."),
  ],
  right: [
    L(
      `<em>Asien</em> (Summe): 17538,5 = 10,6%; 25209,7 = 14,0%; 33153,4 = 14,1%; 38402,2 = 15,0%. Darunter Britisch-Indien 5800,0 / 5729,5 / 8385,3 / 8360,7; China 3082,6 / 4979,1 / 6228,0 / 6343,3; Japan 2849,1 / 5857,3 / 7383,3 / 8488,2; Niederländisch-Indien 1772,9 / 3202,0 / 3540,3 / 4144,0.`,
    ),
    L(
      `<em>Amerika</em> (Summe): 35176,5 = 21,2%; 50507,1 = 28,1%; 61452,9 = 26,0%; 69396,5 = 27,4%. Darunter Argentinien 4112,3 / 4358,6 / 6044,7 / 6256,9; Brasilien 2709,2 / 1923,8 / 3031,0 / 3576,0; Kanada 4598,4 / 6024,2 / 7733,5 / 9560,8; Vereinigte Staaten von Amerika 17955,2 / 29361,6 / 34427,6 / 37991,8.`,
    ),
    L(
      `<em>Australien</em> (Summe): 4002,3 = 2,4%; 5933,7 = 3,3%; 6598,5 = 2,8%; 7809,5 = 3,1%. Darunter Australischer Bund 3125,0 / 4528,5 / 4736,2 / 5880,5; Neuseeland 877,3 / 1405,2 / 1862,3 / 1929,0.`,
    ),
    L(
      `<em>Gesamtumlauf</em>: 1913 165737,6 = 100%; 1921 180104,8 = 100%; 1924 236241,2 = 100%; 1926 253481,7 = 100%.`,
    ),
  ],
};
