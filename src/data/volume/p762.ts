import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 762 · Scan 805 · Bibliothekare — Bibliothekslehre */
export const PAGE_762: EncPage = {
  printed: 762,
  scanFile: 805,
  headerLeft: "Bibliothekare",
  headerRight: "Bibliothekslehre",
  catchword: "ortskataloge",
  scanSrc: "/scans/p762.jpg",
  left: [
    L(`<strong>Bibliothekare, Verein Deutscher,</strong> →Verein deutscher Bibliothekare.`),
    L(
      `<strong>Bibliotheksbeamter,</strong> Beamter oder auch Angestellter des mittleren und unteren Bibliotheksdienstes.`,
    ),
    L(
      `a) Die mittleren B. sind an wissenschaftl. Bibliotheken Helfer der wissenschaftlich vorgebildeten →Bibliothekare, insbesondere bei der Katalogisierung und Ausleihung der Bücher; an Volksbibliotheken haben sie im allgemeinen das gleiche Aufgabengebiet wie die wissenschaftl. Bibliothekare. Dadurch, daß hier der Ausleihdienst und die damit verbundene Leserberatung in den Vordergrund tritt und die zu verwaltende Literatur nach den Bedürfnissen weiterer Volksschichten und größtenteils für bestimmte Bildungszwecke ausgewählt ist, bildet sich der Volksbibliothekar immer mehr zu einem eigenen Berufstypus aus.`,
    ),
    B(
      `Beruf und Ausbildung des Volksbibliothekars (hg. v. der Deutschen Zentralstelle für volkstüml. Büchereiwesen, 1927).`,
    ),
    L(
      `<em>Körperliche und geistige Voraussetzungen</em> wie bei wissenschaftl. →Bibliothekaren, außerdem die Fähigkeit zur individuellen und sozialen Menschenbeurteilung; Verständnis für die Bildungsbedürfnisse der verschiedenen Volksschichten.`,
    ),
    L(
      `<em>Berufsausbildung:</em> In den deutschen Ländern nicht einheitlich geregelt. In der Regel 2 Jahre Praktikantenzeit an einer wissenschaftl. und Volksbibliothek und 1–2 Jahre weitere theoret. Ausbildung entweder auf Bibliothekarschule (Berlin, Leipzig, Bonn) oder in freier Form (Universitätsvorlesungen); Abschluß durch eine staatl. Diplomprüfung. In einzelnen Ländern sind die Ausbildungen der mittleren B. für wissenschaftl. und Volksbibliotheken völlig getrennt. Als Vorbildung überall höhere Schulbildung gefordert, mindestens Obersekunda- oder Primareife, Abiturientum vorteilhaft.`,
    ),
    L(
      `<em>Berufsaussichten:</em> Anstellung an städt. Volksbibliotheken oder Bibliotheken von Behörden mit Beamteneigenschaft oder an Bibliotheken von gemeinnützigen Vereinen auf Privatdienstvertrag; Übergang zum Buchhandel möglich. Frauen als B. häufig.`,
    ),
    L(
      `<em>Berufsorganisationen:</em> Reichsverband Deutscher Bibliotheksbeamten und -angestellten; Verband deutscher Volksbibliothekare.`,
    ),
    L(
      `<em>Fachzeitschriften:</em> Hefte für volkstüml. Büchereiwesen; Bücherei und Bildungspflege.`,
    ),
    L(
      `b) Aufgabengebiet der unteren B. ist die Aufstellung und Herbeischaffung der Bücher, auch Hilfsdienste bei der Katalogisierung. Als Vorbildung genügt gute Volksschulbildung, Ausbildung erfolgt durch prakt. Anlernung; mehrmonatige Probezeit; gutes Wort- und Ortsgedächtnis für Berufstätigkeit notwendig.`,
    ),
    L(`<strong>Bibliotheksgebäude,</strong> →Bibliothekslehre 1).`),
    L(
      `<strong>Bibliothekslehre, Bibliothekstechnik,</strong> der Inbegriff aller auf die Einrichtung und Verwaltung einer Bibliothek bezüglichen wissenschaftl. und techn. Erfahrungsgrundsätze. Sie zerfällt in zwei Teile, einen geschichtlichen, der sich mit der Geschichte und Beschreibung der älteren und neueren Bibliotheken beschäftigt (→Bibliothek), und einen systematischen, die eigentl. B. oder Bibliotheksverwaltungslehre.`,
    ),
  ],
  right: [
    L(
      `Man unterscheidet in der Bibliotheksverwaltungslehre am zweckmäßigsten zwei Teile, einen auf den äußeren Apparat der Bibliothek, das Gebäude, das Personal und die Geldmittel bezüglichen und einen zweiten, der sich mit den Bibliotheksbeständen, ihrer Beschaffung, Ordnung, Katalogisierung und Benutzung beschäftigt.`,
    ),
    L(
      `1) Das Bibliotheksgebäude (Tafel Bibliothek) sollte in einer nach allen Seiten freien Lage errichtet werden, damit Licht und Luft ungehindert Zutritt haben und die Feuersgefahr vermindert wird. Auch ist auf die Möglichkeit einer späteren baulichen Erweiterung Rücksicht zu nehmen. Die älteren Bauten bis 1800 gehören dem Typus der Saalbibliothek an; seit dem 17. Jahrh. wird die allein als Aufstellungsraum dienende Wandfläche durch eine oder zwei Galerien in zwei oder drei Teile zerlegt. Eine Galeriebibliothek ist auch noch die Münchener Staatsbibliothek (von Gärtner 1832–43 erbaut); nur handelt es sich hier nicht um einen einzigen oder mehrere große, sondern um viele kleinere Säle mit zwei Galerien von 2,20 m Höhe. In Amerika entwickelte sich das Galeriesystem zum Alkoven-System weiter. Größere Raumausnutzung und bessere Lichtverhältnisse, freilich unter Verzicht auf ästhetische Wirkung, gewährt das Magazin- oder Speicher-System, das bereits 1817 von dem Frankfurter Stadtarchivar Beyerbach empfohlen, aber erst 1854–57 beim Umbau der Bibliothek des Brit. Museums in London, 1863 in der Pariser Nationalbibliothek angewendet wurde und bei allen neueren Bibliotheksbauten durchgedrungen ist. Das Wesen des heutigen Magazinsystems besteht darin, daß das im Grundriß rechteckige Bücherhaus (25 bis 45 × 10 bis 18 m) in 5 bis 8 und mehr niedrige Geschosse von 2,20 bis 2,40 m Höhe eingeteilt und diese senkrecht zu den Längswänden möglichst eng mit Doppelrepositorien bestellt werden. Die Verwaltungsräume (Lesesäle, Ausleihe, Katalog- und Beamtenräume), die erst im 19. Jahrh. die ihnen gebührende Beachtung gefunden haben, sind seit 1900 meist vom Bücherhause deutlich gesondert, was schon wegen der verschiedenen Geschoßhöhen von Vorteil ist. Neuestens wird noch Trennung der Verwaltungs- von den Benutzerräumen gefordert, so daß künftig ein modernes Bibliotheksgebäude in drei Teile zerfallen wird.`,
    ),
    L(
      `2) Das Bibliothekspersonal setzt sich aus wissenschaftl. (oder höheren), mittleren und Unterbeamten zusammen (→Bibliothekar, →Bibliotheksbeamter).`,
    ),
    L(
      `3) Die Geldmittel bestehen in Deutschland aus jährl. Bewilligungen der Länder und Gemeinden für Gehälter, Bücherkauf, sonstige Ausgaben.`,
    ),
    L(
      `4) Bei der Beschaffung der Bibliotheksbestände handelt es sich nur selten um eine vollständige Neugründung, wie z. B. bei der Deutschen Bücherei in Leipzig. Die Vermehrung geschieht im allgemeinen durch Einzelkauf zweckmäßiger als durch Massenkauf. Außerdem werden durch Tausch, entweder von Dubletten oder von eigenen Publikationen (z. B. Universitätsschriften, bes. Dissertationen), ferner durch Geschenke, endlich durch →Pflichtexemplare der Verleger oder Drucker Bücher erworben. Alle Zugänge werden in die Akzessions- oder Zugangsbücher eingetragen, die als Inventare, als Grundlage des Kassen- und Rechnungswesens und als Grundlage der Vermehrungsstatistik dienen.`,
    ),
    L(
      `5) Die Grundlage für die geordnete Aufstellung und Benutzung der Bücherbestände bilden die Kataloge. Dem Inhalt nach unterscheidet man alphabetische (nach dem Namen der Verfasser; bei anonymen Schriften und Sammelwerken meist nach dem leitenden Worte des Titels) und systematische oder Realkataloge (nach den einzelnen Wissenschaften und deren Unterabteilungen geordnet). Wo die Aufstellung der Bücher nicht mit dem Realkatalog oder den Zugangsbüchern übereinstimmt, sind ferner Stand-`,
    ),
  ],
};
