
import mongoose from "mongoose";

export default mongoose.model("Teacher", new mongoose.Schema({
  fullName: String,
  phone: String,
  specialty: String
}));
