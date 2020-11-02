const mongoose = require('mongoose');

const Servey = mongoose.model('surveys');


//create a serveys and send a big email
exports.postServey = (req,res)=>{

    const {title,body,subject,recipients} = req.body;
    const newServey = new Servey({
        title,
        body,
        subject,
        recipients: recipients.split(',').map(email=>({email:email.trim()})), //map(email=>{return {email: email}}) trim suppr space
        _user: req.user._id,
        sentDate: Date.now()  //methode de mongoose
    })

}