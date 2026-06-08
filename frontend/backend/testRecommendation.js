import { generateRecommendations } from "./agents/recommendationAgent.js";

const result = generateRecommendations({
  attendance: 60,
  marks: 45,
  assignments: 2,
  gpa: 6,
});

console.log(result);