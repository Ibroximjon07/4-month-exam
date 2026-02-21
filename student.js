
import mongoose from "mongoose";

export default mongoose.model("Student", new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: String,
  age: Number,
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" }
}, { timestamps: true }));
