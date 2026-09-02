export type ViewMode =
  | "gitter"
  | "tafeln"
  | "reconstruction"
  | "scan"
  | "synopse"
  | "agent";

export type Figure = {
  src: string;
  alt: string;
  caption: string;
  float?: "right";
  /** Spans both columns (large Tafel-like text figures). */
  span?: "page";
};

export type Block =
  | { kind: "drop" }
  | { kind: "p"; html: string }
  | { kind: "figure"; figure: Figure }
  | { kind: "bibl"; html: string };

export type EncPage = {
  printed: number;
  scanFile: number;
  headerLeft: string;
  headerRight: string;
  catchword: string;
  signature?: string;
  left: Block[];
  right: Block[];
  scanSrc: string;
  /** Full-leaf plate: scan is the page, captions sit as legend. */
  plate?: boolean;
};

export type BBox = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type LayoutGraphic = {
  type: "graphic";
  category?: "Graphic";
  id: string;
  original_coordinates: BBox;
  optimized_file: string;
  kind: string;
  slot: string;
  padding_px?: number;
  caption?: string;
};

export type LayoutCaption = {
  type: "caption";
  category?: "Caption";
  associated_with: string;
  original_coordinates: BBox;
  text_ocr: string;
  text_clean: string;
};

export type LayoutTextZone = {
  type: "text_zone";
  id: string;
  column: "left" | "right";
  wrap?: string;
  original_coordinates: BBox;
};

export type LayoutColumn = {
  id: "left" | "right";
  original_coordinates: BBox;
};

export type LayoutManifest = {
  page_id: string;
  printed: number;
  scan_file: number;
  canvas_size: { width: number; height: number };
  columns: LayoutColumn[];
  pipeline: Record<string, string | number>;
  mask_a: Array<BBox & { category: string }>;
  elements: Array<LayoutGraphic | LayoutCaption | LayoutTextZone>;
};

export type LayoutIndexEntry = {
  printed: number;
  page_id: string;
  href: string;
  overlay: string;
  page: string;
  dir: string;
  graphics: number;
};
