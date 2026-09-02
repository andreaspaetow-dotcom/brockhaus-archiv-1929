import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("/workspace/screenshots/qa", { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Antiqua", exact: true }).click();
await page.waitForTimeout(300);
const jump = page.getByLabel("Druckseite");

const expect = {
  668: ["Magistrat", "Wappen", "Elektroindustrie", "148000"],
  669: ["Hafen von Hamburg", "Geschichte", "Groß-Berlin"],
  670: ["Kunst", "Schlüter", "Schinkel"],
  671: ["Theater", "Reinhardt", "Musikleben"],
  672: ["Bildungswesen", "Berlinchen", "Berlioz"],
};

for (const n of [668, 669, 670, 671, 672]) {
  await jump.fill(String(n));
  await jump.dispatchEvent("input");
  await jump.dispatchEvent("change");
  await page.waitForTimeout(700);
  const article = page.locator("article.enc-page");
  const label = await article.getAttribute("aria-label");
  const text = await article.innerText();
  const tables = await article.locator("table").count();
  const missing = expect[n].filter((s) => !text.includes(s));
  console.log("S." + n, "aria", label, "tables", tables, "missing", missing.join("|") || "ok", "len", text.length);
  await article.screenshot({ path: `/workspace/screenshots/qa/antiqua-s${n}.png` });
}

await jump.fill("668");
await jump.dispatchEvent("input");
await jump.dispatchEvent("change");
await page.waitForTimeout(500);
await page.getByRole("button", { name: "Scan", exact: true }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/qa/scan-s668.png", fullPage: true });
await page.getByRole("button", { name: "Synopse", exact: true }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/qa/synopse-s668.png", fullPage: true });
await page.getByRole("button", { name: "Setzer", exact: true }).click().catch(async () => {
  const btn = page.getByRole("button").filter({ hasText: /Agent|Setzer/ });
  await btn.first().click();
});
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/qa/agent-desk.png", fullPage: true });
console.log("ok");
await browser.close();
