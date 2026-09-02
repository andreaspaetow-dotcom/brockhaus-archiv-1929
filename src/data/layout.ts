import type { BBox, LayoutIndexEntry, LayoutManifest } from "./types";

export function layoutDir(printed: number): string {
  return printed < 100
    ? `p${String(printed).padStart(2, "0")}`
    : `p${String(printed).padStart(3, "0")}`;
}

export function layoutManifestUrl(printed: number): string {
  return `/layout/${layoutDir(printed)}/manifest.json`;
}

export function layoutAsset(dir: string, file: string): string {
  return `/layout/${dir}/${file}?v=12`;
}

export async function fetchLayoutIndex(): Promise<LayoutIndexEntry[]> {
  const res = await fetch("/layout/index.json?v=12");
  if (!res.ok) return [];
  return (await res.json()) as LayoutIndexEntry[];
}

export async function fetchManifest(
  printed: number,
): Promise<LayoutManifest | null> {
  const res = await fetch(`${layoutManifestUrl(printed)}?v=12`);
  if (!res.ok) return null;
  return (await res.json()) as LayoutManifest;
}

export function boxStyle(box: BBox, canvas: { width: number; height: number }) {
  return {
    left: `${(box.x1 / canvas.width) * 100}%`,
    top: `${(box.y1 / canvas.height) * 100}%`,
    width: `${((box.x2 - box.x1) / canvas.width) * 100}%`,
    height: `${((box.y2 - box.y1) / canvas.height) * 100}%`,
  };
}

