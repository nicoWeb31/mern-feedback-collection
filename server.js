const  express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();



//passport 
//https://console.cloud.google.com/home/dashboard?project=mern-enquete
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken, refrexToken, profile , done)=>{
    //recupe du user    
    console.log(accessToken)
    console.log(refrexToken)
    console.log(profile)
    console.log(done)

    //possibilite de cree un utilisateur en db



}))


//route pour recuperer l'acces token
app.get('/auth/google',
passport.authenticate('google',{scope:['profile','email']}))

//route for google callback pour l'accessToken
app.get('/auth/google/callback',passport.authenticate('google'))



//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});