import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("/workspace/screenshots/qa", { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Antiqua", exact: true }).click();
await page.waitForTimeout(500);
for (const n of [1, 2, 3]) {
  await page.getByRole("button", { name: `S. ${n}`, exact: true }).click();
  await page.waitForTimeout(600);
  await page.locator("article.enc-page").screenshot({
    path: `/workspace/screenshots/qa/recon-s${n}.png`,
  });
  console.log("shot s", n);
}
await page.getByRole("button", { name: "Tafeln", exact: true }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: "/workspace/screenshots/qa/gallery.png", fullPage: true });
console.log("gallery");
await browser.close();
