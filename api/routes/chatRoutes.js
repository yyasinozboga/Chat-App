const express = require("express");
const { singup, login, protect } = require("../controllers/userControllers");
const { getChat, getChats } = require("../controllers/chatControllers");

const router = express.Router();

router.post("/signup", singup);

router.post("/login", login);

router.get("/chats", protect, getChats);

router.get("/chats/:id", getChat);

module.exports = router;
