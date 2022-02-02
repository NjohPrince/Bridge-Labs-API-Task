const Post = require("../models/post");

exports.getAllPosts = (req, res) => {
  Post.find({})
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.createPost = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).send({
      message: "Provide necessary details(name, desc)",
    });
  }
  if (!req.file) {
    return res.status(400).send({
      message: "Please upload an image.",
    });
  }
  try {
    let { file } = req;
    let path = "http://localhost:8000" + file.path.split("uploads")[1];

    let post = new Post({
      p_name: req.body.name,
      p_desc: req.body.desc,
      p_path: path,
    });

    await post.save();
    return res.status(201).json({
      message: "Post created successfully.",
      post,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

exports.updatePostById = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Request body can not be empty!",
    });
  }

  const _id = req.params.id;
  let { file } = req;

  let path = "http://localhost:8000" + file.path.split("uploads")[1];

  Post.findByIdAndUpdate(
    _id,
    {
      p_name: req.body.name,
      p_desc: req.body.desc,
      p_path: path,
    },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Post with id=${id} not found.`,
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating post with id: " + _id,
      });
    });
};

exports.deletePost = async (req, res) => {
  let _id = req.params.id;
  Post.findByIdAndRemove(_id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete post with id: ${_id}. Post not found!`,
        });
      } else {
        res
          .send({
            message: "Post was deleted successfully!",
          })
          .status(200);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete post with id: " + _id,
      });
    });
};

exports.getPostById = async (req, res) => {
  let _id = req.params.id;
  Post.findById(_id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Post with id " + _id + " not found" });
      else res.send(data).status(200);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving post with id: " + _id });
    });
};
