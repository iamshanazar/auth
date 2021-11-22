const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.user_post_signup = (req, res, next) => {
	User.find({
		phone_number: req.body.phone_number,
		name: req.body.name,
		email: req.body.email,
		lastname: req.body.lastname,
	})
		.exec()
		.then(user => {
			if (user.length >= 1) {
				res.status(409).json({
					message: 'Mail exist',
				});
			} else {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					if (err) {
						console.log(err);
						res.status(500).json({
							error: 'err',
						});
					} else {
						const user = new User({
							name: req.body.name,
							lastname: req.body.lastname,
							email: req.body.email,
							phone_number: req.body.phone_number,
							password: hash,
						});
						user
							.save()
							.then(result => {
								res.status(201).json({
									message: 'User created succesfully',
								});
							})
							.catch(err => {
								console.log(err);
								res.status(500).json({
									error: err,
								});
							});
					}
				});
			}
		});
};
