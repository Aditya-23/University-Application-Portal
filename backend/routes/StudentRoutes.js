import * as StudentControllers from "../controllers/StudentControllers.js";
import express from "express";

const StudentRoutes = express.Router();

StudentRoutes.post("/", StudentControllers.post);

StudentRoutes.get("/:id", StudentControllers.getStudent);

export default StudentRoutes;
