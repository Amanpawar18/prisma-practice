const jwt = require("jsonwebtoken");

const getJwToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = getJwToken ;
