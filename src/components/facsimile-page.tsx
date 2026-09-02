import { useLayoutEffect, useMemo, useRef } from "react";
import type {
  BBox,
  EncPage,
  LayoutManifest,
  LayoutGraphic,
  LayoutCaption,
  LayoutTextZone,
} from "@/data/types";
import { boxStyle, layoutDir, layoutAsset } from "@/data/layout";

function zoneCopy(page: EncPage, zones: LayoutTextZone[]) {
  const strip = (html: string) =>
    html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&nbsp/g, " ");
  const colText = (side: "left" | "right") =>
    (side === "left" ? page.left : page.right)
      .filter((b) => b.kind === "p" || b.kind === "bibl")
      .map((b) => strip(b.html))
      .join(" ");
  const left = colText("left");
  const right = colText("right");
  const leftZ = zones.filter((z) => z.column === "left");
  const rightZ = zones.filter((z) => z.column === "right");
  const split = (text: string, zs: LayoutTextZone[]) => {
    if (!zs.length) return {} as Record<string, string>;
    const weights = zs.map((z) => {
      const c = z.original_coordinates;
      return Math.max(24, (c.y2 - c.y1) * (c.x2 - c.x1));
    });
    const total = weights.reduce((a, b) => a + b, 0) || 1;
    const out: Record<string, string> = {};
    let cursor = 0;
    zs.forEach((z, i) => {
      const share = weights[i] / total;
      const end =
        i === zs.length - 1
          ? text.length
          : Math.min(text.length, cursor + Math.round(text.length * share));
      let cut = end;
      if (i < zs.length - 1) {
        const sp = text.lastIndexOf(" ", end);
        if (sp > cursor + 20) cut = sp;
      }
      out[z.id] = text.slice(cursor, cut).trim();
      cursor = cut;
    });
    return out;
  };
  return { ...split(left, leftZ), ...split(right, rightZ) };
}

function captionBox(graphic: LayoutGraphic, caption: LayoutCaption): BBox {
  const g = graphic.original_coordinates;
  const lines = Math.min(3, Math.max(1, Math.ceil(caption.text_clean.length / 46)));
  const h = Math.max(28, Math.round((g.x2 - g.x1) * 0.055) * lines);
  return {
    x1: g.x1,
    y1: g.y2 + 4,
    x2: g.x2,
    y2: g.y2 + 4 + h,
  };
}

function FitZone({
  wrap,
  style,
  text,
}: {
  wrap?: boolean;
  style: React.CSSProperties;
  text: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      let size = wrap ? 10 : 12.5;
      el.style.fontSize = `${size}px`;
      let guard = 0;
      while (
        guard < 20 &&
        size > 5.5 &&
        (el.scrollHeight > el.clientHeight + 1 ||
          el.scrollWidth > el.clientWidth + 1)
      ) {
        size -= 0.35;
        el.style.fontSize = `${size}px`;
        guard += 1;
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text, wrap]);
  return (
    <div
      ref={ref}
      className="facsimile-zone"
      data-wrap={Boolean(wrap)}
      style={style}
    >
      {text}
    </div>
  );
}

export function FacsimilePage({
  page,
  manifest,
}: {
  page: EncPage;
  manifest: LayoutManifest;
}) {
  const canvas = manifest.canvas_size;
  const dir = layoutDir(manifest.printed);
  const graphics = manifest.elements.filter(
    (e): e is LayoutGraphic => e.type === "graphic",
  );
  const captions = manifest.elements.filter(
    (e): e is LayoutCaption => e.type === "caption",
  );
  const zones = manifest.elements.filter(
    (e): e is LayoutTextZone => e.type === "text_zone",
  );
  const copy = useMemo(() => zoneCopy(page, zones), [page, zones]);

  return (
    <div
      className="facsimile-frame"
      style={{ paddingBottom: `${(canvas.height / canvas.width) * 100}%` }}
    >
      <article
        className="facsimile"
        lang="de"
        aria-label={`Koordinatenrekonstruktion Seite ${page.printed}`}
      >
        <header className="facsimile-running">
          <span>{page.headerLeft}</span>
          <span>Bd. II</span>
          <span>{page.headerRight}</span>
        </header>
        {zones.map((z) => (
          <FitZone
            key={z.id}
            wrap={Boolean(z.wrap)}
            style={boxStyle(z.original_coordinates, canvas)}
            text={copy[z.id] ?? ""}
          />
        ))}
        {graphics.map((g) => (
          <figure
            key={g.id}
            className="facsimile-graphic"
            style={boxStyle(g.original_coordinates, canvas)}
          >
            <img
              src={layoutAsset(dir, g.optimized_file)}
              alt={g.caption || g.id}
            />
          </figure>
        ))}
        {captions.map((c) => {
          const g = graphics.find((x) => x.id === c.associated_with);
          const box = g ? captionBox(g, c) : c.original_coordinates;
          return (
            <p
              key={`${c.associated_with}-cap`}
              className="facsimile-caption"
              style={boxStyle(box, canvas)}
            >
              {c.text_clean}
            </p>
          );
        })}
        <footer className="facsimile-foot">
          <span>{page.signature ?? ""}</span>
          <span>{page.printed}</span>
          <span>{page.catchword}</span>
        </footer>
      </article>
    </div>
  );
}
