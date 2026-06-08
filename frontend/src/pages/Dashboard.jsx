import React, { useState } from "react";
import StudentForm from "../components/StudentForm";
import PerformanceChart from "../components/PerformanceChart";
import StatCard from "../components/StatCard";
import { generatePDFReport } from "../utils/reportGenerator";

function Dashboard() {
  const [analysisResult, setAnalysisResult] = useState(null);

  const getRiskColor = (riskLevel) => {
    if (riskLevel === "High Risk") return "#ef4444";
    if (riskLevel === "Medium Risk") return "#f59e0b";
    return "#22c55e";
  };

  return (
    <div className="App">
      <h1>EduScope AI Agent 2.0</h1>

      <p className="subtitle">
        Student Success Intelligence System
      </p>

      <StudentForm setAnalysisResult={setAnalysisResult} />

      {analysisResult && (
        <div className="result-card">

          <div className="result-header">
  <h2>Analysis Result</h2>

  <h3 className="student-name">
    Student: {analysisResult.studentName}
  </h3>
  <div className="section-card">
  <h3>Student Profile</h3>

  <p>
    <strong>Attendance:</strong>{" "}
    {analysisResult.studentData?.attendance || "N/A"}
  </p>

  <p>
    <strong>Marks:</strong>{" "}
    {analysisResult.studentData?.marks || "N/A"}
  </p>

  <p>
    <strong>Assignments:</strong>{" "}
    {analysisResult.studentData?.assignments || "N/A"}
  </p>

  <p>
    <strong>GPA:</strong>{" "}
    {analysisResult.studentData?.gpa || "N/A"}
  </p>
</div>
</div>

<div className="section-card">
  <h3>Student Classification</h3>

  <p>
    <strong>Category:</strong>{" "}
    {analysisResult.studentCategory}
  </p>

  <p>
    <strong>AI Confidence:</strong>{" "}
    {analysisResult.confidenceScore}
  </p>
</div>

{/* KPI Cards */}
<div className="card-container kpi-grid">

  <StatCard
    title="Risk Score"
    value={`${analysisResult.riskScore}%`}
  />

  <StatCard
    title="Risk Level"
    value={analysisResult.riskLevel}
  />

  <StatCard
    title="Student Category"
    value={analysisResult.studentCategory}
  />

  <StatCard
    title="AI Confidence"
    value={analysisResult.confidenceScore}
  />

  <StatCard
    title="Status"
    value={analysisResult.summary?.status || "N/A"}
  />

</div>
          {/* PDF Button */}
          <div className="download-section">
            <button
              onClick={() => generatePDFReport(analysisResult)}
            >
              Download PDF Report
            </button>
          </div>

          {/* AI Reasoning */}
          <div className="section-card">
            <h3>AI Reasoning</h3>

            <ul>
  {Array.isArray(analysisResult.reasoning) ? (
    analysisResult.reasoning.map((reason, index) => (
      <li key={index}>{reason}</li>
    ))
  ) : (
    <li>{analysisResult.reasoning || "No reasoning available"}</li>
  )}
</ul>
          </div>

          {/* Learning Roadmap */}
          <div className="section-card">
            <h3>Learning Roadmap</h3>

         <ul>
  {Array.isArray(analysisResult.roadmap) ? (
    analysisResult.roadmap.map((step, index) => (
      <li key={index}>{step}</li>
    ))
  ) : (
    <li>{analysisResult.roadmap || "No roadmap available"}</li>
  )}
</ul>
          </div>

          {/* Recommendations */}
          <div className="section-card">
            <h3>Recommendations</h3>

            <ul>
  {Array.isArray(analysisResult.recommendations) ? (
    analysisResult.recommendations.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  ) : (
    <li>
      {analysisResult.recommendations ||
        "No recommendations available"}
    </li>
  )}
</ul>
          </div>

          {/* AI Advisor */}
          <div className="section-card">
            <h3>🎓 EduScope Copilot</h3>

           <div
  className="advisor-box"
  style={{
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "12px",
    borderLeft: "5px solid #2563eb",
    lineHeight: "1.8",
    whiteSpace: "pre-wrap",
  }}
>
  {analysisResult.aiAdvice}
</div>
          </div>

          {/* AI Academic Success Agent */}
          <div className="section-card">
            <h3>AI Academic Success Agent</h3>

            <pre className="advisor-box">
              {analysisResult.agentReasoning}
            </pre>
          </div>

          {/* Agent Decision Trace */}
          <div className="section-card agent-trace-card">
            <h3>Agent Decision Trace</h3>

            <ul>
              {analysisResult.agentDecision?.map(
                (decision, index) => (
                  <li key={index}>
                    ✅ {decision}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Student Summary */}
          <div className="section-card">
            <h3>Student Summary</h3>

            <p className="summary-status">
              <strong>Status:</strong>{" "}
              {analysisResult.summary?.status}
            </p>

            <p>
              <strong>Summary:</strong>{" "}
              {analysisResult.summary?.summary}
            </p>

            <p>
              <strong>Expected Outcome:</strong>{" "}
              {analysisResult.summary?.outcome}
            </p>
          </div>

          <div className="section-card">
  <h3>Student Success Prediction</h3>

  <p>
    <strong>Success Probability:</strong>{" "}
    {analysisResult.successPrediction?.probability}
  </p>

  <div
    style={{
      width: "100%",
      height: "12px",
      background: "#e2e8f0",
      borderRadius: "10px",
      margin: "15px 0",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: analysisResult.successPrediction?.probability,
        height: "100%",
        background: "#2563eb",
      }}
    />
  </div>

  <p>
    {analysisResult.successPrediction?.message}
  </p>
</div>

          {/* Future Risk Prediction */}
          <div className="section-card future-risk-card">
            <h3>Future Risk Prediction</h3>

            <p>
              <strong>Predicted Risk:</strong>{" "}
              {analysisResult.futurePrediction?.predictedRisk}
            </p>

            <p>
              <strong>Confidence Score:</strong>{" "}
              {analysisResult.futurePrediction?.confidence}
            </p>

            <p>
              <strong>Forecast:</strong>{" "}
              {analysisResult.futurePrediction?.message}
            </p>
          </div>
          {/* Intervention Priority */}
<div
  className="section-card"
  style={{
    borderLeft: `5px solid ${analysisResult.interventionPriority?.color}`,
  }}
>
  <h3>Intervention Priority</h3>

  <p>
    <strong>Priority Level:</strong>{" "}
    <span
      style={{
        color:
          analysisResult.interventionPriority?.color,
        fontWeight: "bold",
      }}
    >
      {analysisResult.interventionPriority?.priority}
    </span>
  </p>

  <p>
    <strong>Action Required:</strong>{" "}
    {analysisResult.interventionPriority?.message}
  </p>
</div>

          {/* Faculty Action Plan */}
<div className="section-card">
  <h3>Faculty Action Plan</h3>

  <ul>
    {analysisResult.facultyActionPlan?.map(
      (action, index) => (
        <li key={index}>
          🎯 {action}
        </li>
      )
    )}
  </ul>
</div>
    {/* Knowledge Retrieval Layer */}
<div className="section-card">
  <h3>Knowledge Retrieval Layer</h3>

  {analysisResult.retrievedKnowledge?.map(
    (item, index) => (
      <div
        key={index}
        style={{
          marginBottom: "15px",
          padding: "15px",
          background: "#f8fafc",
          borderRadius: "10px",
          borderLeft: "4px solid #2563eb",
        }}
      >
        <h4>{item.title}</h4>

        <p>{item.content}</p>
      </div>
    )
  )}
</div>

{/* Explainable AI Panel */}
<div className="section-card">
  <h3>Explainable AI Panel</h3>

  <p>
    <strong>Attendance Contribution:</strong>{" "}
    {analysisResult.studentData?.attendance < 75
      ? "High Risk Factor"
      : "Normal"}
  </p>

  <p>
    <strong>Marks Contribution:</strong>{" "}
    {analysisResult.studentData?.marks < 50
      ? "High Risk Factor"
      : "Normal"}
  </p>

  <p>
    <strong>Assignment Contribution:</strong>{" "}
    {analysisResult.studentData?.assignments < 5
      ? "High Risk Factor"
      : "Normal"}
  </p>

  <p>
    <strong>GPA Contribution:</strong>{" "}
    {analysisResult.studentData?.gpa < 7
      ? "High Risk Factor"
      : "Normal"}
  </p>
</div>

          {/* Performance Dashboard */}

          {/* Explainable AI Risk Breakdown */}
<div className="section-card">
  <h3>Explainable AI Risk Breakdown</h3>

  <p>
    <strong>Attendance Impact:</strong>{" "}
    {analysisResult.riskBreakdown?.attendance}%
  </p>

  <progress
    value={analysisResult.riskBreakdown?.attendance}
    max="30"
    style={{
      width: "100%",
      height: "20px",
      marginBottom: "15px",
    }}
  />

  <p>
    <strong>Marks Impact:</strong>{" "}
    {analysisResult.riskBreakdown?.marks}%
  </p>

  <progress
    value={analysisResult.riskBreakdown?.marks}
    max="30"
    style={{
      width: "100%",
      height: "20px",
      marginBottom: "15px",
    }}
  />

  <p>
    <strong>Assignments Impact:</strong>{" "}
    {analysisResult.riskBreakdown?.assignments}%
  </p>

  <progress
    value={analysisResult.riskBreakdown?.assignments}
    max="20"
    style={{
      width: "100%",
      height: "20px",
      marginBottom: "15px",
    }}
  />

  <p>
    <strong>GPA Impact:</strong>{" "}
    {analysisResult.riskBreakdown?.gpa}%
  </p>

  <progress
    value={analysisResult.riskBreakdown?.gpa}
    max="20"
    style={{
      width: "100%",
      height: "20px",
    }}
  />
</div>

            
          <div className="section-card">
            {analysisResult.studentData && (
  <PerformanceChart
    studentData={analysisResult.studentData}
  />
)}
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;