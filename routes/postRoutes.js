const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

const {
  createPost,
  deletePost,
  editPost,
  getPosts,
} = require("../controllers/postController");

router.route("/posts").get(isLoggedIn, getPosts);
router.route("/post").post(isLoggedIn, createPost);
router.route("/post/:id").put(isLoggedIn, editPost);
router.route("/post/:id").delete(isLoggedIn, deletePost);

module.exports = router
