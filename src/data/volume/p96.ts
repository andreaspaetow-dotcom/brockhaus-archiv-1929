import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 96 · Scan 118 · Auschwitz (Forts.), Ausdehnung */
export const PAGE_96: EncPage = {
  printed: 96,
  scanFile: 118,
  headerLeft: "Ausc",
  headerRight: "Ausculum — Ausdehnung",
  catchword: "rungsmäßige",
  scanSrc: "/scans/p96.jpg",
  left: [
    L(
      `(9200 poln., 3000 jüd.), liegt auf der oberschles. Platte, nahe der alten Grenze an der Soła (zur Weichsel); Bahnknoten, Industrie, Zinkwalzwerke und Dampfmühlen. In den Teichen der Umgebung Karpfenzucht. Früher war A. Hauptsitz der westgaliz. Fsm. A. und Zator, die im 15.&nbsp;Jahrh. einzeln an Polen verkauft, 1564 aber von König Sigismund August wieder vereinigt wurden. 1772 fielen sie an Österreich. Am 27.&nbsp;Juni 1866 wurde A. von den Preußen erfolglos angegriffen.`,
    ),
    L(
      `<strong>Ausculum</strong>, auch Asculum, antike Stadt in Apulien, bei der Pyrrhos 279 v.&nbsp;Chr. die Römer schlug, jedoch sehr schwere Verluste erlitt.`,
    ),
    L(
      `<strong>Ausdauernd</strong>, perennierend [von lat. perennis ’mehrere Jahre fortlebend’], heißen krautige Pflanzen, bei denen ein unterirdischer Teil (Zwiebel, Knolle, Wurzelstock) den Winter überdauert und jährlich treibt (Staudenpflanzen, Stauden, Perennen).`,
    ),
    L(
      `<strong>Ausdehnung</strong>, lat. extensio, extensa res, 1)&nbsp;die Haupteigenschaft des Raumes (der Dinge im Raum). Daher wird bisweilen das Wort A. zur Bezeichnung des Raumes verwendet.`,
    ),
    L(
      `2)&nbsp;Die Veränderung der Länge oder die Vergrößerung des Volumens, die ein jeder Körper durch Erwärmung erfährt. Wird nur die Veränderung der Längendimension in Betracht gezogen, so wird die A. linear genannt; im Gegensatz hierzu bezeichnet man die gesamte räumliche A. eines Körpers als kubische A. Als linearer Ausdehnungskoeffizient eines Stoffes wird die A. bezeichnet, die ein aus dem betr. Material verfertigter Stab von 1&nbsp;m Länge bei 0° erfährt, wenn er um 1° erwärmt wird.`,
    ),
    L(
      `Ausdehnungskoeffizienten einiger wichtiger Stoffe (Auswahl): Aluminium 0,0000238; Blei 0,0000292; Eisen 0,000012; Glas (Jenaer) 0,0000081; Gold 0,0000144; Kupfer 0,0000165; Messing 0,0000185; Quecksilber 0,000181; Silber 0,0000197; Wasser 0,00018; Zink 0,000030.`,
    ),
    L(
      `Es sei α der lineare Ausdehnungskoeffizient eines Stoffes, l₀ die Länge eines aus ihm verfertigten Stabes bei 0°. Für t° Temperaturerhöhung beträgt dann die A. l₀αt, d.&nbsp;h. die Länge l<sub>t</sub> bei t° ist: l<sub>t</sub> = l₀ + l₀αt = l₀ (1 + αt). Da die A. der festen Körper nur sehr klein ist, so ist sie in der Regel mit bloßem Auge nicht leicht nachweisbar; sie kann jedoch leicht gemessen werden, z.&nbsp;B.`,
    ),
    N("Abb. Bestimmung des Ausdehnungskoeffizienten."),
  ],
  right: [
    L(
      `mittels des Hebelpyrometers. Der Stab s, dessen Ausdehnung beobachtet werden soll, liegt mit einem Ende auf einem festen Widerlager w auf; das andere Ende stößt gegen den kürzeren Arm a eines Winkelhebels, dessen längerer Arm b auf eine Skala z zeigt. Bei Erwärmung der auf zwei passend angebrachten Stützen liegenden Stange geht das freie Ende des langen Hebelarmes b an der Skala z in die Höhe. Diese Apparatur kann auch zur Bestimmung des linearen Ausdehnungskoeffizienten verwendet werden.`,
    ),
    L(
      `Als kubische A. wird die Volumenvergrößerung eines Körpers bei Temperaturerhöhung bezeichnet. Der kubische Ausdehnungskoeffizient ist die Zahl, die angibt, um den wievielten Teil seines urspr. Volumens bei 0° sich ein Körper ausdehnt, wenn er um 1° erwärmt wird. Bei Flüssigkeiten, bei denen von linearer A. zu sprechen keinen Sinn hat, ist unter Ausdehnungskoeffizient stets der kubische zu verstehen. Es gilt der Satz, daß der kubische Ausdehnungskoeffizient dreimal so groß ist wie der lineare. Ist nämlich l die Länge einer Würfelkante bei 0°, so ist das Würfelvolumen bei 0° gleich l³; wird nun der Würfel auf 1° erwärmt, so wird jede Seite l(1 + α) lang, mithin beträgt dann das Volumen des Würfels v′ = l³ (1 + α)³ = l³ (1 + 3α + 3α² + α³). Da aber α eine sehr kleine Größe ist, so können höhere Potenzen als die erste in α vernachlässigt werden, und der Wert v′ ist demnach v′ = l³ (1 + 3α) = v (1 + 3α). Das Würfelvolumen ist also bei 1° Erwärmung um 3αv gewachsen, d.&nbsp;h. der kubische Ausdehnungskoeffizient ist β = 3α.`,
    ),
    L(
      `Alle Körper haben gegenüber der Einwirkung der Wärme sehr verschiedenes Verhalten. Wie schon aus der obigen Tabelle hervorgeht, ist die A. fester Körper sehr gering, viel kleiner als die A. flüssiger und gasförmiger Körper. Das Schrumpfen einiger fester Stoffe, wie Gummi, Kautschuk u.&nbsp;dgl., beim Erwärmen widerspricht nicht etwa dem allgemeingültigen Gesetz der A. bei Temperaturerhöhung, sondern ist auf den Wasserverlust dieser Stoffe bei Erwärmung zurückzuführen. Abweichungen von der allgem. Regel der A. bei der Temperaturerhöhung gibt es nur zwei. Einerseits zeigen Kristalle, die nicht dem regulären System angehören, unter Umständen wenigstens in einer Richtung bei Erwärmung nicht A., sondern Kontraktion. So fand z.&nbsp;B. Mitscherlich, daß der Ausdehnungskoeffizient des Kalkspates in senkrechter Richtung zur Hauptachse des Kristalles gleich −0,0000056 ist, daß also bei Erwärmung Kontraktion stattfindet, während in der Hauptachsenrichtung reguläre A. eintritt. Eine zweite, für den Haushalt der Natur sehr wichtige Ausnahme von der allgem. Regel der A. mit steigender Temperatur bildet das Wasser. Dieses zeigt im Temperaturintervall von 0° bis 4° keine A., sondern Kontraktion, d.&nbsp;h. Wasser zieht sich zusammen, wenn es von 0° bis auf etwa 4° erwärmt wird (Anomalie des Wassers). Bei etwa 4° besitzt das Wasser sein Dichtigkeitsmaximum, um sich dann bei steigender Temperatur wieder in regulärer Weise auszudehnen.`,
    ),
    L(
      `Bei einfachen Gesetzen unterliegt die A. der Gase. Hier gilt die Regel, daß alle idealen Gase den gleichen (kubischen) Ausdehnungskoeffizienten β = 1/273 haben; diese Regelmäßigkeit führte zur Einführung des absoluten Nullpunktes der Temperatur, der bei −273° liegt. Die A. der Gase ist bei weitem größer als die der flüssigen und festen Körper.`,
    ),
    L(
      `Bei allen genaueren Beobachtungen und Messungen muß die A. mit berücksichtigt werden. Die A. findet zahlreiche Anwendungen, wobei häufig die Erfah-`,
    ),
  ],
};
