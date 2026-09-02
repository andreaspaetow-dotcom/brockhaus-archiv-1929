import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 803 · Scan 846 · Bildpostkarten — Bildtelegraphie */
export const PAGE_803: EncPage = {
  printed: 803,
  scanFile: 846,
  headerLeft: "Bildpostkarten",
  headerRight: "Bildtelegraphie",
  catchword: "je",
  scanSrc: "/scans/p803.jpg",
  left: [
    L(
      `eine emporgeworfene Münze beim Auffallen mit Bild oder Wappen (in Rom mit dem Doppelkopf des Janus oder Schiff) nach oben zu liegen kommt.`,
    ),
    L(
      `<strong>Bildpostkarten,</strong> Postkarten mit Abbildungen auf der Rückseite oder der linken Hälfte der Aufschriftseite. Von der Deutschen Reichspost werden seit 1925 B. mit eingedruckter Freimarke und Städte- oder Landschaftsbildern in der Farbe des Wertzeichens auf der linken oberen Hälfte der Aufschriftseite im Auftrage von Städten, Kurverwaltungen u. dgl. zu Reklamezwecken hergestellt und zum Nennwert der Freimarke verkauft. Derartige B. dürfen grundsätzlich nicht an dem Ort, dessen Bild sie tragen, vertrieben werden.`,
    ),
    L(
      `<strong>Bildrundfunk,</strong> die drahtlose Übermittlung von Bildern durch den Rundfunksender. Die Technik ist dabei die gleiche wie bei der →Bildtelegraphie, also: Abtasten und Umwandlung der Helligkeitswerte des Bildes in einem besonderen Bildzerleger, Umwandlung und Zusammensetzung der elektrischen Stromstöße zu dem vollen Bild in einem besonderen Bildempfänger. Die von dem Bildzerleger abgegebenen elektrischen Stromstöße werden dem Rundfunksender übertragen, der sie als elektrische Wellen ausstrahlt. Die Vermittlung ist also die gleiche wie bei der gewöhnl. Übertragung von Vorträgen und Musikstücken; nur tritt an die Stelle des Mikrophons der Bildzerleger. Der Empfang erfolgt mit einem normalen Rundfunk-Empfangsgerät; nur ist an die Stelle des Hörers oder Lautsprechers der Bildempfänger einzuschalten. Um die Anschaffung zu erleichtern und damit die Einführung zu fördern, hat man von den bis jetzt (1929) bekannten Systemen nur die einfachen (Gießmann, Fultograph) in Betracht gezogen. Mit diesen Apparaten lassen sich aber nur Strichzeichnungen bzw. bes. vorbereitete Vorlagen übertragen, Photographien über Tagesereignisse, also die gegebene Materie des B. dagegen nicht. Hierfür kommen nur die hochwertigen Systeme (Telefunken-Karolus) in Frage. Auch fallen die Bilder ziemlich grob aus. Der B. in dieser Form ist daher kaum mehr als eine techn. Unterhaltung. Die ersten Übertragungen (Wetterkarten) führte 1926 der Münchener Rundfunksender aus. Seit dem 20. Nov. 1928 werden auch von dem Deutschlandsender (Königs Wusterhausen) innerhalb des Rundfunkprogramms zu bestimmten Zeiten Bilder übertragen.`,
    ),
    B(`Korn und Nesper: Bildrundfunk (1926).`),
    L(
      `<strong>Bildsäule,</strong> Statue, die rundplastisch gebildete Gestalt eines Menschen, eines Tieres oder eines künstlerischen Phantasiegebildes in Stein, Holz, Metall, Ton u. a. (→Bildhauerkunst.)`,
    ),
    L(
      `<strong>Bildschnitzerei,</strong> der Zweig der →Bildhauerkunst, der sich zur Darstellung eines Kunstwerkes des Holzes (→Holzbildhauerei) und des Elfenbeins (→Elfenbeinschnitzerei) bedient.`,
    ),
    L(`<strong>Bildstein,</strong> →Agalmatolith.`),
    L(
      `<strong>Bildstock,</strong> Säule aus Stein oder Holz mit Heiligendarstellung und Inschrift, eine einfache Form der →Bildsäule.`,
    ),
  ],
  right: [
    L(
      `<strong>Bildtelegraphie</strong> (hierzu Tafel), die telegr. Übermittlung von Bildern, Zeichnungen, handschriftlichen oder gedruckten Dokumenten u. dgl. durch Leitungen oder auf drahtlosem Wege.`,
    ),
    L(
      `<em>Theoretische Grundlagen.</em> Jedes Bild, ob Photographie, Druck, Bleistiftzeichnung u. dgl., besteht aus einer Vielheit hellerer oder dunklerer Flächenelemente, sog. Bildelemente, die je nach dem, was das Bild darstellen soll, in bestimmter Weise über die ganze Fläche verteilt sind. Fällt nun Licht auf das Bild, so werden die Strahlen von den Bildpunkten größerer Helligkeit in stärkerem Maße, von solchen geringerer Helligkeit in geringerem Maße reflektiert. Auf dieser Tatsache beruht sowohl das gewöhnl. Sehen als auch das Wesen der modernen B. Dabei ist wichtig, sich folgenden Unterschied von vornherein klarmachen: Beim gewöhnl. Sehen werden alle Bildpunkte auf einmal übertragen und vom Auge wahrgenommen, bei den bis jetzt (1929) bestehenden Bildübertragungsverfahren hingegen einzeln nacheinander, also Punkt für Punkt, indem ein einzelner feiner Lichtstrahl, der durch eine Sammellinse von einer Lichtquelle her auf das Bild geworfen wird, dieses mit seiner Spitze wie eine Grammophonnadel abtastet. Dabei wird nicht etwa der Lichtstrahl über das Bild geführt, sondern das Bild bewegt sich, auf eine schnell rotierende Trommel gespannt, unter dem Lichtstrahl hinweg. Das von den Bildpunkten nach Maßgabe der Helligkeitswerte mehr oder weniger stark reflektierte Licht muß nun erst in elektrische Energie, also Stromschwankungen, umgesetzt werden, um wie Morsezeichen über Fernleitungen geschickt oder einem drahtlosen Sender zur Modulation aufgegeben werden zu können. Die Vorrichtung, in der sich diese Umwandlung vollzieht, bildet den Hauptbestandteil der Sendeapparatur. Die im Sender abgetasteten Helligkeitswerte kommen also auf der Empfangsseite als schnell aufeinanderfolgende elektrische Stromstöße an, die zunächst wieder in Helligkeitswerte umgewandelt werden müssen, um auf einem photogr. Film oder Papier das volle Bild entstehen zu lassen. Dies geschieht ganz allgemein auf die Weise, daß man einen von einer konstanten Lichtquelle auf die Bildtrommel gerichteten Lichtstrahl in seiner Lichtstärke von den ankommenden Stromstößen verändern (»steuern«) läßt. Die Vorrichtung, in der diese Umwandlung stattfindet, bildet daher den Hauptbestandteil der Empfangsanlage. Zusammenfassend läßt sich das Wesen der modernen Bildübertragungsverfahren etwa folgendermaßen umreißen (Tafel, Abb. 1):`,
    ),
    L(
      `Wie bereits erwähnt, ist sowohl die Vorlage auf der Sendeseite als auch der photogr. Film auf der Empfangsseite auf eine Trommel aufgespannt, die schnell rotiert und sich dabei gleichzeitig in der Richtung ihrer Achse verschiebt. Damit nun jeder Bildpunkt genau auf die gleiche Stelle zu liegen kommt, wie er im Sender abgetastet wurde, ist es notwendig, daß beide Trommeln mit genau der gleichen Geschwindigkeit umlaufen. Jedes Vor- oder Nacheilen der Empfängertrommel würde eine Verzerrung des Bildes bedingen. Dieser Gleichlauf (Synchronisierung) läßt sich nur mit Hilfe feinsinniger Synchronisierungsvorrichtungen, nicht bloß mit einem einfachen Uhrwerk erreichen. Hierin liegt die eine Schwierigkeit der B. hinsichtlich betriebstechn. Sicherheit und Zuverlässigkeit begründet. Eine weitere Schwierigkeit und nicht zuletzt auch ein Maßstab für die Wertigkeit der vielen bisherigen Systeme liegt auch darin, eine genügend große Zahl von Bildpunkten`,
    ),
    L(`<table>
<thead><tr><th colspan="2">Wesen der Bildtelegraphie</th></tr></thead>
<tbody>
<tr><td>Auf der Sendeseite<br/>1) Punktweises Abtasten des Bildes durch einen Lichtstrahl.<br/>2) Umwandlung der Lichtschwankungen in entsprechende elektrische Stromstöße.</td><td>Auf der Empfangsseite:<br/>1) Umwandlung der elektr. Stromstöße in entsprechende Helligkeitsschwankungen.<br/>2) Fixierung und Zusammensetzung dieser Lichteindrücke zum vollen Bild.</td></tr>
</tbody>
</table>`),
  ],
};
