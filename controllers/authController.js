const passport = require('passport');

//
exports.getAuthGoogle = passport.authenticate('google',{scope:['profile','email']});

//
exports.authGoogleCallback = passport.authenticate('google');


//
exports.currentUser = (req, res) =>{
console.log("exports.currentUser -> req", req.user)

    res.send(req.user)

}

//
exports.authLogout = (req, res) =>{
    //log automaticat attache by passport
    req.logout()
    res.json({'message':'user destroye logout ok'})
    
}

