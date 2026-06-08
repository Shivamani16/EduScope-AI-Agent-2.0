export function predictFutureRisk(riskLevel, riskScore) {
  if (riskLevel === "High Risk") {
    return {
      futureRisk: "Medium Risk",
      confidence: "85%",
      message:
        "If attendance improves and assignments are completed, the student's risk level can decrease within the next month."
    };
  }

  if (riskLevel === "Medium Risk") {
    return {
      futureRisk: "Low Risk",
      confidence: "80%",
      message:
        "Consistent study habits and regular participation can improve overall performance."
    };
  }

  return {
    futureRisk: "Low Risk",
    confidence: "95%",
    message:
      "The student is performing well and is likely to maintain good academic progress."
  };
}