
import mongoose from "mongoose";

export default mongoose.model("Course", new mongoose.Schema({
  title: String,
  price: Number,
  duration: Number
}));
  