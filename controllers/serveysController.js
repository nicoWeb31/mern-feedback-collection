const mongoose = require('mongoose');

const Servey = mongoose.model('surveys');

exports.postServey = (req,res)=>{

    const {title,body,subject,recipients} = req.body;
    const newServey = new Servey({
        title,
        body,
        subject,
        recipients: recipients.split(',').map(email=>({email})), //map(email=>{return {email: email}})
        _user: req.user._id,
        sentDate: Date.now()  //methode de mongoose
    })

}