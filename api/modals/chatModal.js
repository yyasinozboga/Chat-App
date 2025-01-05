const { Schema, default: mongoose } = require("mongoose");

const chatSchema = new Schema(
  {
    users: [
      { name: String, surname: String },
      { name: String, surname: String },
    ],
    messages: [
      {
        message: String,
        user_id: String,
        createdAt: Date,
      },
    ],
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;