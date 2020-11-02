import moongose from "mongoose";
const { Schema } = moongose;


const surveysSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    subject: String,
    recipients: [String]   ///un array de string
})


moongose.model('surveys',surveysSchema)