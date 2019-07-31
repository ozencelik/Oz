var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
	done(null, user.id);
}); // Tell session how to store a user.

passport.deserializeUser(function(id, done){
	User.findById(function(err, user){
		done(err, user);
	});
}); // Tell session how to retreive a user.


/*
//Passport local strategy for other strategy visit http://www.passportjs.org/docs/
passport.use('local.signup', new LocalStrategy({
	emailField: 'email',
	passwordField: 'pass',
	passReqToCallback: true
}, function(req, username, password, done) {

	User.findOne({'email': email}, function(err, user){
		if(err){
			return done(err);
		}
		if(user){
			return done(null, false, {message: 'Email is already in use.'}); //done:false means no error but not succesfull.
		}

		var newUser = new User();
		newUser.name = name;
		newUser.email = email;
		newUser.password = newUser.encryptPassword(password);
		newUser.save(function(err, result){
			if(err){
				return done(err);
			}
			return done(null, newUser);
		});
	});

}));*/



passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pass',
    passReqToCallback: true
  },
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
		if (err) { return done(err); }
		if (!user) {
			return done(null, false, { message: 'Email is already in use.' });
		}

	  	var newUser = new User();
		newUser.email = username;
		newUser.password = newUser.encryptPassword(password);
		newUser.save(function(err, result){
			if(err){
				return done(err);
			}
			return done(null, newUser);
		});
    });
  }
));





