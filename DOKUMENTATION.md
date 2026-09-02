# Der Große Brockhaus — Band II, Archivrekonstruktion

**Stand:** 31. August 2026  
**Ausgabe:** Der Große Brockhaus. Handbuch des Wissens in zwanzig Bänden. Fünfzehnte, völlig neubearbeitete Auflage. **Zweiter Band Aju–Bla.** F. A. Brockhaus, Leipzig 1929.  
**Vorlage:** Digitalisat Internet Archive, Signatur `dergrossebrockha02leip`.

Dieses Dokument beschreibt den **Ist-Zustand** der Archivapp: was sie zeigt, nach welcher Methode Text und Bild getrennt werden, wie weit Band II gesetzt ist, und was als Nächstes offen bleibt.

---

## 1. Zweck

Das Projekt rekonstruiert Band II des Großen Brockhaus von 1929 als **lesbare Antiqua-Ausgabe**, ohne die historische Seite zu verfälschen.

Drei Arbeiten laufen parallel:

1. **Setzen.** Fraktur wird in Antiqua übertragen. Orthographie, Abbreviaturen und Verweiszeichen der Ausgabe 1929 bleiben. Langes ſ wird zu s, ß bleibt ß.
2. **Trennen.** Abbildungen werden nicht „freigestellt nach Augenmaß“, sondern über ein **Koordinatengitter** aus der Druckseite gelöst: Brotschrift raus, Grafik und Bildunterschrift behalten ihre Lage.
3. **Spiegeln.** Dieselbe Seite liegt als Scan, als gesetzte Doppelsalte und als faksimilierte Koordinatenrekonstruktion nebeneinander.

Es gibt keine Konten, keine Speicherung persönlicher Daten. Lemma-Suche, Seitenblatt und Text-Export laufen vollständig in der Sitzung.

---

## 2. Was die App zeigt

Die Oberfläche ist ein dunkles Archivregal; die Buchseite selbst liegt auf hellem Papier (`#fbfaf6`), Satz in Garamond, Benutzerführung in Source Sans. Sechs Blickwinkel:

| Blick | Inhalt |
|---|---|
| **Gitter** | Vier-Stufen-Labor der Bild-Text-Trennung. Standardansicht. |
| **Setzer** | Fortschritt des Fraktur→Antiqua-Satzes (Zyklusanzeige). |
| **Tafeln** | Originalabbildungen der Druckseiten 1–3 als Galerie. |
| **Antiqua** | Gesetzte Doppelsalte: Kolumnentitel, zwei Spalten, Kustos, Seitenzahl. |
| **Scan** | Das unberührte Digitalisat der Druckseite. |
| **Synopse** | Antiqua und Scan nebeneinander. |

Zusätzlich:

- **Seitenblatt** mit Druckseitennummer, Vor/Zurück.
- **Lemma-Suche** über das Register (derzeit vor allem A-Lemmata der gesetzten Strecke).
- **Fraktur & Apparat** — Umsetzungsregeln (langes s, Ligaturen, Verweise).
- **Text exportieren** — die gesetzten Seiten als reine Antiqua-Datei.

### 2.1 Gitter — die vier Stufen

Jede erkannte Grafikseite hat vier Schritte, die der ursprünglichen Methode folgen:

1. **Analyse.** Bounding-Box-Gitter auf dem Scan: Brotschrift (grün), Graphic (rot), Caption (blau).
2. **Masken.** Zwei-Masken-System. Maske A sind die Fraktur-Wortboxen; sie werden von der Grafikfläche **subtrahiert**. Die Bildunterschrift sitzt als Unterkanten-Anker unter der Grafik, mit kleinem Schutzraum (3–8 px, abhängig von der Caption-Schriftgröße).
3. **Matrix.** Relayout-JSON mit `original_coordinates` auf der gerasterten Seite (Zielbreite 1800 px).
4. **Rekonstruktion.** Antiqua-Text in denselben Textzonen, Grafik auf denselben Koordinaten, Caption in kleinerer Schrift **unter** der Grafik — nicht im Bild.

