require("dotenv").config();
var jwt = require("jsonwebtoken");

const loginUsers = (req, res) => {
  const { email, password, userId, is_admin } = req.body;

  const token = jwt.sign(
    {
      userId: userId,
    },
    `${process.env.TOKEN}`,
    { expiresIn: "24h" }
  );

  if (is_admin) {
    res.send({ msg: "Login Successful", token: token, is_admin });
  } else {
    res.send({ msg: "Login Successful", token: token, is_admin });
  }
};

module.exports = {
  loginUsers,
};
