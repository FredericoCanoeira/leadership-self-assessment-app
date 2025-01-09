const PDFDocument = require("pdfkit");

// Utility to generate PDF reports
exports.generateReport = () => {
  const doc = new PDFDocument();
  doc.text("Leadership Self-Assessment Report");
  doc.text("Detailed performance analysis goes here...");
  doc.end();
  return doc;
};
