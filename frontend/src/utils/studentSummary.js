export function generateStudentSummary(riskLevel) {
  if (riskLevel === "High Risk") {
    return {
      status: "Needs Immediate Attention",
      summary:
        "The student is currently at high academic risk due to poor attendance, low marks, and incomplete assignments.",
      outcome:
        "Following the roadmap and recommendations can significantly improve performance."
    };
  }

  if (riskLevel === "Medium Risk") {
    return {
      status: "Needs Monitoring",
      summary:
        "The student is performing moderately but requires consistent effort to avoid academic decline.",
      outcome:
        "Regular monitoring and improved study habits can help achieve better results."
    };
  }

  return {
    status: "Performing Well",
    summary:
      "The student is maintaining good academic performance across all metrics.",
    outcome:
      "Continued effort and participation in advanced activities will support further growth."
  };
}