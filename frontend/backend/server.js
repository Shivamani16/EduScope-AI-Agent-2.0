import express from "express";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "EduScope Backend Running",
  });
});

app.use("/", studentRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});