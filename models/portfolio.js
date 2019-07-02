var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	type: {type:String, required: true},
	imagePath: {type:String, required: true},
	title: {type:String, required: true},
	subTitle: {type:String, required: true},
	description: {type:String, required: true},
	rating: {type:Number, required: true},
	client: {type:String, required: true},
	completedDate: {type:String, required: true}
});

module.exports = mongoose.model('Portfolio', schema);