import type { Block, EncPage, Figure } from "./types";

export type PageFigure = {
  col: "left" | "right";
  figure: Figure;
};

/** Freigestellte Spaltenbilder aus dem Gitter (Caption-Anker). */
export const PAGE_FIGURES: Record<number, PageFigure[]> = {
  1: [
    { col: "left", figure: { src: "/layout/p01/g01.png", alt: "Lageplan von Asunción.", caption: "Lageplan von Asunción." } },
    { col: "left", figure: { src: "/layout/p01/g02.png", alt: "Asunción: Calle Colón.", caption: "Asunción: Calle Colón." } },
  ],
  2: [
    { col: "left", figure: { src: "/layout/p02/g01.png", alt: "Asurnasirpal II.: Assyr. Wandrelief (London, Brit. Museum).", caption: "Asurnasirpal II.: Assyr. Wandrelief (London, Brit. Museum).", float: "right" } },
    { col: "left", figure: { src: "/layout/p02/g02.png", alt: "Assuan.", caption: "Assuan." } },
    { col: "right", figure: { src: "/layout/p02/g03.png", alt: "Asymmetrie: Blatt der Flatterrüster Ulmus effusa. (½ nat. Gr.)", caption: "Asymmetrie: Blatt der Flatterrüster Ulmus effusa. (½ nat. Gr.)", float: "right" } },
  ],
  3: [
    { col: "left", figure: { src: "/layout/p03/g01.png", alt: "Asymmetrisches Kohlenstoffatom, optisch rechtsdrehend.", caption: "Asymmetrisches Kohlenstoffatom, optisch rechtsdrehend.", float: "right" } },
    { col: "left", figure: { src: "/layout/p03/g02.png", alt: "Asymmetrisches Kohlenstoffatom, optisch linksdrehend.", caption: "Asymmetrisches Kohlenstoffatom, optisch linksdrehend.", float: "right" } },
    { col: "left", figure: { src: "/layout/p03/g03.png", alt: "Asymptote der Hyperbel.", caption: "Asymptote der Hyperbel.", float: "right" } },
  ],
  5: [
    { col: "left", figure: { src: "/layout/p05/g-atem.jpg", alt: "Atemgymnastik, sechs Übungen.", caption: "", span: "page" } },
    { col: "right", figure: { src: "/layout/p05/g01.png", alt: "Atemwurzeln um den Stamm von Sonneratia acida.", caption: "", float: "right" } },
  ],
  8: [
    { col: "right", figure: { src: "/layout/p08/g01.png", alt: "Abb. Athen: Akropolis.", caption: "" } },
    { col: "right", figure: { src: "/layout/p08/g02.png", alt: "Abb. Akropolis von Athen: Parthenon von Nordwesten.", caption: "" } },
    { col: "right", figure: { src: "/layout/p08/g03.jpg", alt: "Abb. Athen: Theseion von Westnordwesten.", caption: "" } },
  ],
  10: [
    { col: "right", figure: { src: "/layout/p10/g01.jpg", alt: "Abb. Athena: Marmorstatue und Varvakeionstatuette.", caption: "" } },
  ],
  19: [
    { col: "right", figure: { src: "/layout/p19/g01.png", alt: "roeltenmufitavparot.", caption: "roeltenmufitavparot." } },
  ],
  21: [
    { col: "right", figure: { src: "/layout/p21/g01.png", alt: "Abbildung, Druckseite 21", caption: "" } },
    { col: "right", figure: { src: "/layout/p21/g02.png", alt: "Abbildung, Druckseite 21", caption: "" } },
  ],
  22: [
    { col: "left", figure: { src: "/layout/p22/g01.png", alt: "Sttfjoi: Stofter Smiron.", caption: "Sttfjoi: Stofter Smiron." } },
  ],
  27: [
    { col: "left", figure: { src: "/layout/p27/g01.png", alt: "Abbildung, Druckseite 27", caption: "", float: "right" } },
  ],
  31: [
    { col: "right", figure: { src: "/layout/p31/g01.png", alt: "Abbildung, Druckseite 31", caption: "" } },
    { col: "right", figure: { src: "/layout/p31/g02.png", alt: "•2 Settotta«.", caption: "•2 Settotta«." } },
    { col: "left", figure: { src: "/layout/p31/g03.png", alt: "Horn 3eugtempet", caption: "Horn 3eugtempet", float: "right" } },
    { col: "right", figure: { src: "/layout/p31/g04.png", alt: "«Rat. ©r. 3facf> bergr. 3 SeibenatlaS (rechte Stofffeite).", caption: "«Rat. ©r. 3facf> bergr. 3 SeibenatlaS (rechte Stofffeite)." } },
  ],
  35: [
    { col: "left", figure: { src: "/layout/p35/g01.png", alt: "Sie StfrmofBfyäre gtiebert fid) in fofgenbe Bier", caption: "Sie StfrmofBfyäre gtiebert fid) in fofgenbe Bier" } },
  ],
  37: [
    { col: "left", figure: { src: "/layout/p37/g01.png", alt: "Luftrückstand ca. V/s Liter", caption: "Luftrückstand ca. V/s Liter" } },
  ],
  38: [
    { col: "left", figure: { src: "/layout/p38/g01.png", alt: "a: bei den Versuchen gefundener niedrigster, b: höchster Wert für die Lungenventilation.", caption: "a: bei den Versuchen gefundener niedrigster, b: höchster Wert für die Lungenventilation." } },
  ],
  39: [
    { col: "right", figure: { src: "/layout/p39/g01.png", alt: "9(tmung§aBBarate: 8ungen=", caption: "9(tmung§aBBarate: 8ungen=", float: "right" } },
  ],
  40: [
    { col: "left", figure: { src: "/layout/p40/g01.png", alt: "ijagcplan beS fltna.", caption: "ijagcplan beS fltna." } },
  ],
  43: [
    { col: "left", figure: { src: "/layout/p43/g01.png", alt: "Abbildung, Druckseite 43", caption: "", float: "right" } },
  ],
  44: [
    { col: "left", figure: { src: "/layout/p44/g01.png", alt: "Sltorn» Stjnxbot 13 Ac", caption: "Sltorn» Stjnxbot 13 Ac" } },
    { col: "right", figure: { src: "/layout/p44/g02.png", alt: "Cil)t*m. 20,2 Sltom= 144,27 Sbmbol", caption: "Cil)t*m. 20,2 Sltom= 144,27 Sbmbol" } },
  ],
  46: [
    { col: "right", figure: { src: "/layout/p46/g01.png", alt: "c grurftt.", caption: "c grurftt.", float: "right" } },
  ],
  48: [
    { col: "right", figure: { src: "/layout/p48/g01.png", alt: "fdjnitt, lc Somc.", caption: "fdjnitt, lc Somc.", float: "right" } },
    { col: "left", figure: { src: "/layout/p48/g02.png", alt: "Attalea: .&abituä.", caption: "Attalea: .&abituä.", float: "right" } },
  ],
  51: [
    { col: "left", figure: { src: "/layout/p51/g01.png", alt: "Slttifa", caption: "Slttifa", float: "right" } },
  ],
  54: [
    { col: "right", figure: { src: "/layout/p54/g01.png", alt: "patent Siriuä).", caption: "patent Siriuä).", float: "right" } },
  ],
  55: [
    { col: "right", figure: { src: "/layout/p55/g01.png", alt: "Abbildung, Druckseite 55", caption: "", float: "right" } },
  ],
  57: [
    { col: "left", figure: { src: "/layout/p57/g01.png", alt: "2[u* id) nur (in Sungsling mit [of = ti=grm £iiar.", caption: "2[u* id) nur (in Sungsling mit [of = ti=grm £iiar." } },
    { col: "left", figure: { src: "/layout/p57/g02.png", alt: "Slucftonb.", caption: "Slucftonb." } },
  ],
  59: [
    { col: "right", figure: { src: "/layout/p59/g01.png", alt: "Abbildung, Druckseite 59", caption: "", float: "right" } },
  ],
  61: [
    { col: "left", figure: { src: "/layout/p61/g01.png", alt: "Süfer). erfdjienen", caption: "Süfer). erfdjienen" } },
    { col: "right", figure: { src: "/layout/p61/g02.png", alt: "Abbildung, Druckseite 61", caption: "", float: "right" } },
  ],
  62: [
    { col: "right", figure: { src: "/layout/p62/g01.png", alt: "Abbildung, Druckseite 62", caption: "", float: "right" } },
  ],
  68: [
    { col: "right", figure: { src: "/layout/p68/g01.png", alt: "Abbildung, Druckseite 68", caption: "", float: "right" } },
  ],
  71: [
    { col: "right", figure: { src: "/layout/p71/g01.png", alt: "in bie iünie.", caption: "in bie iünie." } },
  ],
  72: [
    { col: "right", figure: { src: "/layout/p72/g01.png", alt: "Stufreiben.", caption: "Stufreiben.", float: "right" } },
  ],
  73: [
    { col: "right", figure: { src: "/layout/p73/g01.png", alt: "Wuffcfttog: 1 9luffd)(ag beg frona. gelb* ber Seit griebridjs b. ©r., 4 Scanbenb.", caption: "Wuffcfttog: 1 9luffd)(ag beg frona. gelb* ber Seit griebridjs b. ©r., 4 Scanbenb.", float: "right" } },
  ],
  74: [
    { col: "right", figure: { src: "/layout/p74/g01.png", alt: "3 3id öevfcfjiDtnbeit [äffen.", caption: "3 3id öevfcfjiDtnbeit [äffen.", float: "right" } },
  ],
  75: [
    { col: "right", figure: { src: "/layout/p75/g01.png", alt: "Sluftretöfdjerc.", caption: "Sluftretöfdjerc.", float: "right" } },
  ],
  76: [
    { col: "left", figure: { src: "/layout/p76/g01.png", alt: "Abbildung, Druckseite 76", caption: "", float: "right" } },
  ],
  78: [
    { col: "right", figure: { src: "/layout/p78/g01.png", alt: "in in", caption: "in in", float: "right" } },
    { col: "left", figure: { src: "/layout/p78/g02.png", alt: "100 mort 8,00", caption: "100 mort 8,00" } },
  ],
  80: [
    { col: "left", figure: { src: "/layout/p80/g01.png", alt: "Abbildung, Druckseite 80", caption: "", float: "right" } },
    { col: "right", figure: { src: "/layout/p80/g02.png", alt: "nofteroufjuge«.", caption: "nofteroufjuge«.", float: "right" } },
    { col: "left", figure: { src: "/layout/p80/g03.png", alt: "5 SJa6inenbrucffnopftaften.", caption: "5 SJa6inenbrucffnopftaften.", float: "right" } },
  ],
  85: [
    { col: "right", figure: { src: "/layout/p85/g01.png", alt: "Abbildung, Druckseite 85", caption: "", float: "right" } },
  ],
  86: [
    { col: "left", figure: { src: "/layout/p86/g01.png", alt: "ilugenbiagnofe: Schema ber 93eäicf)imgen", caption: "ilugenbiagnofe: Schema ber 93eäicf)imgen", float: "right" } },
    { col: "right", figure: { src: "/layout/p86/g02.png", alt: "©r.). (nat. TOouerfui)ä : ?I\"fienfaItcT SSorberflügelu 2lugenfledeu. 3tbcrWurselll", caption: "©r.). (nat. TOouerfui)ä : ?I\"fienfaItcT SSorberflügelu 2lugenfledeu. 3tbcrWurselll", float: "right" } },
  ],
  88: [
    { col: "right", figure: { src: "/layout/p88/g01.png", alt: "Slugenpunft.", caption: "Slugenpunft.", float: "right" } },
  ],
  89: [
    { col: "left", figure: { src: "/layout/p89/g01.png", alt: "Spiegel mit äentroter SDunf)&oI)rung Bei S, Z", caption: "Spiegel mit äentroter SDunf)&oI)rung Bei S, Z" } },
  ],
  90: [
    { col: "left", figure: { src: "/layout/p90/g01.png", alt: "(21uS: £tanbb. ber gefamten Zfjerauie, 5. 58b., 1927.)", caption: "(21uS: £tanbb. ber gefamten Zfjerauie, 5. 58b., 1927.)" } },
    { col: "left", figure: { src: "/layout/p90/g02.png", alt: "Abbildung, Druckseite 90", caption: "", float: "right" } },
  ],
  91: [
    { col: "right", figure: { src: "/layout/p91/g01.png", alt: "Abbildung, Druckseite 91", caption: "", float: "right" } },
  ],
  92: [
    { col: "right", figure: { src: "/layout/p92/g01.png", alt: "Abbildung, Druckseite 92", caption: "", float: "right" } },
    { col: "left", figure: { src: "/layout/p92/g02.png", alt: "im Sopran.", caption: "im Sopran." } },
  ],
  95: [
    { col: "left", figure: { src: "/layout/p95/g01.png", alt: "Safjrl). Slugsturg: Safcbertor.", caption: "Safjrl). Slugsturg: Safcbertor." } },
  ],
  98: [
    { col: "left", figure: { src: "/layout/p98/g01.png", alt: "gum Sönig oon 9tugu[t ber Starfe.", caption: "gum Sönig oon 9tugu[t ber Starfe.", float: "right" } },
  ],
  99: [
    { col: "left", figure: { src: "/layout/p99/g01.png", alt: "A. währen; 1574 aber", caption: "A. währen; 1574 aber", float: "right" } },
  ],
  100: [
    { col: "left", figure: { src: "/layout/p100/g01.png", alt: "(©emälbe Bon poetyorft.)", caption: "(©emälbe Bon poetyorft.)", float: "right" } },
  ],
  102: [
    { col: "right", figure: { src: "/layout/p102/g01.png", alt: "Abbildung, Druckseite 102", caption: "", float: "right" } },
  ],
  105: [
    { col: "left", figure: { src: "/layout/p105/g01.png", alt: "Abbildung, Druckseite 105", caption: "", float: "right" } },
    { col: "left", figure: { src: "/layout/p105/g02.png", alt: "380—425 m ü. 3Jt., an Stillos: 2tulo*fi>ieteriii.", caption: "380—425 m ü. 3Jt., an Stillos: 2tulo*fi>ieteriii.", float: "right" } },
  ],
  106: [
    { col: "left", figure: { src: "/layout/p106/g01.png", alt: "Abbildung, Druckseite 106", caption: "", float: "right" } },
  ],
  108: [
    { col: "right", figure: { src: "/layout/p108/g01.png", alt: "Söiefenfdiaum* o eiootage, d SRaupe, e Sßupöe.", caption: "Söiefenfdiaum* o eiootage, d SRaupe, e Sßupöe.", float: "right" } },
  ],
  110: [
    { col: "left", figure: { src: "/layout/p110/g01.png", alt: "SBeftünmung bei 2lu0bet)nungäfoeffiäicnien.", caption: "SBeftünmung bei 2lu0bet)nungäfoeffiäicnien." } },
  ],
  112: [
    { col: "right", figure: { src: "/layout/p112/g01.png", alt: "Abbildung, Druckseite 112", caption: "", float: "right" } },
  ],
  115: [
    { col: "left", figure: { src: "/layout/p115/g01.png", alt: "g-adrifonten $um auslänbifctien SBerbraudjer.", caption: "g-adrifonten $um auslänbifctien SBerbraudjer." } },
  ],
  122: [
    { col: "right", figure: { src: "/layout/p122/g01.png", alt: "Üluäläufer (,a) beim teiedjenben Singcr-", caption: "Üluäläufer (,a) beim teiedjenben Singcr-", float: "right" } },
    { col: "right", figure: { src: "/layout/p122/g02.png", alt: "' Stützen", caption: "' Stützen" } },
  ],
  125: [
    { col: "right", figure: { src: "/layout/p125/g01.png", alt: "siusfaat. 2t. ber chologie", caption: "siusfaat. 2t. ber chologie", float: "right" } },
  ],
  126: [
    { col: "right", figure: { src: "/layout/p126/g01.png", alt: "geringere Verbreitung", caption: "geringere Verbreitung" } },
    { col: "left", figure: { src: "/layout/p126/g02.png", alt: "Abbildung, Druckseite 126", caption: "" } },
  ],
  128: [
    { col: "left", figure: { src: "/layout/p128/g01.png", alt: "Stuftenborbmotor. hanbel jener Seit ber", caption: "Stuftenborbmotor. hanbel jener Seit ber", float: "right" } },
  ],
  129: [
    { col: "left", figure: { src: "/layout/p129/g01.png", alt: "Summe ber ßinfuljr unb Stusfur/r", caption: "Summe ber ßinfuljr unb Stusfur/r" } },
  ],
  130: [
    { col: "right", figure: { src: "/layout/p130/g01.png", alt: "SluSfufjr 21,4 ©efamrfjanbet", caption: "SluSfufjr 21,4 ©efamrfjanbet" } },
    { col: "left", figure: { src: "/layout/p130/g02.png", alt: "Abbildung, Druckseite 130", caption: "" } },
  ],
  131: [
    { col: "right", figure: { src: "/layout/p131/g01.png", alt: "Abbildung, Druckseite 131", caption: "", float: "right" } },
    { col: "right", figure: { src: "/layout/p131/g02.png", alt: "Stafiig:S8[id e[6a6tt)ärt§,", caption: "Stafiig:S8[id e[6a6tt)ärt§," } },
  ],
  134: [
    { col: "right", figure: { src: "/layout/p134/g01.png", alt: "SBi&teben.", caption: "SBi&teben." } },
  ],
  137: [
    { col: "right", figure: { src: "/layout/p137/g01.png", alt: "Abbildung, Druckseite 137", caption: "" } },
  ],
  138: [
    { col: "left", figure: { src: "/layout/p138/g01.png", alt: "d Sdjlicgmitätel, e ffiiemen=", caption: "d Sdjlicgmitätel, e ffiiemen=", float: "right" } },
    { col: "right", figure: { src: "/layout/p138/g02.png", alt: "Abbildung, Druckseite 138", caption: "", float: "right" } },
  ],
  139: [
    { col: "right", figure: { src: "/layout/p139/g01.png", alt: "Abbildung, Druckseite 139", caption: "", float: "right" } },
    { col: "left", figure: { src: "/layout/p139/g02.png", alt: "iwrder", caption: "iwrder" } },
  ],
  141: [
    { col: "left", figure: { src: "/layout/p141/g01.png", alt: "Bölferuug 9(ame", caption: "Bölferuug 9(ame" } },
  ],
  144: [
    { col: "right", figure: { src: "/layout/p144/g01.png", alt: "Abbildung, Druckseite 144", caption: "", float: "right" } },
  ],
  146: [
    { col: "right", figure: { src: "/layout/p146/g01.png", alt: "A TJ S 3", caption: "A TJ S 3", float: "right" } },
  ],
  160: [
    { col: "left", figure: { src: "/layout/p160/g01.png", alt: "Finnland 9, 1 ■HD 7.1 Zahlenangabe in Tausend", caption: "Finnland 9, 1 ■HD 7.1 Zahlenangabe in Tausend", float: "right" } },
    { col: "left", figure: { src: "/layout/p160/g02.png", alt: "2luätt)anberung au« europäifd)en Sänbern 1926.", caption: "2luätt)anberung au« europäifd)en Sänbern 1926." } },
  ],
  163: [
    { col: "left", figure: { src: "/layout/p163/g01.png", alt: "©ngtanb III! II Uli LlA QüU ii im iii> IUI IUI wanberungäpotitif uA (19U9); Auswanderung nach den Ver. St. v. Amerika", caption: "©ngtanb III! II Uli LlA QüU ii im iii> IUI IUI wanberungäpotitif uA (19U9); Auswanderung nach den Ver. St. v. Amerika" } },
  ],
  164: [
    { col: "right", figure: { src: "/layout/p164/g01.png", alt: "Slugmeidiung.", caption: "Slugmeidiung." } },
  ],
  165: [
    { col: "right", figure: { src: "/layout/p165/g01.png", alt: "Stitiifeite. unb im brüten", caption: "Stitiifeite. unb im brüten", float: "right" } },
  ],
  166: [
    { col: "right", figure: { src: "/layout/p166/g01.png", alt: "Abbildung, Druckseite 166", caption: "" } },
  ],
  167: [
    { col: "right", figure: { src: "/layout/p167/g01.png", alt: "2Iutotf)eniIIe.", caption: "2Iutotf)eniIIe." } },
    { col: "left", figure: { src: "/layout/p167/g02.png", alt: "T S D T S ?lutfjentifcf)er Scf)(uß.", caption: "T S D T S ?lutfjentifcf)er Scf)(uß." } },
  ],
  170: [
    { col: "left", figure: { src: "/layout/p170/g01.png", alt: "Abbildung, Druckseite 170", caption: "", float: "right" } },
    { col: "right", figure: { src: "/layout/p170/g02.png", alt: "Abbildung, Druckseite 170", caption: "" } },
    { col: "left", figure: { src: "/layout/p170/g03.png", alt: "ctjatel, 9Jiufeum. tenrocrf beS »Sftänn*", caption: "ctjatel, 9Jiufeum. tenrocrf beS »Sftänn*", float: "right" } },
  ],
  171: [
    { col: "right", figure: { src: "/layout/p171/g01.png", alt: "Abbildung, Druckseite 171", caption: "", float: "right" } },
  ],
  174: [
    { col: "right", figure: { src: "/layout/p174/g01.png", alt: "1 ©cbematifdje SarfteDung einer 9!aftcr=", caption: "1 ©cbematifdje SarfteDung einer 9!aftcr=", float: "right" } },
  ],
  177: [
    { col: "right", figure: { src: "/layout/p177/g01.png", alt: "ridjten unb höheren (bef. tfjeol.) ©djulen.", caption: "ridjten unb höheren (bef. tfjeol.) ©djulen.", float: "right" } },
  ],
  178: [
    { col: "right", figure: { src: "/layout/p178/g01.png", alt: "Abbildung, Druckseite 178", caption: "", float: "right" } },
  ],
  181: [
    { col: "left", figure: { src: "/layout/p181/g01.png", alt: "Abbildung, Druckseite 181", caption: "", float: "right" } },
  ],
  182: [
    { col: "right", figure: { src: "/layout/p182/g01.png", alt: "a S8lüten(äng3[d)nitt, b grud)t.", caption: "a S8lüten(äng3[d)nitt, b grud)t.", float: "right" } },
  ],
  183: [
    { col: "left", figure: { src: "/layout/p183/g01.png", alt: "Abbildung, Druckseite 183", caption: "" } },
  ],
  189: [
    { col: "right", figure: { src: "/layout/p189/g01.png", alt: "2Ijt: Jpol jtjaucräEte ;", caption: "2Ijt: Jpol jtjaucräEte ;", float: "right" } },
    { col: "right", figure: { src: "/layout/p189/g02.png", alt: "Abbildung, Druckseite 189", caption: "", float: "right" } },
  ],
  191: [
    { col: "right", figure: { src: "/layout/p191/g01.png", alt: "TOaffimo b'9(äegtio. bei tultuSmini«", caption: "TOaffimo b'9(äegtio. bei tultuSmini«", float: "right" } },
  ],
  194: [
    { col: "left", figure: { src: "/layout/p194/g01.png", alt: "3. ©aM&rennermitga&rtfatton3»organg in G Stufen.", caption: "3. ©aM&rennermitga&rtfatton3»organg in G Stufen." } },
    { col: "right", figure: { src: "/layout/p194/g02.png", alt: "Abbildung, Druckseite 194", caption: "", float: "right" } },
  ],
  196: [
    { col: "left", figure: { src: "/layout/p196/g01.png", alt: "Abbildung, Druckseite 196", caption: "", float: "right" } },
    { col: "left", figure: { src: "/layout/p196/g02.png", alt: "Abbildung, Druckseite 196", caption: "" } },
  ],
  197: [
    { col: "left", figure: { src: "/layout/p197/g01.png", alt: "chroococeum :", caption: "chroococeum :", float: "right" } },
    { col: "right", figure: { src: "/layout/p197/g02.png", alt: "ästeten.", caption: "ästeten." } },
  ],
  198: [
    { col: "left", figure: { src: "/layout/p198/g01.png", alt: "U\"° .lb/ lona (ßnbe 16. 3at,rl).).", caption: "U\"° .lb/ lona (ßnbe 16. 3at,rl).).", float: "right" } },
    { col: "right", figure: { src: "/layout/p198/g02.png", alt: "Abbildung, Druckseite 198", caption: "", float: "right" } },
  ],
};

