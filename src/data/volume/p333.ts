import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 333 · Scan 365 · Barmen (Straßenverzeichnis) */
export const PAGE_333: EncPage = {
  printed: 333,
  scanFile: 365,
  headerLeft: "Barm",
  headerRight: "Barmen",
  catchword: "Carmen",
  scanSrc: "/scans/p333.jpg",
  left: [
    L(
      `<strong>Verzeichnis der im Plan von Barmen enthaltenen Straßen, Plätze usw.</strong> Die Zahlen in Klammern beziehen sich auf die Ziffern im Plan. Rbk. = Nebenkarte.`,
    ),
    L(
      `Ackerstr. E3. Albertstr. D3. Albrechtstr. B3. Allee AB3, F7. Altenmarkt C2. Amalienstr. C3. Am Diek F1. — Kothen A3. — Loh B2. — Siepen A2. Amtsgericht C2. An der Mühle F1. — Rütgersburg DE4. — Wiese EF1. Anlagen des Verschönerungsvereins C3. Anstalt für verlassene Kinder C3. Antoniuskirche (kath.) C2. Arbeitsnachweis CD2. Armenhaus, Evang. B3; Reformiertes D1. Asyl f. Obdachlose F2. Auerbach A4. Augustastr. C3. Augusta-Viktoria-Heim BC3/4.`,
    ),
    L(
      `Bahnhof Barmen-Heubruch C2; =Loh A2; =Rittershausen E3; =Wichlinghausen; der Bergbahn C3; Toelleturm B4; Unterbarmen F7. Bahnhofsbrücke E3. Baptistenkapelle B3. Bärenstr. D3. Barmer Bankverein C2/3. Barmer Wald BC4 u. Rbk. Bartholomäusstr. D1/2. Baugewerkschule F7. Beckacker Schulstr. F1. Beethovenallee D3/4. Beethovenstr. CD3. Bendah Rbk. Bendahler Str. EF7/8. Bergbahn C4. Bergstr. D1. Berliner Str. DE2/3. Besenbruchstr. A3. Beule F1. Birkenstr. B1/2. Bismarckdenkmal C2 (2). Bismarckhain CD4. Bismarckstr. A2/3. Bismarckturm F6. Bleicherstr. C2. Bockmühl F4. Bockmühlstr. E3/4. Bocksledderstr. B1/2. Bredderstr. D2. Brögelter Str. AB2. Bruchstr. B3. Bruderstr. B2. Buchenstr. AB2. Burgstr. E1. Buschenburger Str. F4. Buschstr. F8.`,
    ),
    L(
      `Carnap B1. —, Unter- B1. Carnaper Str. BC1/2. Christbuschstr. F7. Christuskirche (uniert-evang.) BC2. Collenbuschstr. E2. Concordia C2 (1). Cronenberger Str. BC4.`,
    ),
    L(
      `Dahlerstr. F2/3. Dahlsberg A4. Diakonissenhaus BC3. Diekmannstr. BC3. Dieter Str. EF1. Dörner Brückenstr. B2. Dorotheenstr. AB3. Dörpfelddenkmal C4. Düppelstr. BC1.`,
    ),
    L(
      `Ehrenfriedhof C4. Ehrenstr. C3. Eichenstr. B2. Einergraben Rbk. Eintrachtstr. D1/2. Elberfelder Str. F7. Elberstr. E2. Elektrizitätswerk C2. Emilienstr. AB3. Emil-Rittershaus-Denkmal C3 (4). Emilstr. D3. Erholungstr. CD1. Eschenstr. B2. Evang. Kirche F3. — Kirchstr. A3. — Vereinshaus C3 (3).`,
    ),
    L(
      `Falkenstr. C2. Farberstr. D2. Farbmühlenstr. A2/3. Feldstr. D2. Fichtenstr. BC2. Fischerstr. C3. Fischertal C4. Fischertaler Str. Flotenstr. C1. Flurstr., Große C2. Föhrenstr. BC2. Forestastr. D4. Forsthaus C4. Frankenstr. B4. Freiheitsstr. E1/2. Freiligrathstr. D3. Freudenbergstr. DE1/2. Friedenskirche (lutherische) C2. Friedhof, alter luther. D2; Evang. A3; evang.-luth. D1, D3, E4; Jüdischer D1; kath. B1, B1/2, C1; Reformiert D1, D2. Friedhofstr. D1. Friedrichstr., Große CD3. Friesenstr. C4. Fuchsstr. A3. Futterplatz B3. Futterstr. B3/4.`,
    ),
  ],
  right: [
    L(
      `Gasanstalt, Oberbarm. E3; Unterbarmer B2. Gemarke C2. Gertrudenstr. D2. Gewerbeschulstr. CD3. Gütenstr. F2. Goebenstr. A2. Goetheplatz D3/4. Gosenburgstr. DE3/4. Grafenstr. E1/2. Große Flurstr. C2. — Friedrichstr. CD3. Grundstr. F3. Grünstr. B3. Güterbahnhof C2, F2. Gymnasium C2.`,
    ),
    L(
      `Händelstr. E1/2. Hansastr. B4. Haspeier Str. F7. Haspelder Str. B1. Hauptbahnhof Barmen BC3. Haupt-Feuerwache D2/3. Hebbeke, Die F4. Hebbelstr. D3. Heckinghausen E3. Heckinghauser Brücke E3. — Str. C/E3. Heidt CD3. Heidter Str. D2/3. Heinrichstr. E2. Heinrichsweg D4. Herberge zur Heimat BC1. Hermannstr. E1. Herz-Jesu-Kirche A3. Herzogplatz E2. Herzogstr. E2. Hesselbergstr. F7. Heubruchstr. C2. Heusnerstr. AB1. Hindenburgplatz C2. Hirschstr. F7/8. Hochstr. BC2. Höchststr. E4. Höfenstr. EF3. Hohenstaufenstr. BC4. Hohenstein B2. Hohensteiner Str. B2. Höhenweg C4. Hohenzollernstr. BC4. Humboldtstr. AB1.`,
    ),
    L(
      `Im Klingelholz CD1. Immanuelskirche (Reform.) DE2. Im Springen B3. — Weinberg A1. In der Leimbach C1. Jägerstr. E2. Jahnplatz B2. Jahrhundertplatz D4. Johann-Baptist-Kirche (kath.) E2. Johanneum B1. Johanniskirche (luther.) E3.`,
    ),
    L(
      `Kaiserbrücke A3. Kaiser-Friedrich-Höhe A4. Kaiserhalle B1. Kaiserplatz A2/3. Kaiser-Wilhelm-Höhe E4 und Rbk. Kalkstr. C2. Kampfstr. C3. Karlstr. C2. Karolinenstr. C2. Kath.-apostol. Kapelle AB3. — Kirche Wichelhaushof C1. Kiefernstr. BC2. Kielstr. DE3. Kinderheim D3. Klausen A1. Kleestr. DE3. Kleine Werthstr. D2. Klingelholzstr. CD1. Klingholzberg F2. Königsdenkmal AB3. Königstr. A2. Korschertstr. B2. Kothener Bach AB3/4. — Busch A4. Krankenhaus, Städt. A1. Krautstr. DE3. Kreuzstr. E1. Kriegerdenkmal (1871) C3. Krüdbuschstr. E2. Kruppstr. F1/2. Kunstgewerbeschule C3. Kurbad B3.`,
    ),
    L(
      `Langerfeld F3 u. Rbk. Langerfelder Str. EF3. Lehrerinnenseminar B3. Leimbuschstr. F3. Leihhaus C3. Leimbach C1. Leimbacher Str. C1/2. Lenneper Str. E3/4. Lengerstr. DE1/2. Leonhardstr. D1. Lessingstr. D3. Lichtenplatz BC4 und Rbk. Lichtenplatzer Str. D3; Obere B4; Untere C3/4. Licht- u. Luftbad AB1. Liebigstr. B1. Linienstr. E3. Lippestr. F3. Loher Brücke AB2. — Str. AB2/3. Loringstr. D4. Lottringer Str. EF1. Loewenbrücke C2/3. Lübecker Str. B1. Lustkurhaus C4. Luisenstr. C3. Lutherische Kirche D3. Lyzeum E2.`,
    ),
    N(
      "Straßenverzeichnis Barmen (Forts. rechte Spalte: M–Z, Bahnhöfe, Kirchen, Postämter, Rathaus C2, Reichsbank BC3, Stadthalle C3, Stadttheater B3, Synagoge CD2, Wupper A2/3, EF3/4). Stadtplan: Zuschnitt morgen.",
    ),
  ],
};
