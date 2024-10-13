const express = require("express");
const { runAutomation } = require("./puppeteerAutomation");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/trigger-automation", async (req, res) => {
  try {
    const result = await runAutomation();
    res.json(result);
  } catch (error) {
    res.json({ success: false, message: "Automation failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
