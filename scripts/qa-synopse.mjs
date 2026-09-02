import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Synopse", exact: true }).click();
await page.waitForTimeout(400);
const jump = page.getByLabel("Druckseite");

async function shot(n, tag) {
  await jump.fill(String(n));
  await jump.dispatchEvent("input");
  await jump.dispatchEvent("change");
  await page.waitForTimeout(800);
  const article = page.locator("article.enc-page");
  const text = (await article.innerText()).slice(0, 180).replace(/\s+/g, " ");
  const img = page.locator("figure.scan-frame img");
  const src = await img.getAttribute("src");
  console.log("S." + n, "src", src, "antiqua", text.slice(0, 120));
  await page.screenshot({ path: `/workspace/screenshots/qa/synopse-s${n}${tag || ""}.png`, fullPage: false });
}

await shot(598);
await shot(4);
await shot(1);
await shot(673);
await shot(100);
console.log("ok");
await browser.close();
