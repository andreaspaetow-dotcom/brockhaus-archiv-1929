import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 401 · Scan 433 · Baudrillart — Bauer */
export const PAGE_401: EncPage = {
  printed: 401,
  scanFile: 433,
  headerLeft: "Baudrillart — Bauer",
  headerRight: "Baue",
  catchword: "Gebundenheit",
  scanSrc: "/scans/p401.jpg",
  left: [
    L(
      `<strong>Baudrillart</strong> [bodrijɑr], Alfred, franz. Historiker, *&nbsp;Paris 6.&nbsp;Jan. 1859, Rektor der kath. Universität in Paris, schrieb u.&nbsp;a. das preisgekrönte Werk »Philippe V et la cour de France« (5&nbsp;Bde., 1890–1901), ferner »Quatre cents ans de concordat« (1905) und »L'Allemagne et les alliés devant la conscience chrétienne« (1917).`,
    ),
    L(
      `<strong>Baudry</strong> [bodri], Paul, franz. Maler, *&nbsp;La Roche-sur-Yon 7.&nbsp;Nov. 1828, †&nbsp;Paris 17.&nbsp;Jan. 1886, Schüler von Drolling, bildete sich weiter an den Werken Raffaels, Correggios und der Venezianer. Er malte Bildnisse, Geschichtsbilder (Tod der Vestalin, Charlotte Corday), nackte Frauengestalten (Toilette der Venus) und dekorative Malereien in Schlössern und Privathäusern. Hauptwerke sind die 33 allegorisch-mythol. Decken- und Wandbilder im Foyer der Großen Oper in Paris, die Musik und Poesie verherrlichen.`,
    ),
    B(`Ephraussi: Paul B., sa vie et son œuvre (1887).`),
    L(
      `<strong>Bauer,</strong> selbständiger Bearbeiter des Ackerbodens kleinerer und mittlerer Anbaufläche.`,
    ),
    L(
      `Soziologische Eigenart des B. Der B. und sein Stand ist in eigentümlicher Weise mit seinem fruchttragenden Boden verwachsen, eine Eigenart, die seinen Menschen- und Berufstypus bestimmt. Der B. ist schollen- und heimatfreu und darüber hinaus auch stark national gebunden. In der Verwurzelung mit dem Boden ist auch der Konservatismus des B. bedingt. Herkommen und Sitte sind hier vielfach stärker als rationale Überlegungen. Mangel an Beweglichkeit und Anpassung sind kennzeichnend für den B. der ganzen Welt. Symbole dieses Wesens sind die Jahrhunderte hindurch erhaltenen Trachten, Geräte, Schmucksachen, Zeichen, Lieder, Tänze, Mundarten, die Formen der Bauernhäuser und die religiöse Haltung des B. Die Verbindung mit dem Boden verhinderte auch, daß er zum bewußten Träger gesellschaftl. Umwälzungen wurde und daß sich ein bäuerliches Klassenbewußtsein herausbildete. Wenn die B. revolutionär wurden, so hatten sie dabei nicht den Umsturz in geistig-polit. Beziehung, sondern nur Reformen zur Verbesserung ihrer eigenen Lage im Auge, so z.&nbsp;B. in den Bauernaufständen in der 1.&nbsp;Hälfte des 16.&nbsp;Jahrh., der franz. und russ. Revolution. Hat der B. sein Ziel erreicht, so wird er sehr leicht zum Gegner der eigentl. Ziele der Revolution.`,
    ),
    L(
      `Der Wirtschaftstypus des B. Die Stellung des B. in der Wirtschaft der Gegenwart erklärt sich z.&nbsp;T. durch seine Stellung in der vor- und frühkapitalistischen Zeit. Damals war seine Wirtschaft nur lose in die aufkommende Geldwirtschaft eingeordnet. Sie war in einem hohen Maße selbstgenügende Eigenwirtschaft, die nicht auf Erwerb eingestellt war und nur die standesgemäße Nahrung zu liefern hatte. Die bis in das 19.&nbsp;Jahrh. bestehende Abhängigkeit von dem Grundherrn, die Verbindung mit den Dorfgenossen bedeuteten zwar einen Rückhalt für Zeiten der Not und des Krieges, hinderten aber den Fortschritt. Denn an der Erhöhung der Einnahmen über das übliche Maß hinaus bestand kein Interesse, da sie größtenteils dem Grundherrn zugute gekommen wären. Diese wirtschaftl. Erstarrung des B. verhinderte den Aufschwung der ganzen Gesellschaft und zwang auch die nichtbäuerlichen Kreise zu einem Kampf für die Bauernbefreiung. Der Wegfall des Rückhalts von Gemeinde- und Herrenwaldnutzungen, die Ausgaben für die Gemeinde, die Steuern, die Auslieferung an eine Wirtschaft der Konkurrenz zwangen den B., die Wirtschaft auf Erwerb einzustellen, Rücklagen für Verbesserungen und schlechte Zeiten zu schaffen. Der B. fing an, sich auf die Produktion von agrarischen Produkten zu beschränken, alle andern Dinge auf dem Markt zu kaufen. Die Betriebe wurden durch Benutzung von Maschinen, elektrischer Kraft, künstlichen Düngemitteln rationeller gestaltet. Ein »kapitalistischer Geist« hat sich aber auch jetzt nicht herausgebildet. Noch fehlt es in der Bauernschaft an der Durchrationalisierung des Betriebes. Die Nutzung des Bodens ist noch in einem hohen Maße Selbstzweck, nicht bloße Erwerbsquelle. Es fehlt die Tendenz zur Bildung von Großbetrieben, der Besitzstand ist im letzten Jahrhundert fast derselbe geblieben. Der wirtschaftl. Zusammenschluß, der in den →Landwirtschaftlichen Genossenschaften zutage tritt, wird nicht von kapitalistischem Geist getragen, sondern dient lediglich zur Förderung des Erwerbsstrebens des einzelnen.`,
    ),
    B(
      `Sombart: Der B. (2.&nbsp;Aufl. 1924); Albrecht: Das deutsche Bauerntum im Zeitalter des Kapitalismus (im Grundriß der Sozialökonomik, Bd.&nbsp;9, 1926).`,
    ),
  ],
  right: [
    L(
      `Entwicklung des Bauernstandes und Bauerngutes. Die selbständigen Landwirte sind in drei Klassen zu teilen: 1)&nbsp;die Besitzer und Pächter der großen Güter, bes. der →Rittergüter, 2)&nbsp;der kleineren Güter, deren Ertrag noch für den Lebensunterhalt ausreicht, 3)&nbsp;der ganz kleinen Güter, deren geringer Ertrag oft zu Nebenerwerb nötigt. Die Zugehörigen der beiden letzten Klassen nennt man gewöhnlich B.; im engeren Sinne sind dies aber nur die Besitzer solcher Güter, die den Inhaber vollständig ernähren und Gespanne zu halten gestatten. Nach der Ausdehnung des Besitzstums unterscheidet man in manchen Gegenden noch heute Vollbauern (Vollerben, Vollspänner, Hufner) und Halbbauern (Halbspänner, Halbhufner) und stellt ihnen als Nichtbauern die Kossäten (mit Häuschen und kleiner Ackerwirtschaft), die Büdner oder Häusler (kleine Grundbesitzer, die auf Tagelohn oder Gewerbebetrieb angewiesen sind) und die nichtansässigen Einlieger gegenüber (→Landwirtschaftliche Arbeiter). Über die Art der Ansiedlung der ländlichen Bevölkerung →Dorfsystem und →Hofsystem.`,
    ),
    L(
      `Beim frühesten geschichtlichen Auftreten der Deutschen kann man von einem völlig und dauernd seßhaften Bauernstand noch nicht reden. Es wurde zwar Feldbau betrieben, aber Viehzucht, Jagd und Krieg spielten eine überwiegende Rolle in der Wirtschaft. Im 4. und 5.&nbsp;Jahrh. gestalteten sich die Besitzverhältnisse dauernder und fester – der Krieger wurde B. Neben den B. aber entstand ein Grundherrentum, das aus seinem reichen Landbesitz nur durch Weiterverleihung an pflichtige Hintersassen Gewinn ziehen konnte, da in dieser Zeit ein Großgrundbetrieb noch nicht bekannt war. Ein Teil`,
    ),
  ],
};
