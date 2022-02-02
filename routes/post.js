const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");

const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePostById,
} = require("../controllers/post");

router.post("/v1/post", upload.single("file"), createPost);
router.patch("/v1/post/update/:id", upload.single("file"), updatePostById);
router.get("/v1/posts", getAllPosts);
router.get("/v1/posts/:id", getPostById);
router.delete("/v1/post/delete/:id", deletePost);

module.exports = router;
