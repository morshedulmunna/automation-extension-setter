document.getElementById("runAutomation").addEventListener("click", () => {
  chrome.runtime.sendMessage({ command: "runPuppeteer" }, (response) => {
    console.log(response);
  });
});
