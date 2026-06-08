export function generateAgentReasoning(
  riskLevel,
  riskScore
) {

  if (riskLevel === "High Risk") {
    return `
The AI Academic Success Agent has completed a multi-factor analysis.

Based on attendance, marks, assignments, and GPA, the student is classified as High Risk.

Primary concerns include poor academic engagement and declining performance indicators.

Immediate intervention is recommended to prevent further academic decline.
`;
  }

  if (riskLevel === "Medium Risk") {
    return `
The AI Academic Success Agent has completed a multi-factor analysis.

The student shows moderate academic performance with some areas requiring improvement.

Consistent monitoring and academic support can help the student reach a low-risk category.
`;
  }

  return `
The AI Academic Success Agent has completed a multi-factor analysis.

The student demonstrates strong academic performance and healthy learning habits.

Continued engagement and advanced learning opportunities are recommended.
`;
}