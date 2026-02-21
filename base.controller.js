
export default class Base {
  constructor(model) {
    this.model = model;
  }

  async create(req,res) { res.json(await this.model.create(req.body)); 

  }

  async getAll(req,res) { res.json(await this.model.find());
    }

  async getOne(req,res){ res.json(await this.model.findById(req.params.id));
   }

  async update(req,res) { res.json(await this.model.findByIdAndUpdate(req.params.id, req.body, {new:true}));
   }

  async delete(req,res) { await this.model.findByIdAndDelete(req.params.id); res.json({msg:"deleted"}); 
    }
}
