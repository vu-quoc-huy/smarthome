const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const temparatureShema = new Schema({
    temperature: {
        type: String,
        require: true
    },
    humidity: {
        type: String,
        require: true
    }
})
temparatureShema.plugin(mongoosePaginate)
module.exports = mongoose.model('temperature', temparatureShema);