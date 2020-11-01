const billingController = require('../controllers/billingController')

module.exports = app =>{

    app.post('/api/stripe',billingController.stripeBilling)

}