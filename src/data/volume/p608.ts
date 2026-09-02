import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 608 · Scan 640 · Bergbahnen — Bergbau */
export const PAGE_608: EncPage = {
  printed: 608,
  scanFile: 640,
  headerLeft: "Berg",
  headerRight: "Bergbau",
  catchword: "Bergbau",
  scanSrc: "/scans/p608.jpg",
  left: [
    L(
      `(Österreich), Wengernalpbahn (Schweiz), Gornergratbahn (Schweiz), Wendelsteinbahn (Bayern), Jungfraubahn (Schweiz).`,
    ),
    L(
      `4)&nbsp;Gemischte Reibungs- und Zahnradbahnen, dadurch charakterisiert, daß die Strecke teils als Reibungs-, teils als Zahnradbahn ausgeführt ist. Die zugehörigen Lokomotiven besitzen ein Reibungs- und ein Zahnradtriebwerk. Der Übergang von der Reibungsstrecke in die Zahnstangenstrecke erfordert eine sog. Zahnstangeneinfahrt, deren Zahnstange in senkrechtem Sinn elastisch nachgiebig ist und grundsätzlich mit sehr stark verminderter Geschwindigkeit befahren werden muß. Der gemischte Reibungs- und Zahnradbetrieb kam erstmals bei der 1885–86 erbauten Harzbahnstrecke Blankenburg–Tanne zur Anwendung. Höchststeigung: 125‰.`,
    ),
    L(
      `5)&nbsp;Seilbahnen, und zwar a)&nbsp;als Standseilbahnen. Die Wagen laufen hier wie gewöhnlich auf Schienen und werden von einem Drahtseil gezogen. Höchststeigung: 650‰. Beispiele: Giessbachbahn (Schweiz), Bürgenstockbahn (Schweiz), Stanserhornbahn (Schweiz), Hungerburgbahn (Tirol), Bahn nach dem Heidelberger Schloß.`,
    ),
    N("Abb. Bergbahnen: 2 Standseilbahn."),
    L(
      `b)&nbsp;Als Seilschwebebahn. Die Fahrzeuge (Kabinen) hängen an einem Tragseil; die Bewegung erfolgt durch ein Zugseil. Sie sind praktisch an keine Höchststeigung gebunden und stellen deshalb den ausgesprochenen Typ für B. dar. Zu den kühnsten Anlagen dieser Art gehört die von Bleichert-Leipzig gebaute und 1926 eröffnete Zugspitzbahn, die bei 3380&nbsp;m Länge einen Höhenunterschied von 1581&nbsp;m überwindet. Der elektromotorische Antrieb des Zugseils ist aus klimat. Gründen in der Talstation untergebracht; in der Gipfelstation ist das Zugseil über eine Umlenkscheibe geschlungen. Fahrzeit: 16 Minuten. Geschwindigkeit: 12,5 km/st.`,
    ),
    N(
      "Abb. Bergbahnen: 3 Höhenplan wichtigster Bergbahnen (nach einem Wandbild im Deutschen Museum, München). Zahnradbahnen: Jungfrau, Pilatus 2069 m ü. M. (größte Steigung 480‰ / 250‰). Drahtseilbahnen: Rigi 1749 m, Stanserhorn 1850 m, Obermoos 1224 m (größte Steigung 250–600‰).",
    ),
    B(
      `Strub: Die B. der Schweiz (2 Bde., 1900–02); B. Röll: Enzyklopädie des Eisenbahnwesens, Bd.&nbsp;2 (2.&nbsp;Aufl. 1912).`,
    ),
  ],
  right: [
    L(
      `<strong>Bergbau</strong> (hierzu Tafel), die als Gewerbe ausgeübte menschl. Tätigkeit zur Auffindung, Erschließung, Gewinnung, Förderung und Aufbereitung nutzbarer Mineralien und Gesteine. Diese sind der Hauptsache nach Erze, fossile Brennstoffe und Salze, die teils in fester Form, teils in flüssigem oder gasförmigem Zustande vorkommen, wie z.&nbsp;B. Erdöl, Sol- und Heilquellen, Erdgas. Aus den Erzen werden Metalle oder deren chem. Verbindungen im großen in der Eisenhütten-, der Metallhütten- und chem. Industrie erzeugt. Von den fossilen Brennstoffen sind die wichtigsten die Steinkohle, die Braunkohle und das Erdöl. Als Salze kommen in der Hauptsache das Kochsalz (Steinsalz) und die Kalisalze in Frage.`,
    ),
    L(`<strong>I. Technik des Bergbaus.</strong>`),
    L(
      `<em>Auffindung und Untersuchung der Lagerstätte.</em> Bevor an die Eröffnung eines Bergwerkes überhaupt herangegangen werden kann, ist die Auffindung und genaue Untersuchung der Lagerstätte des nutzbaren Minerals erforderlich. Diese Vorarbeiten setzen eingehende Kenntnisse der Geologie und ihres besonderen Zweiges, der Lagerstättenlehre, voraus. Die Untersuchung einer Gegend auf das Vorhandensein von Lagerstätten erfolgt in der Regel an Hand geolog. Karten. Wo solche fehlen, kann aus einer Reihe von Anzeichen an der Erdoberfläche auf das Vorhandensein einer Lagerstätte geschlossen werden. Hierzu gehören das Auffinden von Mineral-, Bruch- und Rollstücken, das Auftreten von Quellen, das Vorhandensein von Resten früherer Bergbaubetriebe in der Gestalt von Stollen, Pingen oder Fingen (oberflächlichen Gruben), von Hüttenschlacken u. dgl. Der Gebrauch der Wünschelrute für derartige Auffindungsarbeiten ist seit Jahrhunderten bekannt, ihr Wert jedoch stark umstritten. Nach sicherer Feststellung derartiger Anzeichen geht man zum Schürfen, d.&nbsp;h. zur Untersuchung des Gebirges und der Lagerstätten, über. Derartige Arbeiten bestehen bei geringer Bedeckung des Gesteins in dem Ziehen von Schürfgräben, bei etwas größerer Tiefe in dem Abteufen von senkrechten Schürfschächten oder, in gebirgigen Gegenden, im Vortrieb horizontaler Schürfstollen vom Talhange aus. Tiefer liegende Lagerstätten lassen sich nur durch Tiefbohrung nachweisen. Sind einzelne Schürfarbeiten oder Bohrungen erfolgreich gewesen, so müssen sie ihrer Anzahl und Lage nach durch eine Reihe weiterer Schürfarbeiten ergänzt werden, bis die Lagerstätte ihrer Ausdehnung, ihrer Form und ihrem Inhalt nach so weit festgestellt ist, daß für die Eröffnung des Bergwerkes und seine Rentabilität genügend sichere Grundlagen geschaffen sind.`,
    ),
    L(
      `<em>Ausrichtung.</em> Für die Eröffnung eines Bergwerksbetriebes muß nunmehr ein Zugang zur Lagerstätte geschaffen werden. Die hierzu erforderlichen Arbeiten werden als Ausrichtungs- oder Aufschließungsarbeiten bezeichnet. Der einfachste Zugangsweg ist der vom Tal aus wagrecht ins Gebirge getriebene Stollen (Abb.&nbsp;1). Stollen sind nur in gebirgigen Gegenden möglich, wo die Lagerstätten über der Talsohle anstehen. Da in den Kulturstaaten, wo`,
    ),
    N(
      "Abb. Bergbau: 1 Der vom Talabhang zur Lagerstätte getriebene Stollen.",
    ),
    L(
      `schon seit Jahrhunderten B. getrieben wird, die Lagerstätten in den oberen Teufen abgebaut sind, so gelangt man heute fast ausschließlich durch`,
    ),
  ],
};
