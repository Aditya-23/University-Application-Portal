import {University} from "../models/index.js";
import config from "config";

const saveUniversityService = async(universityObj) => {
    try {
        const savedUniversityObj = University(universityObj);
        return savedUniversityObj.save();
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getAllUniversitiesService = async() => {
    try {
        const allUniversities = University.find();
        return allUniversities;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getUniversityByIdService = async(id) => {
    try {
        const university = University.findById(id);
        return university;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateUniversityByIdService = async(id, updateUniversity) => {
    try {
        const updatedUniversity = University.findByIdAndUpdate(id, updateUniversity, {new: true});
        return updatedUniversity;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export {saveUniversityService, getAllUniversitiesService, getUniversityByIdService, updateUniversityByIdService}