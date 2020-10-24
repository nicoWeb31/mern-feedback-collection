const  express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


//passport 
//https://console.cloud.google.com/home/dashboard?project=mern-enquete
passport.use(new GoogleStrategy())


//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});