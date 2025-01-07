const Chat = require("../modals/chatModal");

exports.getChats = async (req, res) => {
  try {
    //    const chats = await Chat.find({
    //      messages: { $elemMatch: { user_id: req.user._id } },
    //    });

    const chats = await Chat.find({
      users: { $elemMatch: { email: req.user.email } },
    });

    res.status(200).json({ email: req.user.email, chats });
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
          email: req.user.email,
        },

        {
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
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
    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          messages: {
            message: req.body.message,
            user_id: req.user._id,
            createdAt: Date.now(),
          },
        },
      },
      { new: true }
    );

    res.status(200).json(chat);
  } catch (error) {
    res.status(404).json({ message: "Mesajınız gönderilemid!" });
  }
};
