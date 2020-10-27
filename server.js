const  express = require('express');
const authRoutes = require("./routes/authRoutes")
const app = express();
const mongo = require('mongoose');

const passport = require('passport');
const cookieSession = require('cookie-session')
const keys = require('./config/keys')

//order very impotant....instance user in first
require('./models/User')

//service passport
require('./services/passport')


//mongoose
mongo.connect(require('./config/keys').mongooseKey,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('Connect to mongoose...:)')
})


//midelewaire passport session auth
app.use((req,res,next)=>{
    console.log('je suis un middleware')
    next()
})

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 *60 *1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())


//routes
authRoutes(app);
//or
//require("./routes/authRoutes")(app);


//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});