import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 23 · PDF-S. 41 · Atmosphäre */
export const PAGE_23: EncPage = {
  printed: 23,
  scanFile: 41,
  headerLeft: "Atmolyse — Atmosphäre",
  headerRight: "Atmo",
  catchword: "alle Luftbestandteile",
  scanSrc: "/scans/p23.jpg",
  left: [
    L(
      `<strong>Atmolyse</strong> [grch.], die Trennung von Gasen durch ihre verschieden große Diffusionsgeschwindigkeit, →Diffusion.`,
    ),
    L(`<strong>Atmometer</strong> [grch.], →Verdunstungsmesser.`),
    L(
      `<strong>Atmoskessel</strong>, ein von dem schwed. Ingenieur Blomquist erfundener und von der Atmos A.-G. in Stockholm ausgeführter Höchstdruckdampfkessel (→Dampfkessel).`,
    ),
    L(
      `<strong>Atmosphäre</strong> [aus grch. atmos = Dunst und sphaira = Kugel], die aus gasförmigen Stoffen bestehende, der Erdoberfläche übergelagerte Hülle, der Luftozean, auf dessen Grunde wir leben, und der Schauplatz von Erscheinungen, mit denen sich Meteorologie, Klimatologie, Geophysik und Astronomie befassen.`,
    ),
    L(
      `1)&nbsp;<strong>Zusammensetzung, Masse, Erstreckung.</strong> Die A. ist ein Gemisch verschiedener Gase, hauptsächlich aus ⅕ Sauerstoff und ⅘ Stickstoff; jedoch sind auch noch andere Gase und sonstige Bestandteile in ihr vertreten. Raumprozent: Stickstoff 78,08, Sauerstoff 20,95, Argon und andere Edelgase 0,94, Kohlensäure 0,03. Gewichtsprozent: 75,46; 23,19; 1,30; 0,05.`,
    ),
    L(
      `Die andern Edelgase kommen in außerordentlich geringer Menge in der A. vor, z.&nbsp;B. Neon 1 Raumteil in 80000 Raumteilen, Helium 1 in 250000, Krypton 1 in 20 Mill., Xenon 1 in 170 Mill.; ferner enthält die A. noch 1 Raumteil Wasserstoff in etwa 100000 Raumteilen. Der Gehalt der A. an Kohlensäure (Kohlendioxyd, CO<sub>2</sub>) ist geringen örtlichen und zeitlichen Schwankungen unterworfen (größer über Land, in Städten, nachts; kleiner über Wasser, in ländlichen Gegenden, am Tage). Ozon (dreiatomiger Sauerstoff, O<sub>3</sub>) ist in geringer Menge (1½&nbsp;mg in 100&nbsp;cbm) in der A. enthalten; die Luft ist bes. ozonreich nach Gewittern. Von sonstigen Beimengungen der A. seien erwähnt Ammoniak und andere Stickstoffverbindungen, schweflige Säure und bes. die Verunreinigungen, wie Staub, Rauch, Ruß, Bakterien usw. Ein sehr wichtiger Bestandteil, der Wasserdampf, ist in obiger Tabelle nicht enthalten, da seine Menge außerordentlich starken Schwankungen unterworfen ist (→Luftfeuchtigkeit).`,
    ),
    L(
      `Wie jeder Körper, übt die A. auf ihre Unterlage einen Druck aus. Eine von der Erdoberfläche bis an die Grenzen der A. reichende Luftsäule hält einer Quecksilbersäule von 76&nbsp;cm Länge das Gleichgewicht (→Barometer), d.&nbsp;h. der Druck, den sie auf die Unterlage ausübt, beträgt 1,033&nbsp;kg/qcm. Hieraus läßt sich die Masse der A. zu 5,27&nbsp;×&nbsp;10<sup>18</sup>&nbsp;kg, d.&nbsp;i. weniger als 1 Millionstel der Erdmasse, berechnen. Der Luftdruck nimmt mit zunehmender Höhe ab, da die über dem Beobachtungsort liegende Luftsäule immer geringer wird (→Höhenmessung, barometrische). Für größere Höhen läßt sich der Luftdruck nur sehr angenähert unter gewissen Voraussetzungen über die dort herrschende Temperatur und Zusammensetzung berechnen. Nach Tetens und Humphreys: in 1&nbsp;km 674&nbsp;mm, 5&nbsp;km 405, 10&nbsp;km 198, 20&nbsp;km 41, 50&nbsp;km 0,094, 100&nbsp;km 0,0067.`,
    ),
    L(
      `Nach dem Daltonschen Gesetz müssen sich in der A. die spezifisch schwereren Gase unten, die leichteren`,
    ),
  ],
  right: [
    L(
      `oben ansammeln. So muß sich die Zusammensetzung der A. mit der Höhe stetig ändern. Das gilt jedoch nicht für die unterste Schicht von etwa 10&nbsp;km Höhe, in der durch die Witterungsvorgänge dauernd für gleichmäßige Durchmischung gesorgt wird.`,
    ),
    L(
      `Auf Grund dieser Veränderungen der A. mit der Höhe nach Dichte, Zusammensetzung und Art der physikal. Vorgänge hat man folgende Gliederung der A. aufgestellt: a)&nbsp;zu unterst die <strong>Troposphäre</strong>, der engere Bereich der meteorologischen Vorgänge und der damit verbundenen Erscheinungen, wie Wolken und Luftströmungen (Winde). Sie reicht an den Polen bis 10&nbsp;km, am Äquator bis 17&nbsp;km Höhe. b)&nbsp;Die <strong>Stratosphäre</strong>, der eigentl. Wärmemantel der Erde, von gleicher Zusammensetzung wie die Troposphäre, aber durch das Fehlen konvektiver (Ausgleichs-) Strömungen in vertikaler Richtung und fast konstante Temperaturverhältnisse von ihr verschieden. Aus Dämmerungserscheinungen hat man eine Höhe dieser Schicht bis 65&nbsp;km errechnet. c)&nbsp;Eine diesen beiden als <strong>Stickstoffsphäre</strong> zusammengefaßten Sphären folgende <strong>Wasserstoffsphäre</strong>, bereits sehr dünn und fast nur noch aus Wasserstoff bestehend, der Schauplatz der Nordlichterscheinungen und meisten Sternschnuppen und Meteoriten. d)&nbsp;Eine <strong>Geocoroniumsphäre</strong> noch sehr hypothetischer Natur, die aus Sternschnuppenbeobachtungen erschlossen wurde und mit der die A. der Erde allmählich in den nicht absolut »leer« denkbaren Weltenraum übergeht.`,
    ),
    L(
      `Rechnerisch hat also die A. keine Grenze, praktisch aber kann man eine solche dort ansetzen, wo die A. aufhört, für den Erdbewohner erkennbare Erscheinungen zu zeigen, also z.&nbsp;B. Nordlichter, deren Höhe in 500&nbsp;km Höhe festgestellt wurden. Da alle Lebewesen den untersten Schichten der A. angepaßt sind, bereitet das prakt. Vordringen in die höhern Schichten außerordentliche physische und techn. Schwierigkeiten. Die Höhenrekorde bemannter Freiballons und Flugzeuge überschreiten bisher 10&nbsp;km nicht wesentlich; mit einem unbemannten Registrierballon wurden 35&nbsp;km erreicht.`,
    ),
    L(
      `2)&nbsp;<strong>Physikalische Eigenschaften der A.</strong> Neben den chem. Eigenschaften der A., die das Leben auf der Erde ermöglichen, sind ihre wichtigsten Eigenschaften solche thermischer Natur; sie sind von überragender Bedeutung für den Wärmehaushalt unseres Planeten. Das Wärmeleitungsvermögen (eigentl. Wärmeleitzahl 0,000056 cal/cm·grad·sek) ist mehrere tausendmal so klein wie das von Metallen. Das innere Wärmeleitungsvermögen (Temperaturleitungsvermögen) ist dagegen vergleichbar dem der Metalle, nämlich 0,178. Es nimmt mit abnehmender Luftdichte, also mit zunehmender Höhe, zu, so daß in den obern Luftschichten Temperaturdifferenzen innerhalb der A. durch Leitung verhältnismäßig rasch ausgeglichen werden können. Wie jedes andere Medium schwächt die A. durch diffuse Reflexion jede durchgehende Strahlung. Beteiligt hieran sind`,
    ),
  ],
};
