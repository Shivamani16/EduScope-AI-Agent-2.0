import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PerformanceChart({ studentData }) {
  const data = {
    labels: [
      "Attendance",
      "Marks",
      "Assignments",
      "GPA"
    ],

    datasets: [
      {
        label: "Performance Score",

        data: [
          Number(studentData.attendance),
          Number(studentData.marks),
          Number(studentData.assignments),
          Number(studentData.gpa) * 10,
        ],

        backgroundColor: [
          "#2563eb",
          "#ef4444",
          "#f59e0b",
          "#22c55e",
        ],

        borderRadius: 12,
        borderSkipped: false,
        maxBarThickness: 70,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Student Performance Overview",

        font: {
          size: 22,
          weight: "bold",
        },

        color: "#1e293b",

        padding: {
          bottom: 30,
        },
      },

      tooltip: {
        backgroundColor: "#1e293b",

        titleFont: {
          size: 14,
        },

        bodyFont: {
          size: 13,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        max: 100,

        ticks: {
          stepSize: 20,
        },

        grid: {
          color: "#e2e8f0",
        },

        title: {
          display: true,
          text: "Score",
        },
      },

      x: {
        grid: {
          display: false,
        },

        ticks: {
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "450px",
        padding: "20px",
      }}
    >
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}

export default PerformanceChart;