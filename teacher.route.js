
import { Router } from "express";
import c from "../controller/teacher.controller.js";
const r = Router();

r.post("/", c.create.bind(c));
r.get("/", c.getAll.bind(c));
r.get("/:id", c.getOne.bind(c));
r.put("/:id", c.update.bind(c));
r.delete("/:id", c.delete.bind(c));

export default r;
