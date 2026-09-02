import type { EncPage } from "../types";
import { L, N } from "./helpers";

/** Druckseite 447 · Scan 479 · Tafel Baye / Bayern */
export const PAGE_447: EncPage = {
  printed: 447,
  scanFile: 479,
  headerLeft: "Baye",
  headerRight: "Bayern",
  catchword: "",
  scanSrc: "/scans/p447.jpg",
  left: [
    L(`<strong>Tafel: Bayern.</strong>`),
    N(
      "Tafel Bayern (Zuschnitt morgen). Bildtafel zum Artikel Bayern bzw. Bayer; Unterschriften im Scan, Zuschnitt der Originalgraphik folgt.",
    ),
  ],
  right: [
    N("Rückseite bzw. Fortsetzung der Tafel Bayern."),
  ],
};
