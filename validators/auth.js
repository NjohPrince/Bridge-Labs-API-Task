const { check } = require("express-validator");

exports.userSignupValidator = [
  check("fullname").not().isEmpty().withMessage("Your name is required."),
  check("fullname")
    .isLength({ min: 3 })
    .withMessage("Name must be more than 2 characters long."),
  check("email").isEmail().withMessage("Please enter a valid email."),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Invalid email address."),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Account passwords are 8+ characters long."),
];
