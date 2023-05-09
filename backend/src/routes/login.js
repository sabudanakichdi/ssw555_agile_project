const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/Users");

// @route POST api/login
// @desc Login user
// @access Public
router.post(
  "/",
  [
    check("email_id", "Please include valid email").isLength({ min: 1 }),
    check(
      "password",
      "Please enter password with 6 or more character"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email_id, password } = req.body;
   //console.log(email_id);
    try {
      var user;
      await User.findOne({ email_id: req.body.email_id })
        .then((result) => {
          if (result) {
            console.log(result); // Found a matching document 
            user = result;
          } else {
            console.log("No matching document found");
          }
        })
        .catch((err) => {
          console.error(err);
        });
      //console.log(user);
      //Checking if there is user exist
      if (!user) {
        console.log("Login Error: No User Found");
        return res.status(400).json({
          msg: "User needs  to be registered by Sales Executive. Please Contact Sales Team",
        });
      }

      //Encrypt user password
      //const salt = await bcrypt.genSalt(10);
      hashedPassword = password;
      console.log(hashedPassword);
      console.log(user.password);
      if (hashedPassword !== user.password) {
        console.log("Login Error: Wrong Password");
        return res.status(400).json({ msg: "Incorrect email id or password" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, "iamking", { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.log("Login Error: ", err);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