Im Gitter blättert man nur durch Seiten, auf denen mindestens eine Grafik erkannt wurde. Seiten ohne Abbildung (etwa S. 667) erscheinen dort nicht; sie sind über Antiqua, Scan und Synopse erreichbar.

---

## 3. Bandstand (Zahlen)

Band II hat in der Schätzung **877 Druckseiten** plus vier Schlußblätter (Bemerkungen, Abkürzungen, Kartenhinweise, Kartenübersicht).

| Bestand | Zahl | Anmerkung |
|---|---|---|
| Druckseiten mit **gesetztem Antiqua-Text** | **647** | S. 1–646 durchgehend, plus S. 667 |
| Lücke im Satz | S. **647–666** | Platzhalter („Transkription folgt“) |
| Offener Satz danach | S. **668–877** | Platzhalter, Scan liegt vor |
| Schlußblätter | S. **878–881** | Kurztitel gesetzt |
| Scans im Archiv | **893** Dateien | Druckseiten, Tafeln (`pNNNt…`), Schluß |
| Gitterseiten mit Grafik | **88** | Druck 1–198, nicht lückenlos |
| Freigestellte Grafiken | **124** | Papiergebleicht, Gelbstich entfernt |
| Bekannte Bildunterschriften (handgeprüft) | S. 1, 2, 3 | acht Captions |
| Lemma-Register | **648** Einträge | vor allem gesetzte A-Strecke bis Berlin |

**Nächste Satzseite:** S. 668 (Berlin, Fortsetzung Stadtverordnete).

**Letzte voll gesetzte Inhaltseite vor der Lücke:** S. 646 (Berlin, Stadtteile).  
**Sprung danach:** S. 667 (Berlin: Geographie, Klima, Bevölkerung, Schulen, Stadtverordnete) — Tabellenseite, keine Abbildung.

---

## 4. Editionsregeln

Die Ausgabe bleibt eine **historische**. Modernisiert wird nur die Schrift, nicht der Wortlaut.

| Vorlage | Satz |
|---|---|
| Langes ſ | s (nie am Wortende ohnehin ß/s der Vorlage) |
| ß | ß, nicht ss |
| Ligaturen ſt, ſch, ck, tz, ch | aufgelöst, Graphem gleich |
| Rundes r (ꝛ) | r |
| ü ö ä | Umlautpunkte, nicht ue/oe/ae |
| Verweis → | → bleibt |
| daß, qkm, E., Rgbz., i. J. | 1929 belassen |
| J / I am Lemma | nach der Vorlage |

Kolumnentitel, Signatur, Kustos und Seitenzahl werden mitgesetzt. Bibliographische Kleinschrift liegt als eigener Block unter dem Artikel.

Tabellen (erstmals S. 667: Klima, Verwaltungsbezirke, städtische Schulen 1926) stehen im Satzspiegel als echte Tabellen, rechtsbündig, mit Kopf- und Summenzeile.

---

## 5. Die Koordinatenmethode

Fraktur klebt im Druck oft an der Grafik. Captions sitzen unmittelbar unter dem Strich. Eine visuelle Schätzung zerschneidet entweder die Zeichnung oder lässt Brotschrift im Bild. Deshalb gilt:

> Nicht raten, wo das Bild aufhört — die **Bildunterschrift ist der Anker**, die **Brotschrift-Boxen sind Maske A**, die Grafik ist, was nach der Subtraktion übrig bleibt.

### 5.1 Schritt 1 — Bounding-Box-Gitter

Auf jeder Spalte werden Zeilen geclustert. Drei Kategorien:

- **Text_Fraktur** — Brotschrift, volle Satzbreite.
- **Graphic** — Fläche über der Caption, oder Umfließsatz rechts (float-right), wenn mindestens drei kurze Zeilen links der Figur stehen.
- **Caption** — kleinere, zentrierte oder eingerückte Zeile unter der Grafik; muss wie eine Bildunterschrift *aussehen* (Buchstaben, wenig Kartensymbole). Seiten mit sehr vielen Caption-Kandidaten in einer Spalte (≥ 6) gelten als **Karten-/Tafelfeld** und werden nicht in Einzelgrafiken zerlegt.

Zwei Slot-Arten:

