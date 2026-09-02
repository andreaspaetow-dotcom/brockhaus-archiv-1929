import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 679 · Scan 721 · Berufssportmann — Berufsstatistik */
export const PAGE_679: EncPage = {
  printed: 679,
  scanFile: 721,
  headerLeft: "Berufssportmann",
  headerRight: "Berufsstatistik",
  catchword: "Die",
  scanSrc: "/scans/p679.jpg",
  left: [
    L(
      `schaftsbundes. 1925 bestanden 26&nbsp;B. mit rund 13&nbsp;Mill. Mitgliedern.`,
    ),
    B(`Jahrt. des Internationalen Gewerkschaftsbundes (1927).`),
    L(
      `<strong>Berufssportmann,</strong> Professional, Sportmann, der im Gegensatz zum Amateur den Sport des Gelderwerbs wegen treibt (Radrennfahrer, Boxer, Ringer, Reiter, Fußballspieler usw.).`,
    ),
    L(`<strong>Berufssprachen,</strong> →Standessprachen.`),
    L(
      `<strong>Berufsstände,</strong> die durch die Gliederung nach der Berufstätigkeit entstehenden Schichtungen der Bevölkerung. (→Stände, →Parlamentarismus.)`,
    ),
    L(
      `<strong>Berufsstatistik,</strong> die im Wege einer Volkszählung bewirkte Feststellung der beruflichen Gliederung einer Bevölkerung. Ihr Gegenstand ist also das Verhältnis der einzelnen Personen zur Erwerbstätigkeit, und zwar einmal die Zugehörigkeit zu einem bestimmten Beruf, dann aber auch die soziale Stellung in dem betreffenden Beruf.`,
    ),
    L(
      `1)&nbsp;<em>Die Berufszählungen.</em> Infolge der Schwierigkeit und Umständlichkeit ihrer Durchführung haben die Berufszählungen erst in neuerer Zeit eine gründlichere Durchbildung erfahren. Im Deutschen Reiche haben solche Zählungen in den Jahren 1882, 1895, 1907 und 1925 stattgefunden. Die Erhebungen stellen in erster Linie den Beruf selbst fest, und zwar sowohl den Haupt- wie auch den Nebenberuf, wobei es jedoch oft nicht leicht ist, Haupt- und Nebenberuf zu unterscheiden. Wesentlich ist weiterhin die Feststellung der sozialen Stellung der betreffenden Person in ihrem Berufe. In dieser Hinsicht werden in den deutschen Zählungen Selbständige, Angestellte und Beamte, Arbeiter und mithelfende Familienangehörige unterschieden. Darüber hinaus hat die Berufszählung vor allem das Geschlecht, das Alter, den Familienstand und die Zahl der Angehörigen der Erwerbstätigen zu berücksichtigen.`,
    ),
    L(
      `Die verschiedenen Berufszählungen eines Landes sind unter sich nur in großen Zügen vergleichbar, da die Berufssystematik jeder Berufszählung sich immer den Wandlungen im Wirtschaftsleben anpassen muß. Das galt in bes. hohem Maße von der neuesten deutschen Zählung von 1925. Die deutsche Berufszählung vom Jahre 1907 unterschied 6&nbsp;Berufsabteilungen (die von 1925 7&nbsp;Wirtschaftsabteilungen); die Wirtschaftsabteilungen wurden 1925 in 26&nbsp;Wirtschaftsgruppen eingeteilt und diese wieder in 218&nbsp;Berufsarten, die zusammen über 11000 einzelne Berufe umfaßten. Bei der Zugehörigkeit zu einem bestimmten Beruf werden die sog. »Erwerbstätigen im Hauptberuf« betrachtet, außerdem aber auch die »Berufszugehörigen«, d.&nbsp;h. die Erwerbstätigen unter Hinzunahme der in dem betreffenden Haushalt Dienenden und der Angehörigen ohne Hauptberuf. Die Gesamtzahl der »Berufszugehörigen« läßt nämlich erkennen, ein wie großer Teil der Bevölkerung seinen Unterhalt aus den einzelnen Wirtschaftsabteilungen usw. zieht.`,
    ),
  ],
  right: [
    L(
      `Volkswirtschaftlich haben die Berufszählungen eine sehr große Bedeutung. Sie lassen die Wandlungen erkennen, die sich in einem bestimmten Zeitraum in der wirtschaftl. Tätigkeit eines Volkes vollzogen haben. Von Wichtigkeit ist dabei die Feststellung, welcher Teil der Bevölkerung erwerbstätig ist, und welche Wandlungen sich in dieser sog. Erwerbsziffer zeigen. Nicht weniger wichtig sind die zahlenmäßigen Verschiebungen in der Zugehörigkeit zu den einzelnen Berufen, die Wandlungen in der Verteilung der Geschlechter auf die einzelnen Berufe und in ihrer Erwerbstätigkeit überhaupt sowie die zahlenmäßigen Änderungen in dem Verhältnis zwischen Selbständigen, Angestellten und Arbeitern.`,
    ),
    L(
      `2)&nbsp;<em>Die Berufsverteilung der Bevölkerung.</em> Die deutsche Berufszählung vom Jahre 1925 hat folgende sieben Wirtschaftsabteilungen unterschieden: A.&nbsp;Land- und Forstwirtschaft. B.&nbsp;Industrie und Handwerk. C.&nbsp;Handel und Verkehr. D.&nbsp;Verwaltung, freie Berufe usw. E.&nbsp;Gesundheitswesen usw. F.&nbsp;Häusliche Dienste und Lohnarbeit wechselnder Art. G.&nbsp;Ohne Beruf und Berufsangabe.`,
    ),
    L(
      `Von 1000 Erwerbstätigen gehörten im Jahre 1925 884 den 3 ersten Wirtschaftsabteilungen an, von 1000 Berufszugehörigen, also Erwerbstätigen einschl. Angehörigen, 812. Die Wandlungen in den ersten 3&nbsp;Wirtschaftsabteilungen für den Zeitraum von 1882–1925 zeigt die folgende Tabelle.`,
    ),
    L(`<table>
<thead><tr><th></th><th colspan="2">A. Landwirt&shy;schaft</th><th colspan="2">B. Industrie einschl. Handwerk</th><th colspan="2">C. Handel und Verkehrs&shy;wesen</th></tr>
<tr><th></th><th>Berufszugehörige</th><th>% der Gesamt&shy;bevölkerung</th><th>Berufszugehörige</th><th>%</th><th>Berufszugehörige</th><th>%</th></tr></thead>
<tbody>
<tr><td>1882</td><td>15&nbsp;938&nbsp;761</td><td>40,0</td><td>13&nbsp;946&nbsp;994</td><td>35,0</td><td>3&nbsp;876&nbsp;720</td><td>9,7</td></tr>
<tr><td>1895</td><td>15&nbsp;442&nbsp;059</td><td>33,6</td><td>17&nbsp;848&nbsp;209</td><td>38,9</td><td>5&nbsp;207&nbsp;159</td><td>11,3</td></tr>
<tr><td>1907</td><td>14&nbsp;918&nbsp;098</td><td>27,1</td><td>23&nbsp;175&nbsp;263</td><td>42,1</td><td>7&nbsp;409&nbsp;414</td><td>13,5</td></tr>
<tr><td>1925</td><td>14&nbsp;373&nbsp;256</td><td>23,0</td><td>25&nbsp;780&nbsp;831</td><td>41,3</td><td>10&nbsp;561&nbsp;976</td><td>16,9</td></tr>
</tbody></table>`),
    L(
      `Bes. wichtig ist die Entwicklung des Anteils der Erwerbstätigen an der Gesamtbevölkerung, die sog. Erwerbsziffer. Es betrug in Deutschland auf 10000 Personen, einschl. der Dienstboten, in den Jahren`,
    ),
    L(`<table>
<thead><tr><th></th><th>1882</th><th>1895</th><th>1907</th></tr></thead>
<tbody>
<tr><td>die männl. Erwerbsziffer</td><td>6057</td><td>6113</td><td>6106</td></tr>
<tr><td>die weibl. Erwerbsziffer</td><td>2402</td><td>2496</td><td>3037</td></tr>
</tbody></table>`),
    L(
      `Während in den Jahren 1907–25 die Gesamtbevölkerung im Reiche nur um 13,5&nbsp;% zunahm, stieg in diesem Zeitraum der Anteil der Erwerbstätigen um 24,2&nbsp;%, der dabei mithelfenden Familienangehörigen um 44,3&nbsp;%. Diese Zunahme der erwerbstätigen Personen hat sich bei beiden Geschlechtern gezeigt, in bes. starkem Umfang jedoch beim weibl. Geschlecht, wie sich aus der folgenden Tabelle für die Periode 1907–25 ergibt.`,
    ),
    L(
      `<em>Entwicklung der erwerbstätigen Bevölkerung im Deutschen Reich 1907–25.</em> Zu- und Abnahme gegenüber 1907 (männlich / weiblich / zusammen): Gesamtbevölkerung +11,4&nbsp;/ +15,5&nbsp;/ +13,5&nbsp;%; Bevölkerung im erwerbsfähigen Alter +22,1&nbsp;/ +30,5&nbsp;/ +26,4&nbsp;%; Erwerbstätige insgesamt +23,3&nbsp;/ +35,0&nbsp;/ +27,2&nbsp;%; Erwerbstätige ohne Mithelfende +22,6&nbsp;/ +28,7&nbsp;/ +24,2&nbsp;%; Mithelfende +33,8&nbsp;/ +48,0&nbsp;/ +44,3&nbsp;%. Die vollständige Ziffernfolge steht im Scan.`,
    ),
  ],
};
