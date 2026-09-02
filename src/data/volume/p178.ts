import type { EncPage } from "../types";
import { L, B, N } from "./helpers";

/** Druckseite 178 · Scan 210 · Babesia — Bablah */
export const PAGE_178: EncPage = {
  printed: 178,
  scanFile: 210,
  headerLeft: "Babe",
  headerRight: "Babesia — Bablah",
  catchword: "von",
  scanSrc: "/scans/p178.jpg",
  left: [
    L(
      `Ordinarius für Bakteriologie und Pathologie in Bukarest. Er entdeckte die nach ihm benannten Parasiten des Texasfiebers (→Babesia), der panzootischen Septikämie, die Bakterienassoziationen namentlich bei Tuberkulose, arbeitete über das Prinzip der Serumtherapie, Wutimpfung u.&nbsp;a.`,
    ),
    L(
      `<strong>Babesia</strong>, Gatt. wimperloser, einzelliger Parasiten, deren syst. Stellung noch unsicher ist. Sie kommen an oder in den Blutkörperchen von Säugetieren vor und können gefährliche Krankheiten und Tierseuchen (Babesiosen) erzeugen. B.&nbsp;(Piroplasma) bigemina ist der Erreger des amerik. Texasfiebers; B.&nbsp;(Theileria) parva des afrik. Küstenfiebers der Rinder.`,
    ),
    L(`<strong>Babette</strong>, weibl. Name, franz. Koseform für Barbara.`),
    L(
      `<strong>Babeuf</strong> [bäböf], Baboeuf, François Noël, franz. Kommunist, * St.-Quentin Nov. 1760, † Paris 28.&nbsp;Mai 1797, ursprünglich Feldmesser, bekämpfte als Jakobiner nach Robespierres Sturz die Thermidoristen und wurde deshalb ins Gefängnis geworfen, aber bald amnestiert. Unter dem Namen Gracchus trat er in seinem Blatt »Le tribun du peuple« fanatisch für Kommunismus und soziale Revolution ein. März 1796 gründete er einen geheimen Ausschuß, der einen Aufstand organisieren sollte und Tausende von Anhängern um sich sammelte. Aber die »Verschwörung der Gleichen« wurde verraten und B. nach langem Prozeß guillotiniert.`,
    ),
    B(
      `Buonarroti: Histoire de la conspiration de B. (2&nbsp;Bde., Brüssel 1828); Advielle: Histoire de Gracchus B. et du Babouvisme (2&nbsp;Bde., 1884); Fournière: Les théories socialistes de B. à Proudhon (1904); Sencier: Le Babouvisme après B. (1912); Tha Ghislenburg: Die Verschwörung der Gleichen (1928).`,
    ),
    L(
      `<strong>Babi</strong>, Babisten, mohammedan. Sekte in Persien, gegründet von Ali Mohammed in Schiras, der 1844, 23jährig, durch seine Beredsamkeit und den Erfolg seiner öffentl. Erörterungen mit den Theologen allgem. Aufmerksamkeit erregte und bald erklärte, der Bab (›Pforte‹) der Gotteserkenntnis zu sein; seine Anhänger nannten ihn Hazret-e-ala (›hohe Majestät‹) und halten ihn für eine Verkörperung der Gottheit.`,
    ),
  ],
  right: [
    N("Abb. Babeuf."),
    L(
      `In seinem neuen Offenbarungsbuch und in einer Reihe religiöser Schriften entwickelte er eine reformierte Lehre des Islam. 1850 wurde er hingerichtet. Die Bewegung lebte als Bahai-Religion weiter.`,
    ),
  ],
};
