
import Base from "./base.controller.js";
import Model from "../schema/teacher.js";
export default new (class extends Base{ constructor(){ super(Model); } })();
