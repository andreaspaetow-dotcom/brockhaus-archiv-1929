import { jsPDF } from "jspdf";
import type { Block, EncPage } from "@/data/types";
import { bindPageFigures } from "@/data/figures";
import { printedLabel } from "@/data/plates";

export type PdfProgress = {
  phase: "schrift" | "satz" | "heften";
  done: number;
  total: number;
};

type Run = { text: string; bold: boolean; italic: boolean };

type Line = { runs: Run[]; size: number; leading: number };

type Prepared = { lines: Line[]; gap: number };

const FONT = "EBGaramond";
const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN_X = 14;
const MARGIN_TOP = 12;
const MARGIN_BOTTOM = 14;
const GUTTER = 5;
const HEADER_H = 9;
const FOOTER_H = 8;
const COL_W = (PAGE_W - MARGIN_X * 2 - GUTTER) / 2;
const PAPER = { r: 251, g: 250, b: 246 };
const INK = { r: 26, g: 26, b: 26 };
const MUTED = { r: 74, g: 74, b: 74 };
const RULE = { r: 42, g: 42, b: 42 };
const ACCENT = { r: 143, g: 58, b: 48 };

const FONT_FILES: Array<{ file: string; style: string }> = [
  { file: "EBGaramond-Regular.ttf", style: "normal" },
  { file: "EBGaramond-Italic.ttf", style: "italic" },
  { file: "EBGaramond-SemiBold.ttf", style: "bold" },
  { file: "EBGaramond-SemiBoldItalic.ttf", style: "bolditalic" },
];

const ENTITIES: Record<string, string> = {
  nbsp: " ",
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  mdash: "—",
  ndash: "–",
  hellip: "…",
  szlig: "ß",
  auml: "ä",
  ouml: "ö",
  uuml: "ü",
  Auml: "Ä",
  Ouml: "Ö",
  Uuml: "Ü",
  eacute: "é",
  egrave: "è",
  agrave: "à",
  aacute: "á",
  iacute: "í",
  oacute: "ó",
  uacute: "ú",
  ntilde: "ñ",
  ccedil: "ç",
  deg: "°",
  times: "×",
  divide: "÷",
  half: "½",
  frac14: "¼",
  frac34: "¾",
  sect: "§",
  para: "¶",
  dagger: "†",
  Dagger: "‡",
  laquo: "«",
  raquo: "»",
  ldquo: "“",
  rdquo: "”",
  lsquo: "‘",
  rsquo: "’",
  middot: "·",
  bull: "•",
};

function decodeEntities(raw: string): string {
  return raw
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&([a-zA-Z]+);/g, (m, name: string) => ENTITIES[name] ?? m);
}

function normalizeGlyphs(s: string): string {
  return s
    .replace(/\u00ad/g, "")
    .replace(/[\u00a0\u202f\u2009\u200a]/g, " ")
    .replace(/[‐‑‒]/g, "-")
    .replace(/\u2192/g, "→")
    .replace(/\r\n/g, "\n");
}

function htmlToRuns(html: string): Run[] {
  const runs: Run[] = [];
  let bold = 0;
  let italic = 0;
  const re = /<\/?([a-zA-Z][a-zA-Z0-9]*)([^>]*)>|([^<]+)/g;
  let m: RegExpExecArray | null;
  const push = (text: string) => {
    const t = normalizeGlyphs(decodeEntities(text));
    if (!t) return;
    const last = runs[runs.length - 1];
    const b = bold > 0;
    const i = italic > 0;
    if (last && last.bold === b && last.italic === i && !t.startsWith("\n") && !last.text.endsWith("\n")) {
      last.text += t;
    } else {
      runs.push({ text: t, bold: b, italic: i });
    }
  };
  while ((m = re.exec(html))) {
    if (m[3]) {
      push(m[3]);
      continue;
    }
    const tag = m[1].toLowerCase();
    const closing = m[0].startsWith("</");
    const attrs = m[2] ?? "";
    if (tag === "br" || tag === "hr") {
      push("\n");
      continue;
    }
    if (tag === "tr" && closing) {
      push("\n");
      continue;
    }
    if ((tag === "td" || tag === "th") && closing) {
      push("  ");
      continue;
    }
    if (tag === "p" || tag === "div" || tag === "li") {
      if (closing) push("\n");
      continue;
    }
    if (tag === "span" && /sr-only/.test(attrs)) continue;
    if (/\/>$/.test(m[0])) continue;
    const d = closing ? -1 : 1;
    if (tag === "strong" || tag === "b") bold = Math.max(0, bold + d);
    else if (tag === "em" || tag === "i") italic = Math.max(0, italic + d);
  }
  return runs.filter((r) => r.text.length);
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunks: string[] = [];
  for (let i = 0; i < bytes.length; i += 0x8000) {
    chunks.push(String.fromCharCode(...bytes.subarray(i, i + 0x8000)));
  }
  return btoa(chunks.join(""));
}

