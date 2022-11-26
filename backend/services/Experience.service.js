import { Experience } from "../models/index.js";

async function saveExperience(experienceObjToCreate) {
  try {
    const newExperience = Experience(experienceObjToCreate);
    await newExperience.save();
    const experienceObjCreated = {
      companyName: newExperience.companyName,
      position: newExperience.position,
      startDate: newExperience.startDate,
      endDate: newExperience.endDate,
      description: newExperience.description,
      student: newExperience.student,
    };
    return experienceObjCreated;
  } catch (error) {
    console.log(error);
  }
}

async function updateExperienceById(experienceId, experienceObjToUpdate) {
  try {
    const experience = await Experience.findByIdAndUpdate(
      experienceId,
      experienceObjToUpdate,
      { new: true }
    );
    return experience;
  } catch (error) {
    console.log(error);
  }
}

async function deleteExperienceById(experienceId) {
  try {
    const experience = await Experience.findByIdAndDelete(experienceId);
    return experience;
  } catch (error) {
    console.log(error);
  }
}

async function getExperiencesByIds(experienceIds) {
  try {
    console.log(experienceIds);
    const experiences = await Experience.find({ _id: { $in: experienceIds } });
    return experiences;
  } catch (error) {
    console.log(error);
  }
}

export {
  saveExperience,
  updateExperienceById,
  deleteExperienceById,
  getExperiencesByIds,
};
