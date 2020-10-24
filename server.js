const  express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();



//passport 
//https://console.cloud.google.com/home/dashboard?project=mern-enquete
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.clientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken)=>{
    console.log(accessToken)

}))

app.get('/auth/google',
passport.authenticate('google',{scope:['profile','email']}))



//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});