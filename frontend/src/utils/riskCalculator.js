export function calculateRisk(studentData) {
  let riskScore = 0;

  if (studentData.attendance < 75) {
    riskScore += 30;
  }

  if (studentData.marks < 50) {
    riskScore += 30;
  }

  if (studentData.assignments < 5) {
    riskScore += 20;
  }

  if (studentData.gpa < 7) {
    riskScore += 20;
  }

  if (riskScore >= 70) {
    return "High Risk";
  }

  if (riskScore >= 40) {
    return "Medium Risk";
  }

  return "Low Risk";
}