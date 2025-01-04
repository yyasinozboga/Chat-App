const { Schema, default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Kullanıcı isim değerine sahip olmalıdır"],
    },

    surname: {
      type: String,
      required: [true, "Kullanıcı soyisim değerine sahip olmalıdır"],
    },

    email: {
      type: String,
      required: [true, "Kullanıcı email değerine sahip olmalıdır"],
      unique: [true, "Bu eposta adresine kayıt kullanıcı zaten var"],
      validate: [validator.isEmail, "Lütfen geçerli bir mail giriniz"],
    },

    password: {
      type: String,
      require: true,
      required: [true, "Kullanıcı şifreye sahip olmalıdır"],
      validate: [
        validator.isStrongPassword,
        "Lütfen daha güçlü bir şifre giriiniz!",
      ],
    },

    passwordConfirm: {
      type: String,
      required: [true, "Lütfen şifrenizi onaylayın"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Onay şifreniz eşleşmiyor",
      },
    },

    passwordChangedAt: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

//? Veritbanına kullanıcıyı güncellemeden önce:
//* eğer şifre değiştiyse şifre değişim tarihini güncelle
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passChangedAt = Date.now() - 1000;

  next();
});

userSchema.methods.correctPass = async function (pass, hashedPass) {
  return await bcrypt.compare(pass, hashedPass);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
