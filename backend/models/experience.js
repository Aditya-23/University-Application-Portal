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
  description: {
    type: String,
    required: true,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
