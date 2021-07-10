const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema;
const device = new Schema({
    name_device:{
      type:String,
      require:true
    },
    state:{
        type:Number,
        require:false,
        default:false
    },
    value:{
        type:String,
        require:false
    }
})
const smarthome=new Schema({
  name_home:{
      type:String,
      require:true
  },
  device:{
      type:[device],
      require:false
  }
})
smarthome.plugin(mongoosePaginate)
module.exports=mongoose.model('house',smarthome);