- **block** — Grafik über die ganze Spaltenbreite (Lageplan, Assuan).
- **float-right** — Grafik rechts, Brotschrift links umfließend (Ulmus, Tetraeder, Relief).

Vertex-Beschriftungen und Kartenworte *in* der Grafik sind keine Brotschrift. Sie bleiben im Bild.

### 5.2 Schritt 2 — Zwei Masken

- **Maske A:** alle Brotschrift-Wortboxen, *ohne* Captions und *ohne* Innenbeschriftung der Grafik. Umfließsatz links zählt zur Maske A und darf die Grafik nicht „auffressen“.
- **Grafikfläche:** Slot minus Maske A. Caption-Zeile schneidet die Unterkante. Danach:

  1. Brotschriftpixel in der Box werden mit Papierfarbe übermalt (inkl. unterem Caption-Band und Umfließ-Resten am linken/oberen Rand).
  2. Isolierte Brotschrift-Stümpfe am linken Rand von float-right-Zeichnungen werden gewischt.
  3. **Engzuschnitt nach dem Weißeln** — erst jetzt, sonst bleibt links Leerraum (Ulmus) oder die Spitze `a` fällt aus der Box (Tetraeder 1).
  4. Caption-Zeilen unter der Zeichnung, die die OCR nicht als Caption erkannt hat, werden unten abgeworfen, ohne die Kontur zu halbieren.

### 5.3 Schritt 3 — Relayout-Matrix

Jede Gitterseite hat ein Manifest:

```json
{
  "page_id": "brockhaus_bd2_p003",
  "printed": 3,
  "canvas_size": { "width": 1800, "height": 2735 },
  "columns": [
    { "id": "left", "original_coordinates": { "x1": 82, "y1": 213, "x2": 822, "y2": 2588 } },
    { "id": "right", "original_coordinates": { "x1": 878, "y1": 213, "x2": 1581, "y2": 2588 } }
  ],
  "elements": [
    {
      "type": "graphic",
      "id": "img_001",
      "original_coordinates": { "x1": 451, "y1": 307, "x2": 831, "y2": 647 },
      "optimized_file": "g01.png",
      "kind": "zeichnung",
      "slot": "float-right",
      "caption": "Asymmetrisches Kohlenstoffatom, optisch rechtsdrehend."
    },
    {
      "type": "caption",
      "associated_with": "img_001",
      "original_coordinates": { "x1": 478, "y1": 670, "x2": 803, "y2": 711 },
      "text_clean": "Asymmetrisches Kohlenstoffatom, optisch rechtsdrehend."
    },
    {
      "type": "text_zone",
      "id": "tz_002",
      "column": "left",
      "wrap": "img_001",
      "original_coordinates": { "x1": 82, "y1": 307, "x2": 445, "y2": 647 }
    }
  ]
}
```

Koordinaten sind Pixel auf der gerasterten Seite, nicht „ungefähr mittig“. Die Rekonstruktion rechnet sie in Prozent der Canvas um, damit das Faksimile skalierbar bleibt.

### 5.4 Schritt 4 — Rekonstruktion

- Textzonen bekommen den Antiqua-Fließtext der Spalte, anteilig nach Fläche, mit kleinerer Schrift in Wrap-Spalten.
- Grafiken liegen in ihrer Box (`object-fit: fill` — Box und Zuschnitt haben dasselbe Seitenverhältnis).
- Captions stehen **unter** der Grafik, kursiv, zentriert, über die Grafikbreite.

### 5.5 Papier und Gelbstich

Das Digitalisat ist gelbstichiges Vergilbpapier. Freigestellte Grafiken sollen **weißes Papier** haben, die Druckfarbe aber behalten.

- **Zeichnung** (Linien, Blatt, Schema): gelbliches Papier und fast-weiße Flächen → Weiß. Grüne Blattfarbe, rote/blaue Vertexbuchstaben bleiben.
- **Photographie / Halbton:** Weißabgleich auf das Papierhell, blasse Gelbstiche in Lichtern → Weiß. Der Druckton (Stein, Himmel, Haut) bleibt.

