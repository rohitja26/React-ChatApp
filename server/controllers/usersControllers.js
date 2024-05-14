const User = require("../models/usersModal");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already taken", status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "This email is already used", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};

// const User = require("../models/usersModal");
// const bcrypt = require("bcrypt");

// module.exports.register = async (req, res, next) => {
//   try {
//     const { username, email, password } = req.body;
//     const usernameCheck = await User.findone({ username });
//     if (usernameCheck) {
//       return res.json({ msg: "Username already taken" });
//     }
//     const emailCheck = await User.findone({ email });
//     if (emailCheck) {
//       return res.json({ msg: "This email  is already used" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = {
//       username,
//       email,
//       password: hashedPassword,
//     };
//     delete user.password;
//     res.json({ status: true, user });
//   } catch (err) {
//     next(err);
//   }
// };
