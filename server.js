
import express from "express";
import { config } from 'dotenv';
config();
import { connectDB } from "./config/db.js";
import student from "./router/student.route.js";
import teacher from "./router/teacher.route.js";
import course from "./router/course.route.js";
import group from "./router/group.route.js";
import payment from "./router/payment.route.js";
import { errorHandler } from "./middleware/error.js";

const PORT = Number(process.env.PORT);
const app = express();
app.use(express.json());

connectDB();

app.use("/students", student);
app.use("/teachers", teacher);
app.use("/courses", course);
app.use("/groups", group);
app.use("/payments", payment);

app.use(errorHandler);

app.listen(5000, ()=>console.log("Server is running on port" , PORT));
