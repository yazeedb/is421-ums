module.exports = authJwt;

var config = require('../../../config.js');
var	passport = require('passport'),
	JwtStrategy = require('passport-jwt').Strategy;

var jwtOptions = {
	secretOrKey: config.secret
};

function authJwt () {
	passport.use(new JwtStrategy(jwtOptions, function (jwtPayload, done) {
		done(null, jwtPayload);
	}));

	return passport.authenticate('jwt', { session: false });
}