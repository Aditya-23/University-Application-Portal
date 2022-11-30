import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdByEmail: {
    type: String,
    required: true,
  },
  applicationStatus: {
    type: String,
    enum: ["Pending", "In Review", "Accepted", "Rejected"],
    default: "Pending",
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
    required: false,
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
    required: false,
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
    required: false,
  },
  greScore: {
    type: Number,
    required: false,
  },
  toeflScore: {
    type: Number,
    required: false,
  },
  governmentId: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
