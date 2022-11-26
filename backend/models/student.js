import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  education: {
    type: Array,
    required: false,
  },
  experience: {
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
  ieltsScore: {
    type: Number,
    required: false,
  },
  governmentId: {
    type: String,
    required: false,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
