import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Antiqua", exact: true }).click();
await page.waitForTimeout(400);
const jump = page.getByLabel("Druckseite");

const expect = {
  673: ["Bertolini", "Berton", "Bertram", "Bertrand de Born", "Austerlitz"],
  674: ["Bertrich", "Bertuch", "Beruf", "Berufskraut", "Thomas-Schlacke"],
  675: ["Berufsberatung", "222361", "Berufsgeheimnis", "Berufsgenossenschaften"],
  676: ["Einwirkungen", "Selbstverwaltung", "Berufskrankheiten", "158"],
  677: ["Übersicht", "Berufsgenossenschaften", "846014", "Fuhrwerks"],
};

for (const n of [673, 674, 675, 676, 677]) {
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

await jump.fill("673");
await jump.dispatchEvent("input");
await jump.dispatchEvent("change");
await page.waitForTimeout(400);
await page.getByRole("button", { name: "Synopse", exact: true }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: "/workspace/screenshots/qa/synopse-s673.png", fullPage: true });
await page.getByRole("button", { name: "Setzer" }).click().catch(async () => {
  await page.getByRole("button").filter({ hasText: /Setzer|Agent/ }).first().click();
});
await page.waitForTimeout(400);
await page.screenshot({ path: "/workspace/screenshots/qa/agent-desk.png", fullPage: true });
console.log("ok");
await browser.close();
