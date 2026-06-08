export const predictFutureRisk = (studentData) => {
  let predictedRisk = "Low Risk";
  let confidence = "90%";
  let message =
    "Current trends indicate stable academic performance.";

  const attendance = Number(studentData.attendance);
  const marks = Number(studentData.marks);
  const gpa = Number(studentData.gpa);

  if (
    attendance < 75 ||
    marks < 50 ||
    gpa < 7
  ) {
    predictedRisk = "Medium Risk";
    confidence = "80%";
    message =
      "Academic indicators suggest a potential decline in future performance if no intervention occurs.";
  }

  if (
    attendance < 60 &&
    marks < 40 &&
    gpa < 6
  ) {
    predictedRisk = "High Risk";
    confidence = "92%";
    message =
      "Student is highly likely to face academic difficulties without immediate support.";
  }

  return {
    predictedRisk,
    confidence,
    message,
  };
};