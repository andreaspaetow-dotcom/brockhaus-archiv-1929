import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 711 · Scan 753 · Betriebsintensität — Betriebsrat */
export const PAGE_711: EncPage = {
  printed: 711,
  scanFile: 753,
  headerLeft: "Betriebsintensität",
  headerRight: "Betriebsrat",
  catchword: "Gesamtbetriebs-",
  scanSrc: "/scans/p711.jpg",
  left: [
    L(
      `nischen Lehranstalt. Für den Besuch der Techn. Hochschulen ist eine Mindestarbeitszeit von 1 Jahr, für den Besuch der mittleren Lehranstalten je nach Vorbildung zwei- oder dreijährige Arbeitszeit vorgeschrieben. Daneben besteht für gut befähigte Facharbeiter die Möglichkeit, auch ohne Studium oder Besuch von Fachschulen B. zu werden. Die nötigen theoret. Kenntnisse können in diesem Falle durch Abendkurse oder eigene Fortbildung erworben werden.`,
    ),
    L(
      `<em>Berufsaussichten:</em> Anstellung vorwiegend im Privatdienst auf Privatdienstvertrag, daneben in beschränktem Ausmaß im Kommunaldienst, Reichspost und Reichsbahn und Marine. Bei der Reichsbahn versehen die techn. Inspektoren und Oberinspektoren den Dienst eines B. in den Reichsbahnausbesserungswerken, die Reichsbahnbetriebsingenieure bei den Maschinenämtern.`,
    ),
    L(
      `<em>Organisationen:</em> Für Berufsfragen: die allgem. Angestellten- und Beamtenverbände; für techn. Fortbildung: Arbeitsgemeinschaft deutscher Betriebsingenieure im Verein deutscher Ingenieure.`,
    ),
    L(
      `<em>Fachzeitschriften:</em> »Maschinenbau«, »Werkstatttechnik«, »Der Betrieb«, »Die Werkzeugmaschine«, »Zeitschrift für Organisation«.`,
    ),
    L(`<strong>Betriebsintensität,</strong> →Beschäftigungsgrad.`),
    L(
      `<strong>Betriebskapital,</strong> auch umlaufendes Kapital, zum Unterschied vom →Anlagekapital, besteht aus Gütern oder Verkehrsobjekten, die in einer bestimmten Produktionsperiode verbraucht oder umgesetzt werden, z. B. den Rohstoffen und Hilfsstoffen in der industriellen Produktion, Saatgut und Düngemitteln in der Landwirtschaft, Waren aller Art im Handel. Auch gehört in allen diesen Betrieben das Geld, das für Gehälter und Löhne der Angestellten sowie für allgem. Unkosten verauslagt wird, zum B. Der wesentliche Unterschied zwischen Anlagekapital und B. zeigt sich darin, daß das letztere in das Produkt völlig übergeht, also kurzfristig verbraucht wird, während das Anlagekapital infolge seiner allmählichen Abnutzung erst in längerer Zeit wieder erworben werden muß. Infolgedessen braucht eine Unternehmung mit überwiegendem Anlagekapital längere Zeit, um den Vermögenswert zu reproduzieren, als eine solche mit stark ausgeprägtem B. Die landw. Betriebe unterscheiden sich von den Handelsunternehmungen dadurch, daß bei ersteren das Anlagekapital, bei letzteren das B. größer ist. Die Industriebetriebe nehmen eine mittlere Stellung ein. In allen Fällen ist aber das Verhältnis der Werte des Anlagekapitals zum B. vom Standpunkt der Ertragsergiebigkeit der Unternehmung von allergrößter Bedeutung.`,
    ),
    B(`Literatur, →Kapital.`),
    L(
      `<strong>Betriebsklasse,</strong> in der Forstwirtschaft der Verband örtlich häufig nicht zusammenhängender Waldflächen mit einheitlichem Umtrieb und selbständigem Abnutzungssatz. Jede B. stellt auf dem Papier einen Wald für sich allein dar, für den alle Anordnungen getrennt entworfen werden; nur die Hiebsfolge muß für den ganzen Wald, nicht für jede B. für sich, geordnet werden. (Übersicht Forsteinrichtung.)`,
    ),
    L(
      `<strong>Betriebskoeffizient,</strong> 1) betriebswirtschaftlich die prozentuale Gewinnquote, die sich aus der Gegenüberstellung von Aufwand und Gesamterlös ergibt. Z. B. Gesamtumsatz 100000 RM, Aufwand 80000 RM; Differenz 20000 RM = 20 % B. 2) Technisch das Verhältnis der tatsächlichen Leistung eines Betriebes zu seiner möglichen Höchstleistung. Z. B. Höchstleistung bei 48 Wochenstunden 500 t; tatsächliche Leistung einer Woche 400 t = 80 %.`,
    ),
    L(
      `<strong>Betriebskosten,</strong> alle Aufwendungen, die der Betrieb eines Unternehmens erfordert und die deshalb`,
    ),
  ],
  right: [
    L(
      `Gegenstand der Kalkulation sind. Den nicht für Material und Löhne aufgewandten Teil der B. nennt man Unkosten. (→Kalkulation, →Selbstkosten.)`,
    ),
    B(
      `Leitner: Selbstkostenberechnung (8. Aufl. 1923); Werner: Allgem. Betriebswirtschaftslehre (Tl. 2, 1925).`,
    ),
    L(`<strong>Betriebskrankenkasse,</strong> →Krankenkasse.`),
    L(
      `<strong>Betriebslänge,</strong> die gemessene Länge der im Betriebe befindlichen Hauptgleise einer Eisenbahn.`,
    ),
    L(
      `<strong>Betriebsleiter,</strong> gesetzlich verantwortlicher Leiter eines Fabrikbetriebes, gleichgültig, ob ein abgeschlossenes Unternehmen oder nur ein Teilbetrieb innerhalb eines größeren Unternehmens vorliegt.`,
    ),
    L(
      `<strong>Betriebsobmann,</strong> arbeitsrechtl. Begriff; er ersetzt die Betriebsvertretung für Betriebe, die weniger als 20, aber mehr als 5 Arbeitnehmer haben (§ 2 Betriebsräteges.). Der B. hat sämtliche Rechte und Pflichten des Betriebsrats, mit Ausnahme des Rechts auf Vorlage der Bilanz, der Teilnahme am Aufsichtsrat und des Einspruchs bei der Entlassung eines Arbeitnehmers (§ 92). In Österreich ist ein B. (hier Vertrauensmann genannt) zu wählen, wenn mindestens 10 Arbeiter beschäftigt werden, 2 Vertrauensmänner bei Beschäftigung von 10 bis 20 Arbeitern. Die Rechte des Betriebsrats auf Mitwirkung beim Erlaß der Arbeitsordnung, auf Bilanzvorlage und Teilnahme am Aufsichtsrat sowie auf Schaffung von Wohlfahrtseinrichtungen stehen ihm nicht zu. Sonst hat er die Stellung des Betriebsrats (§ 4 des Ges. v. 15. Mai 1918). (→Betriebsrat.)`,
    ),
    L(
      `<strong>Betriebsrat,</strong> Arbeiter- und Angestelltenrat, eine öffentlich-rechtliche Interessenvertretung der Arbeitnehmer.`,
    ),
    L(
      `<em>Entwicklung des Betriebsrätegesetzes.</em> Vorläufer des B. waren die Arbeiterausschüsse, die seit 1891 in gewerbl. Betrieben eingeführt werden konnten und in Bergwerksbetrieben mit mindestens 100 Arbeitern eingeführt werden mußten. In Erweiterung des Hilfsdienstges. v. 1916 brachte der jetzt aufgehobene zweite Abschnitt der TarifvertragsVO. v. 1918 Arbeiter- und Angestelltenausschüsse für alle Betriebe. Das Betriebsräteges. v. 4. Febr. 1920 erging in Ausführung des in Art. 165 RV. ausgesprochenen Grundsatzes, daß die Arbeitnehmer gleichberechtigt mit den Unternehmern an der Regelung der Lohn- und Arbeitsbedingungen und der wirtschaftlichen Entwicklung der produktiven Kräfte mitwirken sollen. Die wichtigsten Abänderungen brachte das Arbeitsgerichtsgesetz (→Arbeitsgerichtsbarkeit) und das Gesetz zur Abänderung des Betriebsrätegesetzes v. 28. Febr. 1928. Ausführungsvorschriften sind: die Wahlordnung v. 5. Febr. 1920, das Ges. über die Entsendung von Betriebsratsmitgliedern in den Aufsichtsrat v. 15. Febr. 1922, das Betriebsbilanzges. v. 5. Febr. 1921.`,
    ),
    L(
      `<em>Bestimmungen des Betriebsrätegesetzes.</em> B. sind zu errichten in jedem Betrieb, Geschäft oder jeder Verwaltung mit mindestens 20 Arbeitnehmern. Bei Betrieben von 5–20 Arbeitnehmern wird ein →Betriebsobmann gewählt. In Betrieben, die mindestens 20 Heimarbeiter beschäftigen, ist ein Heimarbeiterrat zu bilden. Wenn der Errichtung besondere Schwierigkeiten entgegenstehen und tarifvertraglich eine andere Regelung vorgesehen ist, braucht ein B. nicht errichtet zu werden (z. B. im Baugewerbe). Ein`,
    ),
  ],
};
