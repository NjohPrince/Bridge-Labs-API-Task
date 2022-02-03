const router = require("express").Router();
const authController = require("../controllers/auth");

router.post("/v1/signup", authController.signUpUser);
router.post("/v1/verify-otp", authController.verifyEmail);

module.exports = router;
