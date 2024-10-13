chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("running........");
  if (message.command === "runPuppeteer") {
    // Make an HTTP request to the Node.js server to trigger Puppeteer automation
    fetch("http://localhost:5000/trigger-automation")
      .then((response) => response.json())
      .then((data) => {
        sendResponse({ result: data });
      })
      .catch((error) => {
        sendResponse({ result: { success: false, message: "Error occurred" } });
        console.log(error);
      });
  }
  return true; // Keep the message channel open for async response
});
