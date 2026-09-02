import { useEffect, useMemo, useState } from "react";
import {
  Braces,
  Check,
  Copy,
  Layers,
  ScanSearch,
  Type,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacsimilePage } from "@/components/facsimile-page";
import {
  boxStyle,
  fetchLayoutIndex,
  fetchManifest,
  layoutAsset,
  layoutDir,
} from "@/data/layout";
import { PAGES } from "@/data/pages";
import { scanUrl } from "@/components/encyclopedia-page";
import type {
  EncPage,
  LayoutCaption,
  LayoutGraphic,
  LayoutIndexEntry,
  LayoutManifest,
} from "@/data/types";

const STEPS = [
  { id: 1, label: "Analyse", hint: "Bounding-Box-Gitter", Icon: ScanSearch },
  { id: 2, label: "Masken", hint: "Zwei-Masken-System", Icon: Layers },
  { id: 3, label: "Matrix", hint: "Relayout-JSON", Icon: Braces },
  { id: 4, label: "Rekonstruktion", hint: "Koordinaten spiegeln", Icon: Type },
] as const;

type StepId = (typeof STEPS)[number]["id"];

export function LayoutLab({
  printed,
  page,
  onPrinted,
}: {
  printed: number;
  page: EncPage;
  onPrinted: (n: number) => void;
}) {
  const [index, setIndex] = useState<LayoutIndexEntry[]>([]);
  const [manifest, setManifest] = useState<LayoutManifest | null>(null);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<StepId>(1);
  const [hover, setHover] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [maskMode, setMaskMode] = useState<"a" | "b" | "both">("both");

  useEffect(() => {
    let live = true;
    fetchLayoutIndex().then((rows) => {
      if (live) setIndex(rows);
    });
    return () => {
      live = false;
    };
  }, []);

  useEffect(() => {
    let live = true;
    setReady(false);
    setManifest(null);
    fetchManifest(printed).then((m) => {
      if (!live) return;
      setManifest(m);
      setReady(true);
    });
    return () => {
      live = false;
    };
  }, [printed]);

  const graphics = useMemo(
    () =>
      (manifest?.elements.filter((e) => e.type === "graphic") ??
        []) as LayoutGraphic[],
    [manifest],
  );
  const captions = useMemo(
    () =>
      (manifest?.elements.filter((e) => e.type === "caption") ??
        []) as LayoutCaption[],
    [manifest],
  );
  const dir = layoutDir(printed);
  const canvas = manifest?.canvas_size;
  const jsonText = manifest
    ? JSON.stringify(
        {
          page_id: manifest.page_id,
          canvas_size: manifest.canvas_size,
          columns: manifest.columns,
          pipeline: manifest.pipeline,
          elements: manifest.elements.filter((e) => e.type !== "text_zone"),
        },
        null,
        2,
      )
    : "";

  const copyJson = async () => {
    try {
      await navigator.clipboard.writeText(jsonText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="layout-lab w-full max-w-[92rem]" aria-label="Layout-Gitter">
      <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-ui text-[0.68rem] tracking-[0.18em] text-chrome-muted uppercase">
            Koordinatengitter · Band II
          </p>
          <h2 className="font-page mt-1 text-2xl text-chrome-fg">
            Bild-Text-Trennung, S.&nbsp;{printed}
          </h2>
          <p className="mt-1 max-w-2xl font-ui text-sm text-chrome-muted">
            Caption als Unterkante, Maske&nbsp;A (Fraktur-Wortboxen) von der
            Grafikfläche subtrahiert, Rekonstruktion auf denselben Koordinaten.
            {index.length
              ? ` ${index.length} Seiten mit erkanntem Grafikslot.`
              : null}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {STEPS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              className="mode-tab flex h-10 items-center gap-2 rounded-[var(--radius-sm)] px-3 font-ui text-sm text-chrome-fg"
              data-active={step === id}
              onClick={() => setStep(id)}
            >
              <Icon className="size-4" />
              <span>
                {id}&nbsp;{label}
              </span>
            </button>
          ))}
        </div>
      </header>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {index.map((row) => (
          <button
            key={row.page_id}
            type="button"
            className="lemma-chip shrink-0 rounded-full border border-chrome-border px-3 py-1 font-ui text-xs text-chrome-muted"
            data-active={row.printed === printed}
            aria-label={`Seite ${row.printed}, ${row.graphics} Grafiken`}
            title={`${row.graphics} Grafik${row.graphics === 1 ? "" : "en"}`}
            onClick={() => onPrinted(row.printed)}
          >
            S.&nbsp;{row.printed}
          </button>
        ))}
      </div>

      {!ready ? (
        <div className="rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated p-8 font-ui text-sm text-chrome-muted">
          Gitter wird geladen …
        </div>
      ) : !manifest || !canvas ? (
        <EmptyLayout printed={printed} />
      ) : step === 4 ? (
        <div className="flex justify-center">
          <FacsimilePage page={page} manifest={manifest} />
        </div>
      ) : step === 3 ? (
        <MatrixPane
          manifest={manifest}
          jsonText={jsonText}
          copied={copied}
          onCopy={copyJson}
          graphics={graphics}
          captions={captions}
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)]">
          <div className="layout-stage overflow-hidden rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated">
            <div className="relative">
              <img
                src={layoutAsset(dir, "page.jpg")}
                alt={`Scan S. ${printed} als Koordinatenfeld`}
                className="block w-full"
              />
              <div className="absolute inset-0">
                {step === 1 || maskMode !== "b"
                  ? manifest.mask_a.slice(0, 420).map((box, i) => (
                      <span
                        key={`a-${i}`}
                        className="layout-box text"
                        data-filled={step === 2 && (maskMode === "a" || maskMode === "both")}
                        style={boxStyle(box, canvas)}
                      />
                    ))
                  : null}
                {graphics.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className="layout-box graphic"
                    data-filled={step === 2 && (maskMode === "b" || maskMode === "both")}
                    data-hover={hover === g.id}
                    style={boxStyle(g.original_coordinates, canvas)}
                    onMouseEnter={() => setHover(g.id)}
                    onMouseLeave={() => setHover(null)}
                    aria-label={g.caption || g.id}
                  />
                ))}
                {captions.map((c) => (
                  <span
                    key={c.associated_with}
                    className="layout-box caption"
                    data-filled={step === 2 && (maskMode === "b" || maskMode === "both")}
                    data-hover={hover === c.associated_with}
                    style={boxStyle(c.original_coordinates, canvas)}
                  />
                ))}
              </div>
            </div>
          </div>
          <aside className="rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated p-4">
            {step === 2 ? (
              <div className="mb-4 flex gap-1 rounded-[var(--radius-md)] border border-chrome-border p-1">
                {(
                  [
                    ["a", "Maske A"],
                    ["b", "Maske B"],
                    ["both", "Beide"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    className="mode-tab h-9 flex-1 rounded-[var(--radius-sm)] font-ui text-xs text-chrome-fg"
                    data-active={maskMode === id}
                    onClick={() => setMaskMode(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            ) : null}
            <p className="mb-3 font-ui text-xs leading-relaxed text-chrome-muted">
              {step === 1
                ? "Hierarchische Segmentierung in Text_Fraktur, Graphic und Caption. Die kleinere Fraktur unter der Grafik ist der Unterkanten-Anker."
                : "Maske A sind die OCR-Wortboxen der Brotschrift. Maske B entsteht, indem diese Boxen von der Grafikfläche subtrahiert werden — plus 3–5 px Schutzraum aus der Caption-Schriftgröße."}
            </p>
            <Legend />
            <ol className="mt-4 space-y-3">
              {graphics.map((g) => {
                const cap = captions.find((c) => c.associated_with === g.id);
                const c = g.original_coordinates;
                return (
                  <li
                    key={g.id}
                    className="rounded-[var(--radius-md)] border border-chrome-border p-3"
                    data-hover={hover === g.id}
                    onMouseEnter={() => setHover(g.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-ui text-xs tracking-wide text-chrome-muted uppercase">
                        {g.id} · {g.slot} · {g.kind}
                      </p>
                      <span className="font-mono text-[0.65rem] text-chrome-muted">
                        {c.x1},{c.y1}–{c.x2},{c.y2}
                      </span>
                    </div>
                    {step === 2 ? (
                      <img
                        src={layoutAsset(dir, g.optimized_file)}
                        alt={g.caption || g.id}
                        className="mt-2 max-h-40 w-full bg-paper object-contain"
                      />
                    ) : null}
                    <p className="font-page mt-2 text-sm italic text-chrome-fg">
                      {cap?.text_clean || g.caption || "ohne Caption"}
                    </p>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      )}
    </section>
  );
}

function Legend() {
  return (
    <ul className="grid grid-cols-3 gap-2 font-ui text-[0.68rem] tracking-wide text-chrome-muted uppercase">
      <li className="flex items-center gap-2">
        <span className="legend-swatch text" /> Text_Fraktur
      </li>
      <li className="flex items-center gap-2">
        <span className="legend-swatch graphic" /> Graphic
      </li>
      <li className="flex items-center gap-2">
        <span className="legend-swatch caption" /> Caption
      </li>
    </ul>
  );
}

function MatrixPane({
  manifest,
  jsonText,
  copied,
  onCopy,
  graphics,
  captions,
}: {
  manifest: LayoutManifest;
  jsonText: string;
  copied: boolean;
  onCopy: () => void;
  graphics: LayoutGraphic[];
  captions: LayoutCaption[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-ui text-sm font-medium text-chrome-fg">
            Relayout-Matrix
          </h3>
          <Button variant="outline" size="sm" onClick={onCopy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Kopiert" : "JSON kopieren"}
          </Button>
        </div>
        <p className="mt-1 font-ui text-xs text-chrome-muted">
          {manifest.page_id} · Leinwand {manifest.canvas_size.width}×
          {manifest.canvas_size.height}
        </p>
        <pre className="layout-json mt-3 max-h-[36rem] overflow-auto rounded-[var(--radius-md)] border border-chrome-border p-3">
          {jsonText}
        </pre>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated p-4">
        <h3 className="font-ui text-sm font-medium text-chrome-fg">
          Elemente
        </h3>
        <table className="mt-3 w-full font-ui text-xs text-chrome-muted">
          <thead>
            <tr className="text-left text-chrome-fg">
              <th className="py-1 pr-2">Typ</th>
              <th className="py-1 pr-2">ID</th>
              <th className="py-1">Koordinaten</th>
            </tr>
          </thead>
          <tbody>
            {graphics.map((g) => {
              const c = g.original_coordinates;
              return (
                <tr key={g.id} className="border-t border-chrome-border">
                  <td className="py-2 pr-2 text-chrome-fg">Graphic</td>
                  <td className="py-2 pr-2">{g.id}</td>
                  <td className="font-mono py-2">
                    {c.x1},{c.y1} → {c.x2},{c.y2}
                  </td>
                </tr>
              );
            })}
            {captions.map((cap) => {
              const c = cap.original_coordinates;
              return (
                <tr
                  key={cap.associated_with}
                  className="border-t border-chrome-border"
                >
                  <td className="py-2 pr-2 text-chrome-fg">Caption</td>
                  <td className="py-2 pr-2">{cap.associated_with}</td>
                  <td className="font-mono py-2">
                    {c.x1},{c.y1} → {c.x2},{c.y2}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmptyLayout({ printed }: { printed: number }) {
  const enc = PAGES.find((p) => p.printed === printed);
  return (
    <div className="rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated p-5">
      <p className="font-ui text-sm text-chrome-muted">
        Kein Caption-Anker auf Druckseite {printed}. Die Pipeline legt nur dann
        eine Grafikbox an, wenn unter einer Tintenfläche kleinere Fraktur als
        Bildunterschrift sitzt oder der Satz um die Figur herumläuft.
      </p>
      {enc ? (
        <img
          src={scanUrl(enc)}
          alt={`Scan ohne Grafikslot, S. ${printed}`}
          className="mt-4 max-h-[36rem] w-full rounded-[var(--radius-md)] object-contain"
        />
      ) : null}
    </div>
  );
}
