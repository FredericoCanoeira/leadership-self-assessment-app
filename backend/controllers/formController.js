// Logic to handle form submission and scoring
exports.submitForm = (req, res) => {
    const { communication, decisionMaking, conflictManagement } = req.body;
  
    // Calculate total score
    const totalScore = communication + decisionMaking + conflictManagement;
  
    // Determine category
    let category;
    if (totalScore <= 5) category = "Líder Moco";
    else if (totalScore <= 10) category = "Líder Kilimanjaro";
    else category = "Líder Everest";
  
    res.status(200).json({ score: totalScore, category });
  };
  