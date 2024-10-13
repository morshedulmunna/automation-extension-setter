const { default: puppeteer } = require("puppeteer");

async function browserView() {
  const browser = await puppeteer.launch({
    headless: false, // Run in headful mode (with UI)
    args: [
      "--start-maximized", // Start with the browser maximized
      "--no-sandbox", // Disable the sandbox for compatibility
      "--disable-infobars", // Hide the "Chrome is being controlled" message
      "--disable-extensions", // Disable extensions to avoid Chrome-specific popups
      "--disable-dev-shm-usage", // Use shared memory to reduce crashes
      "--remote-debugging-port=9222", // Enable remote debugging
    ],
    defaultViewport: null, // Disable the default viewport (full-screen mode)
  });

  return browser;
}

module.exports = {
  browserView,
};
