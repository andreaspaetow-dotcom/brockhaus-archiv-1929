import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 611 · Scan 643 · Bergbau (Technik, Forts.) */
export const PAGE_611: EncPage = {
  printed: 611,
  scanFile: 643,
  headerLeft: "Bergbau",
  headerRight: "Bergbau",
  catchword: "Bergbau",
  scanSrc: "/scans/p611.jpg",
  left: [
    L(
      `Schächte zum Mineralvorkommen (Abb.&nbsp;2). Von den Schächten aus werden gewöhnlich senkrecht zu der Längserstreckung, dem Streichen der Lagerstätte, wagrechte Strecken, sog. Querschläge oder Richtstrecken, bis zur Lagerstätte vorgetrieben. Diese können in verschiedener Tiefe untereinander liegen, wodurch das Bergwerk in Stockwerke (Sohlen) eingeteilt wird. Innerhalb des Bergwerksfeldes sind diese Sohlen häufig zur Abkürzung der Förderung und Fahrung oder für eine vorteilhaftere Wetterführung und Wasserlösung durch Zwischenschächte (Blindschächte) miteinander verbunden (Abb.&nbsp;3).`,
    ),
    N(
      "Abb. Bergbau: 2 Der zur Lagerstätte getriebene Schacht mit Querschlägen.",
    ),
    L(
      `<em>Vorrichtung.</em> Bevor mit dem Abbau der Mineralien begonnen werden kann, muß die Lagerstätte durch die als Vorrichtung bezeichneten Arbeiten in bestimmte Abschnitte, sog. Abbaufelder, zerlegt werden. Dies geschieht durch Auffahren von Strecken in der Lagerstätte. Man unterscheidet Grundstrecken und Abbaustrecken. Die Grundstrecken oder Sohlen durchziehen wagrecht die ganze Länge der Lagerstätte, stellen gleichzeitig deren genaue Lage fest und geben Aufschluß über das beste Abbauverfahren. Sie sind die Hauptförderwege und dienen auch zur Wetterführung und Wasserhaltung. Nach der Tiefe zu ist die Lagerstätte in mehrere Grundstrecken eingeteilt, deren senkrechter Abstand voneinander zwischen 40 und 150&nbsp;m schwankt. Die von den Grundstrecken aus in der Lagerstätte aufgefahrenen mehr oder weniger flachen Strecken heißen Überhaue oder Abhaue, je nachdem sie aufwärts oder abwärts verlaufen sollen, und werden je nach ihrem Betriebszweck bes. benannt, z.&nbsp;B. Bremsberg oder Haspelberg. Durch die Grundstrecken und Bremsberge werden die Abbaufelder geschaffen. Durch ebenfalls wagrechte, den Grundstrecken parallele Teilsohlen (Abbaustrecken) werden die Abbaufelder noch weiter vorgerichtet (Abb.&nbsp;4).`,
    ),
    N(
      "Abb. Bergbau: 3 Aufteilung des Bergwerks durch Sohlen und Zwischenschächte.",
    ),
    N(
      "Abb. Bergbau: 4 Weitere Aufteilung einer Lagerstätte durch Teilsohlen und Bremsberge.",
    ),
  ],
  right: [
    L(
      `<em>Abbau.</em> Die Methoden des Abbaus richten sich nach der Art des Minerals, nach dem Einfallen und der Mächtigkeit der Lagerstätte sowie nach der Beschaffenheit des Nebengesteins. Auch ist für den Abbau der Umstand maßgebend, ob das Mineral rein oder im Gemenge mit taubem Gestein (Bergen) vorkommt, ob es tief im Erdinnern oder nahe der Oberfläche lagert. Nach den wesentlichen techn. Merkmalen unterscheidet man: Abbau mit Bergeversatz, Abbau ohne Bergeversatz, Tagebau.`,
    ),
    L(
      `1)&nbsp;Beim Abbau mit Bergeversatz werden die bei der Gewinnung entstehenden Hohlräume mit taubem Gestein (Bergen) ausgefüllt, man »versetzt« die Hohlräume. Das Versatzgut wird entweder beim Abbau selbst oder beim Auffahren von Gesteinsstrecken gewonnen oder von Tage aus in die Grube geschafft. Nach einem neueren Verfahren, dem sog. Abbau mit Spülversatz (Tafel II, Abb.&nbsp;3), wird Sand, Kies, Schlacke oder anderes feinkörniges Material über Tage mit Wasser gemischt und durch Rohrleitungen zu den Hohlräumen gedrückt. Nach Abfluß des Wassers lagern sich die eingeschwemmten Massen ganz dicht aufeinander und erfüllen die Hohlräume weit vollständiger, als mit Bergeversatz selbst bei sorgsamster Ausführung zu erreichen ist. Dieses Verfahren hat sich bes. im Steinkohlenbergbau eingebürgert, vereinzelt kommt es auch im Kalibergbau vor. — Unter den Abbauverfahren mit Bergeversatz ist an erster Stelle der Firstenbau (Abb.&nbsp;5) zu nennen, der auf steil einfallenden Lagerstätten angewandt wird. Er schreitet zwischen zwei vorher im senkrechten Abstand von etwa 30–60&nbsp;m aufgefahrenen Sohlstrecken treppenartig von unten nach oben vorwärts. Die einzelnen Stufen, 2–4&nbsp;m hoch, heißen Firstenstöße. Der Name rührt daher, daß der Abbau von der Firste, d.&nbsp;h. von oben her, erfolgt. Das mineralhaltige Gestein wird durch kleine, im Versatz ausgesparte Schächte (Rollen oder Rollöcher) auf die Grundstrecke gestürzt.`,
    ),
    N("Abb. Bergbau: 5 Firstenbau."),
    L(
      `Der Stoßbau (Abb.&nbsp;6), die älteste Abbaumethode für den Gangbergbau, bildet zum Firstenbau insofern einen gewissen Gegensatz, als der Abbau von der oberen Strecke her beginnt und nach der Tiefe zu fortschreitet. Umgekehrt wie beim Firstenbau stehen hierbei die Hauer auf der anstehenden Lagerstätte, während der Bergeversatz, dem Vorrücken der Stöße entsprechend, sich über den Arbeitsstößen befindet und deshalb durch entsprechende Zimmerung (Kästen) vor dem Einsturz gesichert werden muß. Die Förderung bewegt sich hierbei gleichfalls durch kleine ausgesparte Schächte, aber nach oben; für sie und für die Wasserhaltung ist daher ein höherer Arbeitsaufwand als beim Firstenbau nötig. Dagegen ist der Verlust an gewinnbaren Mineralien geringer.`,
    ),
    N("Abb. Bergbau: 6 Stoßbau."),
    L(
      `Der Schrägbau (Abb.&nbsp;7) ist dadurch`,
    ),
    N("Abb. Bergbau: 7 Schrägbau."),
  ],
};
