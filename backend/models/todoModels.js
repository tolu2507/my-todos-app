import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: { type: "string", required: true },
  isDone: { type: "boolean", required: false, default: false },
  time_stated: { type: "string", required: true },
  time_finished: { type: "string", required: false },
  comment: { type: "string", required: false },
});

export const todoModel = mongoose.model("Todo", todoSchema);
