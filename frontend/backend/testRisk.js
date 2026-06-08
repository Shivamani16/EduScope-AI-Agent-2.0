import { calculateRisk } from "./agents/riskAgent.js";

const result = calculateRisk({
  attendance: 60,
  marks: 45,
  assignments: 2,
  gpa: 6,
});

console.log(result);