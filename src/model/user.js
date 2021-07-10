const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema;
const user = new Schema({
    user_name: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    },
    full_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    smart_home:{
        type:[Schema.Types.ObjectId],
        ref:"house",
        require:false
    }
})
user.plugin(mongoosePaginate)
module.exports=mongoose.model('user',user);