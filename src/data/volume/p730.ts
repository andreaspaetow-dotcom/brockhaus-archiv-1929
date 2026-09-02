import type { EncPage } from "../types";
import { L, B } from "./helpers";

/** Druckseite 730 · Scan 772 · Bevölkerung */
export const PAGE_730: EncPage = {
  printed: 730,
  scanFile: 772,
  headerLeft: "Bevölkerung",
  headerRight: "Bevölkerung",
  catchword: "Tafel",
  scanSrc: "/scans/p730.jpg",
  left: [
    L(
      `der genannten Hinsicht hervorgerufen hat. (Für den Familienstand →Eheschließungen.)`,
    ),
    L(
      `<table>
<tr><th>Länder</th><th>Zählungsjahr</th><th>unter 5</th><th>5–10</th><th>10–15</th><th>15–20</th><th>20–30</th></tr>
<tr><td>Deutsches Reich</td><td>1910</td><td>120</td><td>114</td><td>107</td><td>96</td><td>82</td></tr>
<tr><td></td><td>1919</td><td>63</td><td>108</td><td>113</td><td>108</td><td>73</td></tr>
<tr><td>England und Wales</td><td>1921</td><td>88</td><td>93</td><td>97</td><td>93</td><td>73</td></tr>
<tr><td>Belgien</td><td>1920</td><td>69</td><td>86</td><td>94</td><td>98</td><td>85</td></tr>
<tr><td>Dänemark</td><td>1921</td><td>104</td><td>103</td><td>103</td><td>96</td><td>78</td></tr>
<tr><td>Spanien</td><td>1920</td><td>105</td><td>109</td><td>128</td><td>97</td><td>76</td></tr>
<tr><td>Frankreich</td><td>1921</td><td>62</td><td>77</td><td>88</td><td>89</td><td>68</td></tr>
<tr><td>Italien</td><td>1921</td><td>93</td><td>105</td><td>108</td><td>97</td><td>77</td></tr>
<tr><td>Niederlande</td><td>1920</td><td>113</td><td>108</td><td>104</td><td>99</td><td>81</td></tr>
<tr><td>Rußland</td><td>1920</td><td>115</td><td>151</td><td>142</td><td>105</td><td>39</td></tr>
<tr><td>Schweden</td><td>1920</td><td>96</td><td>97</td><td>100</td><td>93</td><td>82</td></tr>
<tr><td>Schweiz</td><td>1920</td><td>85</td><td>94</td><td>100</td><td>100</td><td>80</td></tr>
<tr><td>Tschechoslowakei</td><td>1921</td><td>76</td><td>102</td><td>115</td><td>109</td><td>83</td></tr>
<tr><td>Österreich</td><td>1920</td><td>63</td><td>93</td><td>97</td><td>101</td><td>79</td></tr>
<tr><td>Australien</td><td>1921</td><td>110</td><td>110</td><td>96</td><td>85</td><td>82</td></tr>
<tr><td>Ver. St. v. A.</td><td>1920</td><td>109</td><td>108</td><td>101</td><td>89</td><td>86</td></tr>
</table>`,
    ),
    L(
      `3) Bevölkerungswachstum. Von ganz besonderer Bedeutung in wirtschaftlicher und auch in sozialer Hinsicht ist das Wachstum der B., für dessen Größe neben der Höhe des Geburtenüberschusses die Höhe der Ein- und Auswanderung entscheidend ist. Der Geburtenüberschuß ergibt sich aus dem Unterschied der Geburten und Sterbefälle; die folgende Tabelle zeigt, wie sich dieser in den letzten zwei Jahrzehnten in einer Reihe von Staaten gestaltet hat:`,
    ),
    L(
      `<table>
<tr><th>Länder</th><th>1905–09</th><th>1920–24</th><th>1925</th></tr>
<tr><td>Deutsches Reich</td><td>14,0</td><td>9,2</td><td>8,7</td></tr>
<tr><td>England und Wales</td><td>11,6</td><td>9,1</td><td>6,1</td></tr>
<tr><td>Belgien</td><td>8,9</td><td>7,3</td><td>6,6</td></tr>
<tr><td>Frankreich</td><td>0,6</td><td>2,6</td><td>1,4</td></tr>
<tr><td>Italien</td><td>10,9</td><td>12,5</td><td>10,9</td></tr>
<tr><td>Norwegen</td><td>12,6</td><td>11,6</td><td>9,1</td></tr>
<tr><td>Niederlande</td><td>15,3</td><td>15,7</td><td>14,5</td></tr>
<tr><td>Schweden</td><td>11,0</td><td>7,9</td><td>5,8</td></tr>
<tr><td>Schweiz</td><td>9,9</td><td>7,0</td><td>6,2</td></tr>
<tr><td>Japan</td><td>11,0</td><td>11,9</td><td>14,6</td></tr>
<tr><td>Australien</td><td>15,8</td><td>14,6</td><td>13,7</td></tr>
</table>`,
    ),
    L(
      `Geburtenüberschuß auf 1000 der Bevölkerung berechnet. In Deutschland ist der Geburtenüberschuß bis etwa zu Beginn des Weltkrieges beträchtlich gestiegen, namentlich als Folge des starken Rückganges der →Sterblichkeit, nahm jedoch dann infolge des erheblichen Geburtenrückganges, wie auch in fast allen andern Staaten, stark ab. Auf 1000 Einwohner berechnet, betrug in Deutschland der Überschuß der Geborenen über die Gestorbenen (+), der Überschuß der Gestorbenen über die Geborenen (—): 1871–1880 +11,9; 1881–1890 +11,7; 1891–1900 +13,9; 1901–1910 +14,3; 1911–1913 +12,1; 1914–1918 —2,7; 1919–1921 +8,9; 1922–1926 +8,1.`,
    ),
    L(
      `Es gibt Länder mit großem Geburtenüberschuß und geringer Volkszunahme und solche mit geringerem Geburtenüberschuß und starkem Volkswachstum, da auf dieses eben die Höhe der Aus- und Einwanderung von erheblichem Einfluß ist. Wie sich diese Verhältnisse in Deutschland seit der Reichsgründung gestaltet haben, zeigt die folgende Tabelle:`,
    ),
  ],
  right: [
    L(
      `Wirtschaftlich, sozial und politisch kommt der Volkszahl und dem Volkswachstum die allergrößte Bedeutung zu. Wenn die Volkszahl rascher oder langsamer anwächst als der Nahrungsspielraum eines Volkes, so können die Erscheinungen der Über- und Untervölkerung auftreten. Eine Untervölkerung liegt dann vor, wenn die B. zu klein ist, um die natürl. Gaben und Bodenschätze eines Landes auszunutzen. Es fehlen dazu die nötigen Arbeitskräfte; untervölkerte Länder sind deshalb bestrebt, die natürl. Bevölkerungszunahme zu fördern oder auf die verschiedenste Weise Einwanderer heranzuziehen. Umgekehrt kann für dichtbevölkerte Staaten ein Übervölkerungsproblem entstehen, worauf mit besonderem Nachdruck der Engländer Rob. Malthus hingewiesen hat. Man versteht unter Übervölkerung die Tatsache, daß die B. der ganzen Erde oder eines bestimmten Gebiets über die Lebens- und Unterhaltsmöglichkeiten, die sich hier bieten, über den sog. Nahrungsspielraum oder die Bevölkerungskapazität eines Landes, hinausgewachsen ist. Die Erscheinungen der Übervölkerung, die sich in recht mannigfacher Form zeigen können, sind stets an einem Rückgang der durchschnittlichen Lebenshaltung eines Volkes zu erkennen.`,
    ),
    L(
      `Karte 10 a stellt einen Versuch dar, das Wachstum der Bevölkerung der Erde, der einzelnen Erdteile und einiger Länder graphisch darzustellen und zugleich die künftigen Wachstumsmöglichkeiten bzw. den Grad der Übervölkerung auf Grund von Berechnungen über die »Tragfähigkeit des Lebensraumes« von Alois Fischer (Ztschr. für Geopolitik, 1925, Heft 10, 11) zu veranschaulichen. Bei den großen Schwierigkeiten derartiger Berechnungen kommt der Darstellung natürlich nur Vergleichswert zu.`,
    ),
    B(
      `S. Ballod: Wieviel Menschen kann die Erde ernähren? (in Schmollers Jahrb. der Gesetzgebung, 1912); A. Penck: Die Pionierzone der Erdoberfläche, in Verhandlungen des XXI. Deutschen Geographentages in Breslau 1925 (1926).`,
    ),
    L(
      `4) Bevölkerungslehre. Diejenige Wissenschaft, die die Erforschung der mit der B. im Zusammenhang stehenden Tatsachen und Probleme zum Gegenstand hat, ist die Bevölkerungslehre. Sie besteht aus drei Teilen: 1) der Bevölkerungsstatistik, welche die tatsächlichen Bevölkerungszustände ermittelt und be-`,
    ),
    L(
      `<table>
<tr><th>Deutsches Reich im Durchschnitt</th><th>1871–1880</th><th>1881–1890</th><th>1891–1900</th><th>1901–1910</th><th>1911–1925</th></tr>
<tr><td>Geburtenüberschuß absolut</td><td>511034</td><td>551308</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>‰</td><td>11,9</td><td>11,7</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>Verlust (−) oder Gewinn (+) durch Wanderungen absolut</td><td>−77193</td><td>−131908</td><td>−37531</td><td>−12127</td><td>—</td></tr>
<tr><td>Volkszunahme</td><td>433841</td><td>419400</td><td>692834</td><td>854211</td><td>307483</td></tr>
</table>`,
    ),
  ],
};
