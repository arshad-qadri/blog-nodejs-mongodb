const { getJWTToken } = require("../jwt/jwt");
const { sendMail } = require("../mail/sendMail");
const db = require("../models");
const signups = db.model;

exports.ceateAccount = async (req, res) => {
  const user = await signups.findOne({ email: req.body.email });

  const signup = new signups({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    contact: req.body.contact,
    password: req.body.password,
  });

  if (user?.email === req.body.email) {
    res.status(401).send({ message: "Email is already exist." });
  } else {
    signup
      .save(signup)
      .then(data => {
        res.send({
          data: data,
          message: "Account created successfully.",
        });
      })
      .catch(err => {
        res.status(500).send({ message: "Error", err });
      });
  }
};

exports.login = async (req, res) => {
  const user = await signups.findOne({ email: req.body.email });
  console.log("uers", user);
  if (user?.email !== req.body.email || user?.password !== req.body.password) {
    res.status(401).send({ message: "Email or password wrong" });
  } else {
    const tokens = getJWTToken({ _id: user._id, email: user.email });
    const token = tokens.replace("Bearer", "");
    res.send({ data: user, token: token, message: "Login successfully." });
  }
};

exports.findAll = (req, res) => {
  signups
    .find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error", err });
    });
};

exports.findOne = async (req, res) => {
  await signups
    .findOne({ _id: req.params.id })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error", err });
    });
};

exports.mail = async (req, res) => {
  const user = await signups.findOne({ email: req.body.email });
  console.log(user);
  const tokens = getJWTToken({ _id: user._id, email: user.email });
  const token = tokens.replace("Bearer", "");

  if (user?.email !== req.body.email) {
    return res.status(422).json({ message: "User not register" });
  } else if (user) {
    const link = `http://localhost:3000/change-password/${user.id}/${token}`;
    sendMail(user?.email, "Change forgot password", link);
    return res.status(200).json({
      //   data: user,
      message: "password reset link has been sent",
      //   token: token,
    });
  }
};

exports.changePassword = async (req, res) => {
  const id = req.params.id;
  if (!req.body.newPassword && !req.body.reEnterPassword) {
    res.status(422).send({ message: "Fields cannot be empty" });
  } else if (req.body.newPassword !== req.body.reEnterPassword) {
    res.status(422).send({ message: "Password not match." });
  } else {
    await signups
      .updateOne(
        { _id: id },
        { password: req.body.newPassword },
        { useFindAndModify: false }
      )
      .then(data => {
        res.send({ message: "Password successfully changed." });
      });
  }
};
