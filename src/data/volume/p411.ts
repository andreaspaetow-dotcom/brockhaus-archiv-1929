import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 411 · Scan 443 · Bauernkammern — Bauernspiele */
export const PAGE_411: EncPage = {
  printed: 411,
  scanFile: 443,
  headerLeft: "Bauernkammern",
  headerRight: "Bauernspiele",
  catchword: "Einfluß",
  scanSrc: "/scans/p411.jpg",
  left: [
    L(
      `<strong>Bauernkammern,</strong> Bezeichnung für die auf Grund des bayer. Ges. v. 20.&nbsp;März 1920 für Bayern errichteten Körperschaften des öffentl. Rechts mit dem Rechte der Selbstverwaltung, die eine gesetzl. Berufsvertretung der Landwirtschaft bilden. Die B. gliedern sich in die Landesbauernkammer für das ganze Land (»Bayer. Landesbauernkammer«), die Kreisbauernkammern für jeden Kreis, die Bezirksbauernkammern für jeden Bezirk und jede unmittelbare Stadt. Die B. entsprechen nach ihrer Aufgabe den →Landwirtschaftskammern in Preußen.`,
    ),
    B(`Wörner: Bayer. Ges. über die B. (1925).`),
    L(
      `In Vorarlberg ist die B. eine das ganze Land umfassende berufsgenossenschaftl. Organisation der Landwirte.`,
    ),
    L(`<strong>Bauernkarpfen,</strong> →Karausche.`),
    L(`<strong>Bauernkomödien,</strong> →Bauernspiele.`),
    L(
      `<strong>Bauernkrieg,</strong> Bezeichnung der sozialen Revolution, die 1525 den größten Teil Süd- und Mitteldeutschlands erschütterte. Zahlreiche kleinere Erhebungen waren seit dem 15.&nbsp;Jahrh. vorangegangen; von ihnen sind am bekanntesten der Aufstand des Hans Böhm, des Pfeifers von Niklashausen, im Stift Würzburg (1476), der Bundschuh am Oberrhein (seit 1493) und der Arme Konrad in Württemberg (1514). Der B. war im wesentlichen eine wirtschaftl.-soziale Bewegung; die Reformation förderte und beschleunigte seinen Ausbruch.`,
    ),
    L(
      `Die Erhebung nahm im Juni 1524 ihren Ausgang von der Gfsch. Stühlingen bei Schaffhausen und verbreitete sich dann einerseits west- und nordwärts über den Schwarzwald, den Breisgau, das Elsaß, den Odenwald, Franken, Hessen und Thüringen bis nach Westfalen, anderseits über das Allgäu, Tirol und die übrigen Alpenländer bis nach Ungarn hin. Das berühmteste Programm der Bauern sind die Zwölf Artikel, die wahrscheinlich im südl. Schwarzwald unter Mitwirkung Balthasar Hubmaiers, des prot. Predigers in Waldshut, entstanden sind; in ihnen wurde freie Pfarrerwahl, Abschaffung des kleinen Zehnten und der Leibeigenschaft, Freiheit der Jagd und des Fischfangs gefordert. In andern Bauernartikeln war auch von der Umgestaltung der Reichsverfassung, der Beseitigung aller Fürsten mit Ausnahme des Kaisers die Rede. Die Erhebung konnte sich anfangs sehr schnell ausbreiten; auch Städte wie Rothenburg, Würzburg und Mühlhausen schlossen sich gezwungen oder freiwillig an, ebenso manche Ritter, wie Götz v. Berlichingen und Florian Geyer. Zahlreiche Klöster und Schlösser wurden zerstört. Von Grausamkeiten hielten sich die Bauern im ganzen fern; die Bluttat von Weinsberg, wo Graf Helfenstein mit seinen Rittern durch die Spieße gejagt wurde, war eine Ausnahme.`,
    ),
  ],
  right: [
    L(
      `Den Ritter- und Landsknechtheeren der Fürsten waren aber die undisziplinierten und schlecht geführten Bauernhaufen nicht gewachsen. Georg Truchseß v. Waldburg, der Heerführer des Schwäb. Bundes, schlug die württemb. Bauern am 12.&nbsp;Mai 1525 bei Böblingen und die fränk. Bauern am 2. und 4.&nbsp;Juni bei Königshofen und Sulzdorf, Herzog Anton von Lothringen die elsäss. Bauern am 17.&nbsp;Mai bei Scherweiler; der Erhebung in Thüringen, an deren Spitze Thomas Müntzer getreten war, machten Landgraf Philipp von Hessen, Herzog Georg von Sachsen und Herzog Heinrich von Braunschweig bei Frankenhausen am 15.&nbsp;Mai ein Ende. Mit großer Härte gingen die Sieger gegen die unterworfenen Bauern vor. Luther hatte sich anfangs bemüht, zu vermitteln (»Ermahnung zum Frieden auf die Zwölf Artikel«), sich dann aber entschieden gegen die Aufständischen erklärt (»Wider die mörderischen und räuberischen Rotten der Bauern«); jetzt suchte er vergeblich Einhalt zu tun. Die Folgen des B. waren die Aufrechterhaltung der bisherigen wirtschaftl. und sozialen Zustände und die Abkehr der großen Masse des Landvolks von der Reformation.`,
    ),
    B(
      `Quellen. Schreiber: Der deutsche B., Urkunden (3&nbsp;Bde., 1863–66); Baumann: Akten zur Gesch. des B. aus Oberschwaben (1877), aus Rothenburg (1878); Böhmer: Urkunden zur Gesch. des B. und der Wiedertäufer (1910); Warge: Der deutsche B. in zeitgenössischen Quellenzeugnissen (2&nbsp;Bde., 1914); Merz: Akten zur Gesch. des B. in Mitteldeutschland (Bd.&nbsp;1, 1923); Brandt: Der große B., zeitgenössische Berichte (1925). — Darstellungen. Wilh. Zimmermann: Allgem. Gesch. des großen B. (3&nbsp;Bde., 1841–43; neu hg. v. Blos, 1891); Jörg: Deutschland in der Revolutionsperiode 1522–26 (1851); L. Fries: Gesch. des B. in Ostfranken (1876–78; neu hg. v. Staffler und Renner 1884); Vogt: Die bayer. Politik im B. (1883), Vorgesch. des B. (1887); Hartfelder: Zur Gesch. des B. in Südwestdeutschland (1884); Baumann: Die zwölf Artikel (1896); Nabholz: Die Bauernbewegung in der Ostschweiz 1524–25 (1898); Kaser: Polit. und soz. Bewegungen im deutschen Bürgertum zu Beginn des 16.&nbsp;Jahrh. (1899); Stolze: Zur Vorgesch. des B. (1900), Der deutsche B. (1907), B. und Reformation (1926); Bonjour: Die Bauernbewegung des Jahres 1525 im Staat Bern (Bern 1923); Joachim Zimmermann: Thomas Münzer (1925); Hantsch: Der deutsche B. (1925).`,
    ),
    L(`<strong>Bauernkunst,</strong> →Volkskunst.`),
    L(
      `<strong>Bauernlegen,</strong> die Einziehung von Bauernhöfen durch die ritterschaftliche Gutsherrschaft, wurde im 16. und 17.&nbsp;Jahrh. in großem Umfang in Ostdeutschland ausgeübt; später schritt die Landesgesetzgebung, zumal in Preußen, zur Erhaltung des Bauernstandes ein und machte die Wiederverleihung heimgefallener Bauerngüter zur Pflicht. Auch in England erfolgte beim Aufkommen der Schafzucht im 15. und 16.&nbsp;Jahrh. ein selt. B., das den Grundherren Raum für Weideland geben sollte.`,
    ),
    L(`<strong>Bauernlehn,</strong> →Bauer.`),
    L(
      `<strong>Bauernleier, Bettlerleier,</strong> mittelalterliches Musikinstrument, →Drehleier.`,
    ),
    L(`<strong>Bauernmajolika,</strong> →Tonwaren.`),
    L(`<strong>Bauernmandel,</strong> Zählmaß für Eier, = 16 Stück.`),
    L(`<strong>Bauernmiete,</strong> →Ledemund.`),
    L(
      `<strong>Bauernpraktik,</strong> altes volkstüml. meteorologisches Buch, →Praktik.`,
    ),
    L(
      `<strong>Bauernregeln,</strong> die oft gereimten, sich auf Witterung und auf Landwirtschaft beziehenden Sprüche des Volks, die sich teils auf Aberglauben, teils auch auf Beobachtung gründen (→Lostage); gesammelt von L. Habl: »Die deutschen B.« (1923).`,
    ),
    L(
      `<strong>Bauernreiten, Bauernrennen,</strong> Pferdewettrennen, die von der ländlichen Bevölkerung (Reitvereine) meist im Anschluß an Reitturniere abgehalten werden, ohne besondere Satzungen (Gewichtsausgleich u.&nbsp;a.) und mit ungeübten Pferden.`,
    ),
    L(`<strong>Bauernröhrchen,</strong> Pflanzenart, →Wolfsmilch.`),
    L(`<strong>Bauernrose,</strong> die Päonie.`),
    L(
      `<strong>Bauernschaft, Deutsche,</strong> Spitzenorganisation von Bauernvereinen auf demokrat. Grundlage, →Bauernvereine.`,
    ),
    L(`<strong>Bauernschmuck,</strong> →Volkskunst.`),
    L(
      `<strong>Bauernsekretariat, Schweizerisches,</strong> die wissenschaftl. Zentralstelle des im Jahre 1897 gegründeten Schweiz. Bauernverbandes. Es untersucht die landw. Zustände und trifft Maßnahmen zur Förderung der bäuerlichen Wirtschaft. Im Interesse der schweiz. Landwirtschaft hat es auf betriebswirtschaftl. wie agrarpolit. Gebiet eine vorbildliche Tätigkeit entfaltet.`,
    ),
    L(
      `<strong>Bauernspiele, Bauernkomödien,</strong> Theaterspiele der Bauern, bes. in den Alpenländern, unter dem`,
    ),
  ],
};
