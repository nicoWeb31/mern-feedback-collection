const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey); 


exports.stripeBilling = (req,res)=>{
        //console.log(req.body)

        stripe.charges.create({
            amout: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
}