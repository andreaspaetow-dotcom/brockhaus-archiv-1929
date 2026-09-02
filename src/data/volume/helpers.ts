import type { Block, EncPage, Figure } from "../types";

export const L = (html: string): Block => ({ kind: "p", html });
export const B = (html: string): Block => ({ kind: "bibl", html });
export const F = (figure: Figure): Block => ({ kind: "figure", figure });
export const N = (html: string): Block => ({
  kind: "p",
  html: `<em class="fig-note">${html}</em>`,
});

export type { EncPage };
