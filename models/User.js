const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	phone_number: {
		type: Number | String,
		required: true,
	},
	address: {
		type: String,
		default: '',
	},
	password: {
		type: String,
		required: true,
		minlength: [6, 'password must be 6 character'],
	},
});

module.exports = mongoose.model('User', userSchema);
