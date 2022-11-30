import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  transcript: {
    type: String,
    required: true,
  },
  degreeCertificate: {
    type: String,
    required: true,
  },
  Gpa: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: false,
  },
});

const Education = mongoose.model("Education", educationSchema);

export default Education;
