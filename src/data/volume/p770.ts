import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 770 · Scan 813 · Biegemaschine — Biegung */
export const PAGE_770: EncPage = {
  printed: 770,
  scanFile: 813,
  headerLeft: "Biegemaschine",
  headerRight: "Biegung",
  catchword: "Festigkeit",
  scanSrc: "/scans/p770.jpg",
  left: [
    L(
      `<strong>Biegemaschine,</strong> Maschine zum →Biegen von Holz, Draht, Rohren, Blechen, Profileisen. Nach dem Prinzip der Arbeitsweise kann man folgende Arten unterscheiden: 1) Maschinen zum Abkanten, d. h. zum scharfkantigen Umbiegen von Blechtafeln und -teilen (Abbiege- oder Abkantmaschinen). Das zu biegende Stück wird bis zur erwünschten Biegungslinie zwischen zwei Spannwangen a und b (Abb. 1) eingeklemmt und der darüber hinausragende Teil durch die schwenkbare Wange c herumgebogen. 2) Maschinen zum Rundbiegen von Blechen und Stäben (Rundmaschinen oder Biegewalzwerke). Das Werkstück wird zwischen zwei Walzen a und b (Abb. 2) durchgezogen und dabei von den Führungswalzen c und d auf den gewünschten Radius gebogen. 3) Maschinen zur Herstellung von Form- und Biegestücken durch Pressen der Stücke zwischen entsprechend geformten Stempeln (Biegegesenke, Biegepressen).`,
    ),
    N(`Biegemaschine: 2 Arbeitsweisen einer Rundbiegemaschine.`),
    L(
      `<strong>biegen,</strong> technologischer Begriff für einen Umformungsprozeß von Werkstoffen aller Art. Dünne Bleche und Stäbe aus Eisen oder Metall werden kalt und schlagartig gebogen, stärkere Teile in rotglühendem Zustand unter langsam wirkendem Druck. Metallrohre werden meist mit Sand gefüllt, der den fehlenden Materialkern ersetzt und das Werfen von Falten an der Innenseite verhütet; große Ofenrohre werden dagegen absatzweise gebogen, so daß die Falten bewußt stehengelassen werden. Glas, Preß- und Isolierstoffe, wie Bakelit, Hartgummi usw., biegt man heiß, da sie so größere Zähigkeit besitzen; Holz meist feucht oder unter Einwirkung von Dampf. Außerdem muß Holz, Rohr oder Bambus lange in der gewünschten Biegung festgehalten werden, um eine dauernde Formänderung zu erreichen. Zum B. bedient man sich meist besonderer`,
    ),
  ],
  right: [
    N(
      `Biedermeier. Die Stickerin. (Gemälde von Friedrich Preller, 1783–1847, Weimar, Schloßmuseum; Breite 37 cm, Höhe 46,5 cm.)`,
    ),
    L(
      `→Biegemaschinen, bei kleinen Massenteilen auch einfacher Exzenterpressen.`,
    ),
    L(
      `<strong>Biegeversuch,</strong> in der Werkstoffprüfung die Untersuchung von Werkstoffen auf ihre Biegungsfestigkeit hin, und zwar entweder mit ganzen Bauteilen (Trägern, Balken, Platten, Rohren) oder mit prismatischen Probestücken. Das Versuchstück wird entweder einfach an den beiden Enden unterstützt und in der Mitte mit Gewichten belastet oder in eine Festigkeitsprüfmaschine eingespannt. Das Versuchstück biegt sich dann durch. Die Größe der Durchbiegung wird gemessen und die aufgegebene Belastung festgestellt. Von einer bestimmten Belastung, der Biegegrenze, an nimmt die Durchbiegung schneller als die Kraft zu; der Baustoff »fließt« und bricht dann schließlich. Die in diesem Augenblick festgestellte Höchstbelastung charakterisiert die Biegefestigkeit.`,
    ),
    N(`Durchbiegungsmesser. Biegeversuch.`),
    L(
      `<strong>Biegung,</strong> in der Festigkeitslehre der Vorgang, der eintritt, wenn ein gerader stabförmiger Körper, der einseitig oder beiderseitig eingespannt ist, durch Kräfte quer zu seiner Längsachse belastet wird. Hierdurch nimmt der ursprünglich gerade Stab eine gekrümmte Form an, »er wird auf B. beansprucht«. Die auf der gewölbten (konvexen) Seite liegenden Fasern erleiden dabei eine Verlängerung, die auf der hohlen (konkaven) Seite eine Verkürzung. Infolgedessen entstehen in den auseinandergezogenen Stoffteilen Zugspannungen, in den gedrückten Teilen Druckspannungen. Beide Arten der Formänderungen und Spannungen sind am größten am Rande und nehmen nach der Mitte zu stetig ab. Im Innern des Stabes gibt es daher eine Schicht, die sog. neutrale Schicht, die ihre urspr. Länge beibehält und weder auf Zug noch auf Druck beansprucht wird. Ihr liegt die Nullinie, die in Richtung der Längsachse des Stabes verläuft und die Schwerpunkte sämtlicher Querschnittsflächen miteinander verbindet. Die Linie quer zur Nullinie, in der also die neutrale Schicht eine Querschnittsfläche schneidet, heißt Nullachse oder neutrale Achse dieses Querschnitts. Für das Verhalten eines auf B. beanspruchten Trägers oder Balkens sind die größten auftretenden Zug- und Druckspannungen, kurz Biegespannung genannt, maßgebend. Will man daher die Biegefestigkeit eines auf B. beanspruchten Trägers oder Balkens berechnen, so muß man die Biegespannungen feststellen und mit den zulässigen Festigkeitszahlen vergleichen, oder, anders ausgedrückt: die Querschnitte müssen so groß gewählt werden, daß bei gegebener Lastanordnung und Stützweite die berechneten Spannungen den zulässigen Betrag der`,
    ),
  ],
};
