const mongoose = require("mongoose");

//SCHEMA: definition of data structures to be stored and accessed
const postSchema = new mongoose.Schema({
  postTitle: {
    type: text,
    required: true,
  },
  postNumber: {
    type: number,
    required: true,
  },

  postContent: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("posts", postSchema);
