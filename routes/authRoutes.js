const passport = require('passport');
const authController = require('../controllers/authController')



module.exports = (app) =>{


    //route pour recuperer l'acces token
    app.get('/auth/google',authController.getAuthGoogle)
    
    //route for google callback pour l'accessToken
    app.get('/auth/google/callback',authController.authGoogleCallback,(req,res)=>{
        res.redirect('/surveys')})
    
    app.get('/api/logout',authController.authLogout)

    app.get('/api/current_user',authController.currentUser)



}
