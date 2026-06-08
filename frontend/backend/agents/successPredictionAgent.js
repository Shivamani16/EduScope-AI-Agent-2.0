export const predictSuccess = (studentData) => {
  let score = 0;

  score += Number(studentData.attendance) * 0.25;
  score += Number(studentData.marks) * 0.35;
  score += Number(studentData.assignments) * 4;
  score += Number(studentData.gpa) * 5;

  let probability = Math.min(
    100,
    Math.round(score)
  );

  let message =
    "Student is likely to achieve academic success.";

  if (probability < 60) {
    message =
      "Student requires significant academic support.";
  } else if (probability < 80) {
    message =
      "Student has moderate chances of academic success.";
  }

  return {
    probability: `${probability}%`,
    message,
  };
};