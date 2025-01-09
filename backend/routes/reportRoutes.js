const express = require("express");
const { requestReport } = require("../controllers/reportController");

const router = express.Router();

// Route to request a report
router.post("/", requestReport);

module.exports = router;
