export const calculateRisk = (studentData) => {
  const attendance = Number(studentData.attendance);
  const marks = Number(studentData.marks);
  const assignments = Number(studentData.assignments);
  const gpa = Number(studentData.gpa);

  let riskScore = 0;

  if (attendance < 75) riskScore += 30;
  if (marks < 50) riskScore += 30;
  if (assignments < 5) riskScore += 20;
  if (gpa < 7) riskScore += 20;

  let riskLevel = "Low Risk";

  if (riskScore >= 70) {
    riskLevel = "High Risk";
  } else if (riskScore >= 40) {
    riskLevel = "Medium Risk";
  }

  return {
    riskScore,
    riskLevel,
  };
};