function isFigNote(b: Block): b is { kind: "p"; html: string } {
  return b.kind === "p" && b.html.includes("fig-note");
}

function noteCaption(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/** Drop Fraktur-OCR leftovers; N() notes are the caption source of truth. */
function antiquaCaption(raw: string): string {
  const t = raw.replace(/\s+/g, " ").trim();
  if (!t || t.length < 8) return "";
  if (/^Abbildung, Druckseite \d+$/i.test(t)) return "";
  if (/[ſ©]|3U6cn|Stofffeite|frona|3a£|TOa|9\(tm/.test(t)) return "";
  const letters = (t.match(/[A-Za-zÄÖÜäöüß]/g) ?? []).length;
  const weird = (t.match(/[^A-Za-zÄÖÜäöüß0-9 .,;:()\-–—'″½¼¾&/+*]/g) ?? []).length;
  if (letters < 8 || weird > 2) return "";
  return t;
}

/** Bind cropped layout graphics onto an Antiqua Blatt. Skip Tafeln and already-set F(). */
const JUNK_SRC = new Set([
  "/layout/p09/g01.png",
  "/layout/p57/g01.png",
  "/layout/p78/g01.png",
  "/layout/p129/g01.png",
  "/layout/p197/g01.png",
]);

export function bindPageFigures(page: EncPage): EncPage {
  if (page.plate) return page;
  const extras = (PAGE_FIGURES[page.printed] ?? []).filter((e) => !JUNK_SRC.has(e.figure.src));
  if (!extras.length) return page;
  if ([...page.left, ...page.right].some((b) => b.kind === "figure")) return page;

  const notes = [...page.left, ...page.right].filter(isFigNote).map((b) => noteCaption(b.html));
  let ni = 0;
  const assigned = extras.map((e) => {
    const fromNote = ni < notes.length ? notes[ni++] : "";
    const caption = fromNote || antiquaCaption(e.figure.caption);
    return {
      col: e.col,
      figure: {
        ...e.figure,
        caption,
        alt: caption || e.figure.alt || `Abbildung, Druckseite ${page.printed}`,
      } satisfies Figure,
    };
  });
  const notesUsed = ni;

  const merge = (
    blocks: Block[],
    col: "left" | "right",
    notesBefore: number,
  ): Block[] => {
    const queue = assigned.filter((x) => x.col === col).map((x) => x.figure);
    const out: Block[] = [];
    let fi = 0;
    let localNote = 0;
    let placed = 0;
    for (const b of blocks) {
      if (isFigNote(b)) {
        const g = notesBefore + localNote;
        localNote += 1;
        if (g < notesUsed) {
          if (fi < queue.length) {
            out.push({ kind: "figure", figure: queue[fi++] });
            placed += 1;
          }
        } else {
          out.push(b);
        }
      } else {
        out.push(b);
      }
    }
    if (fi < queue.length) {
      const rest: Block[] = queue.slice(fi).map((figure) => ({ kind: "figure", figure }));
      if (placed > 0) {
        out.push(...rest);
      } else {
        let pos = out.findIndex((b) => b.kind === "p" || b.kind === "bibl");
        pos = pos < 0 ? out.length : pos + 1;
        out.splice(pos, 0, ...rest);
      }
    }
    return out;
  };

  return {
    ...page,
    left: merge(page.left, "left", 0),
    right: merge(page.right, "right", page.left.filter(isFigNote).length),
  };
}


