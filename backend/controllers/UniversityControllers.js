import {setResponse, setRequestError, setServerError} from "./utils.js";
import University from "../models/university.js";
import {getAllUniversitiesService, getUniversityByIdService, saveUniversityService, updateUniversityByIdService} from "../services/UniversityServices.js";

export const registerUniversity = async(req, res) => {
    try {
        const universityObj = req.body;
        const savedUniversityObj = await saveUniversityService(universityObj);
        if (!savedUniversityObj) {
            return setRequestError({
                msg: "Could not register the university"
            }, res);
        }
        return setResponse(savedUniversityObj, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal server error"
        }, res);
    }
}

export const getAllUniversities = async(req, res) => {
    try {
        const allUniversities = await getAllUniversitiesService();
        console.log(allUniversities);
        if (allUniversities.length == 0) {
            return setRequestError({
                msg: "No university found"
            }, res);
        }
        return setResponse(allUniversities, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal server error"
        }, res);
    }
}

export const getUniversityById = async(req, res) => {
    try {
        const university = await getUniversityByIdService(req.params.id);
        if (!university) {
            return setRequestError({
                msg: "Could not find the university"
            }, res);
        }
        return setResponse(university, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal server error"
        }, res);
    }
}

export const updateUniversityById = async(req, res) => {
    try {
        const currentUniversity = req.body;
        const isUniversityPresent = await University
            .findById(req.params.id)
            .select("_id");
        if (!isUniversityPresent) {
            return setRequestError({
                msg: "University does not exist"
            }, res);
        }
        const updatedUniversity = await updateUniversityByIdService(req.params.id, currentUniversity);
        return setResponse(updatedUniversity, res);
    } catch (error) {
        console.log(error);
        return setServerError({
            msg: "Internal server error"
        }, res);
    }
}