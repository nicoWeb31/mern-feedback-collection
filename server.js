const  express = require('express');
require('./services/passport')
const authRoutes = require("./routes/authRoutes")
const app = express();


//routes
authRoutes(app);
//or
//require("./routes/authRoutes")(app);


//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});