import type { EncPage } from "../types";
import { L } from "./helpers";

/** Druckseite 604 · Scan 636 · Übersicht Berge (außereuropäische Erdteile) */
export const PAGE_604: EncPage = {
  printed: 604,
  scanFile: 636,
  headerLeft: "Berg",
  headerRight: "Berge",
  catchword: "Bergakademien",
  scanSrc: "/scans/p604.jpg",
  left: [
    L(
      `<table><thead><tr><th>Gipfel</th><th>Gebirge (oder Länder)</th><th>Höhe m</th></tr></thead><tbody>
<tr><td>Moosberg</td><td>Wesergebirge</td><td>509</td></tr>
<tr><td>Turmberg</td><td>Schönberger Berge (bei Danzig)</td><td>331</td></tr>
<tr><td>Külpenberg</td><td>Kyffhäusergebirge</td><td>477</td></tr>
<tr><td>Großer Feldberg</td><td>Taunus</td><td>880</td></tr>
<tr><td>Signalberg</td><td>Dammer Berge (Oldenburg)</td><td>146</td></tr>
<tr><td>Kamelsberg</td><td>Waldaihöhen</td><td>332</td></tr>
<tr><td>Velmerstot</td><td>Teutoburger Wald</td><td>468</td></tr>
<tr><td>Poppenberg</td><td>Waldaihöhen</td><td>234</td></tr>
<tr><td>Ejer-Bavnehøj</td><td>(Jütland)</td><td>172</td></tr>
<tr><td>Gibraltar</td><td>(Iberische Halbinsel)</td><td>425</td></tr>
</tbody></table>`,
    ),
    L(`<strong>II. Außereuropäische Erdteile und Polarländer.</strong>`),
    L(
      `<strong>Asien.</strong> Mount Everest (Tschomolungma) Himalaja 8620; Godwin Austen (K2) Karakorum 8580; Kantschindschinga Himalaja 8180; Dhaulagiri Himalaja 8000; Nanga Parbat Himalaja 8126; Tirichmir Hindukusch 7720; Ulug-mus-tag Kwen-lun 7720; Mustagh Ata Pamir 7600; Pik Lenin Transalai 7134; Elbrus Kaukasus 5630; Kasbek Kaukasus 5040; Ararat Armenien 5165; Fujiyama Japan 3776; Klutschewskaja Kamtschatka 4850.`,
    ),
    L(
      `<strong>Afrika.</strong> Kilimandscharo (Kibo) Ostafrika 6010; Kenia Uganda/Ostafrika 5195; Ruwenzori 5119; Meru Ostafrika 4565; Ras Daschan Abessinien 4620; Tizi-n-Tamjurt Hoher Atlas 4165; Kamerunberg 4070; Pico de Teide Teneriffa 3718; Drachenberge (Natal) bis 3350; Tafelberg (Kapkolonie) 1082.`,
    ),
  ],
  right: [
    L(
      `<strong>Nordamerika.</strong> Mount McKinley Alaska 6187; Mount Logan Kanada 5959; Pico de Orizaba Mexiko 5700; Popocatepetl Mexiko 5452; Mount Wrangel Alaska 4269; Ixtaccihuatl Mexiko 5286; Mount Whitney Kalifornien 4421; Mount Elbert Colorado 4401; Mount Rainier Washington 4392; Blanca Peak Colorado 4372; Mount Shasta Kalifornien 4317; Pico de Colima Mexiko 3846.`,
    ),
    L(
      `<strong>Mittelamerika und Westindien.</strong> Tajumulco Guatemala 4210; Chiriquí Panama 3478; Pico Duarte Haiti 3175; Pico de Teide analog: Pico Turquino Kuba 2005; Soufrière Guadeloupe, Mont Pelée Martinique, Cosigüina Nicaragua.`,
    ),
    L(
      `Weitere außereurop. Gipfel (Fortsetzung nächste Seite): Südamerika Aconcagua, Chimborazo; Australien Mount Cook, Mauna Kea; Polarländer Erebus.`,
    ),
  ],
};
