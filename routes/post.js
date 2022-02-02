const express = require("express");
const router = express.Router();

const upload = require('../middlewares/upload');

const { createPost } = require("../controllers/post");

router.post("/v1/newpost", upload.single("image"), createPost);

module.exports = router;
