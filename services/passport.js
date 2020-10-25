const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

//passport 
//https://console.cloud.google.com/home/dashboard?project=mern-enquete
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken, refrexToken, profile , done)=>{
    //recupe du user    
    console.log("accessToken", accessToken)
    console.log("done", done)
    console.log("profile", profile)
    console.log("refrexToken", refrexToken)
    

    //possibilite de cree un utilisateur en db

}))