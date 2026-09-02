import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 508 · Scan 540 · Tafel Befruchtung II */
export const PAGE_508: EncPage = {
  printed: 508,
  scanFile: 540,
  headerLeft: "Befr",
  headerRight: "Befruchtung II",
  catchword: "Beförderungsvertrag",
  scanSrc: "/scans/p508.jpg",
  left: [
    L(`<strong>Tafel: Befruchtung II. Befruchtung bei Pflanzen.</strong>`),
    N(
      "Tafel Befruchtung II (Zuschnitt morgen; alles mehr oder weniger mikroskopisch vergrößert). 1. Kopulation gleicher Zellen benachbarter Fäden von Algengattung Spirogyra; der Inhalt der Zellen des oberen (männlichen) Fadens tritt durch Kopulationsfortsätze (f) in die Zelle des unteren und verschmilzt mit deren Inhalt zur Zygospore (e): a Teile, deren Inhalt schon übergetreten ist, b Teile, deren Inhalt gerade übertritt, c Teile, deren Inhalt sich zusammengezogen hat und sich zum Übertritt anschickt, d Teile, die kein Gegenüber gefunden hat. 2. Höhlung im Vegetationskörper von Blasentang (Fucus) mit weiblichen Geschlechtsorganen (Oogonien, g), die die Eizelle enthalten; Paraphysen (h) kleiden die Höhlung aus. 3. Höhlung mit männlichen Geschlechtsorganen (Antheridien, i), die die Samenfäden einschließen. 4. Eizelle von Blasentang, im Wasser von Spermatozoiden umschwärmt, von denen eines dann die Eizelle befruchtet. 5. Zwei weibliche Geschlechtsorgane (Archegonien) des Lebermooses Marchantia polymorpha, das eine noch geschlossen, das andere an seiner geöffneten Halzmündung mit Schleimausscheidung zur Anlockung der Spermatozoiden (k); l die Eizellen in verschiedenen Entwicklungsstadien. 6. Fruchtknoten des Windenknöterichs (Polygonum Convolvulus); die auf die Narbe gelangten Blütenstaubkörner (m) treiben Pollenschläuche (n), von denen einer schon durch den Griffel bis zur Samenanlage (o) gewachsen ist und bald Embryosack (p) und Eiapparat (q) erreichen wird. 7. Spitze eines Pollenschlauches mit dem vegetativen Kern (r) und zwei an ihm vorbei wandernden Geschlechtskernen (s). 8. Embryosack bei Eintritt der Befruchtung; von den beiden aus dem Pollenschlauch (t) entladenen Geschlechtskernen (Spermakernen, u) vereinigt sich der obere mit dem Eikern (v), der untere mit dem Endospermkern (w); x die zwei sogenannten Helferinnenzellen (Synergiden) des Embryosacks.",
    ),
  ],
  right: [],
};
