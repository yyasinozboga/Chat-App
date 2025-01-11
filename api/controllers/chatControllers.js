const Chat = require("../modals/chatModal");

exports.getChats = async (req, res) => {
  try {
    let chats;

    if (req.query.text) {
      chats = await Chat.find({
        users: {
          $elemMatch: {
            name: { $regex: req.query.text, $options: "i" },
          },
        },
      });
    } else {
      chats = await Chat.find({
        users: { $elemMatch: { user_id: req.user._id } },
      });
    }

    res.status(200).json({ user_id: req.user._id, chats });
  } catch (error) {
    res.status(500).json({ message: "Mesajlarınızı alırken bir sorun oluştu" });
  }
};

exports.getChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: "Mesajlarınız yüklenemedi" });
  }
};

exports.createChat = async (req, res) => {
  try {
    const chat = await Chat.create({
      users: [
        {
          name: req.user.name,
          surname: req.user.surname,
          user_id: req.user._id,
        },

        {
          name: req.body.name,
          surname: req.body.surname,
          user_id: req.foundUser._id,
        },
      ],
      messages: [],
    });

    res.status(200).json(chat);
  } catch (error) {
    res.status(404).json({ message: "Sohbet oluşturulamadı" });
  }
};

exports.addMessage = async (req, res) => {
  try {
    await Chat.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          messages: req.body,
        },
      },
      { new: true }
    );

    res.status(200).json(req.body);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: "Mesajınız gönderilemid!" });
  }
};
