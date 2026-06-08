import express from "express";

import {
  analyzeStudentController
} from "../controllers/studentController.js";

const router = express.Router();

router.post(
  "/analyze",
  analyzeStudentController
);

export default router;