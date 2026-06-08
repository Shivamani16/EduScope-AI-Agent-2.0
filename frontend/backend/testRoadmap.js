import { generateRoadmap } from "./agents/roadmapAgent.js";

const result = generateRoadmap({
  attendance: 60,
  marks: 45,
  assignments: 2,
  gpa: 6,
});

console.log(result);