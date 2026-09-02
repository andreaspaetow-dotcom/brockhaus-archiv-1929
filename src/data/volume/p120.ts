import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 120 · Scan 142 · Ausstellungsbauten, Ausstellungsgüter */
export const PAGE_120: EncPage = {
  printed: 120,
  scanFile: 142,
  headerLeft: "Auss",
  headerRight: "Ausstellungsbauten — Ausstellungsgüter",
  catchword: "Aussterben",
  scanSrc: "/scans/p120.jpg",
  left: [
    L(
      `deutschen Industrie, Sitz Berlin, umgewandelt worden ist. Das Amt gibt Jahrbücher sowie einen Ausstellungs- und Messekalender heraus. — Um eine internationale Beeinflussung des Ausstellungswesens zu erreichen, wurde 1908 das Internationale Ausstellungskomitee gegründet. Staatl. Einfluß auf das Ausstellungswesen machte sich in der Schaffung allgem. Vorschriften, der Bekämpfung von Auswüchsen, dem Schutz der Aussteller bei der Prämiierung und in der Rücklieferung der ausgestellten Gegenstände geltend. Im Deutschen Reich sind bes. die Richtlinien für Ausstellungs- und Messewesen vom 25.&nbsp;Juli 1925 und das Gesetz über den Schutz von Erfindungen, Mustern und Warenzeichen auf inländ. und ausländ. A. vom 18.&nbsp;März 1904 hervorzuheben. (→Ausstellungsschutz.)`,
    ),
    B(
      `Kiaer: Das Ausstellungsproblem in der Volkswirtschaft (1908); J.&nbsp;M. Gaitzsch: Das Ausstellungswesen in seiner volkswirtschaftl. Bedeutung (2.&nbsp;Aufl. 1911).`,
    ),
    L(
      `<strong>Ausstellungsbauten</strong>, bauliche Anlagen, die zur Aufnahme von Ausstellungen und ihren Gegenständen dienen. Bei den Weltausstellungen in der zweiten Hälfte des 19.&nbsp;Jahrh. versuchte man zunächst die Gesamtheit einer Ausstellung in einem großen Gebäude zu vereinen. Es entstanden ungefüge Kolossalbauten aus Eisen und Glas, die auf lange Dauer berechnet waren, so der Kristallpalast im Hyde Park London 1851, der später in Sydenham aufgestellt wurde, der Glaspalast in München 1854, der Industriepalast in Paris 1855. Auf der Weltausstellung von Paris 1867 wurde auf einer ovalen Grundform von 150000 qm ein neuartiger Zentralbau geschaffen, von dem die einzelnen Segmente den verschiedenen Ländern zugewiesen wurden. Die Wiener Weltausstellung 1873 bildete das sog. Fischgrätensystem aus, das eine Teilung nach Gegenständen in den verschiedenen Hallen mit sich brachte. In Philadelphia 1876 wurde das Tabellensystem, eine rechteckige Anordnung der A., aufgebracht. In Chicago 1893 ging man dazu über, für die Ausstellung mehrere Gebäude anzulegen. Ebenso bei der Pariser Weltausstellung 1889, die als Mittelpunkt den Eiffelturm erhielt. In Turin 1911 war für jede Nation ein eigener Ausstellungspalast vorgesehen.`,
    ),
    L(
      `Die bekanntesten deutschen ständigen A. sind: in Berlin das Gebäude am Lehrter Bahnhof und das moderne Ausstellungsgebäude am Kaiserdamm, in Breslau die Jahrhunderthalle, ferner die A. in Dresden, Frankfurt und München sowie die A. in`,
    ),
  ],
  right: [
    L(
      `Leipzig, die 1914 für die Ausstellung für Buchgewerbe und Graphik angelegt wurden. Bes. bemerkenswert sind auch die Dauerbauten am Rhein, die in Düsseldorf 1926 anläßlich der Gesolei entstanden. Hier wurde durch möglichst klare Aufeinanderfolge der einzelnen Abschnitte und übersichtliche Gestaltung der Teile eine großzügige Linienführung für das Durchfluten des Verkehrs geschaffen. Das vorherrschende Material für moderne A. ist Eisenbeton.`,
    ),
    N("Abb. Ausstellungsbauten: Ausstellungs- und Messegelände Berlin-Westend."),
    N("Abb. Ausstellungsbauten: Betonhalle Leipzig, gebaut für die internationale Baufachausstellung 1913 (E.&nbsp;Steg), dient jetzt als Messehalle."),
    L(
      `<strong>Ausstellungsgüter</strong>, mit der Eisenbahn beförderte, für Ausstellungen bestimmte Gegenstände. Sie werden in der Regel tariflich insofern begünstigt, als sie frachtfrei an den Versandort zurückbefördert werden, wenn sie unverändert geblieben sind; auch genießen sie fast in allen Staaten Zollfreiheit.`,
    ),
    N(
      "Abb. Ausstellungsbauten der Gesolei (Düsseldorf 1926): Lageplan 1–26 (Heilsarmee; Der Mensch in seinen gesundheitlichen Beziehungen zu Tier und Pflanze; Krankenversorgung; Kosmetik; Leibesübungen; Kleidung; Ernährung; Heizung, Lüftung und Wasser; Lichttechnik; Gas und Elektrizität; Sondergruppe »Die Frau«; Haus des Arztes; Verkehr; Abfallstoffbeseitigung; Feuerlöschung; Wasserversorgung; Arbeitsräume und Unfallverhütung; Militär- und Kolonialhygiene; Geschlechtserziehung; Öffentliches Fürsorgewesen; Völkerbund und Rotes Kreuz; Der Mensch; Freie Wohlfahrtsverbände; Kunstausstellung; Katholisches Schul- und Missionswesen; Rheinpark). Zuschnitt morgen.",
    ),
    N("Tafel Aussterben I (Ausgestorbene Tiere) folgt; Zuschnitt morgen."),
  ],
};
