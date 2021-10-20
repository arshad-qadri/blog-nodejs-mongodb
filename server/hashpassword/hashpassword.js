const bcyript = require("bcrypt");

const hashPassword = (password, salt) => {
  return bcyript.hash(password, salt);
};

const comparePassword = (password, hashPassword) => {
  return bcyript.compare(password, hashPassword);
};

module.exports = { hashPassword, comparePassword };
