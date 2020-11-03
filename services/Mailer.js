const sendGrid = require('sendgrid');
//const sendGrid = require("@sendgrid/mail");
const helper = sendGrid.mail;
const key = require('../config/keys').sendGridKey;


class Mailer extends helper.Mail {
    constructor({subject, recipients},content){
        super();//function parent 


        this.sgApi = sendGrid(key);

        this.from_email = new helper.Email('nico.riot@free.fr');//adress config in senderGrid
        this.subject = subject;
        this.body = new helper.Content('text/html',content)
        this.recipients = this.formatAddresses(recipients);

        //add content 
        this.addContent(this.body);//addcontent class parent

        this.addClickTracking();
        this.addRecipents();
    }


    //extract each email and return it
    formatAddresses(recipients){
        return recipients.map(recipient =>{
            return new helper.Email(recipient.email)
        } )
    }


    addClickTracking(){
        const  trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true,true);
        
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings)
    }

    addRecipents(){
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient)
        });

        this.addPersonalization(personalize)
    }

    async send(){
        const req = this.sgApi.emptyRequest({
            method: 'POST',
            path:'/v3/mail/send',
            body:this.toJSON()
        })

        const response = this.sgApi.API(req);
        return response;
    }

}

module.exports = Mailer;