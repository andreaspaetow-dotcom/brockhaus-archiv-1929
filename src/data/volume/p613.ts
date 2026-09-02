import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 613 · Scan 645 · Bergbau (Ausbau, Förderung) */
export const PAGE_613: EncPage = {
  printed: 613,
  scanFile: 645,
  headerLeft: "Bergbau",
  headerRight: "Bergbau",
  catchword: "Bergbau",
  scanSrc: "/scans/p613.jpg",
  left: [
    L(
      `und die Arbeiter gegen niederfallendes Gestein zu schützen. Dies geschieht durch Zimmerung, Mauerung oder eisernen Ausbau. Schon vor dem Ausbau suche man den Grubenbauen eine Form zu geben, die dem Gebirgsdruck den meisten Widerstand entgegensetzt. Schächte erhalten deshalb in den meisten Fällen kreisrunden Querschnitt, Strecken und Stollen vielfach elliptisch gewölbte Form. Abbaue, die nur kurze Zeit zu halten haben, werden in der Weise gesichert, daß man das Hangende (Dach) mit hölzernen oder eisernen Stempeln abfängt (Abb.&nbsp;11). Wo das Dach »gebräch« ist, d.&nbsp;h. zum Ablösen einzelner Gesteinstücke neigt, erhält es einen Verzug aus dünnen Hölzern und Schwarten. Da der Ausbau der Abbaue ständig ausgedehnte Waldungen verschlingt, gewinnt man die Stempel nach Möglichkeit zurück, man »raubt« die Zimmerung. Strecken werden gewöhnlich in Türstockzimmerung (Abb.&nbsp;12) ausgebaut. Sie besteht aus zwei senkrecht oder schwach geneigt stehenden Stempeln an den Seitenwänden (Stößen) und in einem darüberliegenden Holz, der Kappe. Um das Holz vor Fäulnis zu schützen, wird es mit Teeröl oder Salzlösungen getränkt. Sollen Querschläge, Strecken oder Schächte voraussichtlich lange benutzt werden, oder befürchtet man, daß der Holzausbau dem Gebirgsdruck nicht standhält, so kommt Mauerung (Abb.&nbsp;13) oder Ausbau in Beton oder Eisenbeton (Abb.&nbsp;14) in Betracht. Eine besondere Art des Ausbaus von Schächten ist die Verwendung von gußeisernen Ringen, sog. Tübbing, die von Tage aus langsam abgesenkt und wasserdicht miteinander verschraubt werden.`,
    ),
    N("Abb. Bergbau: 11 Ausbau mit hölzernen Stempeln."),
    N("Abb. Bergbau: 12 Türstockzimmerung."),
    N("Abb. Bergbau: 13 Ausgemauerte Strecke."),
    N("Abb. Bergbau: 14 Betonierte Strecke mit Eiseneinlagen."),
  ],
  right: [
    L(
      `<em>Förderung.</em> Gegenstand der Förderung ist die Fortbewegung des gewonnenen Gutes aus den Abbauen bis zutage. Der Eigenart entsprechend, daß das gewonnene Gut zunächst von den Abbauen zu den Strecken, von diesen dann zum Förderschacht und schließlich durch den Förderschacht zutage gebracht werden muß, unterscheidet man: Abbauförderung, Streckenförderung, Schachtförderung.`,
    ),
    L(
      `1)&nbsp;Die Abbauförderung ist meist eine Abwärtsbewegung, da die Abbaue gewöhnlich über der Hauptstrecke liegen. Im Erzbergbau dienen hierzu vielfach enge, im Bergeversatz ausgesparte, mit taubem Gestein oder Holz ausgekleidete Rollöcher (III,&nbsp;1), im Steinkohlen- und Salzbergbau zu einem längeren Strang zusammengesetzte Blechrinnen, in denen bei genügender Steigung das aufgegebene Gut bis zur Förderstrecke rutscht, oder — bei geringerem Einfallen der Lagerstätte — mechanisch bewegte Schüttelrutschen (III,&nbsp;2). Diese sind entweder auf Rollen oder Kugelfüßen gelagert (Abb.&nbsp;15) oder mit Ketten oder Seilen an der Zimmerung aufgehängt (Abb.&nbsp;16). Ein Preßluft- oder Elektromotor sorgt für hin und her gehende Bewegung. Auf jeden kräftigen Stoß nach vorwärts folgt ein langsamer Rückwärtsgang, so daß das Fördergut infolge der Trägheit gleichsam über die Rinne hinwegrutscht. Wo die beschriebene Art der Förderung der flachen Lagerung wegen nicht in Frage kommt, bedient man sich der Bremsberge. Darunter versteht man geneigt liegende, zweigleisige Förderstrecken, auf deren einem Gleis die an einem Seil befestigten vollen Wagen hinabrollen und dabei die leeren Wagen auf dem andern Gleis durch ihr Übergewicht mit hochziehen. Das Seil ist am oberen Ende des Bremsberges um eine Trommel mit Bremsvorrichtung gelegt, durch die die Geschwindigkeit abgebremst werden kann. In Abbauorten mit sehr steiler Neigung tritt an die Stelle des Bremsberges der Bremsschacht, in dem die Förderschale mit dem vollen Wagen infolge ihres Übergewichts in die Tiefe sinkt und dabei als Gegengewicht die Förderschale mit dem leeren Wagen emporzieht.`,
    ),
    N("Abb. Bergbau: 15 Schüttelrutsche, auf Rollen gelagert."),
    N("Abb. Bergbau: 16 Schüttelrutsche, an der Zimmerung aufgehängt."),
    L(
      `2)&nbsp;Die Streckenförderung geht in wagrechter Richtung vor sich und erfolgt in Förderwagen (Hunden) von etwa 0,4 bis 1 cbm Inhalt, die entweder einzeln von Hand durch Schlepper geschoben oder, zu kleinen Zügen zusammengestellt, von einem Pferd gezogen werden. In Zeiten, als die Fördertechnik noch nicht ausgebildet war, bediente man sich in sohligen Strecken vielfach der Förderung mit Schlitten, die ebenfalls von einem Pferd gezogen wurden. Wo Stollen zur Abführung größerer Wassermengen in Betracht kamen, bediente man sich, wie auch jetzt noch, z.&nbsp;B. in Oberschlesien, im Harz und in England, der Kahnförderung (III,&nbsp;3). Im allgemeinen herrscht aber, bes. bei großer Ausdehnung der einzelnen Sohlen, die maschinelle Förderung mit endlos geführtem Seil oder Kette oder mit Grubenlokomotiven vor (III,&nbsp;4 und 5). Die Förderstrecken sind meistens zweigleisig. Auf dem einen Gleis fahren die vollen Wagen zum Schacht, auf dem andern Gleis die leeren Wagen zu den Gewinnungspunkten zurück. Der Wagenabstand beträgt im Durchschnitt 30&nbsp;m; Geschwindigkeit 1,5–2 m/sek; bei Lokomotivförderung 3–5 m/sek. 3)&nbsp;Die Schachtförderung`,
    ),
  ],
};
