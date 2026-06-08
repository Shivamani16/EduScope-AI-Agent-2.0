import React, { useState } from "react";

function StudentForm({ setAnalysisResult }) {
  const [studentData, setStudentData] = useState({
    name: "",
    attendance: "",
    marks: "",
    assignments: "",
    gpa: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        }
      );

      const result = await response.json();

      console.log("Backend Result:", result);

      setAnalysisResult(result);

    } catch (error) {

      console.error(
        "Backend Connection Error:",
        error
      );

      alert(
        "Unable to connect to backend server"
      );
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Student Information
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={studentData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="attendance"
          placeholder="Attendance (%)"
          value={studentData.attendance}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="marks"
          placeholder="Internal Marks"
          value={studentData.marks}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="assignments"
          placeholder="Assignments Completed"
          value={studentData.assignments}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="gpa"
          placeholder="GPA"
          value={studentData.gpa}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Analyze Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;