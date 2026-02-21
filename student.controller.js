
import Base from "./base.controller.js";
import Student from "../schema/student.js";

class Ctrl extends Base {
  constructor(){ super(Student); }

  async getAll(req,res){
    const data = await this.model.find().populate({
      path:"group",
      populate:["course","teacher"]
    });
    res.json(data);
  }
}

export default new Ctrl();
