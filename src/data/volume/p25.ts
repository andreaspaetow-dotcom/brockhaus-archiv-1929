import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 25 · PDF-S. 43 · Tafel Atmosphäre (Höhenschema) */
export const PAGE_25: EncPage = {
  printed: 25,
  scanFile: 43,
  headerLeft: "Atmosphäre",
  headerRight: "Atmo",
  catchword: "unvollständig",
  scanSrc: "/scans/p25.jpg",
  left: [
    N(
      "Tafel Atmosphäre. Höhenschema der Lufthülle bis 400 km: Troposphäre (an den Polen bis 10 km, in den Tropen bis 17 km; Witterungsvorgänge), Stratosphäre (Wärmemantel, Dämmerungserscheinungen bis 219 km), Wasserstoffsphäre (Nordlicht, Sternschnuppen), hypothetische Geocoroniumsphäre. Höchste Ballonfahrt 35 km; bemannte Freiballons und Flugzeuge bisher wenig über 10 km.",
    ),
    L(
      `Die Atmosphäre gliedert sich in folgende vier übereinanderliegende Zonen: 1. Die <strong>Troposphäre</strong>, an den Polen bis 10 km, in den Tropen bis 17 km reichend. In ihr finden Vertikalströmungen und die hierdurch bedingten Temperaturänderungen bei Höhenänderungen statt. Sie ist der eigentliche Sitz der Wolken- und Wettererscheinungen, von den untern Wolkenformen an, den Stratus- (St) und Kumulus- (Cu) Wolken über der mittleren, den Altostratus- und Altokumuluswolken (As und Ac) bis zu den Cirrus (Ci). Die höchste Wolke und die aus Eisnadeln bestehende Cirrus spitze ragen noch in die Stratosphäre. 2. Die <strong>Stratosphäre</strong>, der Sitz der zeitweiligen Erwärmung, der eigentliche Wärmemantel der Erde. In ihr finden die optischen Dämmerungserscheinungen statt, und vollzieht sich die Ausgleichung durch den adiabatischen Temperaturfall. Die Temperaturzunahme mit der Höhe tritt hier außer Geltung. 3. Die <strong>Wasserstoffsphäre</strong>, in der der Wasserstoff vorherrscht (im Gegensatz zu der Stickstoffsphäre der beiden untern Zonen). Hier kommen die meisten Erscheinungen des Nordlichts und der Sternschnuppen vor, auch die durch ionale Ionisation und elektrische Leitfähigkeit ausgezeichnete Kennelly-Heaviside-Schicht ist hier anzunehmen. 4. Die <strong>Geocoroniumsphäre</strong>. Sie besteht nur noch hypothetisch aus Strahlung von`,
    ),
  ],
  right: [
    L(
      `Geocoronium und bildet den Übergang in den Weltraum. Die Tafel der Vorlage (S.&nbsp;25) bleibt für den Bildzuschnitt morgen vorgesehen.`,
    ),
  ],
};
