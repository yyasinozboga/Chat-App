const express = require("express");
const router = require("./routes/chatRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(router);

module.exports = app;
