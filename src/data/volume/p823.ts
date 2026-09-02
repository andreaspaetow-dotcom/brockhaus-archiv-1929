import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 823 · Scan 866 · Binnenkiel — Binokularmikroskop */
export const PAGE_823: EncPage = {
  printed: 823,
  scanFile: 866,
  headerLeft: "Binnenkiel",
  headerRight: "Binokularmikroskop",
  catchword: "Wenham",
  scanSrc: "/scans/p823.jpg",
  left: [
    L(
      `stellen, durch den er sich zur unbedingten Auslieferung des Frachtguts an den darin bezeichneten Empfänger oder dessen Order verpflichtet. Werden dem Schiff oder der Ladung zur Errettung aus gemeinsamer Gefahr vom Schiffer oder auf dessen Anweisung vorsätzlich Schäden zugefügt (große Havarie), so sind die Kosten dafür von den Absendern und dem Schiffseigner gemeinsam zu tragen. Schäden durch den Zusammenstoß von Schiffen dagegen treffen den Schiffseigner allein, ebenso die kleine Havarie, d. h. die besonderen Unkosten durch Kanal- oder Hafenabgaben, Schlepplohn usw. Für in Sicherheit gebrachte Schiffe oder Ladungen kann ein Bergelohn verlangt werden, für die Errettung eines noch in der Gewalt der Besatzung stehenden Schiffes oder seiner Ladung Hilfslohn. In Österreich fehlen privatrechtl. Sonderbestimmungen für die B. Anwendung finden die Vorschriften des allgem. bürgerl. Gesetzbuchs und des Handelsgesetzbuchs.`,
    ),
    B(
      `Art. B. im Handwörterbuch der Staatswissenschaften (4. Aufl., 2. Bd., 1924).`,
    ),
    L(
      `<strong>Binnenkiel, Binnenfleet,</strong> Sammelgraben der Binnengewässer hinter einem Deich.`,
    ),
    L(
      `<strong>Binnenwanderung,</strong> besser innerstaatl. Wanderung, die Wanderbewegung, die sich im Gegensatz zur Auswanderung innerhalb der Grenzen eines Staates vollzieht. Diese B. kann eine zeitlich begrenzte, eine Zeitwanderung sein, wie bei Wanderarbeitern, die nach einigen Wochen oder Monaten wieder an ihren Wohnsitz zurückkehren (Erntearbeiter, Sachsengänger); sie kann aber auch als sog. Dauerwanderung mit dem endgültigen Wechsel des Wohnsitzes verbunden sein. Eine besondere Form der B. stellt die Pendelwanderung dar; bei ihr handelt es sich um die regelmäßige, oft tägliche Wanderung von Arbeitern, deren Arbeits- und Wohnort nicht zusammenfallen. Die eigentl. B. vollzieht sich vornehmlich räumlich vom Lande nach der Stadt, beruflich von der Landwirtschaft in die Industrie. Man spricht deshalb hier auch häufig von Landflucht. Die Ursachen der B. liegen vor allem in dem Streben der ländl. Bevölkerung nach einer Verbesserung ihrer Verhältnisse. Die Industrie kann im allgemeinen höhere Löhne zahlen als die Landwirtschaft, und die Möglichkeiten zum sozialen Aufstieg sind in der Stadt größer als auf dem Lande. Je leichter es möglich ist, auf dem Lande Grund und Boden zu erwerben, um so geringer ist die Abwanderung vom Lande. Am genauesten ist die B. in Deutschland anläßlich der Volkszählung i. J. 1900 und anläßlich der Berufs- und Betriebszählung i. J. 1907 statistisch erfaßt und bearbeitet worden. Für das Jahr 1907 ergibt sich das folgende Bild:`,
    ),
    L(`<table>
<thead><tr><th colspan="2">Am 12. Juni 1907 im Reich ortsanwesende Bevölkerung</th></tr></thead>
<tbody>
<tr><td>Insgesamt</td><td>61 720 529</td></tr>
<tr><td>Davon in der Zählgemeinde geboren</td><td>31 395 429</td></tr>
<tr><td>nicht in der Zählgemeinde, jedoch in Deutschland geboren</td><td>28 982 806</td></tr>
<tr><td>im Auslande geboren</td><td>1 342 294</td></tr>
<tr><td>Von den auf dem Lande (Orte bis 2000 Einwohnern) Geborenen auf dem Lande</td><td>23 465 468</td></tr>
<tr><td>in den Städten</td><td>10 292 448</td></tr>
<tr><td>Von den in den Städten Geborenen auf dem Lande</td><td>2 006 348</td></tr>
<tr><td>in den Städten</td><td>24 613 971</td></tr>
</tbody>
</table>`),
    L(
      `Mit diesem starken Zuge vom Lande nach der Stadt hängt in erster Linie das Anwachsen der städt. Bevölkerung, vor allem der Großstadtbevölkerung, und der absolute und relative Rückgang der ländlichen Bevölkerung zusammen. Die folgende Tabelle gibt ein Bild davon, wie sich die Bevölkerungsverteilung im Deutschen Reich entwickelt hat.`,
    ),
  ],
  right: [
    L(`<table>
<thead><tr><th colspan="7">Die städtische und ländliche Bevölkerung im Deutschen Reich 1871–1925. Einwohnerzahl nach dem jeweiligen Gebietsstand</th></tr>
<tr><th>Jahr</th><th colspan="2">Gemeinden mit weniger als 2000 Einwohnern (Land)</th><th colspan="2">Gemeinden mit mehr als 2000 Einwohnern (Stadt)</th><th colspan="2">Gemeinden mit 100 000 und mehr Einwohnern (Großstädte)</th></tr>
<tr><th></th><th>Zahl</th><th>%</th><th>Zahl</th><th>%</th><th>Zahl</th><th>%</th></tr></thead>
<tbody>
<tr><td>1871</td><td>26 219 352</td><td>63,9</td><td>14 790 798</td><td>36,1</td><td>1 968 537</td><td>4,80</td></tr>
<tr><td>1875</td><td>26 070 188</td><td>61,0</td><td>16 657 172</td><td>39,0</td><td>2 665 914</td><td>6,24</td></tr>
<tr><td>1880</td><td>26 513 531</td><td>58,6</td><td>18 720 530</td><td>41,4</td><td>3 273 144</td><td>7,24</td></tr>
<tr><td>1885</td><td>26 376 927</td><td>56,3</td><td>20 478 777</td><td>43,7</td><td>4 446 381</td><td>9,49</td></tr>
<tr><td>1890</td><td>26 185 241</td><td>53,0</td><td>23 243 229</td><td>47,0</td><td>5 997 542</td><td>12,13</td></tr>
<tr><td>1895</td><td>26 022 519</td><td>49,8</td><td>26 257 382</td><td>50,2</td><td>7 276 993</td><td>13,92</td></tr>
<tr><td>1900</td><td>25 734 103</td><td>45,7</td><td>30 633 075</td><td>54,3</td><td>9 120 280</td><td>16,18</td></tr>
<tr><td>1905</td><td>25 822 481</td><td>42,6</td><td>34 818 797</td><td>57,4</td><td>11 509 004</td><td>18,98</td></tr>
<tr><td>1910</td><td>25 954 587</td><td>40,0</td><td>38 971 406</td><td>60,0</td><td>13 823 348</td><td>21,29</td></tr>
<tr><td>1919</td><td>22 734 380</td><td>37,6</td><td>37 677 704</td><td>62,4</td><td>14 057 784</td><td>23,27</td></tr>
<tr><td>1925</td><td>22 224 945</td><td>35,6</td><td>40 123 837</td><td>64,4</td><td>16 619 402</td><td>26,65</td></tr>
</tbody>
</table>`),
    B(
      `Hansen: Die drei Bevölkerungsstufen (1889); Fuchs: Der Zug nach der Stadt (1897); Gering: Verteilung des Grundbesitzes und Abwanderung vom Lande (1910); Weber: Wanderungen und Stadtkultur (1916); Hainisch: Die Landflucht (1924).`,
    ),
    L(
      `<strong>Binnenwasser,</strong> das hinter Fluß- oder Seedeichen sich ansammelnde Wasser.`,
    ),
    L(
      `<strong>Binnenwasserstraßen,</strong> die für die Schiffahrt in Betracht kommenden →Binnengewässer (Flüsse, Kanäle, Seen und Haffe).`,
    ),
    L(
      `<strong>Binnenzölle,</strong> die bei Überschreitung von Grenzlinien innerhalb der Landesgrenze erhobenen →Zölle, oft auch die Abgaben an Gemeinden von Verbrauchsgegenständen (→Oktroi).`,
    ),
    L(
      `<strong>Binningen,</strong> Dorf im schweiz. Kanton Basel-Land, hat (1920) 6530 ref. und kath. E.; südl. Arbeitervorort von Basel.`,
    ),
    L(
      `<strong>Binnit,</strong> sehr seltenes, reguläres Mineral im Dolomit des Schweizer Binnentals, ein Kupfer-Arsenglanzerz.`,
    ),
    L(
      `<strong>Binocle</strong> [frz. binocle], 1) Brille, Lorgnette, Fernrohr für beide Augen.`,
    ),
    L(
      `2) Schweiz. Kartenspiel mit 32 Blättern der Pikettkarte unter 2 bis 4 Teilnehmern. Pikdame und Karobube in einer Hand bilden den B., Pikkönig dazu den Großbinocle. Sieg nach Punkten.`,
    ),
    L(
      `<strong>binokular</strong> [lat.], mit beiden Augen oder für beide Augen zugleich, z. B. binokulares Sehen. Während aus sehr großer Entfernung parallel einfallende Strahlen auf beiden Netzhäuten identische Netzhautstellen treffen, fallen die Bilder von nahen Gegenständen (konvergente Strahlen), da die beiden Netzhäute um den Augenabstand seitlich voneinander entfernt sind, auf seitlich etwas verschobene, sog. querdisparate Netzhautstellen. Identische Netzhautstellen liefern ohne weiteres ein in sehr große Entfernung verlegtes Bild, während die auf querdisparaten Stellen entstehenden Bilder erst im Gehirn verschmelzen; dieser Verschmelzungsakt wird uns als Tiefenwahrnehmung bewußt. Je größer die Differenzen der Netzhautstellen, desto näher erscheint uns der Gegenstand.`,
    ),
    L(
      `<strong>Binokularmikroskop,</strong> Mikroskop mit zwei Okularen, durch das der Beobachter mit beiden Augen sieht. Sind zwei Objektive vorhanden, oder ist ein Objektiv in zwei Hälften geteilt, so erhalten die beiden Augen zwei verschiedene Bilder, und es entsteht ein stereoskopischer Effekt (Konstruktionen von Greenough und Abbe). Sind dagegen beide Bilder gleich, so liegt der Vorteil in der geringeren Anstrengung der beiden Augen, der Ausnutzung etwaiger Verschiedenheiten zwischen ihnen (binokulare Reizsummation) und in dem psychol. Effekt größerer Lebhaftigkeit. Die letztere Art ist heute am verbreitetsten (Konstruktion von`,
    ),
  ],
};
