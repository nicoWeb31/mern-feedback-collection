const  express = require('express');
const authRoutes = require("./routes/authRoutes")
const app = express();
const mongo = require('mongoose');

//order very impotant....instance user in first
require('./models/User')
require('./services/passport')



//mongoose
mongo.connect(require('./config/keys').mongooseKey,{ useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('Connect to mongoose...:)')
})


//routes
authRoutes(app);
//or
//require("./routes/authRoutes")(app);


//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});