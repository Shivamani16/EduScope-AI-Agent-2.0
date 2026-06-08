export const generateReasoning = (studentData) => {
  const reasons = [];

  if (studentData.attendance < 75) {
    reasons.push(
      "Attendance is below the recommended threshold of 75%."
    );
  }

  if (studentData.marks < 50) {
    reasons.push(
      "Internal marks indicate weak academic performance."
    );
  }

  if (studentData.assignments < 5) {
    reasons.push(
      "Assignment completion rate is low."
    );
  }

  if (studentData.gpa < 7) {
    reasons.push(
      "Current GPA is below the expected academic benchmark."
    );
  }

  return reasons;
};