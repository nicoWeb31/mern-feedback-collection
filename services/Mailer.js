const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const key = require('../config/keys').sendGridKey;


class Mailer extends helper.Mail {

}

module.exports = Mailer;