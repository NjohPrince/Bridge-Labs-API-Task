const Post = require("../models/post");

exports.createPost = async (req, res) => {
  try {
    let { file, name, desc } = req;
    let path = "http://localhost:8000" + file.path.split("uploads")[1];
    let post = new Post({
      image: file,
      name: name,
      desc: desc,
      path: path,
    });

    await post.save();
    return res.status(201).json({
      message: "Post created successfully.",
      post,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
};
