import express from "express";
import authJwt from "../middlewares/index.js";
import * as UniversityControllers from "../controllers/UniversityControllers.js";

const UniversityRoutes = express.Router();

UniversityRoutes.post("/", authJwt, UniversityControllers.registerUniversity);

UniversityRoutes.get("/", authJwt, UniversityControllers.getAllUniversities);

UniversityRoutes.get("/:id", authJwt, UniversityControllers.getUniversityById);

UniversityRoutes.put("/:id", authJwt, UniversityControllers.updateUniversityById);

UniversityRoutes.delete("/:id", authJwt, UniversityControllers.deleteUniversityById);

export default UniversityRoutes;