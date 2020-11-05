const serveysController = require('../controllers/serveysController')
//middleware login , user is login ?
const requireLogin = require('../middlewares/requireLogin')
const requireCredit = require('../middlewares/requireCredits')


module.exports = app => {


    app.get('/api/surveys/:serveyId/:choice',serveysController.thankForVoting)

    
    //user is login ? use middleware
    //check if user have any credrit use midlleware 
    //cree a new servey
    app.post('/api/surveys', requireLogin,requireCredit, serveysController.postServey)


    //recuperer les clicks de sendGrid
    //lifter les entres et mise en bdd
    app.post('/api/surveys/webHook',serveysController.surveyWebHooks)

    //recuperation pour show les surveys
    //servey par user
    //use custum middlware login?
    app.get('/api/surveys',requireLogin,serveysController.fetchAllServey)



}