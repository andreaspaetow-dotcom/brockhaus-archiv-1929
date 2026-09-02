import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 200 · Scan 232 · Bad (Kulturgesch.) */
export const PAGE_200: EncPage = {
  printed: 200,
  scanFile: 232,
  headerLeft: "Bad",
  headerRight: "Bad",
  catchword: "Selbst",
  scanSrc: "/scans/p200.jpg",
  left: [
    L(
      `täglich zu baden; einige Naturvölker (z.&nbsp;B. Eskimo, nordamerikan. Indianerstämme) kennen auch Schwitzbäder in besonderen Badehäusern.`,
    ),
    L(
      `Im Orient war das Baden eng mit dem Kultus verknüpft, indem man durch die körperl. Reinigung auch eine sittliche Reinheit andeuten wollte. Die alten Juden waren durch religiöse Vorschriften verpflichtet, zu baden, und betrachteten die Reinigungsbäder als rituelle Handlungen.`,
    ),
    L(
      `Bei den Griechen wurden schon zur Zeit Homers den ankommenden Gästen warme Bäder bereitet; auch bei ihnen findet sich das B. in Verbindung mit religiösen Handlungen (z.&nbsp;B. mit den Vorbereitungen zum Opfern usw.). Fluß- und Seebäder und heiße Quellen als Heilbäder (Thermen) waren ihnen gleichfalls bekannt. Schon in den Palästen der ägäischen Kultur finden sich im 2.&nbsp;Jahrtausend v.&nbsp;Chr. Badezimmer; im wasserarmen Griechenland der klass. Zeit (6.–4.&nbsp;Jahrh. v.&nbsp;Chr.) beschränken sich die Badeanlagen auf die als Duschen verwendeten öffentl. Laufbrunnen, daneben kommen in Privathäusern und bei Heiligtümern Sitzbadewannen vor. Beachtenswerte Waschräume mit geräumigen Becken besaßen die Gymnasien (z.&nbsp;B. Priene; I,&nbsp;1). Aus hellenistischer Zeit (3.–2.&nbsp;Jahrh. v.&nbsp;Chr.) ist eine größere Badeanlage bei Alexandria erhalten (zwei Kuppelräume mit je 15 Sitzbadewannen in Nischen).`,
    ),
    L(
      `Bei den Römern entfaltete sich das Badewesen im Lauf der Jahrhunderte ungleich mannigfaltiger und prächtiger als bei den Griechen. Aus dem einfachen, neben der Küche liegenden Waschraum der alten Republikaner (Lavatrina) wurde das mehrräumige, luxuriös ausgestattete B. des vornehmen Römers der Kaiserzeit. Bes. beliebt waren die warmen Bäder (Thermae; I,&nbsp;2, 3 Abb.); sie finden sich in Privathäusern und als öffentl. Bäder. Die gesteigerte Wasserversorgung der röm. Städte förderte den Ausbau öffentl. Bäder zu einer nie wieder erreichten Großartigkeit (Thermen der Kaiser Nero, Vespasian, Titus,`,
    ),
    N(
      "Abb. Bad: 1 Einfachstes Schema der Raumanordnung einer röm. Therme. Die Pfeile geben die Reihenfolge der Benutzung an: A Apodyterium, C Caldarium, F Frigidarium, T Tepidarium, I–III Räume zur eigentl. Reinigung, zum Schwitzen, Massageboden, Ölen, Waschen. 2 Schema der Raumanordnung einer röm. Luxustherme.",
    ),
  ],
  right: [
    L(
      `Trajan, Caracalla und Diokletian). Am besten erhalten sind die drei Anlagen in Pompeji (I,&nbsp;2), die das Anwachsen der Bäder, was Raum wie Luxus betrifft, in der Zeit von 80 v.&nbsp;Chr. bis 80 n.&nbsp;Chr. erkennen lassen. Zu einem normalen röm. B. gehören (Abb.): ein Auskleideraum (Apodyterium), an ihn schloß sich das Kaltbad (Frigidarium), das in bescheideneren Anlagen durch ein Bassin im Apodyterium ersetzt wurde. Den Übergang zur höheren Temperatur vermittelte der folgende lauwarme Raum (Tepidarium), auf den das Warmbad (Caldarium) folgte. Reichere Anlagen besitzen daneben noch einen meist runden Raum als Schwitzbad (Laconicum). Bisweilen finden sich die genannten Räume symmetrisch verdoppelt als Männer- und Frauenabteilungen (Abb.).`,
    ),
    N("Abb. Bad: Die Kaiserthermen in Trier (Rekonstruktion von Trencler)."),
    L(
      `Dazu kommen Säulenhallen und Sportplatz (Palaestra). Seit dem 1.&nbsp;Jahrh. n.&nbsp;Chr., bes. seit den Thermen des Nero, wurden durch die entwickelte Gewölbetechnik die hauptstädt. Badeanlagen zu Riesenbauten. Diese Entwicklung dauerte bis in den Ausgang der Antike. Von ihr zeugen noch die gewaltigen Trümmer der Caracallathermen (erbaut 211–216 n.&nbsp;Chr.; 26500&nbsp;qm bieten Raum für 1600`,
    ),
    N("Abb. Bad: Thermen des Caracalla in Rom, Tepidarium (Rekonstruktion von Thiersch)."),
    L(
      `Badende) und die Diokletiansthermen (erbaut 298–306 n.&nbsp;Chr.; 37500&nbsp;qm für 3000 Badende). Ähnlich wie in Rom entstanden Thermenanlagen allenthalben im röm. Reich, teils prächtiger (z.&nbsp;B. Trier, Abb., Badenweiler im Schwarzwald), teils bescheidener.`,
    ),
  ],
};
