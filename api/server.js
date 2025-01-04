const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://127.0.0.1:27017/chatdb")
  .then(() => console.log("🎾 connected to mongoDB"))
  .catch(() => console.log("💥 could not connect to mongoDB"));

const port = 3000;

app.listen(port, () => console.log("⚾️ listening on " + port));