Regel, wann etwas Photographie ist: deutliche Farbigkeit **und** mindestens 20 % dunkle Fläche. Ein Tetraeder mit bunten Buchstaben `a b c d` ist deshalb eine Zeichnung, kein Photo. Das Ulmus-Blatt kann nach Engzuschnitt als Photographie klassifiziert werden (Grün + Dunkelanteil); visuell bleibt das Blatt grün auf weiß.

Alle 124 Gittergrafiken (nicht nur S. 1–3) sind mit diesem Bleichgang neu gezogen.

---

## 6. Qualität der Leitseiten 1–3

Das sind die Referenzseiten, an denen die Methode justiert wurde. Rückmeldung vom 31. August 2026 und der aktuelle Stand:

| Seite | Abbildung | Stand |
|---|---|---|
| **S. 1** | Lageplan von Asunción | Unverändert gut. Karte vollständig, weißes Papier. |
| **S. 1** | Calle Colón | Photographie vollständig, weißes Papier. |
| **S. 2** | Asurnasirpal II., Wandrelief | Float-right, Brotschrift links, Caption darunter. Gelbstich raus. |
| **S. 2** | Assuan | Blockphoto, Caption „Assuan.“ |
| **S. 2** | Ulmus-Blatt | Unterschrift und Brotschrift **raus**, Blatt inkl. Stiel vollständig, enger Zuschnitt, weißer Grund. |
| **S. 3** | Tetraeder 1 (rechtsdrehend) | Spitze mit Vertex **a** im Zuschnitt, b c d vorhanden, kein Umfließsatz im Bild. |
| **S. 3** | Tetraeder 2 (linksdrehend) | Vollständig. |
| **S. 3** | Asymptote der Hyperbel | Kurve, Asymptote, Pfeil vollständig. |

Karten mit dichtem Namensfeld (Stadtpläne jenseits der erkannten Slots) werden bewusst **nicht** in Brocken zerlegt.

---

## 7. Datenmodell der gesetzten Seite

Jede Druckseite ist ein `EncPage`:

- `printed` — Seitenzahl im Buch  
- `scanFile` — Dateiseite im IA-Band  
- `headerLeft` / `headerRight` — Kolumnentitel  
- `catchword` — Kustos  
- `scanSrc` — Pfad des Scans  
- `left` / `right` — Spalten als Blöcke  

Blöcke:

- Absatz (`p`) — auch Tabellen-HTML  
- Bibliographie (`bibl`)  
- Abbildung (`figure`) mit `src`, `caption`, optional `float: "right"`  
- Initial (`drop`) nur auf S. 1 (Asunción)

S. 1–3 und die Gitterseiten zeigen in der Antiqua-Ansicht die **freigestellten** Dateien (`/layout/p0N/g0N.png`), nicht den Rohscan.

S. 4–646 liegen als einzelne Banddateien (`volume/pNNN.ts`). S. 667 ebenso. S. 647–666 und 668–877 sind Platzhalter mit Verweis auf das Digitalisat.

---

## 8. Aufbau der Anwendung (für die Weiterarbeit)

```
Archivschale
├── Gitter ………… Layout-Labor (Analyse / Masken / Matrix / Rekonstruktion)
├── Setzer ………… Zyklusstand Fraktur→Antiqua
├── Tafeln ………… Galerie S. 1–3
├── Antiqua ……… gesetzte Doppelsalte
├── Scan ………… Originaldigitalisat
└── Synopse ……… Antiqua | Scan
```

Wichtige Orte:

| Was | Wo |
|---|---|
| Seitenregister, Lemmata, Apparat | `src/data/pages.ts` |
| Gesetzte Bandseiten | `src/data/volume/pNNN.ts` |
| Platzhalter 647 ff. | `src/data/volume/rest.ts` |
| Koordinaten-Typen | `src/data/types.ts` |
| Gitter-Helfer (Prozentboxen, Manifest) | `src/data/layout.ts` |
| Vier-Stufen-Labor | `src/components/layout-lab.tsx` |
| Faksimile auf Koordinaten | `src/components/facsimile-page.tsx` |
| Antiqua-Satzspiegel | `src/components/encyclopedia-page.tsx` |
| Schale, Modi, Export | `src/components/archive-shell.tsx` |
| Trennung + Bleichen | `scripts/layout_pipeline.py` |
| Geprüfte Captions S. 1–3 | `scripts/captions.json` |
| Gitter-Ausgabe | `public/layout/pNNN/` (`manifest.json`, `gNN.png`, `overlay.png`, `page.jpg`) |
| Gitter-Index | `public/layout/index.json` |
| Scans | `public/scans/pNNN.jpg` |
| Fortschrittsbuch | `artifacts/progress.json` |

