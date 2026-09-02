import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 507 · Scan 539 · Tafel Befruchtung I */
export const PAGE_507: EncPage = {
  printed: 507,
  scanFile: 539,
  headerLeft: "Befruchtung I",
  headerRight: "Befr",
  catchword: "Befruchtung",
  scanSrc: "/scans/p507.jpg",
  left: [
    L(`<strong>Tafel: Befruchtung I.</strong>`),
    N(
      "Tafel Befruchtung I (Zuschnitt morgen; der männliche Keimapparat schwarz, der weibliche grau; alle Figuren schematisch). 1. Reifung der Geschlechtsprodukte: a unreife Eizelle; f unreife Samenzelle; b–d Reifeteilung der Eizelle; g–i Reifeteilung der Samenzelle; e die reife Eizelle und die drei Richtungskörperchen (r); k die vier reifen Samenzellen. 2. Befruchtung: a die Samenzelle dringt in das Ei ein; es wird ein Empfängnishügel gebildet; b die eingedrungene Samenzelle hat den Schwanz abgeworfen, mit dem aus dem Mittelstück frei gewordenen Strahlenkörperchen voran nähert sich der Samenkern dem Eikern; c das Strahlenkörperchen hat sich geteilt; d die zwei Kerne kommen in Berührung, die beiden Strahlenkörperchen rücken nach verschiedenen Seiten auseinander; e Vereinigung der Kerne; f die Kerne haben sich aufgelöst und die Chromosomen sich zur Spindelfigur geordnet; g Längsspaltung der Chromosomen; h erste Furchungsteilung des befruchteten Eis.",
    ),
  ],
  right: [],
};
