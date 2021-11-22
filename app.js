const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

mongoose
	.connect('mongodb://localhost:27017/project', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port, () => {
			console.log(`http://localhost:${port}`);
		});
	})
	.catch(err => {
		console.log(err);
	});
