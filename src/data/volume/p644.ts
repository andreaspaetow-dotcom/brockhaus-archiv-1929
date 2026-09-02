import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 644 · Scan 676 · Berlin (Besiedlung, Verwaltung, Gesundheitswesen) */
export const PAGE_644: EncPage = {
  printed: 644,
  scanFile: 676,
  headerLeft: "Berl",
  headerRight: "Berlin",
  catchword: "Berlin",
  scanSrc: "/scans/p644.jpg",
  left: [
    L(`<strong>Besiedlung.</strong>`),
    L(
      `¹⁄₇ des Stadtgebiets ist bebaut, ¹⁄₁₀ entfällt auf Straßen und öffentl. Anlagen, ¹⁄₂ auf Wälder. Auf 86500 Grundstücken stehen 1173603 Wohnungen mit 3977776 Bewohnern, 46 E. auf 1 Grundstück (Höchstzahlen: 94,6 im Bz. Prenzlauer Berg, 93,1 in Wedding, niedrigste: Zehlendorf 10,6, Köpenick 15,2), 3,31 auf 1 Wohnung. 56,6% aller Wohngebäude haben 4 und mehr Geschosse.`,
    ),
    L(
      `Die Besiedlungsdichte schwankt zwischen 383 je ha der Gesamtfläche (Innenbezirk Friedrichshain) und 5 (Köpenick, wald- und seenreich) und zwischen 948 je ha der bebauten Fläche (Prenzlauer Berg, Mietskasernen) und 57 (Zehlendorf, Landhäuser).`,
    ),
    L(
      `<em>Wohnungswesen und Bautätigkeit.</em> Von 95769 bewohnten Grundstücken im Besitz physischer Einzelpersonen gehörten (1925) 9774 (16,35%) Reichsausländern, die zu 95% den Grundbesitz erst nach dem 31.&nbsp;Dez. 1918 erworben haben. — Jährl. Zugang an neuen Wohnungen vor dem Krieg 30000, 1926 nur 14750 (8438 Klein-, 5751 3- und 4-Zimmer-, 561 größere Wohnungen), im 1.&nbsp;Halbjahr 1927 9580. 1926 zogen allein 20000 wohnungsberechtigte Familien neu zu.`,
    ),
    L(`<strong>Stadtverwaltung.</strong>`),
    L(
      `12 besoldete, 12 ehrenamtl. Magistratsmitglieder, an der Spitze ein Oberbürgermeister und ein Bürgermeister; 225 Stadtverordnete. Von diesen gehörten nach der Wahl vom 25.&nbsp;Okt. 1925 an: 73 der Sozialdemokrat. Partei, 47 der Deutschnationalen Volkspartei, 43 der Kommunist., 21 der Deutschdemokrat. Partei, 14 der Deutschen Volkspartei, 10 der Wirtschaftspartei, 8 der deutschen Zentrumspartei, je 3 der Deutschvölkischen Freiheits- und der Deutschsozialen Partei, 2 dem evang. Gemeinschaftsbund und 1 der Unabhängigen Sozialdemokrat. Partei.`,
    ),
    L(
      `Jeder Verwaltungsbezirk hat ein kollegiales Bezirksamt aus 9–15 teils besoldeten, teils unbesoldeten Mitgliedern unter einem Bürgermeister und eine Bezirksversammlung aus 15–45 Bezirksverordneten; außerdem gehören die 225 Stadtverordneten den einzelnen Bezirksversammlungen als Mitglieder an.`,
    ),
    L(`<strong>Stadthaushalt.</strong>`),
    L(
      `Einnahmen und Ausgaben 1927 je 858 Mill.&nbsp;RM. Von den Einnahmen entfallen auf Steuern 376,5, auf die städt. Werke 91,7 Mill.&nbsp;RM; von den Ausgaben auf Verwaltung 157,7, Unterricht, Bildung und Kunst 116,8, Wohlfahrtspflege einschl. Jugendwohlfahrt 78,8, Gesundheitswesen 50,6, Kapital- und Schuldenverwaltung 45,8 Mill.&nbsp;RM.`,
    ),
    L(
      `Vermögen der Stadt am 1.&nbsp;Jan. 1927: 1567 Mill.&nbsp;RM (Grundbesitz und Gebäude 667, Gas-, Wasser-, Elektrizitätswerk, Straßenbahn 651, Beteiligungen 204, Hypotheken 27, Forderungen 18 Mill.&nbsp;RM), davon in werdenden Einrichtungen angelegt: 1126 Mill.&nbsp;RM. Schuldenstand am 1.&nbsp;Jan. 1927: 480 Mill.&nbsp;RM, davon 404,5 Mill.&nbsp;RM Anleihen.`,
    ),
  ],
  right: [
    L(`<strong>Wohltätigkeitsanstalten und Fürsorgeeinrichtungen.</strong>`),
    L(
      `<em>Gesundheitswesen.</em> 1926 betrug die Gesamtzahl der Ärzte 5700, der Apotheken 380, der Betten in den Kranken- und Heilanstalten rund 39500, davon 13869 Betten in den 27 städt. Krankenanstalten (größte: Rudolf-Virchow-Krankenhaus, 2457 Betten; Krankenhaus Buchow, 1086 Betten; Krankenhaus Westend, 1057 Betten; Kinderheilanstalt in Buch, 995 Betten; Krankenhaus Friedrichshain, 949 Betten). Außerdem bestanden 4 städt. Irrenanstalten mit 6398 Betten, 11 Heilanstalten für Altersschwache und Sieche mit 5821 Betten und 5 Leichtkrankenhäuser mit 547 Betten. In den Provinzialanstalten verfügt B. außerdem über rund 6100 Betten für Irre, Geisteskranke, Altersschwache und Sieche. Sonstige öffentl. Krankenanstalten: die Charité (1034 Betten), die Universitätskliniken (429 Betten), die Brandenburg. Hebammenlehranstalt und Frauenklinik in Neukölln (445 Betten), das Lichterfelder Kreiskrankenhaus (502 Betten). 33 gemeinnützige priv. Krankenanstalten mit 5217 Betten (größte: Diakonissenhaus Bethanien mit 350 Betten, Hedwigskrankenhaus mit 750 Betten, Krankenhaus der Ortskrankenkasse in Lankwitz mit 488 Betten, das Oskar-Helene-Heim für Heilung und Erziehung verkrüppelter Kinder mit Lehrwerkstätten mit 330 Betten). Außerdem viele priv. Krankenanstalten, Kliniken und Ambulatorien für Nerven-, Ohren- und Augenkrankheiten.`,
    ),
    L(
      `Weitere Einrichtungen der Gesundheitsfürsorge: 74 Säuglingsfürsorgestellen, 19 Schulzahnkliniken, 31 Tuberkulosefürsorgestellen, 14 Fürsorgestellen für Geschlechtskranke, 6 Eheberatungsstellen, 15 städt. und 34 sonstige Trinkerfürsorgestellen, 37 Schwangerenberatungsstellen, 22 städt. Warm- und 11 städt. Kaltbadeanstalten.`,
    ),
    L(
      `<em>Öffentliche Wohlfahrtspflege,</em> ausgeübt durch das Landeswohlfahrts- und Jugendamt: 20 selbständige Stiftungen und Hospitäler städt. Patronats mit 1626 Insassen Ende 1926, das städt. (nächtliche) Obdach in der Fröbelstraße (49 Säle mit je 64–76 Schlafstätten und das Familienheim mit 641 Betten), das Obdach in der Wiesenstraße (572 Schlafstätten für Männer, 470 für Frauen), 3 kleinere Obdachstätten, städt. Arbeitshaus mit Flüchtlingsheim, Wanderarbeitsheim und Unterkunft für arbeitswillige obdachlose Frauen, 22 Armen-, Alters- und Gemeindehäuser zur Unterbringung obdachloser Familien und Einzelpersonen, 2 Kleinrentnerheime und 3 Tagesheime für Kleinrentner, 54 städt. Wärmehallen, 2 Waisenhäuser mit 990 Plätzen und 23 weitere Anstalten der geschlossenen Jugendwohlfahrtspflege, 48 städt. und 309 nichtstädt. Krippen, Kindergärten und Horte, 3 Ledigenheime sowie Jugendheime in allen Stadtgegenden. Unterstützte Kleinrentner 1926: 24800, unterstützte Sozialrentner: 72200. In Erwerbslosenfürsorge Ende 1926: 197580 Hauptunterstützungs- und 95730 Zulageempfänger.`,
    ),
  ],
};
