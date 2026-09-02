import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 771 · Scan 814 · Biegungsmesser — Bielascher Komet */
export const PAGE_771: EncPage = {
  printed: 771,
  scanFile: 814,
  headerLeft: "Biegungsmesser",
  headerRight: "Bielascher Komet",
  catchword: "werden",
  scanSrc: "/scans/p771.jpg",
  left: [
    L(
      `Festigkeit für den betreffenden Werkstoff nicht überschreiten.`,
    ),
    L(
      `Die Berechnung der Biegespannung erfolgt nach den Gesetzen der Statik, nach denen die inneren Kräfte den äußeren das Gleichgewicht halten müssen. Die Wirkung der äußeren Kräfte wird als Biegungsmoment in Rechnung gesetzt, ein Begriff, der die Größe der Kräfte, die Lage ihrer Angriffspunkte und die Stützweite oder die freie Länge des Balkens berücksichtigt. So ist beim einfachsten Fall des einseitig eingespannten, am freien Ende im Abstand l cm von der Einspannstelle mit P kg belasteten Balkens das Biegungsmoment an der Einspannstelle M = P · l cmkg; die Kraftwirkung ist also um so größer, je größer entweder P oder l sind. Dem Biegungsmoment muß nun ein gleich großes Moment der inneren Kräfte das Gleichgewicht halten, das sich als das Produkt aus der erzeugten Biegespannung σ und dem von den Querschnittsabmessungen des Balkens abhängigen Widerstandsmoment W ergibt; es muß also sein M = σ · W. Für einen beliebigen Balken von bekanntem Widerstandsmoment W ist daher bei gegebener Belastungsanordnung die im Balken in den inneren Randfasern auftretende Biegespannung allgemein σ = M/W kg/qcm. Das Widerstandsmoment wird aus dem geometrischen Trägheitsmoment J des Balkenquerschnitts durch Division mit dem Abstand e zwischen der Nullachse und der Außenfaser des Querschnitts gefunden als W = J/e cm³. Das Trägheitsmoment in bezug auf die Nullachse selbst ist die Summe der Produkte der einzelnen Querschnittselemente F des Querschnitts mit dem Quadrat ihrer Abstände y von der Nullachse: J = Σ F · y² cm⁴. Die Größe der Durchbiegung des Balkens ergibt sich aus der Differentialgleichung für die Krümmung des Balkens d²v/dx² = M/(E · J), kurz auch Biegungsgleichung genannt, durch zweimalige Integration nach x. Hierin bedeuten: M Biegungsmoment, E Elastizitätsmodul, J Trägheitsmoment. Unter dem Begriff Biegungspfeil versteht man dann die auf die Längeneinheit der Stützweite des Balkens bezogene Größe der Durchbiegung.`,
    ),
    L(
      `<strong>Biegungsmesser,</strong> Apparat zur Messung der Durchbiegung des Versuchstücks beim →Biegeversuch.`,
    ),
    L(
      `<strong>Biel,</strong> angeblich ein altgerman. Gott, dessen Götterbild Bonifatius 722 an der Bielshöhe vernichtet haben soll.`,
    ),
    L(
      `<strong>Biel,</strong> frz. Bienne, Hauptstadt des Bezirks B. (233 qkm, 1920: 35420 E.) des schweiz. Kantons Bern (Karte 55, C 2), 440–450 m ü. M., am Fuß des Jura, unweit der Mündung der die Stadt durchfließenden Schüß in den Bieler See, Kreuzungspunkt der Bahnen Olten–Neuenburg und Basel–Bern, hat (1920) 31600 überwiegend ref., zu ⅔ deutsch und zu ⅓ französisch sprechende E. B. besteht aus der altertümlichen Oberstadt und der modern gebauten, gegen den See und den Bahnhof sich rasch ausbreitenden, von Parkanlagen geschmückten Unterstadt. Bemerkenswerte Bauten sind die got. Pfarrkirche, Synagoge, das alte Schloß (jetzt Rathaus), mehrere gemeinnützige Anstalten, das Museum Schwab mit prähistor. Sammlungen, alte Mauertürme, Tonhalle, Theater u. a. An höheren Schulen hat B. ein Progymnasium, eine Mädchenhandelsschule, Technikum und mehrere Fachschulen.`,
    ),
  ],
  right: [
    L(
      `In der hochentwickelten Industrie ragen bes. die Uhrenfabrikation, das Goldschmiedegewerbe, Maschinen-, Tonwaren-, Papier- und Holzstoffindustrie und die Erzeugung von elektrischen Apparaten hervor. An der Schüß und am Hagneckkanal große Turbinenanlagen zur Versorgung der Stadt mit elektrischer Energie. Die schönsten Punkte der wein- und waldreichen Umgebung sind die Taubenlochschlucht, durch welche die Schüß aus dem Jura hervorbricht, Kurhaus Magglingen (frz. Macolin), 900 m ü. M. auf einer Höhe des Jura, zu dem eine Drahtseilbahn führt, und im Bieler See die durch Rousseaus Aufenthalt (1765) bekannte St.-Peters-Insel mit Wein- und Obstgärten und Kurhaus.`,
    ),
    L(
      `B. wurde um 1200 durch die Bischöfe von Basel gegründet. 1279 schloß es mit Bern das erste, 1352 ein ewiges Bündnis. In den Burgunderkriegen focht es auf seiten der Eidgenossen; es bildete seitdem einen Freistaat unter der bischöfl. Oberhoheit und gehörte zu den sog. Zugewandten Orten. 1525 führte B. als eine der ersten Städte die Reformation ein. 1798 wurde es französisch; 1815 kam es an den Kanton Bern.`,
    ),
    B(
      `Blösch: Gesch. der Stadt B. (3 Bde., Biel 1855–56); Erni: Über die älteste Gesch. der Stadt B. (ebd. 1897).`,
    ),
    L(
      `<strong>Biel, Gabriel,</strong> scholastischer Theolog, * Speyer um 1425, † Tübingen 1495, war 1460 Domprediger in Mainz, 1484–91 (?) Lehrer in der theol. Fakultät zu Tübingen, gab in seinem vielbenutzten Kommentar zu den Sentenzen des Petrus Lombardus einen klaren Abriß der Lehre Wilhelm Occams und förderte in dem Traktat »De potestate et utilitate monetarum« die Theorie des Münzwesens. Durch B.s Schriften wurde Luther in die Theologie eingeführt.`,
    ),
    B(
      `Hermelink: Die theol. Fakultät in Tübingen vor der Reformation (1906); Feckes: Die Rechtfertigungslehre des G. B. (1925); Überweg-Geyer: Grundriß der Gesch. der Philosophie, 2. Tl. (11. Aufl. 1928).`,
    ),
    L(
      `<strong>Biela,</strong> 1) l. Nebenfluß der Elbe in Sachsen, entspringt am Hohen Schneeberg in Böhmen, durchfließt in südöstl. Richtung den schönen Bielagrund und mündet, 19 km lang, bei Königstein.`,
    ),
    L(
      `2) [bjela], tschech. Bělá, l. Nebenfluß der Elbe in Böhmen, entspringt bei Teplitz im Erzgebirge und mündet nach 75 km Lauf bei Aussig.`,
    ),
    L(
      `<strong>Biela</strong> [bjela], Wilhelm, österr. Offizier, * Rossla am Harz 19. März 1782, † Venedig 18. Febr. 1856, machte die Napoleon. Kriege mit, bekannt durch die Entdeckung des nach ihm benannten →Bielaschen Kometen.`,
    ),
    L(`<strong>Bielach,</strong> Nebenfluß der Donau, →Pielach.`),
    L(
      `<strong>Bielascher Komet,</strong> ein 1826 durch Wilh. Biela zu Josefstadt in Böhmen entdeckter Komet, der sich als periodisch mit 6¾ Jahren Umlaufszeit erwies. Im Jan. 1846 teilte er sich plötzlich in zwei Kometen, die einen Abstand von etwa 300000 km besaßen und von denen bald der eine, bald der andere heller war. Im März verschwand der eine gänzlich, während der andere noch einen Monat länger verfolgt werden konnte. Bei der nächsten Wiederkehr 1852 wurden beide wieder gesehen, hatten sich aber schon 2411000 km voneinander entfernt. 1859 wurden sie nicht aufgefunden, wahrscheinlich wegen ihrer ungünstigen Lage zur Erde; ebenso suchte man 1865 vergeblich nach ihnen, schrieb dies aber ihrer großen Entfernung zu. Als sie auch 1872 nicht gefunden`,
    ),
  ],
};
