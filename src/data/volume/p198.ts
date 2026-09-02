import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 198 · Scan 230 · Bad (Forts.) */
export const PAGE_198: EncPage = {
  printed: 198,
  scanFile: 230,
  headerLeft: "Bad",
  headerRight: "Bad",
  catchword: "tische",
  scanSrc: "/scans/p198.jpg",
  left: [
    L(
      `Heilsmittel der Krankenbehandlung (Heilbad); dazu kommen noch die Licht-, Luft- und Sonnenbäder (hierzu Tafel).`,
    ),
    L(`<strong>A. Medizinisches.</strong>`),
    L(
      `Die Hauptwirkung eines B. liegt im Kälte- und Wärmereiz (von 15–25°&nbsp;C ist das B. kalt, bei 35° warm oder indifferent, von 35–50° heiß). Der Kältereiz bewirkt zuerst kurzdauernde Zusammenziehung der Hautgefäße mit Erblassen der Haut, hierauf tritt Erweiterung der Hautgefäße und Rötung der Haut ein. Man nennt dies Hautreaktion. Je größer der Temperaturunterschied, desto stärker die Reaktion. Kalte Bäder regen den Stoffwechsel, die Atmung und den Kreislauf an, heiße erweitern die Gefäße, fördern die Schweißabsonderung und wirken beruhigend auf das Nervensystem. Indifferente Bäder (um 35°) dienen der Schonung und der Reinigung. Zusätze (Salze, Kohlensäure, Schwefel, Fichtennadel, Moor, Schlamm) verstärken oder verändern die Wirkung. Kohlensäurebäder erweitern die Hautgefäße und entlasten das Herz; Solbäder wirken auf Haut und Schleimhäute; Schwefelbäder bei Haut- und Gelenkleiden; Moorbäder bei Frauenleiden und Rheumatismus. Licht- und Sonnenbäder (Heliotherapie) werden bei Skrofulose, Rachitis und gewissen Hautkrankheiten angewendet; Luftbäder zur Abhärtung.`,
    ),
    N("Tafel Bad: Heilbäder, Licht-, Luft- und Sonnenbäder (Zuschnitt folgt)."),
    L(
      `Die Badekur verlangt ärztl. Überwachung; Überdosierung (zu heiß, zu lange, zu häufig) kann zu Herzschwäche, Kollaps und Badevergiftung führen. Gegenanzeigen sind akute Entzündungen, hochgradige Arteriosklerose und unkompensierte Herzfehler.`,
    ),
  ],
  right: [
    L(
      `Technisch unterscheidet man Vollbäder, Halbbäder, Sitz-, Fuß- und Armbäder, Wannen-, Douche- und Wellenbäder, ferner Dampf- und Heißluftbäder (römisch-irische Bäder, türk. Bäder). In Heilbädern und Kurorten (→Badeorte, →Balneologie) treten Trinkkuren, Packungen und Massage hinzu.`,
    ),
    L(
      `Geschichtlich ist das B. bereits im Altertum (Ägypten, Griechenland, Rom) hochentwickelt; die röm. Thermen dienten der Körperpflege und dem geselligen Leben. Das Mittelalter kannte Badestuben; die Neuzeit hat das hygien. und das Heilbad neu ausgebaut.`,
    ),
  ],
};
