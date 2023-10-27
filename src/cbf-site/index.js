import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://google.com/");

  // Set screen size
  const pagePrint = await page.setViewport({ width: 1080, height: 1024 });

  fs.writeFileSync("index.html", pagePrint);

  await browser.close();
})();
