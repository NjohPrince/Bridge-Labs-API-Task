const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    p_name: {
      type: String,
      required: true,
    },
    p_desc: {
      type: String,
      required: true,
    },
    p_path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
