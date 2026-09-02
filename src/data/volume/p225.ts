import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 225 · Scan 257 · Bahnhöfe */
export const PAGE_225: EncPage = {
  printed: 225,
  scanFile: 257,
  headerLeft: "Bahnhöfe",
  headerRight: "Bahn",
  catchword: "ausziehgleis",
  scanSrc: "/scans/p225.jpg",
  left: [
    L(
      `kehr, 2)&nbsp;Abstellbahnhöfe für das Ab- und Zusammenstellen von Personenzügen, 3)&nbsp;Güterbahnhöfe für den Güterverkehr, 4)&nbsp;Verschiebe- oder Rangierbahnhöfe zur Umbildung von Güterzügen, 5)&nbsp;Lokomotivbahnhöfe für die Behandlung der Lokomotiven und Ausbesserung der im Betrieb befindlichen Fahrzeuge, 6)&nbsp;Sonderformen, wie Vieh-, Industrie-, Hafenbahnhöfe. Auf größeren B. sind die genannten Anlagen in der Regel getrennt; auf kleineren gelangen nur die unbedingt notwendigen zur Ausführung und werden dann nach Möglichkeit vereinigt.`,
    ),
    L(
      `<strong>Personenbahnhöfe.</strong> Nach ihrer Lage zum Bahnnetz sind zu unterscheiden: Endbahnhöfe (Abb.&nbsp;1, a und f) als Ausgangs- und Endpunkte des regelmäßigen Zugbetriebs und Zwischenbahnhöfe (Abb.&nbsp;1, b bis e), die zwischen ersteren liegen. Die Zwischenbahnhöfe können sein: einfache Aufenthaltspunkte ohne jede Abzweigung (Abb.&nbsp;1, b), Anschluß- oder Trennungsbahnhöfe, wo eine Bahnlinie an eine durchlaufende anschließt oder von dieser abzweigt (Abb.&nbsp;1, c), Kreuzungs- oder Übergangsbahnhöfe, wo zwei Linien sich überschneiden und ebenso gesondert weiterlaufen, wie sie einzeln herangekommen sind (Abb.&nbsp;1, d), Knotenpunktsbahnhöfe, wo mehrere Linien zusammenlaufen oder sich kreuzen (Abb.&nbsp;1, e).`,
    ),
    N("Abb. 1 Unterscheidung der Bahnhöfe nach Art ihrer Lage zum Bahnnetz."),
    L(
      `Hinsichtlich der Grundrißform unterscheidet man: Kopfbahnhöfe, bei denen die Hauptgleise stumpf endigen (Abb.&nbsp;2). Dies bedingt einen Richtungswechsel aller Züge und meist ein Umsetzen der Lokomotive. Übliche Form der Endbahnhöfe; Beispiel: Leipziger Hauptbahnhof. Durchgangsbahnhöfe: Die Hauptgleise laufen durch (Abb.&nbsp;3); gegebene Form für kleinere und mittlere Zwischenbahnhöfe, ebenso für Endbahnhöfe, wenn eine spätere Fortsetzung der Bahn beabsichtigt ist. Nach Lage des Empfangsgebäudes zu den Hauptgleisanlagen ergeben sich hierfür drei Arten: 1)&nbsp;der eigentl. Durchgangsbahnhof mit seitwärts gelegenem Empfangsgebäude, 2)&nbsp;der Keilbahnhof am Vereinigungspunkte zweier aus verschiedenen Richtungen kommenden Bahnlinien (Abb.&nbsp;4), 3)&nbsp;der Inselbahnhof bei inselartiger Umschließung des Empfangsgebäudes (Abb.&nbsp;5). Eine bisweilen bei großen B. vorkommende Erscheinungsform ist der vereinigte Kopf- und Durchgangsbahnhof (Abb.&nbsp;6); Beispiel: Dresdener Hauptbahnhof. Die endigenden Züge laufen hier in Straßenhöhe auf Stumpfgleisen ein, während die andern auf erhöhter Fahrbahn durchgeführt werden.`,
    ),
    N("Abb. 2 Kopfbahnhof. 3 Durchgangsbahnhof. 4 Keilbahnhof. 5 Inselbahnhof. 6 Vereinigter Kopf- und Durchgangsbahnhof."),
  ],
  right: [
    L(
      `Eine als Turm- oder Brückenbahnhöfe bezeichnete Form weisen manche Kreuzungsbahnhöfe (z.&nbsp;B. Küstrin, Osnabrück, Döbeln-Kirchhain) auf, wo die durchlaufenden Bahn- bzw. Linien nicht in gleicher Höhe liegen, sondern sich in verschiedener Höhe mittels Brücken kreuzen.`,
    ),
    L(
      `Die Gleisanlagen setzen sich aus den durchgehenden Hauptgleisen und den Nebengleisen zusammen, die unter sich und mit ersteren durch Weichen verbunden sind. Die Hauptgleise dienen zur regelmäßigen Ein- und Ausfahrt der Personen- und Güterzüge (Einfahr-, Ausfahr-, Einlaßgleis). Hierzu gehören auch die Überholungsgleise, in die solche Züge einfahren, die überholt werden sollen. Alle übrigen Gleise des Bahnhofs, wie Aufstell-, Abstell-, Anzieh-, Durchlauf- und Umfahrungsgleise, nennt man Nebengleise.`,
    ),
    L(
      `Die Hochbauten der Personenbahnhöfe umfassen das Empfangsgebäude, die Bahnsteiganlagen, Wirtschafts- und Nebengebäude. Im Empfangs- (Stations-, Aufnahme-) Gebäude sind die zum Abfahrts- und Ankunftsverkehr der Reisenden bestimmten öffentl. Räume sowie die für den Bahnbetrieb nötigen Dienst- und Aufenthaltsräume für die Beamten enthalten. Vom Empfangsgebäude aus gelangen die Reisenden entweder unmittelbar oder durch Tunnel zu den Bahnsteiganlagen. Während bei älteren Bahnhofsgebäuden die Formensprache der antiken und mittelalterlichen Baukunst auf die Schauseitenarchitektur und auf die Gußeisenkonstruktionen der Hallen übertragen wurde (von Schinkel, Stüler u.&nbsp;a.), bedeckte man später die Schmiedeeisenkonstruktion mit einer Verkleidung aus Stein. Erst in der Neuzeit ging man wieder zum Eisenbau über. Die Empfangsgebäude der großen B. mit ihren weitgespannten mächtigen Bahnsteighallen gehören in künstlerischer und konstruktiver Hinsicht zu den großartigsten vorbildlosen Architekturschöpfungen der Neuzeit. In neuester Zeit verwendet man an Stelle reiner Eisenkonstruktion bei den Hallen Eisenbetonkonstruktion und geht nach dem Vorbild von Amerika von den mächtigen Hallen ab, um die techn. und wirtschaftl. Vorteile mehrerer Hallen von mittlerer Höhe und Spannweite auszunutzen.`,
    ),
    L(
      `<strong>Abstellbahnhöfe.</strong> Sie stehen in unmittelbarer Verbindung mit den Personenbahnhöfen und dienen zum Aufstellen und Zusammensetzen von Personenzügen, kommen also hauptsächlich dort vor, wo viele Personenzüge einlaufen und neugebildet werden müssen. Die allgem. Anordnung (Tafel&nbsp;I, Abb.&nbsp;1) ergibt sich aus dem Hergang einer Zugbehandlung. Hat ein Zug seine Fahrt beendet, so wird er zunächst auf einem der Aufstell- (Einfahrts-) Gleise abgestellt; die Zuglokomotive fährt über ein Durchlaufgleis zum Lokomotivschuppen. Später kommt eine Verschiebelokomotive heran und bringt die Wagen nach den Reinigungsgleisen, wo sie gereinigt, mit Wasser, Gas, elektrischer Energie versehen und wo kleine Ausbesserungen vorgenommen werden. Dann wird der Wagenzug in das Haupt-`,
    ),
  ],
};
