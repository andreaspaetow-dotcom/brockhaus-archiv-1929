import type { EncPage } from "../types";
import { L, N } from "./helpers";

/**
 * Tafel Plan von Athen (PDF-S. 17–20).
 * Straßenverzeichnis + zweifarbiger Stadtplan 1:15 000.
 * Vollständiges Register folgt; hier die Tafelbeschreibung.
 */
export const PAGE_08_TAFEL: EncPage = {
  printed: 8.5 as unknown as number,
  scanFile: 18,
  headerLeft: "Athe",
  headerRight: "Athe",
  catchword: "Athen",
  scanSrc: "/scans/p08tafel.jpg",
  plate: true,
  left: [
    L(
      `<strong>Athen</strong> (Tafel). Plan der Stadt, Maßstab 1:15000, mit Nebenkarte des Saronischen Golfs (Piräus–Athen–Hymettos). Erklärung: 1&nbsp;Einfahrten, 2&nbsp;Straßenbahn, 3&nbsp;Propyläen, 4&nbsp;antike Kleinfunde; antike Bauten, griechisch-römische (schwarz); Eisenbahn; Stadtbahn.`,
    ),
    N(
      "Tafel Athen: Stadtplan (Blatt A–D und E–H). Original in der Vorlage zwischen S.&nbsp;8 und S.&nbsp;9. Digitalisat und Straßenverzeichnis (Akropolis D&nbsp;5, Areopag C&nbsp;D&nbsp;4, Dipylon C&nbsp;3, Theseion, Olympieion, Stadion F&nbsp;6 u.&nbsp;a.) folgen mit den Abbildungen.",
    ),
    L(
      `Das beigegebene Straßenverzeichnis nennt Plätze, öffentliche Gebäude, antike Reste und moderne Straßennamen mit Planquadraten (A–H, 1–6). Es ist für die Archivarbeit als Register zur Tafel bestimmt, nicht als Lemma der Kolumne.`,
    ),
  ],
  right: [
    L(
      `Hauptpunkte im Plan: Akropolis (D&nbsp;5), Parthenon, Erechtheion (D&nbsp;5), Propyläen, Nike-Tempel, Areopag (C&nbsp;D&nbsp;4), Pnyx, Musenhügel, Theseion, Kerameikos und Dipylon (C&nbsp;3), Röm. Markt, Turm der Winde, Hadrianstor (E&nbsp;5), Olympieion, Dionysos-Theater (D&nbsp;E&nbsp;5), Odeion des Herodes Atticus, Stadion (F&nbsp;6), Lykabettos, Ardettos, Ilissos, Kephissos; modern: Verfassungsplatz, Eintrachtsplatz, Universität, Akademie, Nationalbibliothek, Archäol. Nationalmuseum, Parlament, Schloßgarten.`,
    ),
    L(
      `Fortsetzung des Artikels Athen auf Druckseite 9 (Geschichte, von Themistokles bis zur Neuzeit; dann Lemma Athena).`,
    ),
  ],
};
