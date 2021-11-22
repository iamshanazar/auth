const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

exports.user_post_signup = (req, res, next) => {
  User.find({
    phone_number: req.body.phone_number,
    name: req.body.name,
    email: req.body.email,
    lastname: req.body.lastname,
  })

    .exec()
    .then((user) => {
      if (user.length >= 1) {
        res.status(409).json({
          message: "Mail exist",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              error: "err",
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
              .then((result) => {
                res.status(201).json({
                  message: "User created succesfully",
                });
              })
              .catch((err) => {
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

exports.user_post_login = (req, res, next) => {
  User.find({ email: req.body.email, phone_number: req.body.phone_number })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            { email: user[0].email },
            process.env.JWT_KEY,
            {
              expiresIn: "1s",
            }
          );
          return res.status(200).json({
            message: "Auth succesfully",
          });
        }
      });
    })
    .catch((err) => {
      return res.status.json({
        error: err,
      });
    });
};
