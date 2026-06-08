import { generateReasoning } from "./agents/reasoningAgent.js";

const result = generateReasoning({
  attendance: 60,
  marks: 45,
  assignments: 2,
  gpa: 6,
});

console.log(result);