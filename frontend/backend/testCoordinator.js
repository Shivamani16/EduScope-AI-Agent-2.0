import { analyzeStudent } from "./agents/coordinatorAgent.js";

const result = analyzeStudent({
  attendance: 60,
  marks: 45,
  assignments: 2,
  gpa: 6,
});

console.log(result);