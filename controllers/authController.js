const passport = require('passport');


exports.getAuthGoogle = passport.authenticate('google',{scope:['profile','email']});




exports.authGoogleCallback = passport.authenticate('google')