import { getInterventionPriority } from "./agents/interventionAgent.js";

const result = getInterventionPriority(
  "High Risk"
);

console.log(result);