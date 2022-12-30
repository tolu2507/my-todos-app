import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  re_password: { type: "string", required: true },
  isAdmin: { type: "boolean", required: false, default: false },
  gender: { type: String, required: true }
});

export const userModel = mongoose.model("AppUsers", usersSchema);
