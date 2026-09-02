import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 202 · Scan 234 · Badachschan — Badeanstalt */
export const PAGE_202: EncPage = {
  printed: 202,
  scanFile: 234,
  headerLeft: "Bada",
  headerRight: "Badachschan — Badeanstalt",
  catchword: "Wasserlaufes",
  scanSrc: "/scans/p202.jpg",
  left: [
    L(
      `Paraffinöl, geschmolzenem Blei oder feinem Sand beschickte eiserne Schalen oder Töpfe. In der elektrochem. Industrie, Photographie, den Färbereien usw. werden die in Trögen, Kästen, Schalen usw. befindlichen Lösungen der Elektrolyte, Reagenzien, Farbstoffe Bäder genannt.`,
    ),
    N("Abb. 1 Sterilisiertopf. 2 Wasserbad."),
    L(`<strong>Badachschan</strong>, afghan. Prov., →Badachschan.`),
    L(
      `<strong>Badacsony</strong> [bodotschonj], 438&nbsp;m hoher Plateau-Berg im ungar. Kom. Zala, am Nordwestufer des Plattensees, entstanden durch Basalterguß über einer mächtigen pontischen Sand- und Tonschicht; an den Hängen Obst- (Kirschen) und Weinbau (nach dem Tokajer der beste ungar. Wein; staatl. Weinkeller).`,
    ),
    L(
      `<strong>Badacsonytomaj</strong> [bodotschonjtomaj], Badeort und Großgem. im ungar. Kom. Zala am Ostfuß des Badacsony, am Nordufer des Plattensees, 128&nbsp;m ü.&nbsp;M., mit (1920) 2200 magyar., kath. E., die Weinbau, Fischerei, Fremdenindustrie betreiben.`,
    ),
    L(`<strong>Badaga</strong>, ind. Stamm, →Indier.`),
    L(
      `<strong>Badachschan</strong>, Badachschân, Hochland und Prov. im nordöstl. Afghanistan (Karte 82, NO&nbsp;2), zwischen dem Hindukusch und dem mittleren Amu-darja (Pandsch), im NO von diesem, im S von Tadschikistan begrenzt. B. hat gesundes Hochgebirgsklima. Die Gewinnung von Rubinen ist zum größten Teil eingestellt, dagegen wird im Staatsbetrieb Salz gewonnen. Eisen, Schwefel und Lapislazuli kommen in großen Mengen vor. B. wird von den verschiedensten Völkern bewohnt, vor allem von den Tadschiks und Usbeken. Sitz des Militärgouverneurs und Zentrum des Wirtschaftslebens ist Faizabad.`,
    ),
  ],
  right: [
    L(
      `<strong>Badeanstalt</strong>, öffentliche Einrichtung zum Baden in Fluß, See oder in künstlichen Becken und Wannen. Man unterscheidet Flußbäder, Seebäder, Hallenschwimmbäder, Volksbäder (Brause- und Wannenbäder) und Heilbadeanstalten. Die moderne B. umfaßt Umkleideräume, Duschen, Schwimmbecken, oft auch Dampf- und Heißluftabteilungen. (→Bad, →Badeorte.) Zuschnitt der zugehörigen Tafel folgt.`,
    ),
  ],
};
