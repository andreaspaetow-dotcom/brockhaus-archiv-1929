import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 758 · Scan 801 · Bibliothek */
export const PAGE_758: EncPage = {
  printed: 758,
  scanFile: 801,
  headerLeft: "Bibliothek",
  headerRight: "Bibliothek",
  catchword: "Einheitsbüchereien",
  scanSrc: "/scans/p758.jpg",
  left: [
    L(
      `<em>Die hauptsächlichsten Bibliotheken der Welt.</em> (Übersicht.) Abkürzungen: B. = Bibliothek und Bibliothèque. L. = Library. P. L. = Public Library. UB. = Universitäts-Bibliothek. U. L. = University Library. Hss. = Handschriften.`,
    ),
    L(
      `<em>Die größten Bibliotheken der Welt</em> (mehr als 1 Mill. Bände).`,
    ),
    L(`<table><thead><tr><th>Bibliothek</th><th>Bände</th></tr></thead><tbody>
<tr><td>Paris, B. Nationale</td><td>4 300 000</td></tr>
<tr><td>Leningrad, Öffentl. B.</td><td>4 200 000</td></tr>
<tr><td>Washington, L. of Congress</td><td>3 500 000</td></tr>
<tr><td>London, B. des Britischen Museums</td><td>3 300 000</td></tr>
<tr><td>Moskau, Öffentl. B.</td><td>3 000 000</td></tr>
<tr><td>New York, P. L.</td><td>2 800 000</td></tr>
<tr><td>Cambridge (Am.), Harvard U. L.</td><td>2 500 000</td></tr>
<tr><td>Berlin, Preuß. Staats-B.</td><td>2 000 000</td></tr>
<tr><td>Leningrad, Akademie-B.</td><td>2 000 000</td></tr>
<tr><td>Haag, Kgl. B.</td><td>2 000 000</td></tr>
<tr><td>Paris, U.-B.</td><td>1 600 000</td></tr>
<tr><td>München, Bayr. Staats-B.</td><td>1 550 000</td></tr>
<tr><td>New Haven, Yale U. L.</td><td>1 400 000</td></tr>
<tr><td>Boston, P. L.</td><td>1 400 000</td></tr>
<tr><td>Chicago, P. L.</td><td>1 350 000</td></tr>
<tr><td>Straßburg, U.-B.</td><td>1 300 000</td></tr>
<tr><td>Wien, National-B.</td><td>1 220 000</td></tr>
<tr><td>Cambridge, U. L.</td><td>1 205 000</td></tr>
<tr><td>Madrid, National-B.</td><td>1 135 000</td></tr>
<tr><td>Moskau, Museums-B.</td><td>1 100 000</td></tr>
<tr><td>New York, Columbia U. L.</td><td>1 025 000</td></tr>
<tr><td>Oxford, Bodleiana</td><td>1 000 000</td></tr>
<tr><td>Wien, U.-B.</td><td>1 000 000</td></tr>
<tr><td>Neapel, National-B.</td><td>1 000 000</td></tr>
</tbody></table>`),
    L(
      `<em>Die größten Handschriftensammlungen.</em> Leningrad 231746; Paris 122000; London 68400; Rom, Vaticana 53182; München 50000; Oxford 40000; Kopenhagen 35000; Wien 34000; Madrid 30172; Brüssel 30000; Mailand 30000; Berlin 26324; Kairo 23000; Florenz, National-B. 22000; Budapest, Nationalmuseum 17000; Upsala 16000; Lissabon 16000; Straßburg 13687; Wilno 12900; Venedig, Marciana 12000; Stockholm 12000; Neapel, National-B. 11800; Paris, Arsenal-B. 11700; Florenz, Laurentiana 10017; Hamburg 10612; Mailand, Ambrosiana 10000; Manchester, John Rylands 10000; Buenos Aires 10000; Göttingen 8074; Wolfenbüttel 8000.`,
    ),
    L(
      `<em>Verteilung der großen Bibliotheken</em> (mit mehr als 100000 Bänden) auf die Erdteile: Europa 432 Bibl., 129415000 Bde.; Nordamerika 173, 49024000; Mittel- und Südamerika 1658000; Asien 14, 3247000; Australien 6, 1242000; Afrika 255000. Auf die bedeutendsten Länder: Vereinigte Staaten von Amerika 160 Bibl., 46668000 Bde.; Deutschland 95, 28014000; Frankreich 58, 17257000; Großbritannien 57, 12634000; Italien 51, 15710000; Rußland 43, 20537000.`,
    ),
  ],
  right: [
    L(
      `<em>Die bedeutendsten Bibliotheken der einzelnen Länder. Deutsches Reich.</em>`,
    ),
    L(
      `<em>Staats- und Landesbibliotheken.</em> Berlin, Preuß. Staats-B. 2000000 Bde., 26324 Hss.; München, Bayr. Staats-B. 1550000, 50000; Dresden, Sächs. Landes-B. 680000, 7000; Darmstadt, Hess. Landes-B. 680000, 3849; Hamburg, Staats- und U.-B. 473000, 5843; Stuttgart, Württemb. Landes-B. 400000, 3000; Weimar, Landes-B. 400000, 4320; Bamberg, Öffentl. B. 350000, 8000; Wolfenbüttel, Braunschw. Landes-B. 270000, 4681; Kassel, Hess. Landes-B. 229000, 4082; Karlsruhe, Bad. Landes-B. 250000, 7728; Hannover, vorm. Kgl. und Prov.-B. 229000; Gotha, Herzogl. B. 250000; Schwerin, Meckl. Landes-B. 233000, 200; Oldenburg, Landes-B. 140000, 489. Ferner: Meiningen, Rudolstadt, Dessau, Altenburg, Fulda, Coburg, Neustrelitz, Speyer usw.`,
    ),
    L(
      `<em>Fürstliche Privatbibliotheken,</em> die zugleich öffentlich sind: Donaueschingen 150000 Bde., 1183 Hss.; Blaubeuren 140000, 2100; Wernigerode 130000, 1184; Regensburg 100000, 320 usw.`,
    ),
    L(
      `<em>Große Stiftungsbibliotheken.</em> Leipzig, Deutsche Bücherei 630000 Bde.; Frankfurt a. M., Senckenbergische B. 170000; Rothschildische B. 92000.`,
    ),
    L(
      `<em>Universitätsbibliotheken.</em> München 831000 Bde., 3000 Hss.; Leipzig 761000, 6500; Göttingen 720000, 8074; Kiel 698000, 4372; Jena 610000, 3703; Münster 600000, 1750; Freiburg 524000, 4544; Königsberg 500000, 2070; Tübingen 490000; Breslau 380000, 2760; Bonn 371000; Heidelberg 360000, 1928; Halle 355000, 1600; Marburg 342000, 2300; Gießen 340000, 1600; Rostock 335000, 1000; Greifswald 326000, 1515; Erlangen 311000, 970; Würzburg 307000, 1061; Köln 300000, 700. (Hamburg s. bei den Staats-B.; Frankfurt s. bei den Stadt- und Stiftungs-B. Die Vereinigung der Frankfurter B. zu der drittgrößten B. Deutschlands ist in Angriff genommen.)`,
    ),
    L(
      `<em>Bibliotheken der Technischen Hochschulen</em> (20000–140000 Bde.): Aachen, Berlin, Braunschweig, Breslau, Darmstadt, Dresden, Hannover, Karlsruhe, München, Stuttgart. Sonstige Hochschulbibliotheken (tierärztl., landwirtschaftl., forstl., Handelshochschulen): Berlin, München, Dresden, Hannover, Eberswalde, Münden, Mannheim usw.`,
    ),
    L(
      `<em>Große wissenschaftliche Stadtbibliotheken.</em> Frankfurt a. M. 477000 Bde.; Düsseldorf 320000, 2300 Hss.; Mainz 275000, 1118; Nürnberg 245000, 4000; Augsburg 240000; Lübeck 216000; Magdeburg 194000, 1549; Bremen 189000, 1255; Aachen 167000, 1130; Braunschweig 153000, 1700; Trier 150000, 277; Königsberg 150000, 3000; Wiesbaden 130000 (Nassauische Landes-B., an die Stadt übergegangen); Dortmund 121000, 1293; Essen 104000, 500; Elberfeld 102000, 280; Barmen 101000, 722; Krefeld 100000; Chemnitz 71000, 1300.`,
    ),
  ],
};
