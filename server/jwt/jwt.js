const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./jwtSecret");
// const {jwtSe}
exports.decodeToken = token => {
  return jwt.decode(token.replace("Bearer", ""));
};

exports.getJWTToken = data => {
  const token = `Bearer${jwt.sign(data, jwtSecret, { expiresIn: "15m" })}`;
  return token;
};
