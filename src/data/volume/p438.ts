import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 438 · Scan 470 · Baumwolle (Forts.) */
export const PAGE_438: EncPage = {
  printed: 438,
  scanFile: 470,
  headerLeft: "Baum",
  headerRight: "Baumwolle",
  catchword: "Handelsformen",
  scanSrc: "/scans/p438.jpg",
  left: [
    L(
      `Pernambucobaumwolle. Die ostind. B. ist, abgesehen von dem schlechten Ertrag, durchschnittlich geringwertig, kurzstaplig, gelb bis bräunlich gefärbt, oft fleckig und stark verunreinigt; nur einzelne Sorten, wie Tinnevelly, machen dank den Bemühungen der ind. Regierung eine Ausnahme.`,
    ),
    L(
      `<table><caption>Welternte und Weltverbrauch an Baumwolle in 1000 Ballen zu 500 lbs. (1&nbsp;lb = 453,6&nbsp;g; Verbrauch einschl. Linters)</caption><thead><tr><th>Jahr</th><th>Ernte</th><th>Verbrauch</th><th>Jahr</th><th>Ernte</th><th>Verbrauch</th></tr></thead><tbody><tr><td>1913/14</td><td>22345</td><td>21223</td><td>1920/21</td><td>20984</td><td>16905</td></tr><tr><td>1914/15</td><td>24270</td><td>19761</td><td>1921/22</td><td>15439</td><td>19990</td></tr><tr><td>1915/16</td><td>17750</td><td>21011</td><td>1922/23</td><td>19300</td><td>21325</td></tr><tr><td>1916/17</td><td>19905</td><td>20180</td><td>1923/24</td><td>19600</td><td>19982</td></tr><tr><td>1917/18</td><td>19747</td><td>17761</td><td>1924/25</td><td>24800</td><td>22640</td></tr><tr><td>1918/19</td><td>20678</td><td>15970</td><td>1925/26</td><td>27900</td><td>24681</td></tr><tr><td>1919/20</td><td>21331</td><td>19300</td><td>1926/27</td><td>28000</td><td>26111</td></tr></tbody></table>`,
    ),
    L(
      `<table><caption>Anbaufläche, Ernte und Ertrag an Baumwolle i.&nbsp;J. 1926/27</caption><thead><tr><th>Land</th><th>Anbaufl. 1000&nbsp;ha</th><th>%</th><th>Ernte 1000&nbsp;kg</th><th>kg/ha</th><th>% Welt</th></tr></thead><tbody><tr><td>Ver.&nbsp;St.&nbsp;v.&nbsp;A.</td><td>19056</td><td>61,2</td><td>3901010</td><td>205</td><td>71,4</td></tr><tr><td>Ostindien (brit.)</td><td>9986</td><td>32,1</td><td>908360</td><td>91</td><td>16,7</td></tr><tr><td>Ägypten</td><td>750</td><td>2,4</td><td>344160</td><td>459</td><td>6,3</td></tr><tr><td>Rußland (asiat.)</td><td>701</td><td>2,3</td><td>163835</td><td>234</td><td>3,0</td></tr><tr><td>Andere Länder</td><td>622</td><td>2,0</td><td>144305</td><td>232</td><td>2,6</td></tr><tr><td>Welternte</td><td>31115</td><td>100</td><td>5461670</td><td></td><td>100</td></tr></tbody></table>`,
    ),
    L(`Jahresdurchschnitt 1909/10–1913/14: Welternte 47,61 Mill.&nbsp;dz; 1926/27: 59,90 Mill.&nbsp;dz.`),
  ],
  right: [
    L(
      `<em>Handel.</em> Der Handel vollzieht sich an den großen Baumwollbörsen, wie New York, New Orleans, Liverpool, Bremen, Le Havre. Zur Beurteilung wird die B. auf Grund ihres Stapels (= Faserlänge) und sonstiger für die Verspinnung wichtiger Eigenschaften in verschiedene Klassen eingeteilt, für die zu jeder Ernte von beeideten Personen neue Muster (Standard) herausgegeben und an der Börse hinterlegt werden. Früher konnten die Klassen an jeder Börse verschieden sein. Um aber den Baumwollhandel einheitlich zu gestalten und auch eine einheitl. Klassifizierung zu erreichen, haben sich beinahe alle Börsen den in Liverpool, als dem größten Baumwollhandelsplatz, geltenden Formen angeschlossen. Die verschiedenen Klassen tragen daher engl. Bezeichnungen: 1)&nbsp;für Sea Island: extra fine, fine, medium fine, good medium, medium, common ordinary; 2)&nbsp;für ägypt. B.: extra fine, fine, good, fully good fair, good fair, fair, middling fair, middling, ordinary; 3)&nbsp;für brasil. B.: fine, good, good fair, fair, middling fair, middling; 4)&nbsp;für ostind. B.: fine, good, good fair, fair, middling fair, good middling, middling.`,
    ),
    L(
      `Für den Handel mit amerik. B. hingegen gelten seit 1.&nbsp;August 1924 ausschl. die offiziellen, in Washington herausgegebenen Universal-Standards: middling fair, strict good middling, good middling, strict middling, middling, strict low middling, low middling, strict good ordinary, good ordinary. Die Basis für die Börsennotierungen ist middling; Stapel = 28&nbsp;mm.`,
    ),
    L(
      `Neben diesen Klassen werden im Handel noch besondere Bezeichnungen beigefügt, die die Qualität der B. näher angeben, z.&nbsp;B. die Farbe: good colour, tinged, high coloured, stained; oder die Art der Faser: good staple, very good staple, strong staple, silky staple. Der genauen Qualitätsbezeichnung wird oft der Ausdruck 'average' (»Durchschnitt«) zugefügt, der angibt, daß die Lieferung nicht von gleicher Klasse zu sein braucht; der Zusatz 'evenrunning' (»glatt laufend«) dagegen bedeutet, daß die Lieferung von gleichmäßiger Klasse sein soll. Abweichungen dürfen nur gering sein. Die einzelnen Börsen notieren in Amerika (New York) in Cents für 1 engl. Pfund, in England (Liverpool) in Pence und deren Bruchteile für 1 engl. Pfund, in Deutschland (Bremen) früher in Pfennig für ½&nbsp;kg, seit Oktober 1923 jedoch in Dollar-Cents für 1 engl. Pfund (= 453,6&nbsp;g).`,
    ),
    L(
      `<em>Die volkswirtschaftl. Bedeutung der Baumwollindustrie.</em> Im Rahmen der deutschen Textilindustrie kommt der Baumwollindustrie der erste Platz zu; denn von den bei der Berufszählung von 1925 ermittelten 1210784 Erwerbstätigen der Textilindustrie entfielen 286021 = 23,6% auf die Baumwollindustrie. Die wichtigsten Standorte finden sich im Freistaat Sachsen (Chemnitz, Vogtland), in der Rheinprovinz (München-Gladbach, Barmen-Elberfeld), Schlesien, Bayern und Westfalen. Die Betriebszählung von 1925 ermittelte 7843 gewerbliche Niederlassungen der Baumwollindustrie mit 299100 beschäftigten Personen und einer motorischen Leistung von 290320 PS der Wasser-, Wind- und Wärmekraftmotoren und 390416 PS der Elektromotoren. In der Baumwollspinnerei und -zwirnerei überwiegt der Großbetrieb, bes. bei den sog. »Spinnwebereien«, in denen Baumwollspinnerei und -weberei verbunden sind. In der Baumwollweberei dagegen finden sich viele Mittel- und Kleinbetriebe, doch umfassen auch in ihr die Großbetriebe 75% der beschäftigten Personen. Durch die Abtretung Elsaß-Lothringens ist der deutschen Baumwollindustrie ein wichtiges Produktionsgebiet verlorengegangen, so daß die Spindelzahl Ende 1927 mit etwa 11025000 Spindeln noch um etwa 170000 hinter`,
    ),
    N("Abb. Zahl der Spindeln in der deutschen Baumwollspinnerei 1909, 1925 und 1926 (Selfaktor-, Drossel-, Zwirnspindeln)."),
  ],
};
