import type { EncPage } from "./types";

/** Numbered leaves that are Tafeln (full plate, not Brotschrift). */
export const TAFEL_PRINTED = new Set<number>([
  8.5, 319, 320, 334, 335, 341, 342, 343, 344, 409, 410, 417, 418, 421, 422,
  423, 424, 433, 434, 447, 493, 494, 495, 496, 501, 502, 507, 508, 523, 524,
  539, 540, 541, 542, 599, 600, 609, 610, 615, 616, 617, 618, 639, 640, 641,
  664, 725, 726, 734, 764, 765, 774, 775, 792, 793, 798, 799, 800, 801, 804,
  806, 807, 812, 813, 842, 843, 864, 865,
]);

function strip(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s*Zuschnitt morgen\.?/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function looksLikeTafel(page: EncPage): boolean {
  if (page.plate) return true;
  if (TAFEL_PRINTED.has(page.printed)) return true;
  const blocks = [...page.left, ...page.right];
  const html = blocks
    .map((b) => (b.kind === "p" || b.kind === "bibl" ? b.html : ""))
    .join(" ");
  const hasTitle = /<strong>Tafel:/.test(html);
  const body = blocks.filter(
    (b) =>
      b.kind === "p" &&
      !b.html.includes("fig-note") &&
      !/<strong>Tafel:/.test(b.html),
  );
  if (hasTitle && body.length <= 1) return true;
  const onlyNotes =
    blocks.length > 0 &&
    blocks.every((b) => b.kind === "p" && b.html.includes("fig-note"));
  return onlyNotes && /Tafel\s/.test(html);
}

export function markTafelPages(pages: EncPage[]): EncPage[] {
  return pages.map((p) => (looksLikeTafel(p) ? { ...p, plate: true } : p));
}

export function plateCaption(page: EncPage): string {
  for (const b of [...page.left, ...page.right]) {
    if (b.kind === "p" || b.kind === "bibl") {
      const t = strip(b.html);
      if (t) return t;
    }
  }
  return `${page.headerLeft} — ${page.headerRight}`;
}

export function printedLabel(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return `${Math.floor(n)}–${Math.ceil(n)}`;
}

export function platesFromPages(pages: EncPage[]) {
  return pages
    .map((page, index) =>
      page.plate
        ? {
            src: page.scanSrc,
            caption: plateCaption(page),
            page: index,
            printed: page.printed,
            kind: "Tafel" as const,
            alt: `${page.headerLeft}, Tafel 1929`,
          }
        : null,
    )
    .filter((x): x is NonNullable<typeof x> => x !== null);
}
