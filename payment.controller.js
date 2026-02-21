
import Base from "./base.controller.js";
import Model from "../schema/payment.js";
export default new (class extends Base{ constructor(){ super(Model); } })();
