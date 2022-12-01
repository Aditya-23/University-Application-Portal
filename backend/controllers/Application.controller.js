import { renameSync } from "fs";
import Application from "../models/application.js";
import { getApplicationByIdService, registerApplicationService } from "../services/Application.service.js";
import { setRequestError, setResponse, setServerError } from "./utils.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const getApplicationById = async (req, res) => {
    try {
        const applicationObj = await getApplicationByIdService(req.params.id);
        if(!applicationObj){
            return setRequestError({msg: "Could not find the application"}, res);
        }
        setResponse(applicationObj, res);
    } catch (error) {
        console.log(error);
        setServerError({msg: "Internal Server Error"}, res);
    }
}

export const registerApplication = async(req, res, next) => {
    try {
        console.log(req.files);
        const savedApplicationObj = await registerApplicationService(req.body);
        if(!savedApplicationObj){
            return setRequestError({msg: "Could not register the applicaton"}, res);
        }
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(path.dirname(__filename));
        const oldUploadFolder = __dirname + "/uploads/applications/temporary";
        const newUploadFolder = __dirname + "/uploads/applications/" + savedApplicationObj.id;
        renameSync(oldUploadFolder, newUploadFolder);
        return setResponse(savedApplicationObj, res);
    } catch (error) {
        console.log(error);
        return setServerError({msg: "Internal Server Error"}, res);
    }
}

export const updateApplication = async(req, res) => {
    try {
        const currentStudent = req.body;
        const isApplicationPresent = await Application.findById(req.params.id).select("_id");
        if(!isApplicationPresent){
            return setRequestError({msg: "Application does not exist!"}, res); 
        }
    } catch (error) {
        
    }
}