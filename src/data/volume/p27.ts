import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 27 · PDF-S. 45 · Atmung (Tafel und Fortsetzung) */
export const PAGE_27: EncPage = {
  printed: 27,
  scanFile: 45,
  headerLeft: "Atmung",
  headerRight: "Atmu",
  catchword: "wechsel",
  scanSrc: "/scans/p27.jpg",
  left: [
    N(
      "Tafel Atmung. 1–4 Bau der Säugetierlunge: 1 Lunge des Hausrindes mit teilweise freigelegten Bronchien; 2 Lungenschnitt: a Luftkanäle, b Blutgefäß, das das sauerstoffreiche (arterialisierte) Blut abführt (Lungenvene), c zuführendes Blutgefäß mit sauerstoffarmem (venösem) Blut (Lungenarterie), d Alveolengang, e Alveolen (Lungenbläschen); 3 zwei Alveolengänge mit den Alveolen stärker vergrößert, rechts aufgeschnitten; 4 Lungenbläschen mit Haargefäßen. 5 Tracheensystem der Schabe: a Tracheen, b Stigmen. 6 Querschnitt durch Kiemenbogen und Kiemenblättchen eines Knochenfisches. 7 Unterschied im Atemtypus des Mannes (rechts) und der Frau (links). 8 Atembewegungen des Zwerchfells. 9 Mechanismus der Atmung: Einatmung und Ausatmung.",
    ),
    L(
      `einander in Verbindung stehen, hat man die Möglichkeit, durch Lufteinblasung in eine Pleurahöhle eine (z.&nbsp;B. an Lungentuberkulose erkrankte) Lunge ruhigzustellen. — Bei ruhiger A. wird ½&nbsp;l Luft bei jedem Atemzuge gewechselt; diese Luftmenge nennt man Atemluft oder Respirationsluft. Es kann aber nach einer ruhigen Ausatmung noch nachträglich eine erhebliche Luftmenge (1½&nbsp;l) durch angestrengte Ausatmung ausgetrieben werden (Reserveluft) und ebenso durch angestrengte Einatmung noch dieselbe Menge (Ergänzungs- oder Komplementärluft) eingeatmet werden, so daß im ganzen`,
    ),
  ],
  right: [
    L(
      `maximal 3½&nbsp;l (Vitalkapazität, Abb.&nbsp;10) veratmet werden können. Das bedeutet, daß wir normalerweise nur mit ⅙ der möglichen Stärke atmen. Aber auch durch angestrengte Ausatmung werden die Lungen nie ganz entleert, es bleibt noch ein Luftrückstand (Residualluft) von 1½&nbsp;l in den Lungen; die Lungen fallen ja wegen ihrer großen Elastizität niemals ganz zusammen. Da etwa 16 Atemzüge in der Minute erfolgen (die Atemfrequenz der ersten Lebensjahre ist höher, Abb.&nbsp;11), beträgt die in einer Minute gewechselte Luftmenge (die sog. Atemgröße) bei Muskelruhe 8&nbsp;l (nach neuern Untersuchungen bei vollständiger Körperruhe nur 4,5–6&nbsp;l), bei starker Muskelarbeit steigt sie auf über 50&nbsp;l (Abb.&nbsp;12). Eine vollständige Erneuerung der Luft tritt auch bei angestrengter A. nie ein, da außer der in den Lungen verbleibenden Residualluft ein Teil der Luft noch in den am Gas`,
    ),
    N(
      "Abb. 10 Luftfassungsvermögen der Lungen: Ergänzungsluft 1½ l, Atemluft ½ l, Reserveluft 1½ l, Luftrückstand ca. 1½ l. Abb. 11 Abhängigkeit der Atemfrequenz vom Lebensalter. Abb. 12 Abhängigkeit der Atemgröße von der Arbeitsleistung.",
    ),
  ],
};
