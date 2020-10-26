const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

const mongoose = require("mongoose")
const User = mongoose.model('users')


//passport 
//https://console.cloud.google.com/home/dashboard?project=mern-enquete
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken, refrexToken, profile , done)=>{
    //recupe du user    
    // console.log("accessToken", accessToken)
    // console.log("done", done)
    // console.log("profile", profile)
    // console.log("refrexToken", refrexToken)
    

    //possibilite de cree un utilisateur en db

    
    //new instance of user
    //persiste in bdd
    //if user exist
    //findOne return a promise
    User.findOne({googleId: profile.id}).then(existUser =>{
        
        console.log("existUser", existUser)
        //user doesn't exist
        if(!existUser){
            new User({googleId : profile.id}).save();
        }else{
            console.log("existUser true", existUser)
        }

    })

    



}))