async function loadFonts(doc: jsPDF): Promise<void> {
  const loaded = await Promise.all(
    FONT_FILES.map(async ({ file, style }) => {
      const res = await fetch(`/fonts/${file}`);
      if (!res.ok) throw new Error(`Schrift ${file}`);
      const b64 = arrayBufferToBase64(await res.arrayBuffer());
      return { file, style, b64 };
    }),
  );
  for (const { file, style, b64 } of loaded) {
    doc.addFileToVFS(file, b64);
    doc.addFont(file, FONT, style);
  }
  doc.setFont(FONT, "normal");
}

function face(doc: jsPDF, bold: boolean, italic: boolean) {
  const style = bold && italic ? "bolditalic" : bold ? "bold" : italic ? "italic" : "normal";
  doc.setFont(FONT, style);
}

function wrapRuns(doc: jsPDF, runs: Run[], width: number, size: number): Run[][] {
  doc.setFontSize(size);
  const lines: Run[][] = [];
  let line: Run[] = [];
  let lineW = 0;

  const spaceW = (() => {
    face(doc, false, false);
    return doc.getTextWidth(" ");
  })();

  const measure = (text: string, bold: boolean, italic: boolean) => {
    face(doc, bold, italic);
    return doc.getTextWidth(text);
  };

  const commit = () => {
    if (line.length) lines.push(line);
    line = [];
    lineW = 0;
  };

  const addToken = (token: string, bold: boolean, italic: boolean, leadingSpace: boolean) => {
    let rest = token;
    while (rest.length) {
      const pad = line.length && leadingSpace ? spaceW : 0;
      const w = measure(rest, bold, italic);
      if (line.length && pad + w + lineW > width) {
        commit();
        leadingSpace = false;
        continue;
      }
      if (!line.length && w > width && rest.length > 1) {
        let lo = 1;
        let hi = rest.length;
        while (lo < hi) {
          const mid = Math.ceil((lo + hi) / 2);
          if (measure(rest.slice(0, mid), bold, italic) <= width) lo = mid;
          else hi = mid - 1;
        }
        const cut = Math.max(1, lo);
        line.push({ text: rest.slice(0, cut), bold, italic });
        commit();
        rest = rest.slice(cut);
        leadingSpace = false;
        continue;
      }
      const text = (line.length && leadingSpace ? " " : "") + rest;
      const last = line[line.length - 1];
      if (last && last.bold === bold && last.italic === italic) last.text += text;
      else line.push({ text, bold, italic });
      lineW += pad + w;
      break;
    }
  };

  for (const run of runs) {
    const parts = run.text.split("\n");
    parts.forEach((part, idx) => {
      if (idx > 0) commit();
      const words = part.split(/ +/).filter((w) => w.length);
      words.forEach((word, wi) => addToken(word, run.bold, run.italic, wi > 0 || (idx === 0 && line.length > 0)));
    });
  }
  commit();
  return lines.length ? lines : [[]];
}

function drawLine(doc: jsPDF, line: Line, x: number, y: number) {
  let cx = x;
  for (const run of line.runs) {
    face(doc, run.bold, run.italic);
    doc.setFontSize(line.size);
    doc.text(run.text, cx, y);
    cx += doc.getTextWidth(run.text);
  }
}

function paper(doc: jsPDF) {
  doc.setFillColor(PAPER.r, PAPER.g, PAPER.b);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
}

function rule(doc: jsPDF, y: number, alpha = 1) {
  doc.setDrawColor(RULE.r, RULE.g, RULE.b);
  doc.setLineWidth(0.18 * alpha);
  doc.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
}

