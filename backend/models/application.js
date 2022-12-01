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
  },
  specialization: {
    type: String,
  },
  lor1: {
    type: String,
  },
  lor2: {
    type: String,
  },
  lor3: {
    type: String,
  },
  sop: {
    type: String,
  },
  resume: {
    type: String,
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
  },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
