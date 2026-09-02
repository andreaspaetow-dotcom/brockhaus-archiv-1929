import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("/workspace/screenshots/qa", { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(400);

const gitter = page.getByRole("button", { name: "Gitter", exact: true });
if (await gitter.count()) await gitter.click();
await page.waitForSelector('[aria-label="Layout-Gitter"]');

async function shot(printed, stepLabel, file) {
  await page.getByRole("button", { name: new RegExp(`^Seite ${printed},`) }).click();
  await page.waitForTimeout(350);
  await page.getByRole("button", { name: new RegExp(`\\d\\s+${stepLabel}`) }).click();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: `/workspace/screenshots/qa/${file}`,
    fullPage: true,
  });
  console.log("wrote", file, "title", await page.locator("h2").first().innerText());
}

await shot(1, "Analyse", "gitter-s1-analyse.png");
await shot(1, "Rekonstruktion", "gitter-s1-recon.png");
await shot(2, "Rekonstruktion", "gitter-s2-recon.png");
await shot(3, "Rekonstruktion", "gitter-s3-recon.png");
await shot(2, "Analyse", "gitter-s2-analyse.png");
await shot(3, "Analyse", "gitter-s3-analyse.png");

// Crop Ulmus / tet from reconstruction via figure imgs
await page.getByRole("button", { name: /^Seite 2,/ }).click();
await page.getByRole("button", { name: /4\s+Rekonstruktion/ }).click();
await page.waitForTimeout(500);
const figs2 = page.locator("figure.facsimile-graphic img");
const n2 = await figs2.count();
console.log("s2 figures", n2);
for (let i = 0; i < n2; i++) {
  await figs2.nth(i).screenshot({ path: `/workspace/screenshots/qa/live-s2-fig${i}.png` });
}
await page.getByRole("button", { name: /^Seite 3,/ }).click();
await page.waitForTimeout(400);
const figs3 = page.locator("figure.facsimile-graphic img");
const n3 = await figs3.count();
console.log("s3 figures", n3);
for (let i = 0; i < n3; i++) {
  await figs3.nth(i).screenshot({ path: `/workspace/screenshots/qa/live-s3-fig${i}.png` });
}

await browser.close();
console.log("ok");
