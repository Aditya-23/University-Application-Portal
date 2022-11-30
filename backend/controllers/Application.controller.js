import { Application } from "../models/index.js";
import { getApplicationByIdService, registerApplicationService } from "../services/Application.service.js";
import { setRequestError, setResponse, setServerError } from "./utils.js";

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
        console.log(req.body);
        const savedApplicationObj = await registerApplicationService(req.body);
        if(!savedApplicationObj){
            return setRequestError({msg: "Could not register the applicaton"}, res);
        }
        req.applicationId = savedApplicationObj.id;
        setResponse(savedApplicationObj, res);
        next();
    } catch (error) {
        console.log(error);
        setServerError({msg: "Internal Server Error"}, res);
    }
}