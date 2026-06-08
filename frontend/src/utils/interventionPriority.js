export function getInterventionPriority(riskLevel) {

  if (riskLevel === "High Risk") {
    return {
      priority: "Critical",
      color: "#dc2626",
      message:
        "Immediate intervention required."
    };
  }

  if (riskLevel === "Medium Risk") {
    return {
      priority: "Moderate",
      color: "#f59e0b",
      message:
        "Regular monitoring recommended."
    };
  }

  return {
    priority: "Low",
    color: "#22c55e",
    message:
      "Continue current academic support."
  };
}