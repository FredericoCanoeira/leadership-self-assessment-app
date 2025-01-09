// Logic to retrieve and compare results
exports.getResults = (req, res) => {
    const { score } = req.query;
  
    // Simulate a comparison with other users
    const topPercentile = score > 10 ? "Top 10%" : "Top 25%";
  
    res.status(200).json({ score, topPercentile });
  };
  