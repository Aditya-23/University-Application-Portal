import {Application} from "../models/index.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import config from "config";

const getApplicationByIdService = (id) => {
    try {
        const applicationObj = Application.findById(id);
        return applicationObj;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const registerApplicationService = (applicationObj) => {
    try {
        const savedApplicationObj = Application(applicationObj);
        return savedApplicationObj.save();
    } catch (error) {
        console.log(error);
        return null;
    }
}
export {
    getApplicationByIdService,
    registerApplicationService,
}