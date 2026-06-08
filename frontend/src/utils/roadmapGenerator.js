export function generateRoadmap(riskLevel) {
  if (riskLevel === "High Risk") {
    return [
      "Week 1: Improve attendance and class participation.",
      "Week 2: Complete all pending assignments.",
      "Week 3: Focus on weak academic subjects.",
      "Week 4: Take mock tests and evaluate progress."
    ];
  }

  if (riskLevel === "Medium Risk") {
    return [
      "Week 1: Improve study consistency.",
      "Week 2: Increase assignment quality.",
      "Week 3: Practice previous exam papers.",
      "Week 4: Monitor academic performance."
    ];
  }

  return [
    "Continue maintaining good academic performance.",
    "Participate in advanced learning activities.",
    "Develop leadership and communication skills.",
    "Prepare for internships and career opportunities."
  ];
}