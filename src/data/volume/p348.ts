import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 348 · Scan 380 · Barolong — Barometer */
export const PAGE_348: EncPage = {
  printed: 348,
  scanFile: 380,
  headerLeft: "Baro",
  headerRight: "Barolong — Barometer",
  catchword: "werden",
  scanSrc: "/scans/p348.jpg",
  left: [
    L(
      `1904), »El pasado« (Die Vergangenheit, 1905–07), »Las ciudades« (Die Städte, 1910&nbsp;ff.); die »Memorias de un hombre de acción« (1913&nbsp;ff.) fassen zwölf Romane aus dem Karlistenkrieg zusammen. Verschiedenes wurde ins Deutsche übersetzt, so von L. Haas »Der Majoratsherr von Labraz« (1918).`,
    ),
    B(`H. Peseux-Richard in Revue hispanique, Bd.&nbsp;23 (1910).`),
    L(`<strong>Barolong,</strong> Teilstamm der Betschuanen.`),
    L(
      `<strong>Barolo-Weine,</strong> die dem Bordeaux fast gleichgeschätzten, aus der Nebbiolotraube gewonnenen Weine ganz Piemonts; ursprünglich nach dem Orte Barolo in der Provinz Cuneo benannt.`,
    ),
    L(
      `<strong>Barometer</strong> [grch. ›Druck-, Schwermesser‹], ein Instrument zur Messung des stets schwankenden Luftdrucks. Im Prinzip unterscheidet man zwei Arten: die auf dem Gesetz der kommunizierenden Röhren beruhenden Quecksilberbarometer und das Aneroidbarometer, das den wechselnden Luftdruck durch die verschieden starken Einbiegungen einer luftleer gepumpten Metallkapsel mißt.`,
    ),
    L(
      `Die Quecksilberbarometer gehen auf eine von Torricelli, einem Schüler Galileis, 1643 gemachte Beobachtung zurück. Füllt man eine etwa 80&nbsp;cm lange, an einem Ende geschlossene Glasröhre mit Quecksilber, dreht dann die Röhre um, indem man den Ausfluß des Quecksilbers durch eine Glasplatte oder den Finger verhindert, und taucht die Röhre mit dem offenen Ende in ein mit Quecksilber gefülltes Gefäß, so sinkt das Quecksilber im Rohr auf etwa 76&nbsp;cm Höhe (Abb.&nbsp;1). Oberhalb des Quecksilbers im Rohr bildet sich dabei ein luftleerer Raum (Torricellisches Vakuum). Die Erklärung für diese grundlegende Erscheinung ist folgende: Die Quecksilberoberfläche im Gefäß wirkt wie eine Waage, auf deren einer Waagschale der äußere Luftdruck, auf deren anderer der Druck der 76&nbsp;cm hohen Quecksilbersäule lastet; letztere hält dem Luftdruck das Gleichgewicht. Man faßt dies kurz in der Aussage zusammen: der Luftdruck beträgt 760&nbsp;mm.`,
    ),
    N(
      "Abb. Barometer: 1 Torricellisches Vakuum (Gefäßbarometer), 2 Heberbarometer, 3 Phiolenbarometer.",
    ),
    L(
      `Auf diesem Prinzip der Messung des Luftdrucks durch eine diesem das Gleichgewicht haltende Quecksilbersäule beruhen alle Abarten des Quecksilberbarometers. Bei der eben behandelten Art, dem sog. Gefäßbarometer, wird die Höhe der Quecksilbersäule mittels einer Skala gemessen, deren Nullpunkt dem Niveau des Quecksilbers im offenen Gefäß entspricht. Weitere Abarten der Quecksilberbarometer sind das Heberbarometer (Abb.&nbsp;2) mit gebogenem,`,
    ),
  ],
  right: [
    L(
      `an beiden Enden gleich weitem Rohr und das nur noch wenig gebräuchliche Phiolen- oder Flaschenbarometer (Abb.&nbsp;3), bei dem der kurze Schenkel des Rohres flaschenförmig erweitert ist. Für wissensch. Zwecke werden →Stationsbarometer verwendet, die feinere Messungen gestatten.`,
    ),
    L(
      `Um vergleichbare Werte des Luftdrucks zu gewinnen, müssen die am B. abgelesenen Quecksilberstände noch mit einigen Korrektionen versehen werden. Zur Ausschaltung des Einflusses der Temperatur auf den Barometerstand wird dieser auf 0° reduziert nach der Formel b₀ = b / (1 + αt) (wobei b₀ den Barometerstand bei 0°, b den Stand bei der zur Zeit der Ablesung herrschenden Temperatur, α den Ausdehnungskoeffizienten der Luft, bezogen auf 1°, und t die Temperatur in Celsiusgraden bedeutet). Außerdem muß noch eine Schwerekorrektion angebracht werden, da sich die Schwerkraft mit der geogr. Breite ändert und eine gleichlange Quecksilbersäule an den Polen schwerer ist als am Äquator.`,
    ),
    L(
      `Die 1847 von Vidie erfundenen Metall-, Aneroid- oder Holostericbarometer (Abb.&nbsp;4) haben als wesentlichen Bestandteil eine geschlossene, luftleere, flache, zylindrische Metalldose A mit elastischen wellblechartigen Grundflächen, die auf der Bodenplatte B befestigt ist. Da die Dose infolge des allseitig auf ihr lastenden Luftdrucks vollständig zusammengedrückt werden würde, muß sie durch eine zwischen Boden und Deckel des Gefäßes befestigte starke, elastische Feder S, die von den Trägern F gehalten wird, auseinandergehalten werden. Bei steigendem Luftdruck wird die Dose und mit ihr die elastische Stahlfeder stärker zusammengedrückt. Diese Bewegung wird durch einen Winkelhebel bei D auf eine Schnur oder feine Kette E übertragen, die um die Achse O eines Zeigers gelegt ist und durch die Spiralfeder P gespannt wird. Der an der Feder festsitzende, aus Eisen und Messing bestehende Hebelarm C hat die Bestimmung, die Temperatur auszugleichen.`,
    ),
    N("Abb. 4 Aneroidbarometer."),
    N("Abb. Barograph."),
    L(
      `Wird infolge der Bewegung des Winkelhebels die Kette gespannt oder entspannt, so wickelt sie sich von der Achse des Zeigers ab oder auf und dreht hierdurch den Zeiger. Die durch den Luftdruck hervorgerufenen Volumänderungen der Metallkapsel`,
    ),
  ],
};
