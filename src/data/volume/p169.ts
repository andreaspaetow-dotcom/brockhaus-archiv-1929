import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 169 · Scan 201 · Azetylen (Forts.) — Azetylene */
export const PAGE_169: EncPage = {
  printed: 169,
  scanFile: 201,
  headerLeft: "Azet",
  headerRight: "Azetylen — Azetylene",
  catchword: "mit",
  scanSrc: "/scans/p169.jpg",
  left: [
    L(
      `als organ.-chem. Ausgangsmaterial ist das A. von größter Bedeutung. Seine wichtigste Verwendung ist hier die Überführung in Azetaldehyd (→Aldehyd) und weiter in Essigsäure und Alkohol, außerdem die Chlorierung des A., die zu einer Reihe wichtiger chlorierter Kohlenwasserstoffe, wie Tetrachloräthylen, Trichloräthylen usw., führt. Neuerdings wird A. auch zur Narkose benutzt.`,
    ),
    L(
      `<strong>Techn. Herstellung.</strong> Zerkleinertes oder in Formen gepreßtes Kalziumkarbid zersetzt man durch Wasser. Aus 1&nbsp;kg Handelskarbid entstehen etwa 300&nbsp;l Azetylengas bei gleichzeitiger Wärmeentwicklung von etwa 400&nbsp;kcal. Die Azetylenverordnung verlangt, daß die Entwickler in der Regel für jedes Kilogramm Karbidfüllung mindestens 10&nbsp;l Wasser verfügbar haben sollen. Da die Explosionsempfindlichkeit sehr groß und die Explosionsgrenzen (untere 1,5&nbsp;%, obere 80&nbsp;% A. in Luft) schnell erreicht sind, enthält die Azetylenverordnung strenge gesetzl. Bestimmungen über Bau und Errichtung von Azetylenanlagen (BD. v.&nbsp;2.&nbsp;Nov. 1923, abgeändert 20.&nbsp;Febr. 1925). Die Regierungen der deutschen Staaten lassen die Entwickler und Wasservorlagen durch den →Deutschen Azetylenverein prüfen, ehe sie sich über deren Zulassung durch den Deutschen Azetylenausschuß schlüssig werden.`,
    ),
    L(
      `Es gibt sehr verschiedene Bauarten von Azetylenentwicklern, je nachdem das Karbid in Wasser oder Wasser zum Karbid gebracht wird. Bei tragbaren Lampen tropft meist Wasser auf Karbid; der Wasserzufluß wird durch den Druck des entwickelten A. geregelt (Abb.&nbsp;1). Eine Großanlage (in der Karbid zum Wasser gelangt) ist in Abb.&nbsp;2 dargestellt. Der Entwickler&nbsp;1 mit dem Beschickungsmechanismus&nbsp;2 enthält in seinem obern Teil den Karbidvorrat, der durch automatische Betätigung des Hebels&nbsp;3 zugemessen und zum Einfall gebracht wird. Ein Einfüllschacht trennt den Karbidvorratsbehälter vom Entwicklungswasser, welches den untern Teil des Entwicklers bis zum Kontrollhahn&nbsp;4 ausfüllt. Das Karbid fällt in den Schwenkrost&nbsp;5, wo durch allseitigen Angriff des Wassers der Gasentwicklungsprozeß stattfindet. Die unvergasten Rückstände fallen auf den Drehrost&nbsp;6,`,
    ),
    N("Abb. 1. Azetylenentwickler (tragbare Lampe)."),
  ],
  right: [
    L(
      `von dem sie von Zeit zu Zeit durch Drehung dem Schlammablaß&nbsp;7 zugeführt werden. Das entwickelte A. durchströmt zunächst den Wasserverschluß&nbsp;8, der bis zum Proberhahn&nbsp;9 mit Wasser gefüllt ist. Hier wird das Gas durchgewaschen und am Zurückströmen vom Gasometer zum Entwickler verhindert. Im Gasometer&nbsp;10 findet die Ansammlung des A. statt; dieser ist mit einer in einem Führungsgehänge&nbsp;11 bewegbaren Gasglocke&nbsp;12 ausgestattet. An den Gasometer&nbsp;10 schließt sich der Reiniger&nbsp;13 an, auf dessen Siebeinlage&nbsp;14 poröse Reinigungsmassen, die Kalksalze enthalten, aufgeschüttet sind, wodurch mitentstandene Phosphor-, Schwefel- und Ammoniakverbindungen entfernt werden und feuchtes A. getrocknet wird. Die Sicherheit-Wasservorlage&nbsp;15 hat den Zweck, das Zurücktreten von Sauerstoff oder Luft in den Gasbehälter zu verhindern, gegebenenfalls einen Flammenrückschlag unwirksam zu machen. Der Rückleitungsverschluß&nbsp;16 ist so eingeschaltet, daß er den Rücktritt reinen A.s aus dem Gasometer&nbsp;10 in den Entwickler&nbsp;1 ermöglicht, wenn in letzterem durch Betätigung des Schlammablasses&nbsp;7 der Wasserspiegel sinkt. Bei Niederdruckentwicklern darf der Druck 0,15&nbsp;at, bei Hochdruckentwicklern 1,5&nbsp;at nicht übersteigen.`,
    ),
    L(
      `Die Hauptmenge des A. wird zur autogenen Schweißung (→Schweißen) und in der chem. Industrie verbraucht.`,
    ),
    L(
      `Der Umstand, daß sich A. leicht in Azeton löst (Azetylen-Dissous) und die Lösung nicht explosibel ist, wurde 1897 von Claude und Hess technisch verwertet. 1&nbsp;l Azeton vermag bei 12&nbsp;at ungefähr 300&nbsp;l A. aufzunehmen. Im Handel sind Stahlflaschen bis zu 40&nbsp;l Inhalt mit 6000&nbsp;l gelöstem A. Die Flaschen dürfen in bewohnten Räumen ohne besondere polizeiliche Erlaubnis aufbewahrt werden.`,
    ),
    L(
      `A. hat von allen bekannten kohlenwasserstoffhaltigen Gasen die höchste Leuchtkraft. Es verbrennt`,
    ),
    N("Abb. 2. Großentwickler. Schema (Griesheim Elektron)."),
  ],
};
