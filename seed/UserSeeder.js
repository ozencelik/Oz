var User = require('../models/user');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Oz', { useNewUrlParser: true });

var users = [

	new User({
		name: 'John Doe',
		email: 'test@gmail.com',
		password: '123456'
	}),
	new User({
		name: 'Özenç Çelik',
		email: 'ozenc@gmail.com',
		password: '123456'
	}),
	new User({
		name: 'Betül Demirci',
		email: 'betul@gmail.com',
		password: '123456'
	})

];

var done = 0;

for(var i = 0; i < users.length; i++){
	users[i].save(function(err, result){
		done++;
		if(done == users.length){
			mongoose.disconnect();
		}
	});
}

