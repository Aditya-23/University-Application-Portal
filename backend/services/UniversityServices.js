import {Student, University} from "../models/index.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import config from "config";

const saveUniversityService = async (universityObj) => {
    try {
        const savedUniversityObj = University(universityObj);
        return savedUniversityObj.save();
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getAllUniversitiesService = async () => {
    try {
        const allUniversities = University.find();
        return allUniversities;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export {
    saveUniversityService,
    getAllUniversitiesService,
}