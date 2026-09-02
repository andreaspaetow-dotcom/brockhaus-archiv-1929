import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 54 · PDF-S. 72 · Aufbereitung (magnetisch, Flotation) */
export const PAGE_54: EncPage = {
  printed: 54,
  scanFile: 72,
  headerLeft: "Aufbereitung",
  headerRight: "Aufb",
  catchword: "Chemische",
  scanSrc: "/scans/p54.jpg",
  left: [
    L(
      `länger in der Schwemme gehalten als die spezif. schweren (Erz-) Körner. Jene werden durch den Überlauf abgeschwemmt, diese bleiben zurück. Die ganz feinen Bestandteile, sog. Mehle und Schlämme, werden auf Schüttel- oder Planherden (Abb.&nbsp;3) sortiert. Diese bestehen aus einer schwach geneigten Platte, über die die Erztrübe in einem dünnen Strome hinweggleitet. Durch die Stoß- oder Schüttelwirkung werden die spezif. schweren Teilchen am weitesten fortgeschleudert, die leichtern Teilchen in geringerm Maße und so voneinander getrennt.`,
    ),
    L(
      `<strong>Magnetische A.</strong> Die genannten Verfahren führen nicht zum Ziel, wenn die zu trennenden Mineralien nahezu gleiches spezif. Gewicht haben, wie z.&nbsp;B. Zinkblende und Spateisenstein oder Zinnerz und Wolframit. In solchen Fällen ist die magnet. A. von Bedeutung. Sie beruht darauf, daß manche Erze, wie z.&nbsp;B. die Eisen-, Kobalt-, Nickel-, Wolframerze usw., vom Elektromagnet angezogen werden, andere hingegen nicht. Hierzu gehören die Blei-, Silber-, Kupfer-, Wismut- und Zinkblenden. Da weiterhin die magnet. Erze nicht alle gleich stark angezogen werden, lassen sie sich durch das gleiche Verfahren auch untereinander trennen. Im einzelnen geschieht die Trennung folgendermaßen: das Material wird einer Trommel aufgegeben, die ständig rotiert. Im Innern befinden sich auf einer Seite die Elektromagnete. Unmagnet. Stücke fallen sofort ab, magnet. Stücke hingegen werden eine kurze Strecke weit mitgenommen und fallen erst dann ab, wenn sie den Bereich der Magnete verlassen haben (Abb.&nbsp;4). Bei den Bandseparatoren wird das Gut auf einem Transportband zwischen Elektromagneten verschiedener Stärke durchgeführt, nach den magnet. Eigenschaften seiner Bestandteile sortiert und auf Querbändern ausgetragen. Die unmagnet. Stücke verlassen die Maschine auf dem untern Transportband.`,
    ),
  ],
  right: [
    L(
      `<strong>Schwimmaufbereitung oder Flotation.</strong> Diesem Verfahren liegt die Tatsache zugrunde, daß Öle die Eigenschaft haben, bei Gegenwart von Wasser diejenigen Mineralien, die zu den Gruppen der Glanze, Kiese und Blenden oder auch zu den Metalloxyden gehören, zu benetzen, dagegen nicht die Gangarten. Erzeugt man nun in dieser Trübe Gasblasen — entweder durch Preßluft oder durch ein Rührwerk —, so setzen sich die Gasblasen an den geölten Erzteilchen fest und steigen mit ihnen zur Oberfläche (Abb.&nbsp;5). Hier wird der sich bildende Schaum von Zeit zu Zeit abgefangen und gereinigt. Der erste Versuch, Schwermetallsulfide durch Ausnutzung der oben genannten Eigenschaft vom Gang zu trennen, wurde 1860 von William Haynes gemacht, ohne daß diesen Versuchen ein wirtschaftl. Erfolg beschieden gewesen wäre. 25 Jahre später entdeckte die Lehrerin C. Everson beim Auswaschen fettiger Waschlappen, die Sulfide enthalten hatten, daß durch einen Zusatz von Säure die Adsorption erhöht wurde und daß die geölten Sulfide bei genügend starker Bewegung der Flüssigkeit an die Oberfläche stiegen. 1898 gab Francis E. Elmore diesem Gedanken eine techn. brauchbare Form in seinem Ölverfahren, das vor allem in den Ver. St. v.&nbsp;A., Kanada, Schweden, Australien und Brit.-Kolumbien angewandt wurde, bis 1905 Froment die Gasblase als billiges und wirksames Auftriebsmittel bei nur spurenweisem Zusatz von Öl und Säure einführte und damit das Schaumschwimmverfahren begründete, das sich seitdem in außerordentlichem Maße verbreitet hat. Gestattet doch dieses Verfahren, wertvolle Teilchen bis zu einem Durchmesser von etwa 1/10000&nbsp;mm zu gewinnen und damit Werte zu erhalten, die bis vor wenigen Jahrzehnten in den Abgängen und feinkörnig verwachsenen Erzen als verloren gelten mußten.`,
    ),
    N(
      "Abb. Aufbereitung: 1 Schema und Arbeitsweise eines Stromapparats, 2 einer Setzmaschine, 3 Schüttelherd, 4 Arbeitsweise eines magnet. Scheiders, 5 Schwimmaufbereitung (Flotation).",
    ),
  ],
};
