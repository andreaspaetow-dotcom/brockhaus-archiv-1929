import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 436 · Scan 468 · Baumweißling — Baumwolle */
export const PAGE_436: EncPage = {
  printed: 436,
  scanFile: 468,
  headerLeft: "Baum",
  headerRight: "Baumweißling — Baumwolle",
  catchword: "sypium",
  scanSrc: "/scans/p436.jpg",
  left: [
    L(
      `<strong>Baumweißling</strong> [zum Unterschied von den an Kräutern lebenden Verwandten], Heckenweißling, Weißdornfalter, Aporia crataegi, ein zur Fam. der Weißlinge gehöriger, etwa 6&nbsp;cm spannender, weißer, schwarz geaderter Schmetterling. Der ausschlüpfende B. entleert angesammelten roten Harn (sog. Blutregen).`,
    ),
    N(
      "Abb. Baumweißling: a Imago, b Eiablage, c Winternest der jungen Raupen, d Raupe, e Puppe.",
    ),
    L(
      `<strong>Kapokbaum, Wollbaum,</strong> Ceiba pentandra (Eriodendron anfractuosum), trop. Baum aus der Fam. der Bombacaceen. Die in den Fruchtkapseln befindliche feine, seidige Wolle heißt Kapok (im Handel auch Seidenwolle, Pflanzenbaumwolle). Sie wird gern als Watte und Polstermaterial und neuerdings als Ersatz für Baumwolle in der Chirurgie verwendet. Aus den Samen wird das grünliche Kapoköl gewonnen, das in der Seifenfabrikation und als Speiseöl benutzt wird.`,
    ),
    L(
      `<strong>Baumwollblau,</strong> mehrere Handelsmarken organ. Farbstoffe aus verschiedenen Klassen.`,
    ),
    L(
      `<strong>Baumwolle,</strong> engl. cotton, frz. coton (hieraus Kattun), die Samenhaare mehrerer Arten und Formen der Malvaceengatt. Gossypium, die als alte Kulturpflanzen in trop. und subtrop. Gebieten zwischen 41° n.&nbsp;Br. und 36° s.&nbsp;Br. gedeihen und deren Stammarten systematisch kaum noch einwandfrei zu bestimmen sind. Als urspr. Arten werden angenommen: Gossypium herbaceum (Heimat Indien, kultiviert auch in Ägypten und Kleinasien, liefert kurzstapelige B.), Gossypium hirsutum (Heimat Vorderindien und wärmeres Amerika, kultiviert bes. in Nordamerika, liefert die Hauptmasse der B.), Gossypium barbadense (Heimat Westindien, liefert die Sea-Island-Baumwolle), Gos-`,
    ),
  ],
  right: [],
};
