import { Application } from "../models/index.js";
import { getApplicationByIdService } from "../services/Application.service.js";
import { setRequestError, setResponse, setServerError } from "./utils.js";

export const getApplicationById = async (req, res) => {
    try {
        const applicationObj = await getApplicationByIdService(req.params.id);
        if(!applicationObj){
            setRequestError({msg: "Could not find the application"}, res);
        }
        setResponse(applicationObj, res);
    } catch (error) {
        console.log(error);
        setServerError({msg: "Internal Server Error"}, res);
    }
}