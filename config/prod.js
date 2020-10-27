//keys for production setup - do commit for heroku ! 

module.exports = {
    googleClientID : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    'mongooseKey':process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
}


//config value in heroku