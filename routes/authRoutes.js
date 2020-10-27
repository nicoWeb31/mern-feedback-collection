const passport = require('passport');
const authControlller = require('../controllers/authController')



module.exports = (app) =>{


    //route pour recuperer l'acces token
    app.get('/auth/google',authControlller.getAuthGoogle)
    
    //route for google callback pour l'accessToken
    app.get('/auth/google/callback',authControlller.authGoogleCallback)

    app.get('/api/current_user',authControlller.currentUser)


}
