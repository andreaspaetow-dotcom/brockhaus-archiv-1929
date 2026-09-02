import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 458 · Scan 490 · Bayern (Statistik, Unterricht) */
export const PAGE_458: EncPage = {
  printed: 458,
  scanFile: 490,
  headerLeft: "Baye",
  headerRight: "Bayern",
  catchword: "Verwaltungsrecht",
  scanSrc: "/scans/p458.jpg",
  left: [
    L(
      `<table><caption>Ernteflächen und Ernteerträgnisse 1926</caption><thead><tr><th></th><th>Roggen ha/t</th><th>Weizen ha/t</th><th>Winterspelz ha/t</th><th>Gerste ha/t</th><th>Hafer ha/t</th></tr></thead><tbody><tr><td>Bayern r. d. Rheins</td><td>374283 / 393860</td><td>253650 / 312236</td><td>14581 / 15972</td><td>312043 / 439562</td><td>402688 / 585923</td></tr><tr><td>Bayern l. d. Rheins</td><td>37567 / 65744</td><td>13591 / 26325</td><td>90 / 121</td><td>22768 / 49716</td><td>26480 / 59327</td></tr><tr><td>Bayern</td><td>411850 / 459604</td><td>267241 / 338561</td><td>14671 / 16093</td><td>334811 / 489278</td><td>429168 / 645250</td></tr></tbody></table>`,
    ),
    L(
      `<table><caption>Kartoffeln, Zuckerrüben, Heu, Wein, Hopfen 1926</caption><thead><tr><th></th><th>Kartoffeln ha/t</th><th>Zuckerrüben ha/t</th><th>Wiesenheu ha/t</th><th>Wein ha / Most hl</th><th>Hopfen ha/dz</th></tr></thead><tbody><tr><td>r. d. Rheins</td><td>334921 / 2491690</td><td>3725 / 81524</td><td>1313474 / 5541625</td><td>4244 / 15652</td><td>12009 / 18892</td></tr><tr><td>l. d. Rheins</td><td>41128 / 471182</td><td>4681 / 130320</td><td>49372 / 258853</td><td></td><td></td></tr></tbody></table>`,
    ),
    L(
      `<table><caption>Viehbestand 1926</caption><thead><tr><th></th><th>Pferde</th><th>Rindvieh</th><th>Schweine</th><th>Schafe</th><th>Ziegen</th><th>Federvieh</th></tr></thead><tbody><tr><td>r. d. Rheins</td><td>378194</td><td>3353000</td><td>1930849</td><td>392424</td><td>346822</td><td>9759228</td></tr><tr><td>l. d. Rheins</td><td>36579</td><td>213584</td><td>176011</td><td>14637</td><td>75178</td><td>1164407</td></tr><tr><td>Bayern</td><td>414773</td><td>3566584</td><td>2106860</td><td>407061</td><td>422000</td><td>10923635</td></tr></tbody></table>`,
    ),
    L(
      `<em>Industrie und Gewerbe</em> (1925). B. hat 428591 gewerbliche Niederlassungen, in denen 1850892 Arbeitnehmer (davon 526858 weibl.) beschäftigt sind. Die Leistung der vorhandenen Primär- und Sekundärmotoren beträgt 1449980 PS. Wasserwerke (1926) mit über 7500 PS: Taching, Margarethenberg, Hirten-Höllfeld an der Alz, Kachlet an der Donau, Töging am Inn, Walchensee, Mühltal, Höllriegelskreuth, Aufkirchen, Eitting, Pfrombach an der Isar, Gersthofen, Meitingen am Lech, Lechfall.`,
    ),
    L(
      `<em>Verkehr.</em> Eisenbahnen (1925): 8370&nbsp;km Reichsbahnen (4753&nbsp;km Haupt-, 3617&nbsp;km Nebenbahnen), 244&nbsp;km Privatbahnen. Auf 1000&nbsp;qkm Fläche kommen 113,3&nbsp;km, auf 100000 E. 116,7&nbsp;km. Landstraßen (1925): 27032&nbsp;km, davon 7343&nbsp;km Staats- oder Provinzialstraßen, 19689&nbsp;km Kreisstraßen. Staatl. Motorlinien (1925): 85 ständige Linien mit 1795,3&nbsp;km; 21 Sommerlinien mit 598,4&nbsp;km.`,
    ),
    L(
      `Wasserstraßen: Schiffbare Flüsse 1113&nbsp;km. Donau (von Regensburg bis zur Reichsgrenze, 177&nbsp;km; Tragfähigkeit der größten Schiffe 1000&nbsp;t), Main (von Bamberg bis Kahl, 360&nbsp;km), Rhein, Inn, Salzach, Naab, Fränk. Saale, Regnitz. Flößbare Flüsse 1253&nbsp;km. Kanäle: Rhein-Main-Donau-Großschiffahrtsweg Aschaffenburg–Kelheim, 607&nbsp;km (eigentlicher Kanal 174&nbsp;km), 49 Schleusen; Tragfähigkeit 1200&nbsp;t. Kraftfahrzeuge (1926): 20658 Personenwagen (672 Kraftomnibusse), 9994 Lastkraftwagen, 31450 Krafträder, 4789 Kleinkrafträder.`,
    ),
  ],
  right: [
    L(
      `<table><caption>Wichtigste Binnenhäfen, Güterverkehr in 1000&nbsp;t</caption><thead><tr><th>Hafen</th><th>Ankunft 1925</th><th>1926</th><th>Abgang 1925</th><th>1926</th></tr></thead><tbody><tr><td>Regensburg</td><td>146,4</td><td>218,8</td><td>132,9</td><td>188,7</td></tr><tr><td>Passau</td><td>65,0</td><td>81,2</td><td>62,9</td><td>75,1</td></tr><tr><td>Aschaffenburg</td><td>986,7</td><td>644,2</td><td>110,4</td><td>92,7</td></tr><tr><td>Würzburg</td><td>51,9</td><td>81,5</td><td>23,7</td><td>69,5</td></tr><tr><td>Ludwigshafen a. Rhein</td><td>2481,8</td><td>2514,3</td><td>782,8</td><td>850,4</td></tr></tbody></table>`,
    ),
    L(
      `Flughäfen: Bad Reichenhall, Bayreuth, Fürth-Nürnberg, Hof, Kaiserslautern, Kissingen, München, Regensburg, Schweinfurt.`,
    ),
    L(
      `neunstufigen höheren Lehranstalten, die Deutsche Oberschule, ist 1928 anerkannt worden. Viele Erziehungsanstalten, namentlich Internate für höhere Schüler, sind Klöstern angeschlossen.`,
    ),
    L(
      `Für die Mädchen ist die wissenschaftl. gerichtete höhere Schulform das Lyzeum, die prakt. gerichtete die höhere Mädchenschule neuerer Ordnung; jede baut sich mit sechs Jahren auf vier Jahren Volksschule auf. Dem Lyzeum kann sich ein Mädchengymnasium angliedern, das zur Reifeprüfung führt. 284 Mädchen besuchten 1926 höhere Knabenanstalten.`,
    ),
    L(
      `<table><caption>Volksschulstatistik (Ende 1924/25)</caption><thead><tr><th></th><th>kath.</th><th>evang.</th><th>gemeinsam</th><th>isr.</th><th>andersgläubig</th></tr></thead><tbody><tr><td>Volkshauptschulen</td><td>5347</td><td>1958</td><td>189</td><td>27</td><td></td></tr><tr><td>Schüler</td><td>597955</td><td>222347</td><td>1988</td><td>4440</td><td></td></tr></tbody></table>`,
    ),
    L(
      `<table><caption>Höhere Schulen 1926/27</caption><thead><tr><th></th><th>Zahl</th><th>Schüler</th></tr></thead><tbody><tr><td>Gymnasien</td><td>49</td><td>19384</td></tr><tr><td>Realgymnasien</td><td>16</td><td>2321</td></tr><tr><td>Oberrealschulen</td><td>22</td><td>16235</td></tr><tr><td>Realschulen</td><td>47</td><td>15963</td></tr><tr><td>Mädchenlyzeen</td><td>55</td><td>13996</td></tr><tr><td>Mädchengymnasien u. -realgymnasien</td><td>7</td><td>955</td></tr></tbody></table>`,
    ),
    L(
      `<table><caption>Hochschulen (Wintersemester 1926/27)</caption><thead><tr><th></th><th>Lehrkräfte</th><th>männl.</th><th>weibl.</th></tr></thead><tbody><tr><td>Universität Erlangen (gegr. 1743)</td><td>170</td><td>1298</td><td>54</td></tr><tr><td>Universität München (1472/1826)</td><td>516</td><td>5886</td><td>944</td></tr><tr><td>Universität Würzburg (1582)</td><td>220</td><td>1812</td><td>124</td></tr><tr><td>Technische Hochschule München</td><td>250</td><td>4146</td><td>60</td></tr><tr><td>Hochschule für Landwirtschaft und Brauerei Weihenstephan</td><td>50</td><td>312</td><td>37</td></tr><tr><td>Handelshochschule Nürnberg</td><td>55</td><td>443</td><td>15</td></tr><tr><td>Akademie der bildenden Künste München</td><td>21</td><td>274</td><td>69</td></tr><tr><td>Staatsakademie der Tonkunst</td><td>55</td><td>392</td><td>270</td></tr><tr><td>Staatskonservatorium Würzburg</td><td>28</td><td>260</td><td>137</td></tr></tbody></table>`,
    ),
    L(
      `Von den 19561 Lehrkräften der Volksschulen waren 16616 ständig, 1442 unständig, 1488 Ordensangehörige, 15 geistl. Standes.`,
    ),
    B(`Breinholt: Bayerisches Volksschulrecht (1926).`),
    L(
      `14)&nbsp;<em>Recht und Rechtspflege.</em> Außer dem Obersten Landesgericht in München bestehen in B. 5 Oberlandesgerichte (Augsburg, Bamberg, München, Nürnberg, Zweibrücken), 29 Landgerichte (Augsburg, Kempten, Memmingen, Neustadt a. d. Donau, Eichstätt, Bamberg, Bayreuth, Coburg, Hof, Aschaffenburg, Schweinfurt, Würzburg, München I und II, Traunstein, Deggendorf, Landshut, Passau, Straubing, Amberg, Ansbach, Regensburg, Weiden, Fürth, Nürnberg, Frankenthal, Kaiserslautern, Landau, Zweibrücken) und 263 Amtsgerichte. Oberste Instanz für das`,
    ),
  ],
};
