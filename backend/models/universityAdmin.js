import mongoose from "mongoose";

const universityAdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    university: {
      type: String,
      require: true,
    },
    universityName: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: true, // change this to false if you decide to implement email verification
    },
  },
  {
    versionKey: false,
  }
);

const UniversityAdmin = mongoose.model(
  "universityAdmin",
  universityAdminSchema
);

export default UniversityAdmin;
