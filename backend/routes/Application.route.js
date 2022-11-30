import * as ApplicationControllers from "../controllers/Application.controller.js";
import express from "express";
import authJwt from "../middlewares/index.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(path.dirname(__filename));
        const uploadFolder = __dirname + "/uploads/applications/" + req.applicationId;
        let folderExists = fs.existsSync(uploadFolder);
        if(folderExists){
            console.log("exists");
            return cb(null, uploadFolder);
        }
        else{
            console.log("Does not exist");
            return fs.mkdir(uploadFolder, (error) => cb(error, uploadFolder));
        }
    },
    filename: (req, file, cb) => {
        return cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
})

const ApplicationRoutes = express.Router();

ApplicationRoutes.get("/:id", authJwt, ApplicationControllers.getApplicationById);

ApplicationRoutes.post("/", authJwt, ApplicationControllers.registerApplication, upload.array("files"));

export default ApplicationRoutes;