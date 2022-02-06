const router = require("express").Router();
const authController = require("../controllers/auth");

const { userSignupValidator } = require("../validators/auth");
const { runValidators } = require("../validators");

router.post("/v1/signup", userSignupValidator, runValidators, authController.signUpUser);
router.post("/v1/verify-otp", authController.verifyEmail);

module.exports = router;
