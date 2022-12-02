import {renameSync} from "fs";
import Application from "../models/application.js";
import {deleteApplicationService, getApplicationByIdService, registerApplicationService, updateApplicationService} from "../services/Application.service.js";
import {setRequestError, setResponse, setServerError} from "./utils.js";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

export const getApplicationById = async(req, res) => {
    try {
        const applicationObj = await getApplicationByIdService(req.params.id);
        if (!applicationObj) {
            return setRequestError({
                msg: "Could not find the application"
            }, res);
        }
        setResponse(applicationObj, res);
    } catch (error) {
        console.log(error);
        setServerError({
            msg: "Internal Server Error"
        }, res);
    }
}

export const registerApplication = async(req, res, next) => {
    try {
        const savedApplicationObj = await registerApplicationService(req.body);
        if (!savedApplicationObj) {
            return setRequestError({
                msg: "Could not register the applicaton"
            }, res);
        }
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(path.dirname(__filename));
        const oldUploadFolder = __dirname + "/uploads/applications/temporary";
        if (fs.existsSync(oldUploadFolder)) {
            const newUploadFolder = __dirname + "/uploads/applications/" + savedApplicationObj.id;
            renameSync(oldUploadFolder, newUploadFolder);
            savedApplicationObj.lor1 = newUploadFolder + "/lor1";
            savedApplicationObj.lor2 = newUploadFolder + "/lor2";
            savedApplicationObj.lor3 = newUploadFolder + "/lor3";
            savedApplicationObj.sop = newUploadFolder + "/sop";
            await savedApplicationObj.save();
        }

        return setResponse(savedApplicationObj, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal Server Error"
        }, res);
    }
}

export const updateApplication = async(req, res) => {
    try {
        const isApplicationPresent = await Application
            .findById(req.params.id)
            .select("_id");
        if (!isApplicationPresent) {
            return setRequestError({
                msg: "Application does not exist!"
            }, res);
        }
        const newApplicationObj = await updateApplicationService(req.params.id, req.body);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(path.dirname(__filename));
        const UploadFolder = __dirname + "/uploads/applications/" + newApplicationObj.id;
        if (fs.existsSync(UploadFolder)) {
            newApplicationObj.lor1 = UploadFolder + "/lor1";
            newApplicationObj.lor2 = UploadFolder + "/lor2";
            newApplicationObj.lor3 = UploadFolder + "/lor3";
            newApplicationObj.sop = UploadFolder + "/sop";
            await newApplicationObj.save();
        }
        
        return setResponse(newApplicationObj, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal Server Error"
        }, res);
    }
}

export const deleteApplication = async(req, res) => {
    try {
        const isApplicationPresent = await Application
            .findById(req.params.id)
            .select("_id");
        if (!isApplicationPresent) {
            return setRequestError({
                msg: "Application does not exist!"
            }, res);
        }
        const deletedObj = await deleteApplicationService(req.params.id);
        if (!deletedObj) {
            return setRequestError({
                msg: "Could not delete the object"
            }, res);
        }
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(path.dirname(__filename));
        const uploadFolder = __dirname + "/uploads/applications/" + deletedObj.id;
        if (fs.existsSync(uploadFolder)) {
            fs.rmSync(uploadFolder, {
                recursive: true,
                force: true
            })
        }
        return setResponse(deletedObj, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal Server Error"
        }, res);
    }
}