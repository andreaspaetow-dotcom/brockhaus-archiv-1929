import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 34 · PDF-S. 52 · Atomgewichtstabelle */
export const PAGE_34: EncPage = {
  printed: 34,
  scanFile: 52,
  headerLeft: "Atomiker — Atomtheorie",
  headerRight: "Atom",
  catchword: "bereits",
  scanSrc: "/scans/p34.jpg",
  left: [
    L(
      `Einheit galt früher der Wasserstoff, dessen A. gleich 1,000 gesetzt wurde, doch hat es sich, da Sauerstoffverbindungen viel häufiger zu Atomgewichtsbestimmungen dienen, als praktischer erwiesen, den Sauerstoff zum Ausgangspunkt zu wählen, dessen A. man jetzt gleich 16,000 setzt. Zur Bestimmung des A. eines Elementes ermittelt man zunächst mit größter Genauigkeit dessen →Äquivalentgewicht, hierauf die Zusammensetzung und die Dampfdichte (das Molekulargewicht) einer möglichst großen Anzahl von Verbindungen des Elementes. Das A. ergibt sich dann zweifelsfrei durch Überlegungen an Hand des →Periodischen Systems.`,
    ),
    L(
      `Durch die Entdeckung der →Isotopen wurde festgestellt, daß das A. vieler Elemente keine einfache Größe ist, daß vielmehr eine Reihe von Elementen Mischungen aus Atomarten von verschiedenem Gewicht (Isotopen) sind, die sich jedoch chemisch in keiner Weise unterscheiden lassen. Für die Atomgewichtsbestimmung ist dies jedoch praktisch ohne Bedeutung, da (abgesehen vom Uranblei) die Elemente überall auf der Erde in völlig konstanter Mischung, d.&nbsp;h. mit völlig gleichem A. vorkommen.`,
    ),
    L(
      `Die Größe der A. wurde vor dem Weltkrieg alljährlich, dem Stande der Forschung entsprechend, durch eine Internationale Atomgewichtskommission festgesetzt. Eine allgemein anerkannte internationale Atomgewichtsfestsetzung besteht z.&nbsp;B. nicht. In Deutschland hat sich 1920 eine Deutsche Atomgewichtskommission gebildet, die jährlich Berichte veröffentlicht.`,
    ),
    L(
      `Die absoluten A. lassen sich aus der →Loschmidtschen Zahl berechnen. Ein Wasserstoffatom wiegt 1,66&nbsp;·&nbsp;10<sup>−24</sup>&nbsp;g, ein Uranatom 4&nbsp;·&nbsp;10<sup>−22</sup>&nbsp;g.`,
    ),
    N(
      "Tabelle Atomgewichtstabelle (1926). Spalten: Element, chem. Symbol, Atomgewicht, Atomnummer. Auswahl: H 1,0078 / 1; He 4,002 / 2; C 12,000 / 6; N 14,008 / 7; O 16,000 / 8; Na 22,997 / 11; Al 26,97 / 13; Cl 35,457 / 17; Fe 55,84 / 26; Cu 63,57 / 29; Ag 107,880 / 47; Au 197,2 / 79; Hg 200,61 / 80; Pb 207,22 / 82; Ra 225,97 / 88; U 238,14 / 92.",
    ),
  ],
  right: [
    L(`<strong>Atomiker</strong>, →Atom.`),
    L(
      `<strong>Atomisten</strong>, Anhänger der Lehre des Atomismus. Nach dieser Lehre ist alles Naturgeschehen auf die Verbindung und Trennung der →Atome zurückzuführen. A. sind: Demokrit, Epikur, Lukrez, Gassendi, Holbach.`,
    ),
    L(`<strong>Atomistik</strong>, die →Atomtheorie.`),
    L(`<strong>Atomnummer</strong>, →Periodisches System.`),
    L(
      `<strong>Atomspektren</strong>, die Linienspektren, die ihren Ursprung in leuchtenden Atomen haben, im Gegensatz zu den von Molekülen ausgehenden Bandenspektren. (→Spektrum.)`,
    ),
    L(
      `<strong>Atomstrahlen</strong>, Strahlen, die aus einzelnen, schnell bewegten Atomen bestehen. Man kann z.&nbsp;B. Strahlen aus Metallatomen herstellen, indem man das betreffende Metall im Vakuum zum Verdampfen bringt und den austretenden Metalldampf durch eine enge Öffnung treten läßt. Die A. sind ein Mittel zur Erforschung gewisser Eigenschaften der Atome.`,
    ),
    L(
      `<strong>Atomtheorie.</strong> Im Jahre 1808 stellte der engl. Naturforscher John Dalton, anknüpfend an eine`,
    ),
  ],
};
