import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 26 · PDF-S. 44 · Atmosphäre (Forts.), Atmung */
export const PAGE_26: EncPage = {
  printed: 26,
  scanFile: 44,
  headerLeft: "Atmosphäre — Atmung",
  headerRight: "Atmu",
  catchword: "einander",
  scanSrc: "/scans/p26.jpg",
  left: [
    L(
      `nur angenäherten) Temperaturen in verschiedenen Höhen. Man kann hieraus entnehmen, daß im einzelnen die Temperaturabnahme mit wachsender Höhe sehr wechselvoll ist, ja daß selbst Temperaturzunahme mit der Höhe eintritt. Diese rührt daher, daß die untersten Luftschichten durch Wärmeabgabe an die Unterlage infolge von deren Ausstrahlung stärker erkalten als die darüberliegenden, wodurch Temperaturumkehr (Inversion) hervorgerufen wird. Inversionen treten bes. im Winter auf, in welcher Jahreszeit sie die Gradienten beträchtlich verringern (Beispiel bei Berlin Gradient für die untersten 500&nbsp;m im Sommer 0,84, im Winter 0,15). Temperaturumkehr kann sich jedoch auch in der freien A. einstellen, und bes. findet sie statt in der Stratosphäre, die über der durch die Witterungsvorgänge stetig durchmischten Troposphäre liegt und Temperaturzunahme nach oben oder wenigstens Temperaturgleichheit (Isothermie) aufweist.`,
    ),
    B(
      `Hann-Süring: Lehrbuch der Meteorologie (4.&nbsp;Aufl. 1926); Exner: Dynamische Meteorologie (2.&nbsp;Aufl. 1925); Süring: Leitfaden der Meteorologie (1927); A. Wegener: Thermodynamik der Atmosphäre (3.&nbsp;Aufl. 1928).`,
    ),
    L(
      `<strong>Atmosphäre</strong>, 1)&nbsp;als physikal. Einheit, abg. Atm, der Druck einer Quecksilbersäule von 760&nbsp;mm bei 0° auf 1&nbsp;qcm; dieser Druck beträgt etwa 1,033&nbsp;kg.`,
    ),
    L(
      `2)&nbsp;Als techn. Einheit, abg. at, auch metrische oder neue A. genannt, ist A. der Druck von 1&nbsp;kg/qcm = 735,5&nbsp;mm Quecksilbersäule (Q.-S.) von 0° C = 10000&nbsp;mm Wassersäule (W.-S.) von +4° C = 0,968 Atm. Je nachdem der Druck absolut (barometrisch) oder nur relativ zum äußeren Luftdruck gemessen wird, muß man zwischen absoluter A., abg. at abs oder ata, und Überdruckatmosphäre, abg. atü, unterscheiden. So zeigt z.&nbsp;B. das Manometer den Druck im Dampfkessel stets in atü an.`,
    ),
    L(
      `<strong>Atmosphärilien</strong>, die chemisch und physikalisch wirksamen, in der Atmosphäre vorkommenden Stoffe, so bes. Sauerstoff, Ozon, Kohlensäure, Ammoniak, Salpetersäure, salpetrige Säure, Wasser und Wasserdampf.`,
    ),
    L(`<strong>Atmosphärische Elektrizität</strong>, →Luftelektrizität.`),
    L(`<strong>Atmosphärische Gezeiten</strong>, →Gezeiten.`),
    L(`<strong>Atmosphärische Maschine</strong>, histor. Bauart des →Gasmotors.`),
    L(
      `<strong>Atmosphärische Strahlenbrechung</strong>, die Erscheinung, daß Lichtstrahlen beim Hindurchgang durch die Atmosphäre infolge der →Brechung aus ihrer urspr. Richtung abgebogen werden. Da die Brechung des Lichtes innerhalb eines Gases mit wachsender`,
    ),
    N("Abb. Atmosphärische Strahlenbrechung."),
  ],
  right: [
    L(
      `Dichte zunimmt, so ist der Weg eines opt. Strahles durch die Atmosphäre, deren Dichte mit der Entfernung von der Planetenoberfläche stetig abnimmt, gekrümmt. Ein leuchtender Gegenstand S erscheint daher dem Beschauer gehoben, d.&nbsp;h. nach S′ verschoben.`,
    ),
    L(
      `<strong>Atmung, Respiration</strong>, Bezeichnung für verschiedene Vorgänge im Pflanzen- und Tierkörper. Man unterscheidet: 1)&nbsp;äußere A., den Gaswechsel durch die Atmungsorgane; 2)&nbsp;Gewebsatmung, den Austausch von Sauerstoff und Kohlensäure zwischen Blut und Geweben; 3)&nbsp;innere A., die Verbrennung der Nährstoffe unter Mitwirkung von Sauerstoff zur Gewinnung von Energie für die Leistungen lebender Wesen. Bei den niedersten, vor allem den sehr kleinen Organismen erfolgt der Gasaustausch durch die Haut (Hautatmung), bei allen größern Wesen sind besondere Atmungsorgane ausgebildet. Ihr allgem. Hauptprinzip ist Oberflächenvergrößerung durch Faltungen, Ein- und Ausstülpungen. Erfolgt der Gasaustausch mit dem umgebenden Wasser, so nennt man die Atmungsorgane Kiemen (Abb.&nbsp;6); erfolgt er mit der Luft, so spricht man von Lungen (Abb.&nbsp;1–4) oder Tracheen (Abb.&nbsp;5). Besondere Bewegungen (Atembewegungen) dienen dazu, das Wasser oder die Luft, die mit den Atmungsorganen in Berührung kommt, beständig zu erneuern.`,
    ),
    L(
      `Beim Menschen bestehen die Atembewegungen (äußere A.) in Erweiterung (Einatmung, Inspiration) und Verengerung (Ausatmung, Exspiration) des Brustkorbes (Abb.&nbsp;8 und 9). Der Einatmung dienen alle Muskeln, die die Rippen heben (Rippen- oder Brustatmung, kostale A.), und das Zwerchfell (diaphragmatische A., Zwerchfell- oder Bauchatmung); beim Mann überwiegt die Bauchatmung, bei der Frau die Brustatmung (Abb.&nbsp;7). Die Ausatmung erfolgt beim ruhigen Atmen passiv, bei angestrengter A. (Atemnot, Dyspnoe) unter Muskelwirkung. Daß die Lunge den Bewegungen des Brustkorbes folgt, hat folgenden Grund: Der Brustraum ist in jeder Stellung für die Lungen im Ruhezustande zu umfangreich; der so zwischen Brustinnenwand und Lungenoberfläche entstehende spaltförmige Raum wird durch die von Rippen- und Lungenfell gebildete Pleurahöhle (→Brust) ausgefüllt. Da nun die Lungen elastische Fasern haben, die sich (und damit die Lungen) zu verkleinern streben, gleichsam einen Zug nach innen ausüben, so ruht bei ruhender Atemtätigkeit und offener Verbindung der Lungen (durch die Luftröhre) mit der Außenluft auf dem Lungenfell der Luftdruck, vermindert um die (nach innen gerichtete) Spannung des Lungengewebes, auf dem Rippenfell dagegen der unverminderte Luftdruck. Der Druck in der Pleurahöhle ist also kleiner als der Luftdruck, ist negativ, wenn man den Luftdruck als Nullinie nimmt. Dieser negative Druck in der Pleurahöhle beträgt in der Ausatmungsstellung des Brustkorbes etwa 6&nbsp;mm Quecksilber. Da das Lungenfell mit der Lungenoberfläche fest verwachsen ist, so wirkt bei der Erweiterung des Brustkorbes bei der Einatmung dieser negative Druck wie ein elastischer Zug, der die Lungen der Thoraxerweiterung zu folgen zwingt. Bei der Ausatmung sorgen die elastischen Kräfte der Lunge für eine Verkleinerung. Wird dieser negative Druck aufgehoben, z.&nbsp;B. durch eine Verletzung der Brustwand, so daß die Außenluft mit der Pleurahöhle in Verbindung steht, oder durch künstliche Anfüllung der Pleurahöhle mit einem Gas von dem Druck der äußern Luft, so fällt für die Lungen der Zwang weg, dem Brustkorb zu folgen; sie schrumpfen zusammen und beteiligen sich nicht mehr an der Atmung (Pneumothorax). Da beide Pleurahöhlen nicht mit`,
    ),
  ],
};
