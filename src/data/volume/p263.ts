import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 263 · Scan 295 · Balkan — Balken */
export const PAGE_263: EncPage = {
  printed: 263,
  scanFile: 295,
  headerLeft: "Balkan — Balken",
  headerRight: "Balk",
  catchword: "Balkenkopf",
  scanSrc: "/scans/p263.jpg",
  left: [
    L(
      `garien mußte die südl. Dobrudscha mit Silistria an Rumänien, das nördl. Mazedonien an Serbien und das Küstengebiet des Ägäischen Meeres außer Dedeagatsch an Griechenland abtreten.`,
    ),
    B(
      `Hanotaux: La guerre des Balkans et l'Europe (1914); Conway: The inner history of the Balkan war (1914); Guechoff: L'alliance balkanique (1915).`,
    ),
    L(`<strong>Balkar, Bolkaren,</strong> kaukasisches Volk, →Aul.`),
    L(`<strong>Balkaschsee,</strong> →Balchaschsee.`),
    L(
      `<strong>Balken,</strong> 1)&nbsp;vierkantig behauene Hölzer, die die Zwischendecke eines Gebäudes bilden. Die B. werden stets hochkantig belegt, da sie dann am tragfähigsten sind. Das beste Verhältnis von Breite zu Höhe im Querschnitt ist 5&nbsp;:&nbsp;7; die Stärke richtet sich nach der Stützweite zwischen den Auflagern und nach der zu tragenden Last. Nach ihrer Lage zum Gebäude unterscheidet man: Stockwerkbalken, Dachbalken, Kehlbalken; nach der Stelle, die sie innerhalb der Balkenlage einnehmen, und nach dem Zweck, dem sie dienen: durchgehende B. (Abb.&nbsp;1a), die durch die ganze Gebäudetiefe reichen; Stichbalken (Abb.&nbsp;1b), die von der Mauer bis zu einem durchgehenden B. herlaufen oder als solche wegen eines Hindernisses (Schornstein, Treppe, Aufzug) abgeschnitten und durch einen Querbalken, Balkenwechsel oder Wechselbalken (Abb.&nbsp;1c) genannt, unterstützt sind; Gratbalken (Abb.&nbsp;2a), die diagonal verlaufen, und Gratstichbalken (Abb.&nbsp;2b), d.&nbsp;h. die darauf verlegten Stichbalken; Streckbalken (Abb.&nbsp;3), die längs einer Mauer verlaufen; Wand- oder Mauerbalken (Abb.&nbsp;4), die in ihrer ganzen Länge einer Mauer aufliegen; Bundbalken (Abb.&nbsp;5), die eine Fachwerkwand abschließen; nach Art ihrer Verstärkung oder Verbindung: mit Zugeisen armierte B. (Abb.&nbsp;6), verzahnte B. (Abb.&nbsp;7), verdübelte B. (Abb.&nbsp;8).`,
    ),
    N(
      "Abb. Balken: 1 Balkenlage (a durchgehender Balken, b Stichbalken, c Wechselbalken); 2 Balkenanlage (a Gratbalken, b Gratstichbalken); 3 Streckbalken, 4 Wandbalken, 5 Bundbalken, 6 armierter Balken, 7 verzahnter Balken, 8 verdübelter Balken.",
    ),
  ],
  right: [
    L(
      `Im Sinne der Statik heißt B. ein Träger, der auf zwei oder mehreren Stützen ruht und nur senkrechten Druck auf seine Auflager ausübt; Gegensatz: →Bogen. Je nachdem er sich über eine oder ungetrennt über mehrere Öffnungen erstreckt, spricht man von einfachen oder durchlaufenden B. (Abb.&nbsp;a und b). Dieser Unterschied ist für die Berechnung grundlegend, da der durchlaufende B. statisch unbestimmt ist und besondere Berechnungsmethoden erfordert. Die Empfindlichkeit gegen Stützensenkungen infolge der statischen Unbestimmtheit kann durch Einschalten von Gelenken beseitigt werden. Dieser Gedanke ist zuerst von →Gerber in seinem Gerberbalken (Abb.&nbsp;c) durchgeführt worden.`,
    ),
    N("Abb. Balken: a einfacher Balken, b durchlaufender Balken, c Gerberbalken."),
    L(
      `2)&nbsp;In der Anatomie heißt B. (Hirnbalken) die die beiden Großhirnhälften verbindende, aus Nervenfasern und Nervenbindegewebe bestehende Brücke.`,
    ),
  ],
};
