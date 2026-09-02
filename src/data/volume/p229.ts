import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 229 · Scan 261 · Bahnhöfe (Forts.) */
export const PAGE_229: EncPage = {
  printed: 229,
  scanFile: 261,
  headerLeft: "Bahnhöfe",
  headerRight: "Bahn",
  catchword: "Maßgabe",
  scanSrc: "/scans/p229.jpg",
  left: [
    L(
      `ausziehgleis vorgezogen und unter Benutzung der Ordnungsgleise zerlegt oder umgeordnet, wobei einzelne Wagen nach Bedarf ausgeschaltet, andere aus der Gruppe der Verstärkungs- und Bereitschaftswagen eingestellt werden. Derartig zusammengestellt, gelangt der fertige Zug schließlich in eines der Ausfahrgleise. Die Zuglokomotive kommt durch ein Durchlaufgleis heran, setzt sich vor den Zug und zieht ihn in ein Bahnsteiggleis des Personenbahnhofs vor. Einzelne Wagen, die, vom Güter- oder Verschiebebahnhof herkommend, in die Züge eingeordnet werden sollen, werden vorübergehend auf den Übergabegleisen aufgestellt. Sonderzüge bildet man aus dem Wagenvorrat, der in der Gleisgruppe neben dem Hauptausziehgleis steht.`,
    ),
    L(
      `<strong>Güterbahnhöfe.</strong> Sie dienen zum Be- und Entladen von Güterwagen. Sie sind in kleineren und mittleren Orten den übrigen Bahnhofsanlagen unmittelbar angeschlossen, in Großstädten dagegen bilden sie selbständige Anlagen. Da sich der Versand und Empfang der Güter verschieden vollzieht, je nachdem es sich um einzelne Stücke (Stückgüter) oder eine größere Menge von Gütern handelt, die den Fassungsraum oder die Tragfähigkeit eines ganzen Wagens ausnutzen (Wagenladungen), unterscheidet man hier Anlagen für den Stückgutverkehr und für den Rohgutverkehr. Die Stückgüter werden, meist verpackt, vom Versender in einem Güterschuppen (Abb.&nbsp;7) aufgegeben, dort gestapelt und von der Eisenbahnverwaltung in Orts-, Kurs- oder Umladewagen verladen. Das Verladen und Entladen der Rohgüter dagegen besorgen der Absender und der Empfänger selbst. Zur Erledigung dieser Geschäfte müssen Freiladegleise und Freiladestraßen — daher die Bezeichnung Freiladebahnhof — vorhanden sein, auf denen die Güterwagen und Straßenfuhrwerke vorfahren. Laderampen erleichtern das Verladen von Vieh, schweren Gütern und Fahrzeugen. Haupterfordernis für die Gesamtanordnung (I,&nbsp;2) sind: günstige Zufahrtsverhältnisse, bei starkem Verkehr getrennte Zu- und Abfuhrwege, und zwar sowohl nach dem Bahnhof im ganzen als auch für dessen einzelne Teile (Stückgut- und Rohgutbahnhof).`,
    ),
    N("Abb. 7 Querschnitt durch einen Güterschuppen."),
    L(
      `Von den Güterbahnhöfen grundsätzlich verschieden sind die <strong>Verschiebe- oder Rangierbahnhöfe</strong>, in denen die Güterzüge eines bestimmten Verkehrsgebietes zusammenlaufen, zerlegt und entsprechend ihrer Zielrichtung zusammengestellt werden. Hier sind zu unterscheiden: Flachbahnhöfe und Gefällbahnhöfe. Die Gesamtanordnung der ersteren Art (I,&nbsp;3) ergibt sich aus der Art eines Rangiervorganges. Es sei angenommen, daß in einem der Einfahrtsgleise ein Zug aus der Richtung a angekommen ist, der in bunter Reihenfolge aus Wagen für die Richtungen b, c und d besteht. Der Zug ist also aufzulösen. Zu diesem Zwecke werden die Kupplungen zwischen den Wagen gelockert; eine Verschiebelokomotive kommt heran, setzt sich hinter den Zug`,
    ),
  ],
  right: [
    L(
      `und drückt ihn langsam, aber in ununterbrochener Folge über den Ablaufberg (Abb.&nbsp;8), auch Eselsrücken genannt. Am Scheitel lösen sich die einzelnen Wagen oder Wagengruppen und rollen ein kurzes Steilgefälle hinab in die sich anschließenden, von einem Stellwerk jeweils eingestellten Richtungsgleise. Und zwar laufen Wagen gleicher Richtung immer in ein und dasselbe Gleis. Zur Regelung der Geschwindigkeit dient eine Gleisbremse. Auf diese Weise wird ein Zug nach dem andern zerlegt. Die Wagen stehen nun zwar nach Richtungen geordnet auf den Richtungsgleisen, aber nicht bahnhofsweise, d.&nbsp;h. nicht in der Folge der auf einer Strecke berührten Bahnhöfe. Sie müssen deshalb nochmals umgeordnet werden. Sobald daher auf einem Richtungsgleis sich so viele Wagen angesammelt haben, daß aus ihnen ein Zug für diese betreffende Richtung abgefertigt werden kann, werden die Wagen von einer Verschiebelokomotive nach dem Ausziehgleis vorgezogen und mit Hilfe eines zweiten Ablaufbergs und der daran sich anschließenden Stationsordnungsgleise bahnhofsweise zerlegt. Die so geordneten Wagengruppen werden nun in der Reihenfolge, wie die Stationen aufeinanderfolgen, nach dem Ausfahrgleis für die betreffende Richtung gezogen und zu einem fertigen Zug zusammengestellt. Die Leistungsfähigkeit einer derartigen Anlage hängt wesentlich von der Ausgestaltung des Ablaufbergs ab. Um hierbei den durch die Witterung bedingten Bewegungswiderständen der Wagen Rechnung zu tragen, legt man vielfach zwei Ablaufberge verschiedener Höhe (Sommer- und Winterberg) nebeneinander an. Beispiele ausgeführter Anlagen: Verschiebebahnhof Wustermark, Hamm.`,
    ),
    N("Abb. 8 Ablaufberg. Richtungsgleise. Gleisbremse."),
    L(
      `Anders gestaltet sich die Umbildung der Güterzüge auf einem <strong>Gefällbahnhof</strong> (I,&nbsp;4). Die wie beim Flachbahnhof vorkommenden Gleisgruppen liegen hier nicht flach, sondern mit durchlaufendem Gefälle hintereinander. Die Wagen kommen daher von selbst ins Rollen; eine Verschiebelokomotive ist nicht nötig. Beispiele: Verschiebebahnhof Zwickau, Nürnberg, Dresden, Chemnitz.`,
    ),
    L(
      `<strong>Lokomotivbahnhöfe</strong> (I,&nbsp;5) sind Anlagen für die Aufnahme und Betriebsstoffversorgung von Lokomotiven. Die Packwagen werden auf den Packwagengleisen abgestellt. Dann fährt die Lokomotive auf dem Bekohlungsgleis zur Bekohlung nach den Kohlenbänken, dann zur Entschlackungsgrube, wo die Roste von Asche und Schlacke gereinigt werden. Für die Entfernung der anfallenden Schlacke ist ein besonderes Schlackenwagengleis vorgesehen. Gleichzeitig wird von einem Wasserhochbehälter aus der Vorrat an Wasser und am Magazin der Sand- und Ölvorrat ergänzt. Erst dann fährt die Lokomotive bis zur nächsten Dienstbereitschaft in den Lokomotivschuppen. Den Anlagen zur Lokomotivbehandlung ist meist noch eine Betriebswerkstatt zur Ausführung von Reparaturen angegliedert, ferner auch Schuppen zur Unterbringung der Hilfszüge mit Geräte- und Arztwagen.`,
    ),
    L(
      `<strong>Sonderformen:</strong> Viehbahnhöfe sind gekennzeichnet durch lange Ladegleise mit Laderampen. Dazu kommen Entseuchungsanlagen, wo die Viehtransportwagen desinfiziert und gewaschen werden. Industriebahnhöfe sind Anlagen großer industrieller Unternehmen, die je nach Eigenart des Werkes und der Verladung verschieden ausgebildet werden. Hafenbahnhöfe sind mit den Verschiebebahnhöfen auf eine Stufe zu stellen. Die einlaufenden Wagen werden nach`,
    ),
  ],
};
