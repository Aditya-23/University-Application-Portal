import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    courseName: {
      type: String,
      required: true,
    },
    courseDuration: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    education: {
      type: String,
      required: false,
    },
    specialization: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    school: {
      type: String,
      required: true,
    },
  });
  
  const Program = mongoose.model("Program", programSchema);
  
  export default Program;
  