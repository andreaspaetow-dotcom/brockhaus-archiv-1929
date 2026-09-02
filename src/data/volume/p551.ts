import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 551 · Scan 583 · Belgien (statistische Übersicht) */
export const PAGE_551: EncPage = {
  printed: 551,
  scanFile: 583,
  headerLeft: "Belgien",
  headerRight: "Belg",
  catchword: "Belgien",
  scanSrc: "/scans/p551.jpg",
  left: [
    L(`<strong>Statistische Übersicht zu Belgien.</strong>`),
    N(
      "Tabelle. Fläche und Bevölkerung (Ende 1925). Provinzen: Antwerpen 2831 qkm, 1101454 E., 386 auf 1 qkm; Brabant 3283 / 1611952 / 491; Westflandern 3234 / 865006 / 267; Ostflandern 2977 / 1119591 / 373; Hennegau 3722 / 1258358 / 338; Lüttich 3887 / 919301 / 244; Limburg 2408 / 330656 / 137; Luxemburg 4418 / 222195 / 50; Namur 3660 / 353363 / 97; Königreich 30420 qkm, 7811876 E., 257 auf 1 qkm. Volksdichte: 1880: 187 E., 1910: 252, 1920: 251 (ohne Eupen-Malmedy).",
    ),
    N(
      "Bewegung der Bevölkerung 1925: Auf 1000 E. kamen: 19,75 Geburten, 13,08 Sterbefälle, 9,57 Eheschließungen.",
    ),
    N(
      "Berufe 1920: Von 3312706 Berufstätigen waren beschäftigt: 610573 in Land- und Forstwirtschaft, 2917 in der Fischerei, 1491317 in der Industrie, 588205 im Handel, 116017 in freien Berufen, 173027 in öffentl. Diensten, 160081 als Hausangestellte.",
    ),
    N(
      "Städte (E. von 1925): Hauptstadt Brüssel (213920, mit Vororten 801660), Antwerpen (300000, mit Vororten 417300), Lüttich (168560, mit Vororten 247930), Gent (163364, mit Vororten 210000), Schaarbeek (109550), Ixelles (84950), Anderlecht (71770), St.-Jans-Molenbeek (67300), St.-Gilles (65200), Mecheln (60500), Borgerhout (54200), Brügge (52900), Ostende (44000), Etterbeek (42100), Verviers (41660), Seraing (41350), Löwen (41000).",
    ),
  ],
  right: [
    N(
      "Tabelle. Es sprachen (1920) nach Provinzen nur flämisch / nur französisch / nur deutsch / flämisch und französisch / flämisch und deutsch / französisch und deutsch / die 3 nat. Sprachen. Antwerpen 807013 / 12289 / 472 / 133131 / 1065 / 369 / 9520; Brabant 561565 / 382917 / 662 / 458469 / 250 / 4052 / 13271; Westflandern 621580 / 31825 / 41 / 113267 / 76 / 124 / 1919; Ostflandern 919536 / 9311 / 96 / 123606 / 118 / 113 / 3269; Hennegau 14724 / 1113738 / 77 / 57265 / 27 / 1122 / 911; Lüttich 14996 / 748504 / 8313 / 46418 / 449 / 15626 / 3342; Limburg 244870 / 9123 / 52 / 29355 / 317 / 119 / 749; Luxemburg 170 / 183218 / 7167 / 1177 / 5 / 23162 / 494; Namur 616 / 312379 / 28 / 5125 / 29 / 519 / 379; Königreich zusammen 3185100 / 2833334 / 16908 / 967813 / 2336 / 45206 / 33854 (ohne Eupen-Malmedy und St. Vith).",
    ),
    L(`<strong>Volkswirtschaft.</strong>`),
    N(
      "Bodennutzung (1920): 13404 qkm unter landwirtsch., 5198 unter forstwirtsch. Bewirtschaftung, 1080 unbewirtschaftet.",
    ),
    N(
      "Tabelle. Verteilung der Anbauflächen nach Provinzen in ha, 1925 (Körnerfrüchte / Leguminosen / Industriepflanzen / Knollengewächse / Futterpflanzen): Antwerpen 52106 / 2041 / 639 / 33161 / 33827; Brabant 111230 / 1709 / 12038 / 41427 / 38716; Westflandern 97692 / 8041 / 28551 / 39857 / 22990; Ostflandern 97346 / 1743 / 14135 / 45150 / 34520; Hennegau 97806 / 2544 / 24304 / 23655 / 66056; Lüttich 58488 / 331 / 10327 / 9146 / 40326; Limburg 44564 / 1098 / 8469 / 15914 / 30126; Luxemburg 60061 / 567 / 265 / 18405 / … (Forts. S. 552).",
    ),
  ],
};
