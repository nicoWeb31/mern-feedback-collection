const serveysController = require('../controllers/serveysController')
//middleware login , user is login ?
const requireLogin = require('../middlewares/requireLogin')
const requireCredit = require('../middlewares/requireCredits')


module.exports = app => {


    app.get('/api/surveys/:serveyId/:choice',serveysController.thankForVoting)

    
    //user is login ? use middleware
    //check if user have any credrit use midlleware 
    app.post('/api/surveys', requireLogin,requireCredit, serveysController.postServey)


    app.post('/api/surveys/webHook',serveysController.surveyWebHooks)



}