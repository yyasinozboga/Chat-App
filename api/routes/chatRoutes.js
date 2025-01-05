const express = require("express");
const { singup, login, protect } = require("../controllers/userControllers");
const {
  getChat,
  getChats,
  createChat,
  addMessage,
} = require("../controllers/chatControllers");

const router = express.Router();

router.post("/signup", singup);

router.post("/login", login);

router.route("/chats").get(protect, getChats).post(protect, createChat);

router.route("/chats/:id").get(getChat).post(protect, addMessage);

module.exports = router;
