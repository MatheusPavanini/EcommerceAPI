const passport = require('passport');
const passportJWT = require('passport-jwt');
const usuarioModel = require('./app/models/usuarioModel');
const cfg = require('./config/authConfig');
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = () => {
  
  let strategy = new Strategy(params, (payload, done) => {
   
    usuarioModel.findOne({ id: payload._id }, (err, users) => {
      
      if (err) {
        return done(err, false);
      }
      if (users) {
        done(null, users);
      } else {
        done(null, false);
      }
      
    });

  });
  
  passport.use(strategy);
  
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};