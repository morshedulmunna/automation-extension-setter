const puppeteer = require("puppeteer");
const { browserView } = require("./libs");

async function runAutomation() {
  try {
    const browser = await browserView();
    const page = await browser.newPage();

    await page.goto("https://www.walmart.com/");
  } catch (error) {
    console.error("Error occurred during automation:", error);
    await browser.close();
  }
}

module.exports = { runAutomation };
