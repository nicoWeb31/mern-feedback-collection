//Sub collection for surveys;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientsShema = new Schema({
    email: String,
    responded:{
        type: Boolean,
        default: false
    }
})


module.exports = recipientsShema;