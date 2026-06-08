import { predictSuccess } from "./agents/successPredictionAgent.js";

const result = predictSuccess({
  attendance: 85,
  marks: 75,
  assignments: 8,
  gpa: 8,
});

console.log(result);