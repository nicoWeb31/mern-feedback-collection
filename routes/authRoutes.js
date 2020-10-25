const passport = require('passport');



module.exports = (app) =>{


    //route pour recuperer l'acces token
    app.get('/auth/google',
    passport.authenticate('google',{scope:['profile','email']}))
    
    //route for google callback pour l'accessToken
    app.get('/auth/google/callback',passport.authenticate('google'))


}
