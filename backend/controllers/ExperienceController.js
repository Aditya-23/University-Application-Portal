import { Experience } from "../models/index.js";
import {
  saveExperience,
  updateExperienceById,
  deleteExperienceById,
  getExperiencesByIds,
} from "../services/Experience.service.js";
import { setResponse, setRequestError, setServerError } from "./utils.js";

async function createExperience(req, res) {
  try {
    var experienceObj = req.body;
    const savedExperience = await saveExperience(experienceObj);
    return setResponse(savedExperience, res);
  } catch (error) {
    console.log(error);
    return setServerError({ msg: "Internal server error" }, res);
  }
}

async function updateExperience(req, res) {
  try {
    const currentExperience = req.body;
    const isExperiencePresent = await Experience.findById(req.params.id).select(
      "_id"
    );
    if (!isExperiencePresent) {
      return setRequestError({ msg: "Experience does not exist!" }, res);
    }
    const updatedExperience = await updateExperienceById(
      req.params.id,
      currentExperience
    );
    if (updatedExperience) {
      return setResponse(updatedExperience, res);
    }
    return setRequestError({ msg: "Could not update the experience!" }, res);
  } catch (error) {
    console.log(error);
    return setRequestError({ msg: "Internal server error" }, res);
  }
}

async function deleteExperience(req, res) {
  try {
    const isExperiencePresent = await Experience.findById(req.params.id).select(
      "_id"
    );
    if (!isExperiencePresent) {
      return setRequestError({ msg: "Experience does not exist!" }, res);
    }
    const deletedExperience = await deleteExperienceById(req.params.id);
    if (deletedExperience) {
      return setResponse(deletedExperience, res);
    }
    return setRequestError({ msg: "Could not delete the experience!" }, res);
  } catch (error) {
    console.log(error);
    return setRequestError({ msg: "Internal server error" }, res);
  }
}

async function getExperiences(req, res) {
  // sample request: GET localhost:8000/experiences?ids[]=63819d68c35be73b4886da93&ids[]=6381a0980479ef2f469306fd:
  try {
    const experienceObjs = await getExperiencesByIds(req.query.ids);
    return setResponse(experienceObjs, res);
  } catch (error) {
    console.log(error);
    return setRequestError({ msg: "Internal server error" }, res);
  }
}

export { createExperience, updateExperience, deleteExperience, getExperiences };
