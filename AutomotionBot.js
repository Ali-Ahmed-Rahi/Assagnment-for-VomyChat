const puppeteer = require("puppeteer");

async function postToReddit() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/submit");

  await page.waitForSelector('textarea[name="title"]');

  await page.type('textarea[name="title"]', "My Test Post Title");
  await page.type('textarea[name="text"]', "This is my test post.");

  await page.click('button[type="submit"]');

  await browser.close();
}

postToReddit();
