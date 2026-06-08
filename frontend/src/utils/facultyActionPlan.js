export function generateFacultyActionPlan(riskLevel) {

  if (riskLevel === "High Risk") {
    return [
      "Schedule weekly mentoring sessions",
      "Track attendance on a daily basis",
      "Conduct parent-teacher interaction",
      "Provide remedial classes",
      "Monitor assignment completion regularly"
    ];
  }

  if (riskLevel === "Medium Risk") {
    return [
      "Monitor academic progress weekly",
      "Encourage assignment completion",
      "Provide additional academic guidance",
      "Track attendance trends"
    ];
  }

  return [
    "Recommend advanced learning activities",
    "Encourage participation in competitions",
    "Support leadership opportunities",
    "Maintain current performance level"
  ];
}