function runningHead(doc: jsPDF, page: EncPage, cont: boolean, plate: boolean) {
  paper(doc);
  doc.setTextColor(INK.r, INK.g, INK.b);
  face(doc, false, false);
  doc.setFontSize(8);
  const y = MARGIN_TOP + 3.2;
  const mid = plate ? "Bd. II · Tafel" : cont ? "Bd. II · Forts." : "Bd. II";
  const left = page.headerLeft;
  const right = page.headerRight;
  doc.text(left, MARGIN_X, y);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  const midW = doc.getTextWidth(mid);
  doc.text(mid, (PAGE_W - midW) / 2, y);
  doc.setTextColor(INK.r, INK.g, INK.b);
  doc.text(right, PAGE_W - MARGIN_X - doc.getTextWidth(right), y);
  rule(doc, MARGIN_TOP + 5.2);
}

function runningFoot(doc: jsPDF, page: EncPage) {
  const y = PAGE_H - MARGIN_BOTTOM + 1.2;
  rule(doc, PAGE_H - MARGIN_BOTTOM - 4.2);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  face(doc, false, false);
  doc.setFontSize(8);
  const num = printedLabel(page.printed);
  const sig = page.signature ?? "";
  const kust = page.catchword ? `»${page.catchword}«` : "";
  doc.text(sig, MARGIN_X, y);
  const numW = doc.getTextWidth(num);
  doc.setTextColor(INK.r, INK.g, INK.b);
  doc.text(num, (PAGE_W - numW) / 2, y);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  doc.text(kust, PAGE_W - MARGIN_X - doc.getTextWidth(kust), y);
}

function blocksToPrepared(
  doc: jsPDF,
  blocks: Block[],
  width: number,
  opts: { body: number; bibl: number; caption: number },
): Prepared[] {
  const out: Prepared[] = [];
  const bodyLead = opts.body * 0.42;
  const biblLead = opts.bibl * 0.4;
  const capLead = opts.caption * 0.4;
  for (const b of blocks) {
    if (b.kind === "drop") continue;
    if (b.kind === "figure") {
      const label = b.figure.caption || b.figure.alt || "Abbildung";
      const text = label.startsWith("Abb.") ? label : `Abb. ${label}`;
      const lines = wrapRuns(doc, [{ text, bold: false, italic: true }], width, opts.caption).map((runs) => ({
        runs,
        size: opts.caption,
        leading: capLead,
      }));
      out.push({ lines, gap: 1.8 });
      continue;
    }
    const html = b.html.replace(/\s*Zuschnitt morgen\.?/gi, "");
    const runs = htmlToRuns(html);
    if (!runs.length) continue;
    const size = b.kind === "bibl" ? opts.bibl : opts.body;
    const leading = b.kind === "bibl" ? biblLead : bodyLead;
    if (b.kind === "bibl") {
      for (const r of runs) r.italic = true;
    }
    const lines = wrapRuns(doc, runs, width, size).map((r) => ({ runs: r, size, leading }));
    out.push({ lines, gap: b.kind === "bibl" ? 1.4 : 1.65 });
  }
  return out;
}

function drawPrepared(
  doc: jsPDF,
  items: Prepared[],
  x: number,
  y: number,
  maxY: number,
): Prepared[] {
  const rest: Prepared[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    let start = 0;
    if (!item.lines.length) continue;
    for (let li = 0; li < item.lines.length; li++) {
      const line = item.lines[li];
      if (y + line.leading > maxY) {
        rest.push({ lines: item.lines.slice(li), gap: item.gap });
        rest.push(...items.slice(i + 1));
        return rest;
      }
      if (line.runs.length) {
        drawLine(doc, line, x, y + line.leading - 0.4);
      }
      y += line.leading;
      start = li + 1;
    }
    if (start >= item.lines.length) y += item.gap;
  }
  return rest;
}

