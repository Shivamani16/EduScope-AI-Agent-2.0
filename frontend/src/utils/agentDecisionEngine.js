export function generateAgentDecision(studentData) {
  const decisions = [];

  if (studentData.attendance < 75) {
    decisions.push(
      "Attendance below threshold detected."
    );
  }

  if (studentData.marks < 50) {
    decisions.push(
      "Academic performance indicator is weak."
    );
  }

  if (studentData.assignments < 5) {
    decisions.push(
      "Assignment completion rate is low."
    );
  }

  if (studentData.gpa < 7) {
    decisions.push(
      "GPA trend indicates academic risk."
    );
  }

  decisions.push(
    "Agent recommends intervention and continuous monitoring."
  );

  return decisions;
}