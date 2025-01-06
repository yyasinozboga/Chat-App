const User = require("../modals/userModal");
const jwt = require("jsonwebtoken");

const signToken = (user_id) => {
  return jwt.sign({ id: user_id }, "bu-met1n@@-ben!m-ç0k-g!zli-imzam", {
    expiresIn: "90d",
  });
};

const createSendToken = (user, code, res) => {
  const token = signToken(user._id);

  res.status(code).json({ token });
};

exports.singup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    createSendToken(newUser, 201, res);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Lütfen email yada şifrenizi giriniz!" });
  }

  const user = await User.findOne({ email });

  if (!user || !(await user.correctPass(password, user.password))) {
    return res.status(401).json({ message: "Geçersiz email veya şifre" });
  }

  const token = signToken(user._id);

  res.status(200).json({ token });
};

exports.getUser = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });

  if (!user) {
    return res.status(404).json({ message: "Kullanıcı bulunamadı" });
  }

  res.status(200).json(user);
};

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Giriş yapamadınız! Lütfen tekrar giriş yapınız." });
    }

    let decoded;

    try {
      decoded = jwt.verify(token, "bu-met1n@@-ben!m-ç0k-g!zli-imzam");
    } catch (error) {
      if (error.message === "jwt expired") {
        return res
          .status(403)
          .json({ message: "Oturumunuz süresi doldu (tekrar giriş yapın)" });
      }

      return res.status(403).json({ message: "Gönderilen token geçersiz" });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Böyle bir kullanıcı yok" });
    }

    if (user.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        message:
          "Şifreniz yakın zamanda değişmiş lütfen tekrardan giriş yapınız!",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
