import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 650 · Scan 692 · Bermudainseln (Forts.), Bern (Kanton) */
export const PAGE_650: EncPage = {
  printed: 650,
  scanFile: 692,
  headerLeft: "Bern",
  headerRight: "Bern",
  catchword: "Industrie",
  scanSrc: "/scans/p650.jpg",
  left: [
    L(
      `Fremdenzustrom an Winterkurgästen (1913: 22000) hat sich vervielfacht. Geopolitisch sind die B. als Flottenstation, Beobachtungsposten gegenüber Nordamerika und nördl. Ausgangspunkt der großen brit. Sperrstellung über die Bahamas, Antillen und Trinidad bedeutungsvoll. Docks, Marinearsenale, Provantdepots, Befestigungen, Garnisonen sind mit ungeheuren Kosten angelegt worden. Hauptstadt ist Hamilton auf Mainland, (1921) 2580 E., Sitz der Kolonialbehörden. Die B. haben ein eigenes Zollges. v. 1923. Die Handelsbeziehungen mit Deutschland sind auf der Grundlage gegenseitiger Meistbegünstigung durch den deutsch-engl. Handelsvertrag v. 2.&nbsp;Dez. 1924 geregelt.`,
    ),
    L(
      `Die B. wurden 1522 durch den Spanier Juan Bermúdez entdeckt. Der erste Bewohner war der schiffbrüchige Engländer Somers; 1612 wurden die Inseln von Virginien aus kolonisiert.`,
    ),
    B(
      `Lefroy: Discovery and settlement of the Bermudas (2 Bde., 1877–79); Hayward: Bermuda, past and present (1923).`,
    ),
    L(
      `<strong>Bern</strong> (Karte 55, C&nbsp;3), 1)&nbsp;größter Kanton der Schweizer Eidgenossenschaft, 6883,5 qkm, zerfällt nach seiner Bodengestaltung in die drei Gebiete des Juras im N und NW, der Alpen im S und des Schweizer Mittellandes. Der Jura ist ein wald- und weidereiches Kalkgebirge aus parallelen Ketten von gleichmäßiger Höhe, die nach N und NW in breite Plateaus übergehen. Seine wichtigsten Gipfel in B. sind der Chasseral (1609 m), der Montagne (1332 m), der Moron (1340 m), der Mont-Raimeux (1306 m), der Gratberg (1272 m) und der Blauenberg. Das Mittelland trägt am Fuß des Juras das Gepräge eines Hügellandes, welches nach S in ein Bergland aus Sandstein und Nagelfluh der Molasse übergeht. Nur wenige Gipfel steigen zu mehr als 1000 m Höhe an (Blasenfluh 1117 m, Napf 1411 m). Über den teils felsigen, teils mit Wald und Weide bedeckten Voralpen erheben sich die vergletscherten Berner Hochalpen mit den Gipfeln der Jungfrau (4167 m), des Finsteraarhorns (4275 m) usw. Das Alpengebiet bildet das Berner Oberland, in der Hochebene liegen die Landschaften Mittelland (um Bern), Emmental, Oberaargau (um Langenthal) und Seeland (um Biel). Mit Ausnahme des äußersten NW, dessen Gewässer durch den Doubs der Rhône zufließen, gehört der Kanton zum Gebiete des Rheins, dem unmittelbar die Birs aus dem Jura, die andern Gewässer durch die Aare zufließen.`,
    ),
    L(
      `<em>Bevölkerung.</em> Der Kanton hatte 1920: 674400 E. (98 auf 1 qkm; im Juragebiet 78, in der Hochebene 170, im Alpenanteil 40 auf 1 qkm). Die Muttersprache ist bei 559410 E. deutsch, bei 106820 französisch (im Jura), bei 5960 italienisch.`,
    ),
  ],
  right: [
    L(`Die Bevölkerung nach Amtsbezirken 1920 (Reformierte, Katholiken, Israeliten):`),
    L(`<table>
<thead><tr><th>Bezirk</th><th>Einw. 1920</th><th>Ref.</th><th>Kath.</th><th>Isr.</th></tr></thead>
<tbody>
<tr><td>Aarberg</td><td>19175</td><td>18804</td><td>257</td><td>23</td></tr>
<tr><td>Aarwangen</td><td>28782</td><td>28099</td><td>596</td><td>31</td></tr>
<tr><td>Bern</td><td>135152</td><td>119100</td><td>13110</td><td>1059</td></tr>
<tr><td>Biel</td><td>35415</td><td>28797</td><td>5583</td><td>443</td></tr>
<tr><td>Burgdorf</td><td>32467</td><td>31494</td><td>814</td><td>49</td></tr>
<tr><td>Courtelary</td><td>26093</td><td>22500</td><td>3275</td><td>13</td></tr>
<tr><td>Delémont</td><td>18564</td><td>4104</td><td>14295</td><td>75</td></tr>
<tr><td>Erlach</td><td>8017</td><td>7784</td><td>220</td><td>3</td></tr>
<tr><td>Franches-Montagnes</td><td>9933</td><td>1029</td><td>8887</td><td>—</td></tr>
<tr><td>Fraubrunnen</td><td>14613</td><td>14337</td><td>230</td><td>4</td></tr>
<tr><td>Frutigen</td><td>12553</td><td>12357</td><td>165</td><td>2</td></tr>
<tr><td>Interlaken</td><td>28039</td><td>26919</td><td>965</td><td>36</td></tr>
<tr><td>Konolfingen</td><td>31345</td><td>30963</td><td>293</td><td>4</td></tr>
<tr><td>Laufen</td><td>8487</td><td>1146</td><td>7289</td><td>28</td></tr>
<tr><td>Laupen</td><td>9547</td><td>9286</td><td>235</td><td>—</td></tr>
<tr><td>Moutier (Münster)</td><td>23745</td><td>16212</td><td>7393</td><td>21</td></tr>
<tr><td>Neuveville</td><td>4546</td><td>4217</td><td>272</td><td>6</td></tr>
<tr><td>Nidau</td><td>14993</td><td>14393</td><td>511</td><td>18</td></tr>
<tr><td>Oberhasli</td><td>6507</td><td>6379</td><td>117</td><td>—</td></tr>
<tr><td>Porrentruy</td><td>25324</td><td>3075</td><td>22090</td><td>78</td></tr>
<tr><td>Saanen</td><td>6063</td><td>5888</td><td>164</td><td>2</td></tr>
<tr><td>Schwarzenburg</td><td>11138</td><td>11041</td><td>59</td><td>—</td></tr>
<tr><td>Seftigen</td><td>21790</td><td>21575</td><td>163</td><td>1</td></tr>
<tr><td>Signau</td><td>25035</td><td>24786</td><td>184</td><td>—</td></tr>
<tr><td>Simmental, Nieder-</td><td>12454</td><td>12069</td><td>339</td><td>—</td></tr>
<tr><td>Simmental, Ober-</td><td>7549</td><td>7447</td><td>63</td><td>8</td></tr>
<tr><td>Thun</td><td>40983</td><td>39521</td><td>1254</td><td>49</td></tr>
<tr><td>Trachselwald</td><td>24418</td><td>24164</td><td>191</td><td>6</td></tr>
<tr><td>Wangen</td><td>18614</td><td>18197</td><td>353</td><td>13</td></tr>
<tr><td><strong>Summe</strong></td><td>674394</td><td>581299</td><td>89814</td><td>1998</td></tr>
</tbody>
</table>`),
    L(
      `<em>Landwirtschaft.</em> Von der Fläche sind 5585,9 qkm, d.&nbsp;i. 81,15%, produktives Land: 1612,7 qkm Waldungen, namentlich in den Juragegenden, 3 qkm Weinberge und 3970,1 qkm Acker-, Garten-, Wiesen- und Weideland. Vom unproduktiven Land entfallen 288 qkm auf Gletscher. Der Getreidebau ist stark eingeschränkt worden (auf etwa 400 qkm). Ausgedehnter ist der Kartoffelbau, bes. im Oberaargau und im Seeland, wo auch die Zuckerrübenkultur betrieben wird. Der Weinbau spielt nur an den Abhängen des Jura über dem Bieler See eine größere Rolle; im Jahre 1927 wurden 9220 hl Wein (vorwiegend Weißwein) gewonnen. Bedeutender ist der Obstbau. Fast 70% der Kulturfläche dienen der Viehzucht. Die Zahl der Alpwirtschaften beträgt 3619 (mehr als ⅓ der ganzen Schweiz) mit einer Gesamtfläche von 1820 qkm. Die geschätztesten Käsesorten liefern das Emmental und das Saanenland. 1926 besaß B. 41761 Pferde, 349473 Rinder, 140261 Schweine, 18489 Schafe, 39696 Ziegen.`,
    ),
  ],
};
