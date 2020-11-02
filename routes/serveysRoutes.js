const serveysController = require('../controllers/serveysController')
//middleware login , user is login ?
const requireLogin = require('../middlewares/requireLogin')


module.exports = app => {
    //user is login ? middleware
    //check if user have any credrit midlleware 
    app.post('/api/surveys', requireLogin, serveysController.postServey)



}