const pdfGenerator = require("../utils/pdfGenerator");

// Logic to handle report requests
exports.requestReport = (req, res) => {
  const { email, paymentProof } = req.body;

  if (!paymentProof) {
    return res.status(400).send("Payment proof required.");
  }

  // Simulate report generation
  const report = pdfGenerator.generateReport();
  res.status(200).send(`Report sent to ${email}`);
};
