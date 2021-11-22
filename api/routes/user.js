const express = require("express");
const router = express.Router();
const userController = require("../../Controller/user");

router.post("/signup", userController.user_post_signup);
router.post("/login", userController.user_post_login);

module.exports = router;
