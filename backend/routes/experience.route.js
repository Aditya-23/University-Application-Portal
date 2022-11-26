import * as ExperienceController from "../controllers/ExperienceController.js";
import express from "express";
import authJwt from "../middlewares/index.js";

const ExperienceRoutes = express.Router();

ExperienceRoutes.post("/", ExperienceController.createExperience);


//Sample request body:
// {
//   "studentId": "5f9f1b0b0b1b9c2b8c8b8b8b",
ExperienceRoutes.get("/", ExperienceController.getExperiences);

ExperienceRoutes.put("/:id", ExperienceController.updateExperience);

ExperienceRoutes.delete("/:id", ExperienceController.deleteExperience);

export default ExperienceRoutes;
