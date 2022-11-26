import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  currentWorkFlag: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;

// sample data
// {
//     "jobTitle": "Software Engineer",
//     "companyName": "Google",
//     "startDate": "2020-01-01",
//     "endDate": "2021-01-01",
//     "currentWorkFlag": false,
//     "description": "I worked as a software engineer at Google"
// }

// Points for keeping studentId in experience model
// 1. It is easier to delete any records related to a student if student is being deleted
// 2. It is easier to get all the experiences of a student if studentId is present in experience model
// 3.
