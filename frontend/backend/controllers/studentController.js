import { analyzeStudent } from "../agents/coordinatorAgent.js";

export const analyzeStudentController = (
  req,
  res
) => {
  try {
    const studentData = req.body;

    const result =
      analyzeStudent(studentData);

    res.status(200).json(result);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Analysis Failed"
    });

  }
};