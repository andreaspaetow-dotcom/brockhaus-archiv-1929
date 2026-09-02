import type { EncPage } from "../types";
import { N } from "./helpers";

/** Druckseite 793 · Scan 836 · Tafel Bilderschrift II */
export const PAGE_793: EncPage = {
  printed: 793,
  scanFile: 836,
  headerLeft: "Bilderschrift",
  headerRight: "Bild",
  catchword: "Graphische",
  scanSrc: "/scans/p793.jpg",
  left: [
    N(
      `Tafel Bilderschrift II. 1. Medizin der Odschibwe-Indianer. Der dazu gehörige Text lautet in Übersetzung: a Was ich dir geb, ist feurig. (Gefäß mit Flammen; es enthält einen zauberkräftigen Absud.) b Der Baum wächst. (Priesterwigwam, an dessen Ecken Bäume wachsen.) c Ich bedecke die Erde mit meiner Länge. (Schlangen.) d Der Bär ist in meinem (= des Sprechenden) Inneren. (Er besitzt die Kraft des Bären-Manito = Bärengeistes.) e Er hat Manito in seinem Munde. (Erteilt Kranke, indem er böse Geister aus ihrem Körper heraussaugt.) f Der Habicht (von dem man die »Medizin« erlangt). g Ich, der ich rede. (Die aus dem Munde des Kopfes kommenden Linien bedeuten »sprechen«.) h Ich bin im Begriff, zu gehen. (Der Bärengeist spricht.) i Ich krieche fort. (Otter-Muschel, Emblem der Priester.) k Ruhepause. l Ich wünsche fortgehen zu können. (Der Sprecher redet den Manito an, den er in Händen hält.) m Ich werde aufgefordert, dahin zu gehen. (Heilige Hütte mit Geistern darinnen.) n Ich gehe. (Fußspuren, die nach einem Wigwam führen.) o Ruhepause.`,
    ),
  ],
  right: [
    N(
      `2. Brief des Cheyenne-Indianers »Schildkröte, seinem Weibe folgend« an seinen Sohn »Kleiner Mann«, der bedeutet: »Besuche mich (den Wunsch des Vaters bezeichnet die aus seinem Munde ausgehende Linie, die erwartete Handlung des Sohnes die auf den Vater zustrebende kleine Gestalt); ich habe dir 53 Dollar Reisegeld geschickt (die kleinen Kreise)«. Die Namen der Personen sind durch die mit ihren Köpfen verbundenen Bilder dargestellt. Der Brief wurde mit der Post geschickt und sofort verstanden.`,
    ),
    N(
      `3. Liebesbrief eines Jukagirenmädchens auf Birkenrinde. ab ist ein Haus, darin das Mädchen c. In einem andern Hause d e (in der Ferne, daher ist der Rahmen nicht ausgezogen) weilen der Geliebte (f), Russe g und seine Frau h (durch den breiten Rock als Russin gekennzeichnet), die ihren Mann liebt (i) und seine Verbindung mit der Jukagirin (k, h durchschneidet m). Das Ehepaar wird Kinder haben (n, o). Trotzdem weilen die Gedanken des Mädchens beim Geliebten (p), obgleich es einen Jukagiren (q) gibt, der sie liebt (r).`,
    ),
  ],
};
