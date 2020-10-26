const  mongoose = require('module');

const { Schema } = mongoose;
//or
//const Schema = mongoose.Schema;

const UserSchema = new Schema({

    googleId: String

});

mongoose.model('users',UserSchema)