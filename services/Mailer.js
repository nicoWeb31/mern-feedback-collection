const sendGrid = require('sendgrid');
//const sendGrid = require("@sendgrid/mail");
const helper = sendGrid.mail;
const key = require('../config/keys').sendGridKey;


class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();//function parent 


        this.sgApi = sendGrid(key);

        this.from_email = new helper.Email('nico.riot@free.fr');//adress config in senderGrid
        this.subject = subject;
        this.body = new helper.Content('text/html', content)
        this.recipients = this.formatAddresses(recipients);

        //add content 
        this.addContent(this.body);//addcontent class parent

        this.addClickTracking();
        this.addRecipents();
    }


    //extract each email and return it
    formatAddresses(recipients) {
        return recipients.map(recipient => {
            return new helper.Email(recipient.email)
        })
    }


    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings)
    }

    addRecipents() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient)
        });

        this.addPersonalization(personalize)
    }

    async send() {
        const req = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        })

        const response = await this.sgApi.API(req);
        return response;
    }

}

module.exports = Mailer;



// 12 - 4 - 2019 local tunnel pour tester sendGrid en local

// This note will cover using Ngrok instead of LocalTunnel, which has proven to be buggy and inconsistent since the course lectures were originally recorded.
// Setting Up Ngrok

// We can use npx to run ngrok and have it forward traffic to port 5000 without installing anything.To do this, open a brand new terminal and run:

// npx ngrok http 5000   ----> valable 8h

// This will launch up a pop - up window with the address you can use:

// This address that was generated, in my case: https://ed3ce60.ngrok.io will only exist for 8 hours. You'll want to keep this terminal session open and running while you are developing. If you close the running ngrok session and re-run npx ngrok http 5000, the address will be different. It is important to remember these two things as you will likely need to update the ngrok generated address in your Sendgrid dashboard a few times through the development process.

// Since we are not using LocalTunnel, we also don't need the webhook script in our package.json file as noted in the "LocalTunnel Setup" lecture video. We also don't need to call the 'webhook' script from the 'dev' script.

// The scripts property should now look like this:

// "scripts": {
//     "start": "node index.js",
//         "server": "nodemon index.js",
//             "client": "npm run start --prefix client",
//                 "dev": "concurrently \"npm run server\" \"npm run client\"",
//                     "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
// },

// Sendgrid Integration

// In the upcoming lecture "Testing Webhooks", you will be adding your LocalTunnel address to the Event Notification's HTTP POST URL field. Since we are going to use Ngrok, you'll want to paste the current session's address into this field instead: