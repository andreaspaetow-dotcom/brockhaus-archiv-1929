import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "fs";
import { createHash } from "crypto";

mkdirSync("/workspace/screenshots/qa", { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 2000 } });
page.setDefaultTimeout(20000);
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Antiqua", exact: true }).click();
await page.getByRole("button", { name: "S. 2", exact: true }).click();
await page.waitForTimeout(800);

const figs = page.locator("article.enc-page img");
const n = await figs.count();
const report = [];
for (let i = 0; i < n; i++) {
  const img = figs.nth(i);
  const src = await img.getAttribute("src");
  const alt = await img.getAttribute("alt");
  const box = await img.boundingBox();
  await img.screenshot({ path: `/workspace/screenshots/qa/live-s2-fig${i}.png` });
  let bytes = 0, hash = "n/a";
  if (src && src.startsWith("/")) {
    const res = await page.request.get(new URL(src, "http://127.0.0.1:8080/").href);
    const buf = await res.body();
    bytes = buf.length;
    hash = createHash("md5").update(buf).digest("hex").slice(0, 12);
  }
  report.push({ i, alt, src: src?.slice(0, 80), w: box?.width, h: box?.height, bytes, hash });
}
writeFileSync("/workspace/screenshots/qa/s2-figures.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await page.locator("article.enc-page").screenshot({ path: "/workspace/screenshots/qa/recon-s2.png" });
await browser.close();
