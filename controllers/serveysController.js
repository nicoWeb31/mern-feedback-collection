const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplate/surveyTemplate');
const _ = require('lodash');
const { Path } = require('path-parser');
const { url } = require('url')

const Servey = mongoose.model('surveys');


//getredirect mail thanks for voting
exports.thankForVoting = (req,res)=>{
    res.send('Thanks for voting !!!!')
}




//create a serveys and send a big email
exports.postServey = async (req, res) => {

    const { title, body, subject, recipients } = req.body;
    const newServey = new Servey({
        title,
        body,
        subject,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })), //map(email=>{return {email: email}}) trim suppr space
        _user: req.user._id,
        sentDate: Date.now()  //methode de mongoose
    })

    //great place to send an email!
    const mailer = new Mailer(newServey, template(newServey));


    try {

        await mailer.send();

        //save in mongo
        await newServey.save();

        //deconte des credit
        req.user.credits -= 1;

        //save in mongo modif user
        const user = await req.user.save();

        //he new valuee in credit !! user maj!
        res.send(user);

    } catch (err) {
        res.status(422).send(err)
    }





}

//recuperation du yes or no et id survey et traitement 

exports.surveyWebHooks = (req,res)=>{

    const events = _.map(req.body, event =>{
        const pathName = new URL(event.url).pathname;
        const p = new Path('/api/surveys/:surveyId/:choice')//return un object ou les cles match avec l'url 
        //console.log(p.test(pathName))
        const match = p.test(pathName);
        if(match){
            return {eamil: event.email,surveyId: match.surveyId,choice: match.choice};
        }
    })


        
    }