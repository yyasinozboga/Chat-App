const express = require("express");
const {
  singup,
  login,
  protect,
  getUser,
} = require("../controllers/userControllers");
const {
  getChat,
  getChats,
  createChat,
  addMessage,
} = require("../controllers/chatControllers");

const router = express.Router();

router.get("/users/:email", getUser);

router.post("/signup", singup);

router.post("/login", login);

router
  .route("/chats")
  .get(protect, getChats)
  .post(protect, getUser, createChat);

router.route("/chats/:id").get(getChat).post(protect, addMessage);

module.exports = router;
