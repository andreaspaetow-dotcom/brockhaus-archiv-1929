import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 24 · PDF-S. 42 · Atmosphäre (Strahlung, Wärmehaushalt) */
export const PAGE_24: EncPage = {
  printed: 24,
  scanFile: 42,
  headerLeft: "Atmosphäre",
  headerRight: "Atmo",
  catchword: "wenig",
  scanSrc: "/scans/p24.jpg",
  left: [
    L(
      `alle Luftbestandteile, die Luftmoleküle und bes. die mechan. Beimengungen, wie Staub, Wasserdampf usw. Nicht alle von der Sonne her eintreffenden Strahlengattungen werden in gleichem Maße diffus reflektiert, sondern die kurzwelligen Bezirke des Spektrums mehr als die langwelligen.`,
    ),
    L(
      `Rotstrahlung wird also fast ungeschwächt durchgelassen, Violettstrahlung zur Hälfte durch diffuse Reflexion abgeschwächt. Ultraviolette Strahlung wird fast völlig ausgelöscht. Schon in verhältnismäßig geringen Höhen (Hochgebirge) ist die violette und ultraviolette Strahlung stärker. Die Bläue des Himmels ist keine Eigenfarbe der A., sondern die Luftmoleküle reflektieren die blauen Strahlen am meisten. Außer der diffusen Reflexion bewirkt die A., bes. durch ihren Wasserdampf- und Kohlensäuregehalt, eine teilweise Auslöschung (selektive Absorption) der ankommenden Strahlung. Da diese mit der Wellenlänge wächst, so werden im sichtbaren Teil des Spektrums nur ganz eng begrenzte Bereiche absorbiert (Fraunhofersche Linien), während von den langwelligen (ultraroten) Wärmestrahlen ganze Bezirke ausgelöscht werden. Durch die selektive Absorption erklärt es sich, daß bei Sonnenuntergang die Wärmewirkung der Sonne rascher abnimmt als die Lichtwirkung.`,
    ),
    L(
      `Die Durchlässigkeit der Luft für die einzelnen Strahlengattungen und damit die Durchsichtigkeit der A. ist beträchtlichen örtlichen und zeitlichen Schwankungen unterworfen, da bes. die Bestandteile und Beimengungen der A., welche die Absorption und diffuse Reflexion bewirken, nicht stets und überall in gleicher Menge vertreten sind. Die Durchsichtigkeit wird am stärksten und häufigsten durch die Kondensationsprodukte des atmosphärischen Wasserdampfs (Nebel) herabgesetzt, aber auch durch Luftverunreinigungen, wie Staub, Rauch, Höhenrauch u. dgl. Auch optisch wird die Luft häufig getrübt. Die tägliche Erwärmung der Luft am Erdboden bringt verschieden warme Luftmassen mit verschiedenen opt. Eigenschaften (Brechungsindizes) zum Aufsteigen (Schlieren), die ein eigentümliches Flimmern erzeugen und die Sichtweite herabsetzen (Sonnenglast). — Eine gewisse Rolle spielt die A. im Wärmehaushalt der Erde. Die Sonne strahlt der Erde eine Energiemenge zu, die sich an den Grenzen der A. auf rund 2&nbsp;cal/qcm/min beläuft (→Solarkonstante), so daß der Energiehaushalt der Erde mit einer jährl. Einstrahlung von 1,34 Quadrillionen cal zu rechnen hat. Jedoch werden von dieser Energiemenge in der A. 18&nbsp;% durch selektive Absorption, 38&nbsp;% durch diffuse Reflexion zurückgehalten, so daß zur Erdoberfläche direkt nur 44&nbsp;% gelangen. Doch strahlt die A. wieder die Hälfte der diffus reflektierten Energie zur Erdoberfläche, so daß diese insgesamt 63&nbsp;% der ankommenden Strahlung empfängt. Naturgemäß sind diese Zahlen nur angenäherte Durchschnittswerte; im einzelnen kann z.&nbsp;B. im Winter der gemäßigten Breiten die diffuse Strahlung aus der A. das Zwei- bis Dreifache der direkten Sonnenstrahlung betragen. Die einem bestimmten Ort zur Verfügung stehende Energiemenge ist ferner abhängig von der geogr. Breite und der Jahreszeit, d.&nbsp;h. also von dem mehr oder minder steilen Auftreffen der Sonnenstrahlen auf die Erdoberfläche, von der Länge des Weges, den sie in der A. zurückzulegen haben, sowie von der Entfernung der Erde von der Sonne und von der Tageslänge, d.&nbsp;i. von der Zeit, während deren die Einstrahlung wirken kann.`,
    ),
  ],
  right: [
    L(
      `Der Wärmehaushalt der A., ihre Erwärmung und Abkühlung im Tages- und Jahreslauf infolge der Schwankungen der den einzelnen Erdteilen zur Verfügung stehenden Energiemengen, vollzieht sich nun nicht etwa direkt durch die die A. passierende Strahlung, sondern durch Vermittlung der Erdoberfläche. Diese erwärmt sich unter dem Einfluß der eintreffenden Strahlung, reflektiert zwar einen Teil der Strahlung direkt unter Vergrößerung der Wellenlänge (Umsetzung von kurzwelligen Licht- in langwellige Wärmestrahlen, die weitgehend in der A. absorbiert werden), teilt aber nur der bodennächsten Luftschicht durch Leitung Wärme mit. Welche Energiemengen der Luft so zugeführt werden, ist in hohem Maße von der Art der Erdoberfläche (Unterlage) abhängig.`,
    ),
    L(
      `Auf dem Lande sind weit geringere Strahlungsmengen notwendig, um eine Luftmasse um einen bestimmten Betrag zu erwärmen, als über dem Meere. Hierin drückt sich bereits die Verschiedenheit zwischen kontinentalem und ozeanischem Klima (Kontinentalität) aus.`,
    ),
    L(
      `Da die tägliche und sommerliche Erwärmung sowie die nächtliche und winterliche Abkühlung der Unterlage hauptsächlich durch Wärmeleitung auf die untersten Schichten der A. übertragen werden, machen diese die Wärmeschwankungen der Unterlage nur in abgeschwächtem Maße mit. Die Unterlage ist meist wärmer als die untersten Luftschichten, die flüssige Erdoberfläche jedoch weniger häufig als die feste.`,
    ),
    L(
      `Auch hier deutet sich wieder der Gegensatz des kontinentalen zum ozeanischen Klima an.`,
    ),
    L(
      `Die Erwärmung der höhern Luftschichten kann sich nun nicht durch Leitung vollziehen, dazu ist das Wärmeleitungsvermögen der Luft zu gering. Vielmehr werden die durch Leitung von der Unterlage her erwärmten Luftteilchen durch diesen Vorgang spezifisch leichter und steigen in die Höhe, dorthin Wärme transportierend (Konvektion, Austausch). Man hat sich diesen sog. aufsteigenden Luftstrom nicht etwa als einen Wind nach oben vorzustellen, sondern als ein mehr oder minder ungeregeltes Aufsteigen von Luftmassen sehr verschiedener Größe. Zum Ersatz der aufgestiegenen Luft muß an der Erdoberfläche andere herbeiströmen, und da die Erwärmung der Erdoberfläche in den Tropen größer ist als in den gemäßigten Breiten, auf dem Lande größer als auf dem Meere, hat man hierin die Erklärung der ständig und zeitweise wehenden Winde (→Luftzirkulation, →Passat, →Monsun). Dieser Erwärmungsmechanismus erklärt auch die Verspätung des tägl. und jährl. Temperaturganges mit der Höhe (in 8–10&nbsp;km Höhe über Mitteleuropa treten die höchsten Temperaturen erst im Herbst ein).`,
    ),
    L(
      `Da die Luftdichte mit der Höhe abnimmt, würde sich trockne Luft beim Emporssteigen durch Ausdehnung um 1° auf 100&nbsp;m abkühlen (adiabatischer Gradient). Der stets und überall in der Luft vorhandene Wasserdampf drückt aber diesen Wert auf rund ½° auf 100&nbsp;m im Durchschnitt für die ganze Erde herab. Die Tabelle gibt die wirklich beobachteten (infolge wenig reichhaltigen Beobachtungsmaterials`,
    ),
  ],
};
