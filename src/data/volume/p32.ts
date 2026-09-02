import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 32 · PDF-S. 50 · Atombau (Bohr, Wasserstoff) */
export const PAGE_32: EncPage = {
  printed: 32,
  scanFile: 50,
  headerLeft: "Atombau",
  headerRight: "Atom",
  catchword: "geladenen",
  scanSrc: "/scans/p32.jpg",
  left: [
    L(
      `zur Verfügung stehen. Ein und dasselbe Elektron kann zwar bestimmte Bahnen beschreiben, aber nicht etwa jede, die die klass. elektromagnet. Theorie erlauben würde. Diese ausgezeichneten Bahnen sind durch eine Bedingung, die sog. erste Quantenregel, gegeben. Jeder dieser Bahnen kommt eine bestimmte Energie des Elektrons zu; hieraus folgt, daß auch nicht alle Energiewerte für das kreisende Elektron vorkommen, sondern daß ebenfalls nur ausgezeichnete Energiestufen (Energieniveaus) möglich sind. Eine bestimmte Bahn kann das Elektron beliebig lange durchlaufen, ohne daß seine Energie etwa erschöpft wäre. Zweitens nimmt Bohr an, daß ein Elektron plötzlich von einer Quantenbahn zu einer andern ihm möglichen Quantenbahn springen und dabei Energie abgeben oder aufnehmen kann. Springt z.&nbsp;B. ein Elektron von einer äußern Bahn auf eine weiter dem Kern zu gelegene innere Bahn, so wird Energie frei, die das Elektron in Form von Strahlung gemäß dem Planckschen Gesetz aussendet, wonach Emission und Absorption einer Strahlung von der Schwingungszahl ν immer in Energiemengen (sog. Lichtquanten) von der Größe hν erfolgt. War nun etwa E<sub>1</sub> die Energie des kreisenden Elektrons vor und E<sub>2</sub> die Energie des Elektrons nach dem Sprung, so ist die ausgestrahlte Energie hν = E<sub>1</sub> − E<sub>2</sub>. Dies ist die zweite Quantenregel oder Bohrsche Frequenzbedingung. Wird umgekehrt die Strahlung absorbiert, so springt das Elektron auf eine höherquantige Bahn, d.&nbsp;h. auf eine Bahn höherer Energie.`,
    ),
    L(
      `Diese Bohrsche Theorie ist ungemein fruchtbar für die gesamte Atomphysik geworden. Sie gibt vor allen Dingen eine Erklärung für das Auftreten der Spektrallinien. Den diskreten Energiewerten E<sub>1</sub>, E<sub>2</sub> usw. entsprechen natürlich auch bestimmte ν-Werte, also gemäß der Frequenzbedingung bestimmte Linien. Eine ausgezeichnete quantitative Bestätigung findet Bohr beim Wasserstoff, der im sichtbaren Gebiet als Spektrum die Balmerserie aussendet. Diese kann, wie Balmer gefunden hat, durch die empirische Formel ν = R (1/2<sup>2</sup> − 1/n<sup>2</sup>), n = 3, 4, 5, … dargestellt werden. Die dieser Formel entsprechenden Spektrallinien werden mit H<sub>α</sub>, H<sub>β</sub> usw. bezeichnet. Aber auch im ultravioletten und im ultraroten Gebiet sendet Wasserstoff Licht aus, das durch die Lymanserie und die Paschenserie spektral geordnet wird. Allgemein kann man die Spektrallinien des Wasserstoffs durch die Formel ν = R (1/m<sup>2</sup> − 1/n<sup>2</sup>) darstellen. Bohr findet aus seiner Atomtheorie die gleiche Formel, wobei die Konstante R (Rydbergkonstante) genau wiedergefunden wird. Die Abbildung zeigt das Atommodell des Wasserstoffs. Die Kreise 1, 2, 3, … sind die verschiedenen Quantenbahnen, die das Elektron durchlaufen kann. Die Balmerserie entsteht, wenn das Elektron von der Bahn 3, 4, 5, … auf die Bahn 2 springt. Dabei werden die Linien H<sub>α</sub>, H<sub>β</sub>, H<sub>γ</sub>, H<sub>δ</sub> ausgestrahlt. Dies ist so zu verstehen, daß es in einem Wasserstoffgas Atome gibt, in denen das Elektron von 3 auf 2 springt, während es in einem andern von 4 auf 2, in wieder einem andern von 5 auf 2 usw. springt. Jedesmal befindet sich das eine Elektron natürlich nur auf einer der möglichen Bahnen. Ganz analog entstehen durch Sprünge auf 1 die Lymanserie und`,
    ),
  ],
  right: [
    L(
      `durch die Sprünge auf Bahn 3 oder 4 die Paschen- und die Brackettserien.`,
    ),
    L(
      `Eine gute Bestätigung der Theorie geben auch die Stoßversuche von J. Franck und G. Hertz. Diese Forscher haben Elektronen in ein Gas eintreten lassen, indem sie den Elektronen durch Anlegen eines elektrischen Feldes eine gewisse Geschwindigkeit erteilten. Die Elektronen stoßen auf die Atome und können dabei Atomelektronen von ihrer gewöhnl. Bahn auf eine höherquantige Bahn heben. Die gehobenen Elektronen werden ihrerseits wieder unter Aussendung von Strahlung in eine tieferquantige Bahn zurückfallen; auch können die Atomelektronen durch den Stoßvorgang aus dem Atomverband gerissen, also freigemacht werden: die Atome sind ionisiert (Stoßionisation). Zur Hebung der Elektronen in höherquantige Bahnen ist ein Energiebetrag notwendig, der sich genau aus den Spektraltermen des Atoms berechnen läßt. Diese Energie muß das stoßende Elektron mindestens besitzen, um überhaupt einen Effekt zu verursachen. Ein Vergleich der kinetischen Energie der stoßenden Elektronen, die sich aus der angelegten Spannung (Anregungsspannung) berechnen läßt, mit den Energiewerten der Spektralterme gibt eine ausgezeichnete Übereinstimmung des Experimentes mit der Theorie. Ebenfalls stimmt die berechnete Ionisationsenergie mit der angelegten Ionisationsspannung überein.`,
    ),
    N("Abb. Atombau: Spektrum des Wasserstoffs (Lyman-, Balmer-, Paschen-, Brackettserie)."),
    L(
      `Beim Wasserstoff z.&nbsp;B. kreist um den positiv geladenen Kern (Masse 1,66&nbsp;·&nbsp;10<sup>−24</sup>&nbsp;g, Ladung 4,774&nbsp;·&nbsp;10<sup>−10</sup> elektrostatische Einheiten) ein Elektron in Keplerschen Ellipsen. Der Durchmesser der Bahnen beträgt 1 bis 5&nbsp;·&nbsp;10<sup>−8</sup>&nbsp;cm. Das Elektron hat eine negative Ladung von ebenfalls 4,774&nbsp;·&nbsp;10<sup>−10</sup> elektrostatischen Einheiten, während seine Masse nur 9&nbsp;·&nbsp;10<sup>−28</sup>&nbsp;g beträgt, also viel kleiner als die Masse des Kerns ist. Der Bau des Atoms ist also außerordentlich offen, viel offener selbst als der Bau des Sonnensystems. Die Kerne und Elektronen sind außerordentlich klein gegenüber ihrer gegenseitigen Entfernung.`,
    ),
    L(
      `Das dem periodischen System der Elemente entsprechende nächstkomplizierte Atom nach dem Wasserstoff ist das Heliumatom. Es besteht aus einem zweifach positiv geladenen Kern, um den zwei negative Elektronen kreisen. Wird ein Elektron entfernt, so wird das einfach ionisierte Helium erhalten. Durch Entfernung auch des zweiten Elektrons erhält man das doppeltionisierte Helium, das nur aus einem Heliumkern besteht, der mit einem Alphastrahlteilchen identisch ist.`,
    ),
    L(
      `Im periodischen System weiter fortschreitend, folgt das Lithium, das aus einem dreifach positiv`,
    ),
  ],
};
