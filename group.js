
import mongoose from "mongoose";

export default mongoose.model("Group", new mongoose.Schema({
  name: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  startDate: Date,
  isActive: Boolean
}));
