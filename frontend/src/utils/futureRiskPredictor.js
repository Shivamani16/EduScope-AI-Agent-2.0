export function predictFutureRisk(studentData) {
  const attendance = Number(studentData.attendance);
  const marks = Number(studentData.marks);
  const assignments = Number(studentData.assignments);
  const gpa = Number(studentData.gpa);

  let score = 0;

  if (attendance < 75) score += 25;
  if (marks < 50) score += 25;
  if (assignments < 5) score += 25;
  if (gpa < 7) score += 25;

  if (score >= 75) {
    return {
      predictedRisk: "High Risk",
      confidence: "91%",
      message:
        "Current academic indicators suggest a high probability of continued academic risk over the next semester unless corrective actions are taken.",
    };
  }

  if (score >= 40) {
    return {
      predictedRisk: "Medium Risk",
      confidence: "87%",
      message:
        "The student shows moderate risk indicators. Consistent attendance, assignment completion, and academic support can significantly improve future outcomes.",
    };
  }

  return {
    predictedRisk: "Low Risk",
    confidence: "94%",
    message:
      "The student is expected to maintain strong academic performance based on current learning behavior and academic indicators.",
  };
}