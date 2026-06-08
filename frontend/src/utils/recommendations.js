export function generateRecommendations(riskLevel) {
  if (riskLevel === "High Risk") {
    return [
      "Attend remedial classes",
      "Meet faculty mentor weekly",
      "Complete pending assignments",
      "Focus on weak subjects"
    ];
  }

  if (riskLevel === "Medium Risk") {
    return [
      "Improve study consistency",
      "Practice previous papers",
      "Increase assignment quality"
    ];
  }

  return [
    "Maintain current performance",
    "Participate in advanced learning",
    "Prepare for internships"
  ];
}