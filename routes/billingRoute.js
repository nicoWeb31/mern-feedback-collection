const billingController = require('../controllers/billingController')


//utiliser un middlware sur une routeparticuliaire en l'ajoutant en deuxieme argument de la route
const requieLogin = require('../middlewares/requireLogin')

module.exports = app =>{

    app.post('/api/stripe',requieLogin,billingController.stripeBilling)

}