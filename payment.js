
import mongoose from "mongoose";

export default mongoose.model("Payment", new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  amount: Number,
  date: Date
}));