function drawTitlePage(
  doc: jsPDF,
  opts: { lastPrinted: number; pageCount: number; plateCount: number; citation: string; sourceNote: string },
) {
  paper(doc);
  doc.setTextColor(ACCENT.r, ACCENT.g, ACCENT.b);
  face(doc, false, false);
  doc.setFontSize(9);
  const kicker = "ARCHIVREKONSTRUKTION";
  doc.text(kicker, (PAGE_W - doc.getTextWidth(kicker)) / 2, 38);
  rule(doc, 46);
  doc.setTextColor(INK.r, INK.g, INK.b);
  face(doc, true, false);
  doc.setFontSize(26);
  const title = "Der Große Brockhaus";
  doc.text(title, (PAGE_W - doc.getTextWidth(title)) / 2, 68);
  face(doc, false, false);
  doc.setFontSize(13);
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  const sub = "Fünfzehnte, völlig neubearbeitete Auflage";
  doc.text(sub, (PAGE_W - doc.getTextWidth(sub)) / 2, 80);
  face(doc, true, false);
  doc.setFontSize(16);
  doc.setTextColor(INK.r, INK.g, INK.b);
  const band = "Band II · Aju–Bla";
  doc.text(band, (PAGE_W - doc.getTextWidth(band)) / 2, 96);
  face(doc, false, true);
  doc.setFontSize(14);
  const antiqua = "Antiqua-Satz der gesetzten Blätter";
  doc.text(antiqua, (PAGE_W - doc.getTextWidth(antiqua)) / 2, 112);

  doc.setDrawColor(ACCENT.r, ACCENT.g, ACCENT.b);
  doc.setLineWidth(0.35);
  doc.line(PAGE_W / 2 - 18, 122, PAGE_W / 2 + 18, 122);

  face(doc, false, false);
  doc.setFontSize(11);
  doc.setTextColor(INK.r, INK.g, INK.b);
  const facts = [
    `Druckseiten ${printedLabel(1)}–${printedLabel(opts.lastPrinted)} · ${opts.pageCount} Blätter im Satz`,
    `${opts.plateCount} Tafeln als Legende (ganze Blätter im Archiv, nicht als Raster beigebunden)`,
    "Fraktur in Antiqua · Orthographie 1929 · Verweise → beibehalten",
    "F. A. Brockhaus, Leipzig 1929",
  ];
  let y = 138;
  for (const line of facts) {
    doc.text(line, (PAGE_W - doc.getTextWidth(line)) / 2, y);
    y += 7;
  }

  const citeRuns = htmlToRuns(opts.citation);
  const noteRuns = htmlToRuns(opts.sourceNote);
  const citeWidth = PAGE_W - 48;
  const citeLines = wrapRuns(doc, citeRuns.length ? citeRuns : [{ text: opts.citation, bold: false, italic: false }], citeWidth, 9);
  const noteLines = wrapRuns(doc, noteRuns.length ? noteRuns : [{ text: opts.sourceNote, bold: false, italic: true }], citeWidth, 8.5);
  y = 180;
  doc.setTextColor(MUTED.r, MUTED.g, MUTED.b);
  face(doc, false, false);
  doc.setFontSize(8);
  const lab = "Zitation";
  doc.text(lab, (PAGE_W - doc.getTextWidth(lab)) / 2, y);
  y += 7;
  doc.setTextColor(INK.r, INK.g, INK.b);
  for (const runs of citeLines) {
    drawLine(doc, { runs, size: 9, leading: 4.2 }, (PAGE_W - citeWidth) / 2, y);
    y += 4.2;
  }
  y += 6;
  for (const runs of noteLines) {
    for (const r of runs) r.italic = true;
    drawLine(doc, { runs, size: 8.5, leading: 3.9 }, (PAGE_W - citeWidth) / 2, y);
    y += 3.9;
  }
}

function yieldTick(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => setTimeout(resolve, 0));
    } else {
      setTimeout(resolve, 0);
    }
  });
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

