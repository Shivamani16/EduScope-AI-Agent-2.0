export function predictStudentSuccess(riskLevel) {

  if (riskLevel === "High Risk") {
    return {
      probability: "35%",
      message:
        "Student has a lower probability of academic success unless immediate intervention is applied."
    };
  }

  if (riskLevel === "Medium Risk") {
    return {
      probability: "70%",
      message:
        "Student has a moderate chance of success with continuous monitoring and support."
    };
  }

  return {
    probability: "95%",
    message:
      "Student is highly likely to achieve academic success based on current indicators."
  };
}