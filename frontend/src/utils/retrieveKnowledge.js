import { knowledgeBase } from "./knowledgeBase";

export function retrieveKnowledge(studentData) {
  const results = [];

  if (studentData.attendance < 75) {
    results.push(knowledgeBase.attendance);
  }

  if (studentData.marks < 50) {
    results.push(knowledgeBase.marks);
  }

  if (studentData.assignments < 5) {
    results.push(knowledgeBase.assignments);
  }

  if (studentData.gpa < 7) {
    results.push(knowledgeBase.gpa);
  }

  return results;
}