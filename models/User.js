const  mongoose = require('mongoose');

//const { Schema } = mongoose;
//or
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    googleId:{
        type: String
    },
    credits: {
        type: Number,
        default: 0
    }

});

//module.exports = User =  mongoose.model('users',UserSchema)
mongoose.model('users',UserSchema)