Die Relayout-Matrix einer Seite liegt unter `public/layout/pNNN/manifest.json`. Die Rekonstruktion liest sie zur Laufzeit.

Rasterziel der Pipeline: Breite **1800 px**, Zelle 6 px für Maske A. Früher Band: Druckseite *n* ≈ IA-Datei *n* + 8; später verschieben eingeschobene Tafeln diese Differenz (S. 646 ist Datei 678). Die Scans unter `public/scans/` sind nach **Druckseite** benannt.

---

## 9. Abbildungsarten in der Matrix

| `kind` | Bedeutung |
|---|---|
| `photographie` | Halbton, Karte mit Fläche, Photo |
| `zeichnung` | Strich, Schema, botanische Tafel |

| `slot` | Bedeutung |
|---|---|
| `block` | volle Spaltenbreite |
| `float-right` | rechts, Text links umfließend |

Padding um die Grafik: typisch 5–8 px, aus der Caption-Schriftgröße abgeleitet.

---

## 10. Offene Arbeit

1. **Satz S. 647–666** — Lücke in der Berlin-Strecke schließen (nach S. 646 Stadtteile, vor S. 667 Geographie/Statistik).
2. **Satz ab S. 668** — Berlin weiter (Stadtverordnete, dann folgende Lemmata bis Bla).
3. **Gitter über S. 198 hinaus** — bisher 88 erkannte Grafikseiten im Bereich 1–198. Tafeln und Karten späterer Lagen (Athen, Ätherische Öle, Atlantik, Berlin-Pläne) sind vorgemerkt, nicht zerlegt.
4. **Caption-Wörterbuch** — handgeprüft nur S. 1–3. Weitere Seiten nutzen OCR-Müll plus Heuristik; saubere Unterschriften müssen nachgetragen werden, sobald eine Seite gesetzt wird.
5. **Tafeln** — mehrseitige Einschubkarten (z. B. Berlin-Übersichtsplan S. 640) sind als Hinweis gesetzt, der Zuschnitt „folgt“.
6. **Lemma-Register** — folgt dem Satz; Berlin zeigt auf den Artikelanfang, nicht auf jede Folgeseite.

Was **nicht** vorgesehen ist: Konten, redaktionelle Modernisierung des Wortlauts, maschinelles „Erraten“ von Grafikgrenzen ohne Caption-Anker.

---

## 11. Zitation der Rekonstruktion

> Der Große Brockhaus. Handbuch des Wissens in zwanzig Bänden. Fünfzehnte, völlig neubearbeitete Auflage von Brockhaus’ Konversations-Lexikon. Zweiter Band Aju–Bla. F. A. Brockhaus, Leipzig 1929.

> Vorlage: Scan-Seiten der Digitalisate (Internet Archive, Signatur dergrossebrockha02leip). Fraktur durch Antiqua ersetzt; langes ſ → s; Orthographie, Abbreviaturen, Verweiszeichen (→) der Ausgabe 1929 beibehalten. Abbildungen: koordinatenbasierte Trennung (Caption-Anker, Maske A Brotschrift minus Grafikfläche).

---

## 12. Kurzfazit

Das Archiv ist eine **spielbare Rekonstruktion** von Band II: gesetzter Text bis tief in den Artikel Berlin, Koordinatengitter für 124 Grafiken, Leitseiten 1–3 in der vereinbarten Trennschärfe (Ulmus sauber, Tetraeder mit Spitze `a`, Papier ohne Gelbstich). Die Methode steht. Der Satz muss die Lücke 647–666 schließen und dann ab 668 den Band zu Ende führen; das Gitter wandert mit, sobald auf einer neuen Seite eine Caption als Anker greift.
