import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  programs: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String
  }
});

const University = mongoose.model("University", universitySchema);

export default University;
