import * as StudentControllers from "../controllers/StudentControllers.js";
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
        const uploadFolder = __dirname + "/uploads/students/" + req.userId;
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

const StudentRoutes = express.Router();

StudentRoutes.post("/signup", StudentControllers.registerStudent);

StudentRoutes.post("/login", StudentControllers.loginStudent);

StudentRoutes.get("/", authJwt, StudentControllers.getStudent);

StudentRoutes.put("/:id", authJwt, upload.array("files"), StudentControllers.updateStudent);

StudentRoutes.delete("/:id", authJwt, StudentControllers.deleteStudent);

export default StudentRoutes;
