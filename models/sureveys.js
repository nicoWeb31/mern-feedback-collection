const  moongose = require('mongoose');
const { Schema } = moongose;

const RecipientShema = require('./recipients')


const surveysSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    subject: String,
    recipients: [RecipientShema],   ///un array de subDocument
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0  
    },
    _user: {type: Schema.Types.ObjectId, ref: 'User'} ///reference a l'utilisateur colklection des users

})


moongose.model('surveys',surveysSchema)