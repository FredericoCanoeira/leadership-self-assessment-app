const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post("/api/submit-form", (req, res) => {
  const { communication, decisionMaking, conflictManagement } = req.body;

  // Calculate the total score
  const totalScore = communication + decisionMaking + conflictManagement;

  // Determine leadership level
  let category;
  if (totalScore <= 5) category = "Líder Moco";
  else if (totalScore <= 10) category = "Líder Kilimanjaro";
  else category = "Líder Everest";

  res.status(200).json({ score: totalScore, category });
});

// Route to generate report (stub)
app.post("/api/request-report", (req, res) => {
  const { email, paymentProof } = req.body;

  // Logic to verify payment and generate PDF
  if (paymentProof) {
    res.status(200).send("Report generated and sent to email.");
  } else {
    res.status(400).send("Payment proof required.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
