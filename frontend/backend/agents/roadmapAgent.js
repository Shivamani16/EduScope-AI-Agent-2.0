export const generateRoadmap = (studentData) => {
  const roadmap = [];

  if (studentData.attendance < 75) {
    roadmap.push(
      "Week 1: Improve attendance and class participation."
    );
  }

  if (studentData.assignments < 5) {
    roadmap.push(
      "Week 2: Complete all pending assignments."
    );
  }

  if (studentData.marks < 50) {
    roadmap.push(
      "Week 3: Focus on weak academic subjects."
    );
  }

  if (studentData.gpa < 7) {
    roadmap.push(
      "Week 4: Attend mentoring and academic support sessions."
    );
  }

  return roadmap;
};