const express = require("express");
const {
  singup,
  login,
  protect,
  getUserByEmail,
  getUserById,
} = require("../controllers/userControllers");
const {
  getChat,
  getChats,
  createChat,
  addMessage,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/users/:id").get(protect, getUserById);
router.route("/users").get(protect, getUserById);

router.post("/signup", singup);

router.post("/login", login);

router
  .route("/chats")
  .get(protect, getChats)
  .post(protect, getUserByEmail, createChat);

router.route("/chats/:id").get(getChat).post(protect, addMessage);

module.exports = router;
