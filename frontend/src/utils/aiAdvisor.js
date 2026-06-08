export function generateAIAdvice(riskLevel) {
  if (riskLevel === "High Risk") {
    return `
Student is at HIGH RISK.

Main concerns:
• Low attendance
• Poor assignment completion
• Low GPA

Suggested Action:
Increase attendance above 75%.
Complete all pending assignments.
Attend weekly mentoring sessions.
Focus on weak subjects.
`;
  }

  if (riskLevel === "Medium Risk") {
    return `
Student is at MEDIUM RISK.

Suggested Action:
Improve consistency.
Practice previous question papers.
Monitor academic progress weekly.
`;
  }

  return `
Student is performing well.

Suggested Action:
Maintain performance.
Participate in advanced learning.
Prepare for internships and certifications.
`;
}