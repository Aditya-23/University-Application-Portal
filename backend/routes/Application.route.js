import * as ApplicationControllers from "../controllers/Application.controller.js";
import express from "express";
import authJwt from "../middlewares/index.js";

const ApplicationRoutes = express.Router();

ApplicationRoutes.get("/:id", authJwt, ApplicationControllers.getApplicationById);

export default ApplicationRoutes;