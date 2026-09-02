import { useMemo, useState } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Columns2,
  Download,
  FileDown,
  Images,
  ScanLine,
  Search,
  Type,
  RefreshCw,
  Activity,
  Grid3x3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EncyclopediaPage, ScanPage } from "@/components/encyclopedia-page";
import { PlatesGallery } from "@/components/plates-gallery";
import { AgentDesk } from "@/components/agent-desk";
import { LayoutLab } from "@/components/layout-lab";
import {
  CITATION,
  FRAKTUR_MAP,
  LAST_TRANSCRIBED,
  LEMMATA,
  PAGES,
  PLATES,
  SOURCE_NOTE,
  pagePlainText,
  type ViewMode,
} from "@/data/pages";
import { cn } from "@/lib/utils";
import type { PdfProgress } from "@/lib/antiqua-pdf";

export function ArchiveShell() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<ViewMode>("gitter");
  const [query, setQuery] = useState("");
  const [notesOpen, setNotesOpen] = useState(false);
  const [cacheBust, setCacheBust] = useState(9);
  const [pdf, setPdf] = useState<PdfProgress | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const page = PAGES[index];
  const lastPrinted = PAGES[PAGES.length - 1]?.printed ?? 0;

  const go = (dir: -1 | 1) => {
    setIndex((i) => Math.min(PAGES.length - 1, Math.max(0, i + dir)));
  };

  const jumpPrinted = (value: string) => {
    const n = Number(value);
    const i = PAGES.findIndex((p) => p.printed === n);
    if (i >= 0) setIndex(i);
  };

  const exportText = () => {
    const body = [CITATION, SOURCE_NOTE, "", ...PAGES.map(pagePlainText)].join(
      "\n\n————————————————\n\n",
    );
    const blob = new Blob([body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Brockhaus-1929-Bd2-S1-${lastPrinted}-Antiqua.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPdf = async () => {
    if (pdf) return;
    setPdfError(null);
    setPdf({ phase: "schrift", done: 0, total: PAGES.length });
    try {
      const { downloadAntiquaPdf } = await import("@/lib/antiqua-pdf");
      await downloadAntiquaPdf(PAGES, {
        citation: CITATION,
        sourceNote: SOURCE_NOTE,
        lastPrinted,
        plateCount: PLATES.length,
        onProgress: (p) => setPdf({ ...p }),
      });
    } catch {
      setPdfError("Der Satz des PDF ist fehlgeschlagen. Der Textauszug bleibt erreichbar.");
    } finally {
      setPdf(null);
    }
  };

  const lemmaHits = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("de");
    if (!q) return LEMMATA;
    return LEMMATA.filter((l) => l.name.toLocaleLowerCase("de").includes(q));
  }, [query]);

  const openPlatePage = (pageIndex: number) => {
    setIndex(pageIndex);
    setMode("reconstruction");
  };

  return (
    <div className="archive-shell flex min-h-dvh flex-col">
      <header className="archive-chrome border-b border-chrome-border px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-ui text-[0.68rem] tracking-[0.18em] text-chrome-muted uppercase">
                Archivrekonstruktion
              </p>
              <h1 className="font-page mt-1 text-2xl font-semibold tracking-tight text-chrome-fg md:text-[1.85rem]">
                Der Große Brockhaus
              </h1>
              <p className="mt-1 max-w-xl font-ui text-sm text-chrome-muted">
                15.&nbsp;Auflage, Band&nbsp;II · Fraktur in Antiqua · Stand S.&nbsp;1–{lastPrinted}
              </p>
              {pdfError ? (
                <p className="pdf-error mt-2 font-ui text-sm" role="alert">
                  {pdfError}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCacheBust((n) => n + 1)}
              >
                <RefreshCw className="size-4" />
                Tafeln neu laden
              </Button>
              <Button variant="outline" size="sm" onClick={() => setNotesOpen((v) => !v)}>
                Fraktur & Apparat
              </Button>
              <Button variant="outline" size="sm" onClick={exportText} disabled={!!pdf}>
                <Download className="size-4" />
                Text exportieren
              </Button>
              <Button
                variant="solid"
                size="sm"
                onClick={() => void exportPdf()}
                disabled={!!pdf}
                aria-busy={!!pdf}
              >
                <FileDown className="size-4" />
                Antiqua als PDF
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex max-w-full overflow-x-auto rounded-[calc(var(--radius-md)+4px)] border border-chrome-border p-1">
              {(
                [
                  ["gitter", Grid3x3, "Gitter"],
                  ["agent", Activity, "Setzer"],
                  ["tafeln", Images, "Tafeln"],
                  ["reconstruction", Type, "Antiqua"],
                  ["scan", ScanLine, "Scan"],
                  ["synopse", Columns2, "Synopse"],
                ] as const
              ).map(([id, Icon, label]) => (
                <button
                  key={id}
                  type="button"
                  className="mode-tab flex h-10 shrink-0 items-center gap-2 rounded-[var(--radius-sm)] px-2.5 font-ui text-sm text-chrome-fg sm:px-3"
                  data-active={mode === id}
                  onClick={() => setMode(id)}
                >
                  <Icon className="size-4" />
                  <span className="sr-only sm:not-sr-only sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {mode !== "tafeln" && mode !== "agent" ? (
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Vorherige Seite"
                  disabled={index === 0}
                  onClick={() => go(-1)}
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <label className="flex items-center gap-2 font-ui text-sm text-chrome-muted">
                  S.
                  <input
                    className="page-jump"
                    type="number"
                    min={PAGES[0].printed}
                    max={lastPrinted}
                    value={page.printed}
                    aria-label="Druckseite"
                    onChange={(e) => jumpPrinted(e.target.value)}
                  />
                  / {lastPrinted}
                </label>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Nächste Seite"
                  disabled={index === PAGES.length - 1}
                  onClick={() => go(1)}
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            ) : null}

            <label className="relative min-w-[12rem] flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-chrome-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Lemma oder Wort suchen"
                className="h-10 w-full rounded-[var(--radius-md)] border border-chrome-border bg-chrome-elevated pr-3 pl-9 font-ui text-sm text-chrome-fg outline-none placeholder:text-chrome-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              />
            </label>
          </div>
        </div>
      </header>

      {notesOpen ? (
        <aside className="archive-chrome border-b border-chrome-border bg-chrome-elevated px-4 py-4 md:px-6">
          <div className="mx-auto grid max-w-[92rem] gap-5 lg:grid-cols-3">
            <div>
              <h2 className="font-ui text-sm font-semibold tracking-wide text-chrome-fg">
                Zitation
              </h2>
              <p className="mt-2 font-page text-[0.95rem] leading-snug text-chrome-muted">
                {CITATION}
              </p>
              <p className="mt-2 font-ui text-xs leading-relaxed text-chrome-muted">
                {SOURCE_NOTE}
              </p>
            </div>
            <div>
              <h2 className="font-ui text-sm font-semibold tracking-wide text-chrome-fg">
                Fraktur-Zeichensatz
              </h2>
              <p className="font-fraktur mt-2 text-[1.35rem] leading-snug text-chrome-fg">
                Asunción. Hauptſtadt der ſüdamerik. Rep. Paraguay.
              </p>
              <p className="font-page mt-1 text-[1.05rem] italic text-chrome-muted">
                Asunción. Hauptstadt der südamerik. Rep. Paraguay.
              </p>
              <p className="mt-2 font-ui text-xs leading-relaxed text-chrome-muted">
                Probe: Unifraktur Maguntia (historische Brotschrift) gegen EB Garamond
                (Antiqua-Rekonstruktion). Ligaturen und langes ſ werden in der
                Transkription aufgelöst, Orthographie 1929 bleibt.
              </p>
            </div>
            <div>
              <h2 className="font-ui text-sm font-semibold tracking-wide text-chrome-fg">
                Umsetzungstabelle
              </h2>
              <table className="mt-2 w-full font-ui text-xs text-chrome-muted">
                <thead>
                  <tr className="text-left text-chrome-fg">
                    <th className="py-1 pr-2">Fraktur</th>
                    <th className="py-1 pr-2">Antiqua</th>
                    <th className="py-1">Regel</th>
                  </tr>
                </thead>
                <tbody>
                  {FRAKTUR_MAP.map((row) => (
                    <tr key={row.fraktur} className="border-t border-chrome-border">
                      <td className="font-fraktur py-1 pr-2 text-[1.05rem] text-chrome-fg">
                        {row.fraktur}
                      </td>
                      <td className="py-1 pr-2 font-page text-chrome-fg">{row.antiqua}</td>
                      <td className="py-1">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </aside>
      ) : null}

      {mode !== "tafeln" && mode !== "agent" && mode !== "gitter" ? (
        <div className="archive-chrome border-b border-chrome-border px-4 py-2 md:px-6">
          <div className="mx-auto flex max-w-[92rem] gap-2 overflow-x-auto pb-1">
            {lemmaHits.map((lemma) => (
              <button
                key={`${lemma.name}-${lemma.page}`}
                type="button"
                className="lemma-chip shrink-0 rounded-full border border-chrome-border px-3 py-1 font-ui text-xs text-chrome-muted"
                data-active={
                  query.length > 1 &&
                  lemma.name
                    .toLocaleLowerCase("de")
                    .includes(query.trim().toLocaleLowerCase("de"))
                }
                onClick={() => {
                  const i = PAGES.findIndex((p) => p.printed === lemma.page + 1);
                  setIndex(i >= 0 ? i : lemma.page);
                  setQuery(lemma.name);
                  setMode("reconstruction");
                }}
              >
                {lemma.name}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <main className="flex flex-1 justify-center px-3 py-6 md:px-6 md:py-10">
        {mode === "gitter" ? (
          <LayoutLab
            printed={page.printed}
            page={page}
            onPrinted={(n) => {
              const i = PAGES.findIndex((p) => p.printed === n);
              if (i >= 0) setIndex(i);
            }}
          />
        ) : mode === "agent" ? (
          <AgentDesk donePrinted={LAST_TRANSCRIBED} />
        ) : mode === "tafeln" ? (
          <PlatesGallery
            onOpen={openPlatePage}
            cacheBust={cacheBust}
            onReload={() => setCacheBust((n) => n + 1)}
          />
        ) : (
          <div
            className={cn(
              "flex w-full max-w-[92rem] flex-col items-center gap-6",
              mode === "synopse" &&
                "lg:flex-row lg:items-start lg:justify-center lg:gap-4 [&>*]:lg:min-w-0 [&>*]:lg:flex-1",
            )}
          >
            {mode !== "scan" ? (
              <EncyclopediaPage page={page} query={query} />
            ) : null}
            {mode !== "reconstruction" ? <ScanPage page={page} /> : null}
          </div>
        )}
      </main>

      <footer className="archive-chrome border-t border-chrome-border px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-[92rem] flex-wrap items-center justify-between gap-2 font-ui text-xs text-chrome-muted">
          <span className="inline-flex items-center gap-2">
            <BookOpen className="size-3.5" />
            {mode === "tafeln"
              ? `Tafeln des Bandes II · ${PLATES.length} ganze Blätter`
              : mode === "agent"
                ? `Setzer-Agent · ${PAGES.length} Druckseiten im Speicher`
                : mode === "gitter"
                  ? "Koordinatenpipeline · Caption-Anker · Zwei-Masken-System"
                  : `Druckseite ${page.printed} · Dateiseite ${page.scanFile} · Kustos »${page.catchword}«`}
          </span>
          <span>F. A. Brockhaus, Leipzig 1929</span>
        </div>
      </footer>

      {pdf ? (
        <div className="pdf-setzer" role="status" aria-live="polite">
          <div className="pdf-setzer-card">
            <p className="pdf-setzer-kicker">Kolumnensatz</p>
            <h2>PDF wird gesetzt</h2>
            <p>
              {pdf.phase === "schrift"
                ? "Antiqua-Schrift wird eingebunden."
                : pdf.phase === "heften"
                  ? "Bogen werden geheftet."
                  : `Antiqua-Blätter S. ${pdf.done} von ${pdf.total}`}
            </p>
            <div className="pdf-setzer-track">
              <div
                className="pdf-setzer-bar"
                style={{
                  width: `${Math.max(
                    3,
                    Math.round(
                      pdf.phase === "schrift"
                        ? 4
                        : pdf.phase === "heften"
                          ? 98
                          : (pdf.done / Math.max(1, pdf.total)) * 96 + 4,
                    ),
                  )}%`,
                }}
              />
            </div>
            <p className="pdf-setzer-note">
              Tafeln erscheinen als Legende; die Rasterblätter bleiben im Tafelapparat.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
