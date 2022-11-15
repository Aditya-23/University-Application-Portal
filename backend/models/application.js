import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  createdBy: {
    type: String,
    required: true,
  },
  createdByEmail: {
    type: String,
    required: true,
  },
  applyingTo: {
    type: String,
    required: true,
  },
  programName: {
    type: String,
    required: true,
  },
  semIntake: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  lor1: {
    type: String,
    required: true,
  },
  lor2: {
    type: String,
    required: true,
  },
  lor3: {
    type: String,
    required: true,
  },
  sop: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  education: {
    type: Array,
    required: true,
  },
  greScore: {
    type: Number,
    required: true,
  },
  toeflScore: {
    type: Number,
    required: true,
  },
  governmentId: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
