const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey); 


exports.stripeBilling = async(req,res)=>{
        //console.log(req.body)

        try{
            const charge = await stripe.charges.create({
                amount: 500,
                currency: 'usd',
                description: '$5 for 5 credits',
                source: req.body.id
            })
    
            //current user send automatlicly by passport
            req.user.credits += 5;
            const user = await req.user.save();
            
            console.log('user after billing :',req.user)
            res.send(user)
        }catch(err){
            res.status(401).send({error: 'error !'})
        }
}