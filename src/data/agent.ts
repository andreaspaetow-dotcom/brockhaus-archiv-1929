/** Setzer-Agent: zyklische Fraktur→Antiqua-Eingabe für Band II. */

export const AGENT = {
  name: "Setzer-Agent Band II",
  intervalMin: 2,
  pagesPerCycle: 5,
  volumePrintedEst: 877,
  scanOffset: 8,
  source: "IA dergrossebrockha02leip + Anhänge",
  documentHint: "Druckseite N fortlaufend; Quelle IA-PDF, keine PDF-Ende-Sperre",
} as const;

export type AgentCycle = {
  id: number;
  from: number;
  to: number;
  lemmas: string;
  at: string;
  ok: boolean;
};

export const SEEDED_CYCLES: AgentCycle[] = [
  { id: 60, from: 873, to: 877, lemmas: "Blaubeuren · Blaues Blut · Blausäure · Blaustrumpf · Blavatsky", at: "00:10", ok: true },
  { id: 59, from: 868, to: 872, lemmas: "Blattfüßer · Blattgold · Blattpflanzen · Blattstellung · Blau", at: "00:05", ok: true },
  { id: 58, from: 863, to: 867, lemmas: "Blasius · Blatt I/II · Blatt · Blattdürre", at: "00:00", ok: true },
  { id: 57, from: 858, to: 862, lemmas: "Blankenburg · Blankvers · Blasco Ibáñez · Blase · Blasinstrumente", at: "23:55", ok: true },
  { id: 56, from: 853, to: 857, lemmas: "Björnson · Blackburn · Blake · Blanc · Blanco", at: "23:50", ok: true },
  { id: 55, from: 848, to: 852, lemmas: "Bithynien · Bitterfeld · Bitumen · Bizet · Björnson", at: "23:45", ok: true },
  { id: 54, from: 843, to: 847, lemmas: "Tafel Bismarck II · Bismarck · Bismarckarchipel · Bison", at: "23:40", ok: true },
  { id: 53, from: 838, to: 842, lemmas: "Bischofsstab · Biserta · Bismarck · Tafel Bismarck I", at: "23:35", ok: true },
  { id: 52, from: 833, to: 837, lemmas: "Birmingham · Birne · Biron · Bisamratte · Bischof", at: "23:55", ok: true },
  { id: 51, from: 828, to: 832, lemmas: "Biophoren · Birke · Birkhuhn · Birmanen · Birmingham", at: "23:50", ok: true },
  { id: 50, from: 823, to: 827, lemmas: "Binnenwanderung · Biochemie · Biographie · Biologie", at: "23:45", ok: true },
  { id: 49, from: 818, to: 822, lemmas: "Bimsstein · Binding · Bingen · Binnenschiffahrt", at: "23:40", ok: true },
  { id: 48, from: 813, to: 817, lemmas: "Bildwirkerei · Billard · Billroth · Bimetallismus", at: "23:35", ok: true },
  { id: 47, from: 808, to: 812, lemmas: "Bildtelegraphie · Bildung · Bildwirkerei", at: "23:30", ok: true },
  { id: 46, from: 803, to: 807, lemmas: "Bildpostkarten · Bildtelegraphie · Bildnismalerei", at: "23:25", ok: true },
  { id: 45, from: 798, to: 802, lemmas: "Bildhauerkunst · Bildnismalerei · Bildnisschutz", at: "23:20", ok: true },
  { id: 44, from: 793, to: 797, lemmas: "Bilderschrift · Bilderdienst · Bildhauerkunst", at: "23:15", ok: true },
  { id: 43, from: 788, to: 792, lemmas: "Bihar · Bilanz · Bilbao · Bilderschrift", at: "23:10", ok: true },
  { id: 42, from: 783, to: 787, lemmas: "Bier · Biersteuer · Bigamie · Bihar", at: "23:05", ok: true },
  { id: 41, from: 778, to: 782, lemmas: "Biene · Bienenzucht · Bienenwolf", at: "23:00", ok: true },
  { id: 40, from: 773, to: 777, lemmas: "Bielitz · Biene · Bienenzucht", at: "22:55", ok: true },
  { id: 39, from: 768, to: 772, lemmas: "Biedermeier · Biegung · Biel · Bielefeld", at: "22:50", ok: true },
  { id: 38, from: 763, to: 767, lemmas: "Bibliothekslehre · Bibliothèque Nationale · Bichat · Bidassoa", at: "22:45", ok: true },
  { id: 37, from: 758, to: 762, lemmas: "Bibliothek · Bibliothekar · Bibliothekslehre", at: "22:40", ok: true },
  { id: 36, from: 753, to: 757, lemmas: "Biber · Biberach · Biblia pauperum · Bibliographie · Bibliothek", at: "22:35", ok: true },
  { id: 35, from: 748, to: 752, lemmas: "Biarritz · Bibel · Bibelgesellschaften · Bibelregal", at: "22:30", ok: true },
  { id: 34, from: 743, to: 747, lemmas: "Bezold · Bhagavadgita · Bhopal · Bhutan · Białystok", at: "22:25", ok: true },
  { id: 33, from: 738, to: 742, lemmas: "Beweislast · Bewußtsein · Beyer · Beza · Béziers · Bezirk", at: "22:20", ok: true },
  { id: 32, from: 733, to: 737, lemmas: "Bewässerung · Bewcastle · Bewegung · Bewegungsstudie · Beweis", at: "22:15", ok: true },
  { id: 31, from: 728, to: 732, lemmas: "Beuthen-Tarnowitz · Bevern · Bevölkerung · Bewässerung", at: "22:10", ok: true },
  { id: 30, from: 723, to: 727, lemmas: "Beutel · Beuteltiere · Beuth · Beuthen", at: "22:05", ok: true },
  { id: 29, from: 718, to: 722, lemmas: "Bett · Betteln · Bettwanze · Beugung · Beuron · Beust · Beute", at: "22:00", ok: true },
  { id: 28, from: 713, to: 717, lemmas: "Betriebsschutz · Betriebsstillegung · Betriebswirtschaftslehre · Betrug · Betschuanaland · Bett", at: "21:55", ok: true },
  { id: 27, from: 708, to: 712, lemmas: "Beth Zur · Beton · Betrieb · Betriebsingenieur · Betriebskapital · Betriebsrat", at: "21:50", ok: true },
  { id: 26, from: 703, to: 707, lemmas: "Bestuschew · Beta · Betel · Bethel · Bethlehem · Bethlen · Bethmann-Hollweg", at: "21:45", ok: true },
  { id: 25, from: 698, to: 702, lemmas: "Bessarabien · Bessel · Bessemer · Bestand · Bestechung · Besteck · Bestockung", at: "21:40", ok: true },
  { id: 24, from: 693, to: 697, lemmas: "Besetztes Gebiet · Besitz · Beskiden · Besoldung · Bespannung", at: "21:35", ok: true },
  { id: 23, from: 688, to: 692, lemmas: "Beschlagnahme · Beschleunigung · Beschluß · Beschneidung · Beschwerde · Beseler · Besenginster · Besessenheit", at: "21:30", ok: true },
  { id: 22, from: 683, to: 687, lemmas: "Berührung · Berwick · Beryll · Berzelius · Besançon · Besant · Besatzung · Beschäftigungsneurosen · Beschlag", at: "21:25", ok: true },
  { id: 21, from: 678, to: 682, lemmas: "Berufskunde · Berufsschule · Berufsstatistik · Berufsunfähigkeit · Berufsvormundschaft · Berufung", at: "21:15", ok: true },
  { id: 20, from: 673, to: 677, lemmas: "Bertolini · Berton · Bertram · Bertrand · Beruf · Berufsberatung · Berufsgenossenschaften", at: "20:20", ok: true },
  { id: 19, from: 662, to: 666, lemmas: "Bernstein · Bernsteinschnecke · Bernstorff", at: "19:40", ok: true },
  { id: 18, from: 657, to: 661, lemmas: "Berner Union · Bernhard · Bernhardi · Bernini · Bernoulli", at: "19:35", ok: true },
  { id: 17, from: 652, to: 656, lemmas: "Bern (Stadt) · Bernard · Bernau · Bernburg · Berneck · Berner Oberland", at: "19:30", ok: true },
  { id: 16, from: 647, to: 651, lemmas: "Berliner Börsen-Zeitung · Berliner Kongreß · Berliner Porzellan · Berlioz · Bermudainseln · Bern", at: "19:25", ok: true },
  { id: 15, from: 668, to: 672, lemmas: "Berlin (Magistrat · Wirtschaft · Geschichte · Kunst) · Berlinchen · Berliner Blau · Berlioz", at: "17:45", ok: true },
  { id: 14, from: 71, to: 73, lemmas: "Auge (Tafelerklärung)", at: "20:42", ok: true },
  { id: 13, from: 66, to: 70, lemmas: "Auftrieb · Aufwertung · Aufzug", at: "20:30", ok: true },
  { id: 12, from: 61, to: 65, lemmas: "Auflösung · Aufmarsch · Auftrag", at: "20:18", ok: true },
  { id: 11, from: 56, to: 60, lemmas: "Aufgebot · Aufklärung · Auflage", at: "20:08", ok: true },
  { id: 10, from: 51, to: 55, lemmas: "Auerhuhn · Auersperg · Aufbereitung", at: "19:55", ok: true },
];
