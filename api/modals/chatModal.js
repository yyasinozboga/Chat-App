const { Schema, default: mongoose } = require("mongoose");

const chatSchema = new Schema(
  {
    user_id: String,
    users: [
      { name: String, surname: String, user_id: String },
      { name: String, surname: String, user_id: String },
    ],
    messages: [
      {
        text: String,
        createdAt: Date,
        user: {
          _id: String,
        },
        _id: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
