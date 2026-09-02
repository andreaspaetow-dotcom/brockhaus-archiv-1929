import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 72 · PDF-S. 90 · Auge (Forts.), Erklärung Tafel I */
export const PAGE_72: EncPage = {
  printed: 72,
  scanFile: 90,
  headerLeft: "Auge",
  headerRight: "Auge",
  catchword: "der",
  scanSrc: "/scans/p72.jpg",
  left: [
    N(
      "Erklärung zur Tafel Auge I: Das Auge des Menschen und seine Hilfsapparate. A Durchschnitt durch den rechten Augapfel. B Augapfel mit zipfelförmig abpräparierter Lederhaut. C Vordere Hälfte eines äquatorial halbierten rechten Augapfels. D Schema des Verlaufes der Sehbahn. E Hintere Hälfte, Augenhintergrund. F Sagittalschnitt durch Augenhöhle. G Tränenapparat. H Äußere Augenmuskeln. I Schnitt durch die Netzhaut. K Sagittaler Schnitt durch das obere Augenlid. (Farbtafel folgt; Zuschnitt morgen.)",
    ),
    L(
      `haut in die Regenbogenhaut (Iris) über. Diese wird hinter der Hornhaut sichtbar und hat annähernd in der Mitte das Sehloch (die Pupille). Die Netzhaut (I&nbsp;C, I) hat einen opt. und einen blinden Teil. Letzterer überkleidet den Ziliarkörper und die Iris. Die eigentl. Netzhaut besteht aus einer Anzahl von Schichten, deren innerste von den Fasern der Optikuszellen gebildet wird, deren äußerste die Stäbchen und Zapfen sind. Zwischen Aderhaut und Stäbchen- und Zapfenschicht liegt noch eine Schicht Pigmentzellen. Der Lichtreiz dringt durch die ganze Dicke der Netzhaut, ehe er auf die durch den Reiz zur Erregung gelangenden Stäbchen- und Zapfenzellen trifft. Man nimmt an, daß die Stäbchenzellen durch die reinen Lichtreize, die Zapfenzellen durch Farbenreize erregt werden. Stäbchen und Zapfen sind Endstücke von Zellen, deren Körper weiter nach innen eine besondere Schicht der Netzhaut bilden (äußere Körnerschicht). Von da aus wird der Lichtreiz noch durch eine Zwischenzelle (Bipolarzelle) und dann auf die Zellen der Sehnerven (Optikuszellen) übergeleitet. Die Sehnervenfasern durchbrechen die Netz-, Ader- und Lederhaut an der Stelle der Sehnervenpapille (I&nbsp;E); diese hat eine Einsenkung, die sog. physiologische Exkavation. Aus dieser Exkavation dringen die Netzhautgefäße heraus. Auf der Sehnervenpapille fehlen die Sehzellen, weshalb diese Stelle optisch unempfindlich ist (blinder Fleck). Seitlich (schläfenwärts) vom blinden Fleck liegt in der Netzhaut der gelbe Fleck (Macula lutea), die Stelle des schärfsten Sehens, durch Fehlen der Stäbchen ausgezeichnet. Um scharf zu sehen, richten wir stets die A. so, daß die Erregung diese Stelle unmittelbar trifft. Jeder Sehnerv führt Fasern von der Schläfenseite und`,
    ),
  ],
  right: [
    L(
      `Nasenseite. Diese Fasern kreuzen sich in der an der Hirnbasis liegenden Sehnervenkreuzung unvollständig, so daß der linke Sehstrang (Tractus opticus, die Fortsetzung des Sehnerven) die Fasern der linken, der rechte Sehstrang die Fasern der rechten Netzhauthälften führt (I&nbsp;D). Die Sehstränge endigen in sog. primären Sehzentren, die im Sehhügel und im äußern Kniehöcker des Zwischenhirns und im obern Vierhügel im Mittelhirn liegen. Von den beiden ersten Stellen aus zieht die primäre Sehstrahlung zu einer besondern Stelle in der Rinde des Hinterhauptlappens (Sehrinde, Fissura calcarina). Der obere Vierhügel steht durch die von der Sehrinde kommende sekundäre Sehstrahlung mit der Sehrinde in Verbindung; er dient zur Auslösung aller von den Augen ausgehenden Reflexe. Im Innern des A. liegt hinter der Regenbogenhaut die Linse (Kristallinse), ein aus durchsichtigen Fasern (Linsenfasern) zusammengesetzter, linsenförmiger, in eine elastische Kapsel eingeschlossener Körper. Die Form der Linse ist abhängig von der Nah- oder Fernstellung des Auges (→Akkommodation). Die Ruhestellung der Linse ist die mehr kugelförmige mit erhöhter Brechkraft (Nahstellung). Bei Anspannung der Ziliarmuskeln ziehen die erwähnten vom Ziliarkörper ausgehenden Aufhängefasern die Linse mehr in die Länge, die Linse wird flacher, weniger stark lichtbrechend (Fernstellung). Bei jeder Akkommodation verändert sich auch die Pupille durch die Wirkung eines im freien Rande der Iris liegenden, zu den innern Augenmuskeln gehörenden Ringmuskels. Auch unabhängig davon verändert dieser Muskel die Pupille reflektorisch bei Lichteinfall, während ein in der hintern Irisfläche liegender Muskel mit radiärem Verlauf die Pupille im Schatten oder in`,
    ),
  ],
};
