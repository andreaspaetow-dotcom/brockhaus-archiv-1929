import type { EncPage } from "../types";
import { L, B, F } from "./helpers";

/** Druckseite 681 · Scan 723 · Berufsunfähigkeit — Berufszählung */
export const PAGE_681: EncPage = {
  printed: 681,
  scanFile: 723,
  headerLeft: "Berufsunfähigkeit",
  headerRight: "Berufszählung",
  catchword: "Berufung",
  scanSrc: "/scans/p681.jpg",
  left: [
    L(
      `Zählung vom Jahre 1925 lagen, zeigt die Übersicht (S.&nbsp;616).`,
    ),
    F({
      src: "/layout/p681/g01.jpg",
      alt: "Voraussichtliche Entwicklung der im erwerbsfähigen Alter stehenden männlichen Bevölkerung im Deutschen Reich, Balkendiagramm nach Altersgruppen 1925–1955",
      caption:
        "Voraussichtliche Entwicklung der im erwerbsfähigen Alter stehenden männlichen Bevölkerung im Deutschen Reich (errechnet unter der Annahme steter Sterblichkeit und steter Zahl der Lebendgeborenen).",
    }),
    B(
      `Rauchberg: Die Berufs- und Gewerbezählung im Deutschen Reiche vom 14.&nbsp;Juni 1895 (1901); Hesse: Die wirtschaftl. Entwicklung des Deutschen Reiches (1913); Classen: Die soziale Berufsgliederung des deutschen Volkes nach Nahrungsquellen und Familien (1904); v.&nbsp;der Borght: Beruf, gesellschaftliche Gliederung und Betrieb im Deutschen Reiche (1910); Neuhaus: Die deutsche Volkswirtschaft und ihre Wandlungen im letzten Vierteljahrhundert (2&nbsp;Bde., 1911–13). Die berufliche und soziale Gliederung der Bevölkerung des Deutschen Reiches (Statistik des Deutschen Reiches, Bd.&nbsp;402, 1927). Regelmäßig fortgesetzte Veröffentlichung der B. von 1925 in der Ztschr.: Wirtschaft und Statistik.`,
    ),
    L(
      `<strong>Berufsunfähigkeit,</strong> die Unmöglichkeit der Berufsausübung. B. wird in der Angestelltenversicherung dann angenommen, wenn die Arbeitsfähigkeit auf weniger als die Hälfte der Arbeitsfähigkeit eines körperlich und geistig gesunden Versicherten von ähnl. Ausbildung und gleichwertigen Kenntnissen und Fähigkeiten herabgesunken ist. Die B. begründet nach erfüllter Wartezeit Anspruch auf Ruhegeld. B. im Sinne der Angestelltenversicherung gilt, im Gegensatz zur →Arbeitsunfähigkeit im Sinne der Krankenversicherung, erst dann als gegeben, wenn die Minderung voraussichtlich dauernd ist (→Invalidität, →Erwerbsunfähigkeit).`,
    ),
    L(
      `<strong>Berufsverbände,</strong> Organisationen der Angehörigen eines Berufs zur Wahrung ihrer beruflichen, wirtschaftl. und sozialen Interessen. Unter Berufsvereinigung versteht man heute unter B. zum Unterschied von →Industrieverbänden diejenige Organisationsform, die die Arbeiter eines bestimmten Berufs ohne Berücksichtigung der Branche organisiert, während der Industrieverband alle Arbeiter einer Branche ohne Rücksicht auf ihren Beruf zusammenfaßt. Die Geschichte der Berufsverbände ist eng verbunden mit der Entwicklung des →Koalitionsrechts.`,
    ),
  ],
  right: [
    L(
      `In Art.&nbsp;165 der RV. sind die Organisationen der Arbeitnehmer und Arbeitgeber als körperschaftlich-rechtl. Vertretungen ihrer Mitglieder anerkannt; als Träger der →Tarifverträge spielen sie im neuen Arbeitsrecht eine große Rolle. (→Berufsvertretung.)`,
    ),
    B(`Jahrb. der Berufsverbände (1927).`),
    L(`<strong>Berufsvereine,</strong> die →Berufsverbände.`),
    L(
      `<strong>Berufsvertretung,</strong> körperschaftliche Interessenvertretung auf beruflicher Grundlage, sowohl durch die freien →Berufsverbände zur Wahrung der beruflichen, kulturellen und wirtschaftl. Interessen ihrer Mitglieder als auch durch die auf Grund gesetzl. Bestimmungen berufenen amtl. oder halbamtl. Interessenvertretungen, die meist Kammern genannt werden, wie Anwaltskammern, Ärztekammern, Arbeitskammern, Handelskammern, Handwerkskammern, Landwirtschaftskammern. In weiterem Sinne sind hierher auch die Bezirkswirtschaftsräte und der Reichswirtschaftsrat zu rechnen. Der Gedanke der B. wurzelt historisch sowohl in der Zunftverfassung der mittelalterlichen Stadt als auch in der ständischen Staatsverfassung. Durch die Entwicklung der sozialpolit. Kampfverbände (Gewerkschaften und Arbeitgeberverbände) auf beruflicher Grundlage erhielt die B. neue Aufgaben und Ziele, die durch den Rätegedanken nach stark beeinflußt wurden und in den kollektivistischen Grundzügen des neuen Arbeitsrechts ihren rechtl. Niederschlag gefunden haben.`,
    ),
    B(`Satarin-Bornheiden: Die Berufsstände (1922).`),
    L(
      `<strong>Berufsvormundschaft,</strong> die berufliche Ausübung der Vormundschaft für uneheliche Kinder durch eine mit Recht und Erziehung vertraute Person. Im Deutschen Reiche ist nach dem Reichsjugendwohlfahrtsges. v.&nbsp;9.&nbsp;Juli 1922 das Jugendamt ohne weiteres Vormund aller unehelichen Kinder mit ihrer Geburt. Es muß für die Unterbringung und Erziehung des Kindes Sorge tragen. Die Vormundschaft ist Erziehungsleitung geworden (→Beobachtungsanstalt). Die ersten großen Erfolge hat die B., die beim Jugendamt →Amtsvormundschaft genannt wird, in der Verfechtung der Ansprüche gegen den Vater erlangt mit dem Erfolg, daß gegenwärtig ⅔ der Väter einen Teil und von ihnen wieder die Hälfte die ganze Unterstützung auf sich nehmen. Das neue Gesetz kennt außerdem die Bestellung von Vorständen gewisser Vereine und Anstalten zum Vormund, die bes. gefährdeten und verwahrlosten Kindern als Erziehungsleitung dient. In Österreich wurde die gesetzl. Regelung der B. durch die erste Teilnovelle zum Allgem. BGB. (kaiserl. VO. v.&nbsp;12.&nbsp;Okt. 1914) und durch die Ministerialverordnung v.&nbsp;24.&nbsp;Juni 1916 in die Wege geleitet. Man versteht hier unter B. die Anstaltsvormundschaft, bei der die Vorsteher bestimmter Anstalten (Waisen- und Findelhäuser, Zwangsarbeitsanstalten, Fürsorgeerziehungsanstalten) über ihre Zöglinge die Vormundschaft führen, und die Generalvormundschaft, die durch Gemeinden und Vereinigungen für Jugendschutz geschaffen werden kann. Der Präsident des Gerichtshofes kann dem Generalvormund die Vormundschaft über die unehelichen Kinder generell übertragen. Die endgültige gesetzl. Regelung wird durch das Wohlfahrtsgesetz erfolgen. Ähnliche Regelung und gleiche Entwicklung wie das deutsche Recht zeigt das schweizerische Recht.`,
    ),
    B(
      `Klümer: Der Unehelichenschutz im Deutschen Reich. Ein Beitrag zur Geschichte der Berufsvormundschaft (im Archiv für Sozialwissenschaft, Bd.&nbsp;55, Heft&nbsp;1, 1926).`,
    ),
    L(`<strong>Berufszählung,</strong> →Berufsstatistik, →Gewerbestatistik.`),
  ],
};
