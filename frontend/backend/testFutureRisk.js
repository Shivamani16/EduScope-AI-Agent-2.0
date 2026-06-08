import { predictFutureRisk } from "./agents/futureRiskAgent.js";

const result = predictFutureRisk({
  attendance: 55,
  marks: 35,
  assignments: 2,
  gpa: 5.5,
});

console.log(result);