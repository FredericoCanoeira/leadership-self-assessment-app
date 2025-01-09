const express = require("express");
const { getResults } = require("../controllers/resultsController");

const router = express.Router();

// Route to get results and comparisons
router.get("/", getResults);

module.exports = router;
