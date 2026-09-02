import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 336 · Scan 368 · Elberfeld (Straßenverzeichnis) */
export const PAGE_336: EncPage = {
  printed: 336,
  scanFile: 368,
  headerLeft: "Barm",
  headerRight: "Elberfeld",
  catchword: "mit",
  scanSrc: "/scans/p336.jpg",
  left: [
    L(
      `<strong>Verzeichnis der im Plan von Elberfeld enthaltenen Straßen, Plätze, öffentlichen Gebäude usw.</strong> Rbk. = Nebenkarte.`,
    ),
    L(
      `Aderstr. B7. Alexanderbrücke D7. Alsenstr. D7. Alterspflegeheim C8. Am Arrenberg BC7. — Buschhäuschen BC5/6. — Elend AB7. — Hackland BC5. — Opphof F5. — Osterseifen D8. — Sandplatz DE8. — Schaffstall C5. — Schnapsstüber F5. Amtsgericht F7. Am Weiher B5/6. Anlagen des Verschönerungsvereins B6, C8. Arbeitsamt DE6. Armenhaus, Städtisches EF8. Arrenberger Str. C7. Aue CD7. Auf dem Dörn B5. — Nützenberg B6. — der Bredt F6. — Königshöhe AB8. Aufm Scheidt A5. Augustastr. DE8.`,
    ),
    L(
      `Bachstr. E6. Bahnhof Boltenberg A8; Elberfeld-Mirke E5; =Ottenbruch CD5; =Steinbeck CD7; =Varresbeck A5/6; Zoologischer Garten A7. Bahnhofstr. DE7. Bahnstr. D7. Bandstr. D5/6. Barmer Str. EF7. Baustr. E6. Bembergstr. E7. Bergisches Elektrizitätswerk B7. Bergstr. D6. Berliner Str. EF7. Birkenstr. CD8. Bismarckstr. C6/7. Blumenstr. D7. Böcklin-Treppe C5. Botanischer Garten F7. Bräukerwerther Platz E7. Breite Str. CD7. Bremer Str. DE5. Briller Höhe C6. — Straße CD5/7. Brüderstr. D6. Brunnenstr. D6.`,
    ),
    L(
      `Cäcilienstr. E8. Carnapsplatz E5. Carnapstr. DE6. Charlottenstr. D6. Cronenberger Str. D8.`,
    ),
    L(
      `Dalsterweg B8. Demeerthstr. E6. Distelbecker Str. DE7. Döppersberg E7. Dorpwegstr. BC5. Dorrenberg, Oberer D5; Unterer D5. Düppeler Str. E5. Dürerstr. E8. Düsseldorfer Str. A5/6.`,
    ),
    L(
      `Ebbofstr. A7. Eichenstr. E7. Eisenbahndirektion DE7. Elisenhöhe F6. Elsafer Str. EF6. Engelnbergstr. EF6. Erbschloe-Stift E5. Erlenstr. E7. Eschenbecker Str. E5. Eskesberg AB5. Evang. Vereinshaus D6.`,
    ),
    L(
      `Falkstr. F6. Falkenberg BC5. Felsenstr. D7. Frankenplatz F6. Frankfurter Str. E5. Franzensstr. D6. Frauenheim BC7. Friedhof, Jüdischer EF6, F5; kath. D5; luth. D5; niederl.-reform. C6; Reformierter A5, D5. Friedrichsberg C8. Friedrichsplatz DE6. Friedrichstr. E6; Neue E5/6. Fuhrpark, Stadt C7. Fuhrstr., Neue DE7.`,
    ),
    L(
      `Gambrinusstr. DE7. Gartenstr. F7. Gasanstalt, Städt. A7. Gefängnis F7. Gelberstr. D5/6. Gerstenstr. DE7. Gesundheitsstr. CD7. Goebenplatz C6. Goebenstr. C6. Goetheplatz C8. Griffenberg D7/8. Grünewalder Berg CD6. Gustavstr. C6. Gymnasium D7.`,
    ),
  ],
  right: [
    L(
      `Hagenauer Str. E5/6. Haidestr. D7/8. Hainstr. D5. Hansastr. E5. Hardtanlage EF6. Hardtstr. EF6/7. Haspeier Brücke F7. Havenstein Rbk. Hauptbahnhof E7. Hauptfeuerwache E6. Hermannstr. D6. Herthastr. A7. Herz-Jesu-Kirche D6. Herzogstr. D6. Hindenburghöhe B7. Hindenburgstr. AB7. Höchstenstr. D5/6. Hofaue E7. Hofkamp E6. Hohenzollernstr. CD5. Höhere Handelsschule E7. Holsteiner Str. E5/6. Hombüheler Platz und Straße D6. Hubertusallee A7.`,
    ),
    L(
      `Im Osterseifen D8. In den Hülsen A8. — Scharren C5. — der Dalster B8. — Hoffnung B8. — Kiste D5. — Külzbeck CD5. — Mirke E5. — Rott C5. — Offenbeck BC8. — Varresbeck AB6. Jägerstr. A7.`,
    ),
    L(
      `Kaiser-Friedrich-Denkmal DE6. Kaiser-Wilhelm-Allee A7. Karlstr. DE6. Kastanienstr. E7. Katernberger Str. BC5/6. Katholische Kirche B7. Katholisches Gesellenhaus D6. Kaubachstr. CD5. Kellerstr. E6. Kerstenplatz E6. Kieler Str. E5/6. Kiesberg B7. Kieselstr. E7. Kinderhort E6. Kipdorf E6/7. Kirchstr. DE7. Kleeblatt D7/8. Klufter Höhe E7. Kölner Str. D7. Königshöher Weg B7/8. Königsplatz D6. Königstr. A/D6/7. Krankenhaus Bethesda D6; Städt. C7. Kronprinzstr. E7. Krummacher Str. A5. Kruppstr. CD8. Küttenbahner Str. CD7/8. Kunst- und Gewerbeschule D6. Kurfürstenstr. D7/8.`,
    ),
    L(
      `Lagerstr. D7. Landgericht F7. Lange Str. D7. Larchenstr. D8. Laurastr. C6. Laurentiuskirche D6. Leihhaus, Städt. D6/7. Lenbach-Treppe C5. Lübecker Str. E5. Lucasstr. E6. Ludwigstr. DE6. Luft- und Sonnenbad C5. Luisenstr. D6. Lutherische Kirchen C7, D7, E6. Lutherisches Armenhaus E6. — Gemeindehaus F5. — Rettungshaus DE8. Lyzeum Ost E7.`,
    ),
    L(
      `Marienheim E7. Marienkirche E6. Marienstr. D6. Marktplatz D7. Maschinenbauschule, staatl. EF7. Mäuerchen D7. Menzelstr. C5. Mirke Rbk. Mirker Str. DE5. Moltkestr. C6. Moritzstr. C7. Mozartstr. C6. Museum DE6.`,
    ),
    L(
      `Neue Fuhrstr. DE7. — Gerstenstr. E7. Neuenreich E6. Neumarkt E6. Nevianstift und -straße C8. Niederl.-reform. Kirche E6. Nordstr. E6; Neue E5/6. Nüller Str. CD5. Nützenberg BC6. Nützenberger Str. BC6/7.`,
    ),
    L(
      `Oberrealschule DE5, D7. Obersteinenfelder Str. F5. Oberstr. E6. Ohligsmühle D7. Opphoffer Str. E5/6. Ostersiepen F6. Oststr. DE7. Ottenbrucher Str. CD6. Otto-Hausmann-Ring AB5/6.`,
    ),
    N(
      "Straßenverzeichnis Elberfeld (Forts.: Parade str. bis Zoologischer Garten A8; Hauptbahnhof E7, Rathaus DE6, Reichsbank D7, Stadthalle D7, Stadttheater E7, Synagoge D6, Wupper A/F7). Stadtplan: Zuschnitt morgen.",
    ),
  ],
};
