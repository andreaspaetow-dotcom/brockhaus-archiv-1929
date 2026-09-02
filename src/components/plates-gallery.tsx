import { useState } from "react";
import { PLATES } from "@/data/pages";
import { printedLabel } from "@/data/plates";

export function PlatesGallery({
  onOpen,
  cacheBust,
  onReload,
}: {
  onOpen: (pageIndex: number) => void;
  cacheBust: number;
  onReload: () => void;
}) {
  const [raw, setRaw] = useState(false);
  const srcOf = (src: string) =>
    cacheBust > 0 ? `${src}${src.includes("?") ? "&" : "?"}v=${cacheBust}` : src;
  return (
    <section className="w-full max-w-[92rem]" aria-label="Tafeln">
      <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-ui text-[0.68rem] tracking-[0.18em] text-chrome-muted uppercase">
            Tafeln des Bandes II · ganze Blätter
          </p>
          <h2 className="font-page mt-1 text-2xl text-chrome-fg">
            Tafeln aus dem Brockhaus 1929
          </h2>
          <p className="mt-1 max-w-2xl font-ui text-sm text-chrome-muted">
            Farbtafeln, Stadtpläne und Legenden als ganze Blätter der Vorlage —
            nicht als Spaltenbild. Antippen öffnet das Blatt in der Antiqua.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setRaw((v) => !v)}
            className="mode-tab flex h-10 items-center gap-2 rounded-[var(--radius-sm)] border border-chrome-border px-3 font-ui text-sm text-chrome-fg"
          >
            {raw ? "Kacheln" : "JPEGs zeigen"}
          </button>
          <button
            type="button"
            onClick={onReload}
            className="mode-tab flex h-10 items-center gap-2 rounded-[var(--radius-sm)] border border-chrome-border px-3 font-ui text-sm text-chrome-fg"
          >
            Tafeln neu laden
          </button>
        </div>
      </header>
      {raw ? (
        <ol className="grid gap-8">
          {PLATES.map((plate) => (
            <li
              key={plate.src}
              className="overflow-hidden rounded-[var(--radius-lg)] border border-chrome-border bg-white p-4"
            >
              <p className="mb-2 font-ui text-[0.68rem] tracking-[0.14em] text-ink-muted uppercase">
                S.&nbsp;{printedLabel(plate.printed)} · {plate.kind}
              </p>
              <img
                src={srcOf(plate.src)}
                alt={plate.alt}
                loading="lazy"
                className="mx-auto block h-auto max-w-full bg-white"
              />
              <p className="mt-2 font-page text-sm italic text-ink">
                {plate.caption}
              </p>
              <a
                href={plate.src}
                download={`brockhaus-s${printedLabel(plate.printed)}-tafel.jpg`}
                className="mt-2 inline-block font-ui text-sm text-accent underline"
              >
                JPEG speichern
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PLATES.map((plate) => (
            <button
              key={plate.src}
              type="button"
              onClick={() => onOpen(plate.page)}
              className="group overflow-hidden rounded-[var(--radius-lg)] border border-chrome-border bg-paper text-left text-ink shadow-[0_18px_40px_-24px_rgb(0_0_0_/_0.7)]"
            >
              <div className="bg-paper-shadow px-3 py-2 font-ui text-[0.68rem] tracking-[0.14em] text-ink-muted uppercase">
                S.&nbsp;{printedLabel(plate.printed)} · {plate.kind}
              </div>
              <img
                src={srcOf(plate.src)}
                alt={plate.alt}
                loading="lazy"
                className="block w-full bg-white object-contain"
                style={{ width: "100%", height: "auto" }}
              />
              <figcaption className="border-t border-black/10 px-3 py-3 font-page text-sm italic text-ink">
                {plate.caption}
              </figcaption>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
