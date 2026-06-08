export const retrieveKnowledge = (riskLevel) => {

  const knowledge = [];

  knowledge.push({
    title: "Attendance Policy",
    content:
      "Students are expected to maintain a minimum attendance of 75%."
  });

  knowledge.push({
    title: "Academic Support Program",
    content:
      "Students with low performance should attend mentoring and remedial sessions."
  });

  knowledge.push({
    title: "Assignment Guidelines",
    content:
      "Timely completion of assignments significantly improves academic outcomes."
  });

  if (riskLevel === "High Risk") {
    knowledge.push({
      title: "High Risk Intervention",
      content:
        "Faculty should schedule weekly monitoring and counseling sessions."
    });
  }

  return knowledge;
};