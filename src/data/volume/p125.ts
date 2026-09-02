import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 125 · Scan 149 · Australien Statistik (Tafel/Tabelle) */
export const PAGE_125: EncPage = {
  printed: 125,
  scanFile: 149,
  headerLeft: "Australien",
  headerRight: "Aust",
  catchword: "Flußgebiet",
  scanSrc: "/scans/p125.jpg",
  left: [
    L(
      `<strong>Statistik.</strong> Fläche und Bevölkerung (1923): Neusüdwales 801494 qkm, 2189379 E., Dichte 2,73; Victoria 227610 qkm, 1607586 E., 7,08; Queensland 1735508 qkm, 805636 E., 0,46; Südaustralien 984330 qkm, 516685 E., 0,53; Westaustralien 2527530 qkm, 348119 E., 0,14; Tasmanien 67894 qkm, 213784 E., 3,15; Nordterritorium 1356130 qkm, 3648 E.; Bundesbezirk 2360 qkm, 3255 E. Commonwealth 7703856 qkm, 5688092 E., Dichte 0,74. Zunahme 1861–1923 ums 4,88fache.`,
    ),
    L(
      `Bevölkerung: 1800: 5200; 1850: 405000; Goldfunde: 1858 erste Million, 1877 zweite, 1889 dritte, 1905 vierte, 1918 fünfte, 1926 sechste. Schätzung 1926: 6100000. Dichte: weniger als 1 auf 1 qkm.`,
    ),
    L(
      `Rassen (1921): 5390000 Europäer, 31000 eingewanderte Farbige (Malaien und Mongolen; etwa 17000 Chinesen), 60000 Eingeborene, 18000 Mischlinge. Unter den Europäern 96% Briten, etwa 100000 Deutsche, 83% in Australien Geborene.`,
    ),
    L(
      `Bekenntnisse (1921): 5268000 Christen (2137000 Angehörige der Engl. Kirche, 1134000 Kath., 637000 Presbyterianer, 633000 Methodisten, 491000 andere Christen), 35000 Nichtchristen, darunter 20000 Juden, 21000 religionslos.`,
    ),
    L(
      `Eisenbahnen (1925): 44559 km, davon 39982 km staatlich. Post (1925): 8700 Anstalten. Telegraph (1925): 6576 Anstalten, 137919 km Linie. Funkverkehr (1924–25): 19 Küsten-, 4 Binnenland-, 121 Schiffsstationen.`,
    ),
    N("Tabelle: Fläche und Bevölkerung der australischen Bundesstaaten 1861–1923. Zuschnitt morgen."),
  ],
  right: [
    L(
      `Außenhandel (in 1000 £): 1924–25 Einfuhr 157143, Ausfuhr 162030. Verteilung (1920–21): Großbritannien Einfuhr 63706 / Ausfuhr 45508; Ver.&nbsp;St. v.&nbsp;A. 24556 / 7109; Japan 3557 / 11555; Frankreich 4101 / 14888; Deutschland 1368 / 4402.`,
    ),
    L(
      `Wichtigste Gegenstände (1924–25): Einfuhr Baumwoll- u. Leinenstoffe 19259, Eisenwaren 14614, Maschinen 6101; Ausfuhr Wolle 42414, Weizen 13616, Butter 8546.`,
    ),
    L(
      `Handelsflotte (1925): 2461 Schiffe mit 469164 Reg.-T. Haupthäfen (Verkehr 1920 in Mill.&nbsp;t): Melbourne 7, Sydney 5,8, Newcastle 3,7, Fremantle 2,25, Brisbane 1,4, Adelaide 2,2. Währung, Münzen, Maße, Gewichte: englisch.`,
    ),
    L(
      `Kolonien (Territorien): Papua 234489 qkm, (1923) 275000 E.; Norfolkinsel 35 qkm, (1925) 750 E.`,
    ),
    L(
      `Staatswirtschaft. Bundesvoranschlag 1925–26: Einnahmen 70203572 £, Ausgaben 75109437 £. Bundesschuld 30.&nbsp;Juni 1925: 460948062 £, Schuld der Bundesstaaten 606058254 £.`,
    ),
    N("Tabellen: Außenhandel nach Ländern und Waren; Handelsflotte; Finanzen. Zuschnitt morgen."),
  ],
};
