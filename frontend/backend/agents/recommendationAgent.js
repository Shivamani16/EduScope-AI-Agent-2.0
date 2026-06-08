export const generateRecommendations = (studentData) => {
  const recommendations = [];

  if (studentData.attendance < 75) {
    recommendations.push(
      "Maintain at least 80% attendance in upcoming classes."
    );
  }

  if (studentData.marks < 50) {
    recommendations.push(
      "Spend additional time revising core subjects."
    );
  }

  if (studentData.assignments < 5) {
    recommendations.push(
      "Submit all pending assignments before deadlines."
    );
  }

  if (studentData.gpa < 7) {
    recommendations.push(
      "Seek faculty mentoring and academic support."
    );
  }

  return recommendations;
};