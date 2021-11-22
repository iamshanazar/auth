require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'ecommerce';

mongoose
	.connect(`mongodb://localhost:27017/${DB_NAME}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`http://localhost:${PORT}`);
		});
	})
	.catch(err => {
		console.log(err);
	});
