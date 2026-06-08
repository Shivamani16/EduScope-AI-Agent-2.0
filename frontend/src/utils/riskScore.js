export function calculateRiskScore(studentData) {
  let score = 0;

  if (studentData.attendance < 75) score += 25;
  if (studentData.marks < 50) score += 25;
  if (studentData.assignments < 5) score += 25;
  if (studentData.gpa < 7) score += 25;

  return score;
}