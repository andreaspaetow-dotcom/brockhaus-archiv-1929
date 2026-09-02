import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 216 · Scan 248 · Bagga — Bagger */
export const PAGE_216: EncPage = {
  printed: 216,
  scanFile: 248,
  headerLeft: "Bagg",
  headerRight: "Bagga — Bagger",
  catchword: "festen",
  scanSrc: "/scans/p216.jpg",
  left: [
    L(`<strong>Bagga,</strong> ein Erwachs.`),
    L(
      `<strong>Bagger</strong> (hierzu Tafel), Maschinen zum Ausheben und Fortschaffen von Erdmassen in größeren Mengen. Nach Art der Verwendung unterscheidet man Trocken- und Naßbagger, nach Art der Arbeitsweise B. mit stetigem Betrieb und solche mit absetzendem Betrieb. Praktisch werden sie nach den gebräuchlich gewordenen Formen eingeteilt in: Eimerkettenbagger, Schrämbagger, Saugbagger — Löffelbagger, Greiferbagger, Kabelbagger; jene mit stetigem, diese mit absetzendem Betrieb arbeitend.`,
    ),
    L(
      `<strong>Eimerkettenbagger</strong> (Tafel&nbsp;I, Abb.&nbsp;1 u.&nbsp;2). Das charakteristische Merkmal ist die Eimerkette, d.&nbsp;h. eine endlose, mit Schürfeimern besetzte Kette, die auf einer Trägerkonstruktion, der sog. Eimerleiter, läuft und mit dieser durch ein Windwerk gehoben oder gesenkt werden kann. Wird die Eimerleiter schräg nach oben gestellt, so arbeitet der B. als Hochbagger, im andern Falle als Tiefbagger. Der Antrieb der Eimerkette erfolgt von der oberen Umführung, dem Oberturas, aus; entsprechend bezeichnet man die untere Umführung als Unterturas. Die Eimerkette ist entweder straff geführt oder hängt an der unteren baggernden Seite lose durch. Durchhängende Ketten sind nur bei verhältnismäßig losem Boden verwendbar, wo das Gewicht der Eimerkette allein genügt, um die Erdmassen anzugreifen. Bei größerer Tiefe und festerem Boden (z.&nbsp;B. Ton) geht man zur geführten Kette über. Die Eimerleiter, gewöhnlich gerade, läuft oft in einen Knickfortsatz aus oder ist in sich gelenkig geknickt, so daß z.&nbsp;B. mit ein und derselben Maschine verschiedene Profile herausgearbeitet werden können. Das Gewicht von Eimerleiter und -kette wird durch ein bewegliches Gegengewicht an der Rückseite des Baggergehäuses ausgeglichen.`,
    ),
    L(
      `Der <strong>Schrämbagger</strong> (I,&nbsp;3) ist wie ein Eimerkettenbagger gebaut, nur tritt an die Stelle der Eimerkette eine endlose Kette mit Kratzeisen, die sog. Schrämkette. Die Kratzeisen schaben von oben nach unten das Material ab und liefern so glatte, saubere Wände, die keiner Nacharbeit bedürfen. Diese Bauart eignet sich bes. für den Abbau hoch anstehender Wände, wie sie im Braunkohlenbergbau oft vorkommen, und bei hartem oder zähem Boden.`,
    ),
    L(
      `Der <strong>Löffelbagger</strong> (I,&nbsp;4) besteht aus einem schwenkbaren Gehäuse mit einem kräftigen Ausleger, auf dem ein Stiel mit einem daran befestigten Grabgefäß, dem Löffel, ruht. Der Löffel wird mit seiner scharfen Kante auf den Boden des abzugrabenden Materials angesetzt und durch eine Winde emporgezogen. Dabei graben die Zähne oder die scharfe Schneide unter dem Druck des Auslegers einen Streifen des anstehenden Materials ab. Ist der Kübel gefüllt, so wird das Gehäuse bis zur Abgabestelle geschwenkt und der Kübel durch eine Bodenklappe entleert.`,
    ),
  ],
  right: [
    L(
      `Aus der Verwendung nur eines einzigen grabenden Organs ergibt sich naturgemäß, daß auf diese eine Schaufel eine außerordentlich hohe Grabkraft konzentriert werden kann, ein Umstand, der es ermöglicht, mit dem Löffelbagger auch in den schwersten Bodenarten noch zu arbeiten. Außerdem zeichnet sich diese Bauart, vor allem in Verbindung mit einem Raupenbandfahrwerk, durch große Beweglichkeit und Anpassungsfähigkeit ans Gelände aus. Der Löffelbagger eignet sich bes. für Einschnittarbeiten.`,
    ),
    N("Abb. Arbeitsweise eines Löffelbaggers: a Abgraben, b Entladen."),
    L(
      `Der <strong>Greiferbagger</strong> (I,&nbsp;5) arbeitet im Prinzip wie ein Drehkran; das Gut wird von einem →Greifer gefaßt, gehoben und nach einer Schwenkung des Baggergehäuses an der dafür vorgesehenen Stelle abgegeben. Die Greifer sind je nach den Bodenarten verschieden ausgebildet. Der Greiferbagger wird benutzt zum Ausheben von Baugruben, zum Baggern von festgelagertem Flußsand und Schlamm, zum Verladen von Sand, Kies, Steinschlag aus Schiffen.`,
    ),
    L(
      `Die <strong>Kabelbagger</strong> (II,&nbsp;1) sind dadurch gekennzeichnet, daß ein Schürfkübel, der an einem Tragseil hängt, von einem Zugseil über den Boden des abzubaggernden Geländes gezogen wird. Das Tragseil ist mit einer gewissen Neigung über das Gelände gespannt und kann durch einen Flaschenzug am Maschinenturm nachgelassen oder angezogen werden. Der Arbeitsvorgang spielt sich folgendermaßen ab: Der Kübel wird bei leicht durchhängendem Tragseil über den Boden gezogen, bis er sich gefüllt hat. Hierauf wird das Tragseil angespannt, so daß er jetzt zur Entladestelle frei in der Luft schwebt. Ein Anschlag am Tragseil über der Entladestelle kippt den Kübel um 90° nach unten, so daß das Fördergut herausfällt. Der Kübel fährt dann unter seiner eigenen Schwere zur Ausgangsstellung zurück, und der Vorgang beginnt von neuem. Die Kabelbagger zeichnen sich durch leichte Aufstellbarkeit, geringe Anlage- und Betriebskosten bei großer Leistungsfähigkeit aus und werden u.&nbsp;a. zum Abräumen des Deckgebirges von Braunkohlenfeldern benutzt.`,
    ),
    N(
      "Abb. Arbeitsweise eines Kabelbaggers: a Tragseil, b Zugseil, c Schürfkübel, d Seillage, e Flaschenzug, f Tragseil, gespannt.",
    ),
    L(
      `Eine wegen ihrer konstruktiven Kühnheit bemerkenswerte Bauart ist der von der Firma Adolf Bleichert, Leipzig, für die Grube »Vereinigte Ville«, Rheinland, ausgeführte <strong>Brückenkabelbagger</strong> (II,&nbsp;2). Der Unterschied gegenüber dem gewöhnlichen Kabelbagger besteht darin, daß hier die Seilspannung nicht von zwei Spanntürmen, sondern von einem`,
    ),
  ],
};
