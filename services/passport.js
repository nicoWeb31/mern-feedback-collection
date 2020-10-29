const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

const mongoose = require("mongoose")
const User = mongoose.model('users')


//serialize with passport
passport.serializeUser((user, done) => {
    //user id de mongo
    done(null, user.id)
})


passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

//passport 
//https://console.cloud.google.com/home/dashboard?project=mern-enquete
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true     //refative adress 
},
    async (accessToken, refrexToken, profile, done) => {
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
        const existUser = await User.findOne({ googleId: profile.id })


        console.log("existUser", existUser)
        //user doesn't exist
        if (!existUser) {
            //async
            const user = await new User({ googleId: profile.id }).save();
            return done(null, user);
        }
        console.log("existUser true", existUser);
        done(null, existUser)
    }))
