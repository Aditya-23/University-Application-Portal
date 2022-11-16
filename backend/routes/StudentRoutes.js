import * as StudentControllers from "../controllers/StudentControllers.js";
import express from "express";
import authJwt from "../middlewares/index.js";

const StudentRoutes = express.Router();

StudentRoutes.post("/signup", StudentControllers.registerStudent);

StudentRoutes.post("/login", StudentControllers.loginStudent);

StudentRoutes.get("/:id", StudentControllers.getStudent);

StudentRoutes.put("/:id", StudentControllers.updateStudent);

StudentRoutes.delete("/:id", StudentControllers.deleteStudent);

export default StudentRoutes;
