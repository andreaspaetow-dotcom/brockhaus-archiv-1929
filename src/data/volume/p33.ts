import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 33 · PDF-S. 51 · Atombau (Schalen, Wellenmechanik), Atoll */
export const PAGE_33: EncPage = {
  printed: 33,
  scanFile: 51,
  headerLeft: "Atombau — Atomgewicht",
  headerRight: "Atom",
  catchword: "Einheit",
  scanSrc: "/scans/p33.jpg",
  left: [
    L(
      `geladenen Kern und drei Elektronen besteht. — Die weitern Elemente besitzen entsprechend der Kernladungszahl, die gleich der Ordnungszahl des Elements ist, ebensoviel den Kern umkreisende Elektronen. Diese Elektronen werden in sog. Elektronenschalen um den Kern herum angeordnet; die dem Kern nächste Schale ist die K-Schale, sie ist nur von zwei Elektronen besetzt. Um diese K-Schale können sich bei höhern Elementen des periodischen Systems noch mehrere Schalen ansetzen; so ist die auf die K-Schale folgende L-Schale im vollbesetzten Zustand von 8 Elektronen erfüllt. Jede Zeile (Periode) im periodischen System schließt mit einem Element ab, in dem jedesmal eine Schale vollbesetzt ist. Diese abgeschlossene Schalenanordnung nennt man Edelgaskonfiguration, weil es stets Edelgase sind, die am Schluß einer Periode stehen.`,
    ),
    L(
      `Die außerhalb der Schalen liegenden Elektronen bezeichnet man als Leucht- oder Valenzelektronen; diese an der Peripherie des Atoms liegenden Elektronen bedingen die chemischen Eigenschaften und geben ferner Anlaß zur Emission des sichtbaren Spektrums, während die Schalenelektronen (Rumpfelektronen) Anlaß zur Emission der Röntgenstrahlen geben. Unter Umständen können die Valenzelektronen auch in das Innere des Atoms eintauchen; in diesem Fall werden die Bahnen als Tauchbahnen bezeichnet.`,
    ),
    L(
      `Der Atombau wird also auf elektrischem Wege einheitlich von innen heraus bis an die Atomperipherie hin durch die Größe der Kernladung geregelt. Auch über den Aufbau des Atomkerns hat man einige Anhaltspunkte. So zeigt der radioaktive Zerfall der Atome, daß aus dem Atomkern Alphateilchen (Heliumkerne) und neben γ-Strahlen, die ja harte Röntgenstrahlen sind, noch Elektronen in Gestalt der β-Strahlteilchen herausgeschleudert werden. Der Kern muß also Heliumkerne und Elektronen enthalten. Auch aus der Astonschen Isotopentheorie folgt, daß der Atomkern außer positiven Ladungen noch negative Elementarladungen enthält, und zwar kommen ungefähr doppelt soviel positive Elementarbestandteile wie Elektronen vor. Nach der sog. Packungshypothese ist die Packung der positiven Elementarteilchen und Elektronen so dicht, daß die Additionsregel der Massen nicht gilt, d.&nbsp;h. die Masse des Kerns ist kleiner als die Summe der Massen der ihn zusammensetzenden Ladungen.`,
    ),
    L(
      `Durch die Bohrsche Theorie war es zwar gelungen, ein Bild von dem innern Bau der Atome zu geben, dessen Erfolg vermuten ließ, daß es wenigstens in großen Zügen die physikal. Tatsachen richtig wiedergibt. Allein dieser Erfolg wurde erkauft unter völliger Nichtbeachtung der Ergebnisse der klass. Elektrodynamik; dieser Gegensatz zwischen Atomphysik und klass. Theorie mußte noch überwunden werden. In dieser Hinsicht gehen zwei Theorien parallel, die als Quantenmechanik und als Wellenmechanik bezeichnet werden. Nach der Wellen`,
    ),
  ],
  right: [
    L(
      `mechanik, die auf Arbeiten von de Broglie zurückgeht, muß jedem bewegten Materieteilchen eine Welle zugeordnet werden, die sich mit Überlichtgeschwindigkeit ausbreitet und deren Gruppengeschwindigkeit die mechan. Geschwindigkeit des Materieteilchens darstellt. Die Materie selbst erscheint so in Wellen, sog. Materiewellen, aufgefaßt, deren Energiezentren die Kerne und Elektronen sind. In der Anwendung auf gleichförmige Bewegung in geschlossenen Bahnen führt diese Vorstellung zu der Folgerung, daß nur solche Bahnen möglich seien, für die die Bahnlänge ein ganzzahliges Vielfaches der Wellenlänge und somit der Drehimpuls ein ganzzahliges Vielfaches von h/2π ist. Diese Aussage stellt nichts anderes dar als die oben besprochene Quantenregel von Bohr, die sich so auf Grund einer Wellentheorie auf rechnerischem Wege ergibt und nicht mehr als gesonderte Hypothese aufgestellt werden muß.`,
    ),
    L(
      `Eng an die Ideen de Broglies schließt die von Schrödinger aufgestellte Wellenmechanik an; hier erscheint das Elektron als eine Superposition von Eigenschwingungen ψ<sub>n</sub>. In der graphischen Darstellung wird diese Überlagerung als eine Wellengruppe (Wellenpaket) angesehen; dementsprechend ist das Elektron nicht mehr als eine einfache Punktladung, sondern als ein Energiepaket aufzufassen, das auf einen kleinen räumlichen Bereich konzentriert ist, so daß ein merkliches Auseinanderfließen des Energiepakets unterbleibt. Die Eigenschwingungen ψ<sub>n</sub> sind sog. Eigenfunktionen (Lösungen) einer wellenmechan. Differentialgleichung. Der Schrödingersche Feldskalar ψ, der sich gemäß der Differentialgleichung im sog. Konfigurationsraum wellenförmig ausbreitet, wird von Born als eine Wahrscheinlichkeit im statist. Sinne interpretiert. Man kann dann aussagen, wie groß die Wahrscheinlichkeit ist, daß sich das Elektron an einer bestimmten Stelle des Raumes befindet.`,
    ),
    L(
      `In der von Heisenberg und Dirac begründeten Quantenmechanik wird auf die Kenntnis des inneratomaren Geschehens prinzipiell verzichtet; in dieser Theorie werden lediglich Relationen zwischen beobachtbaren atomphysikal. Größen, wie Frequenz, Intensität, Polarisation der Spektrallinien, aufgestellt. Die ganze Unbestimmtheit des inneratomaren Geschehens wird mathematisch in der sog. Vertauschungsrelation (Unsicherheitsrelation) festgelegt, einer Gleichung zwischen quantenmechan., kanonisch konjugierten Größen, die das Kommutativgesetz nicht befolgen. Die Unbestimmtheit wird größenordnungsmäßig durch das elementare Wirkungsquantum gegeben.`,
    ),
    B(
      `Sommerfeld: Atombau und Spektrallinien (4.&nbsp;Aufl. 1924); Born: Probleme der Atomdynamik (1926); Handb. der Physik, Bd.&nbsp;22 und 23 (1927); Reiche: Die Quantentheorie (1921); Birtwistle: The new Quantum mechanics (Cambridge 1928).`,
    ),
    N("Abb. Atoll, schematisch."),
    L(
      `<strong>Atomgewicht</strong>, das relative Gewicht der Atome, bezogen auf eine willkürlich gewählte Einheit. Als`,
    ),
  ],
};
