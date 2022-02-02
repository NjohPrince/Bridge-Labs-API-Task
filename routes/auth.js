const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

router.post("/v1/login", login);
router.post("/v1/register", register);

module.exports = router;
