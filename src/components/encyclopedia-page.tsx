import type { Block, EncPage } from "@/data/pages";
import { bindPageFigures } from "@/data/figures";
import { printedLabel } from "@/data/plates";
import { SCAN_BY_IA } from "@/data/scan-pair";

function Blocks({
  blocks,
  query,
  dropFirst,
}: {
  blocks: Block[];
  query: string;
  dropFirst?: boolean;
}) {
  const q = query.trim().toLocaleLowerCase("de");
  const mark = (html: string) => {
    if (!q || q.length < 2) return html;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return html.replace(new RegExp(`(${esc})`, "gi"), "<mark>$1</mark>");
  };

  return (
    <>
      {dropFirst ? <span className="enc-drop" aria-hidden>A</span> : null}
      {blocks.map((block, i) => {
        if (block.kind === "drop") return null;
        if (block.kind === "p") {
          const isTable = block.html.includes("<table");
          const Tag = isTable ? "div" : "p";
          return (
            <Tag
              key={i}
              className={isTable ? "enc-table-wrap" : undefined}
              dangerouslySetInnerHTML={{ __html: mark(block.html) }}
            />
          );
        }
        if (block.kind === "bibl") {
          return (
            <p
              key={i}
              className="bibl"
              dangerouslySetInnerHTML={{ __html: mark(block.html) }}
            />
          );
        }
        return (
          <figure
            key={i}
            className={
              block.figure.span === "page"
                ? "enc-figure span-page"
                : block.figure.float === "right"
                  ? "enc-figure float-right"
                  : "enc-figure"
            }
          >
            <img
              src={block.figure.src}
              alt={block.figure.alt}
            />
            {block.figure.caption ? (
              <figcaption className="enc-caption">{block.figure.caption}</figcaption>
            ) : null}
          </figure>
        );
      })}
    </>
  );
}

function legendBlocks(page: EncPage): Block[] {
  return [...page.left, ...page.right].filter((b) => {
    if (b.kind !== "p" && b.kind !== "bibl") return false;
    const t = b.html
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s*Zuschnitt morgen\.?/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    return t.length > 0;
  });
}

function PlateLeaf({ page, query }: { page: EncPage; query: string }) {
  const q = query.trim().toLocaleLowerCase("de");
  const mark = (html: string) => {
    if (!q || q.length < 2) return html;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return html.replace(new RegExp(`(${esc})`, "gi"), "<mark>$1</mark>");
  };
  const src = scanUrl(page);
  const legend = legendBlocks(page).map((b) => ({
    ...b,
    html:
      b.kind === "p" || b.kind === "bibl"
        ? b.html.replace(/\s*Zuschnitt morgen\.?/gi, "")
        : "",
  }));

  return (
    <article
      className="enc-page enc-plate"
      lang="de"
      aria-label={`Band II, Tafel ${printedLabel(page.printed)}`}
    >
      <header className="enc-running">
        <span className="left">{page.headerLeft}</span>
        <span className="mid">Bd. II · Tafel</span>
        <span className="right">{page.headerRight}</span>
      </header>
      <figure className="enc-plate-leaf">
        <img
          src={src}
          alt={`${page.headerLeft}, Tafel 1929`}
          crossOrigin="anonymous"
        />
        {legend.length ? (
          <figcaption className="enc-plate-legend">
            {legend.map((b, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: mark(b.kind === "p" || b.kind === "bibl" ? b.html : ""),
                }}
              />
            ))}
          </figcaption>
        ) : null}
      </figure>
      <footer className="enc-foot">
        <span className="sig">{page.signature ?? ""}</span>
        <span className="num">{printedLabel(page.printed)}</span>
        <span className="kust">{page.catchword}</span>
      </footer>
    </article>
  );
}

export function EncyclopediaPage({
  page,
  query,
}: {
  page: EncPage;
  query: string;
}) {
  if (page.plate) return <PlateLeaf page={page} query={query} />;

  const bound = bindPageFigures(page);
  const isBanner = (b: Block) => b.kind === "figure" && b.figure.span === "page";
  const banners = [...bound.left, ...bound.right].filter(isBanner);
  const left = bound.left.filter((b) => !isBanner(b));
  const right = bound.right.filter((b) => !isBanner(b));
  const hasDrop = left.some((b) => b.kind === "drop");
  return (
    <article
      className="enc-page"
      lang="de"
      aria-label={`Band II, Seite ${page.printed}`}
    >
      <header className="enc-running">
        <span className="left">{page.headerLeft}</span>
        <span className="mid">Bd. II</span>
        <span className="right">{page.headerRight}</span>
      </header>
      {banners.length ? (
        <div className="enc-banner">
          <Blocks blocks={banners} query={query} />
        </div>
      ) : null}
      <div className="enc-cols">
        <div className="enc-col">
          <Blocks blocks={left} query={query} dropFirst={hasDrop} />
        </div>
        <div className="enc-col">
          <Blocks blocks={right} query={query} />
        </div>
      </div>
      <footer className="enc-foot">
        <span className="sig">{page.signature ?? ""}</span>
        <span className="num">{page.printed}</span>
        <span className="kust">{page.catchword}</span>
      </footer>
    </article>
  );
}

export function scanUrl(page: EncPage): string {
  const paired = SCAN_BY_IA[page.scanFile];
  if (paired) return paired;
  if (page.scanSrc) return page.scanSrc;
  const n = page.printed;
  if (Number.isInteger(n)) return `/scans/p${String(n).padStart(2, "0")}.jpg`;
  return `/scans/p${String(Math.floor(n)).padStart(2, "0")}tafel.jpg`;
}

export function ScanPage({ page }: { page: EncPage }) {
  const src = scanUrl(page);
  return (
    <figure className="scan-frame m-0">
      <img
        src={src}
        alt={`Originalscan, Druckseite ${printedLabel(page.printed)} (Datei-Seite ${page.scanFile})`}
        crossOrigin="anonymous"
      />
    </figure>
  );
}