export async function downloadAntiquaPdf(
  pages: EncPage[],
  opts: {
    citation: string;
    sourceNote: string;
    lastPrinted: number;
    plateCount: number;
    onProgress?: (p: PdfProgress) => void;
  },
): Promise<void> {
  const onProgress = opts.onProgress ?? (() => {});
  onProgress({ phase: "schrift", done: 0, total: pages.length });
  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4", compress: true });
  await loadFonts(doc);
  doc.setProperties({
    title: `Der Große Brockhaus, Band II, S. 1–${opts.lastPrinted}, Antiqua`,
    author: "F. A. Brockhaus, Leipzig 1929",
    subject: "Antiqua-Rekonstruktion der gesetzten Blätter",
    creator: "Brockhaus-Archiv 1929",
    keywords: "Brockhaus, Antiqua, Band II, 1929",
  });

  drawTitlePage(doc, {
    lastPrinted: opts.lastPrinted,
    pageCount: pages.length,
    plateCount: opts.plateCount,
    citation: opts.citation,
    sourceNote: opts.sourceNote,
  });

  const bodyY0 = MARGIN_TOP + HEADER_H;
  const bodyY1 = PAGE_H - MARGIN_BOTTOM - FOOTER_H;
  const leftX = MARGIN_X;
  const rightX = MARGIN_X + COL_W + GUTTER;

  onProgress({ phase: "satz", done: 0, total: pages.length });

  for (let i = 0; i < pages.length; i++) {
    const raw = pages[i];
    const page = raw.plate ? raw : bindPageFigures(raw);
    doc.addPage("a4", "p");

    if (page.plate) {
      runningHead(doc, page, false, true);
      runningFoot(doc, page);
      const legend = [...page.left, ...page.right];
      const items = blocksToPrepared(doc, legend, PAGE_W - MARGIN_X * 2, {
        body: 10,
        bibl: 9,
        caption: 9,
      });
      const note: Prepared = {
        lines: wrapRuns(
          doc,
          [
            {
              text: "Tafel als ganzes Blatt im Archiv (Faksimile). Hier die Legende der Antiqua.",
              bold: false,
              italic: true,
            },
          ],
          PAGE_W - MARGIN_X * 2,
          9,
        ).map((runs) => ({ runs, size: 9, leading: 4 })),
        gap: 3,
      };
      let rest = drawPrepared(doc, [note, ...items], leftX, bodyY0, bodyY1);
      while (rest.length) {
        doc.addPage("a4", "p");
        runningHead(doc, page, true, true);
        runningFoot(doc, page);
        rest = drawPrepared(doc, rest, leftX, bodyY0, bodyY1);
      }
    } else {
      const bound = page;
      const isBanner = (b: Block) => b.kind === "figure" && b.figure.span === "page";
      const banners = [...bound.left, ...bound.right].filter(isBanner);
      const leftBlocks = bound.left.filter((b) => !isBanner(b));
      const rightBlocks = bound.right.filter((b) => !isBanner(b));
      runningHead(doc, bound, false, false);
      runningFoot(doc, bound);
      let y0 = bodyY0;
      if (banners.length) {
        const bannerItems = blocksToPrepared(doc, banners, PAGE_W - MARGIN_X * 2, {
          body: 8.4,
          bibl: 7.6,
          caption: 8,
        });
        drawPrepared(doc, bannerItems, leftX, y0, y0 + 18);
        y0 += Math.min(16, bannerItems.reduce((n, it) => n + it.lines.length * 3.4 + it.gap, 4));
        rule(doc, y0 - 1.2, 0.7);
      }
      let left = blocksToPrepared(doc, leftBlocks, COL_W, { body: 8.35, bibl: 7.5, caption: 7.4 });
      let right = blocksToPrepared(doc, rightBlocks, COL_W, { body: 8.35, bibl: 7.5, caption: 7.4 });
      left = drawPrepared(doc, left, leftX, y0, bodyY1);
      right = drawPrepared(doc, right, rightX, y0, bodyY1);
      while (left.length || right.length) {
        doc.addPage("a4", "p");
        runningHead(doc, bound, true, false);
        runningFoot(doc, bound);
        left = left.length ? drawPrepared(doc, left, leftX, bodyY0, bodyY1) : [];
        right = right.length ? drawPrepared(doc, right, rightX, bodyY0, bodyY1) : [];
      }
    }

    if (i % 4 === 0 || i === pages.length - 1) {
      onProgress({ phase: "satz", done: i + 1, total: pages.length });
      await yieldTick();
    }
  }

  onProgress({ phase: "heften", done: pages.length, total: pages.length });
  const filename = `Brockhaus-1929-Bd2-S1-${opts.lastPrinted}-Antiqua.pdf`;
  const blob = doc.output("blob");
  triggerDownload(blob, filename);
}
