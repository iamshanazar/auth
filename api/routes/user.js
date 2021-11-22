const express = require("express");
const router = express.Router();
const userController = require("../../Controller/user");
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  /*  [
       check("name")
         .not()
         .isEmpty()
         .withMessage("name must have more 5 character"),
       check("email", "Your email is not valid").not().isEmpty(),
       check("password", "Your password 5 character").not().isEmpty(),
     ],
     function (req, res) {
       const errors = validationResult(req);
       console.log(req.body);
       if (errors.isEmpty()) {
         return res.status(422).json(errors.array());
       } else {
         res.send({});
       }
     }, */
  userController.user_post_signup
);
router.post("/login", userController.user_post_login);

module.exports = router;
