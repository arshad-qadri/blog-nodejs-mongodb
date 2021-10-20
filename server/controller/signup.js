const { getJWTToken, decodeToken } = require("../jwt/jwt");
const { sendMail } = require("../mail/sendMail");
const db = require("../models");
const signups = db.model;
const { celebrate } = require("celebrate");
const Joi = require("joi");
const { object, string } = require("joi");
const {
  hashPassword,
  comparePassword,
} = require("../hashpassword/hashpassword");

const createAccount = {
  validator: celebrate({
    body: Joi.object().keys({
      fullname: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      isAdmin: Joi.boolean().required(),
    }),
  }),
  controler: async (req, res) => {
    const user = await signups.findOne({ email: req.body.email });
    const hashpassword = await hashPassword(req.body.password, 12);

    const signup = new signups({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashpassword,
      isAdmin: req.body.isAdmin,
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
  },
};

const login = {
  validator: celebrate({
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),

  controler: async (req, res) => {
    const user = await signups.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).send({ message: "Email or password wrong" });
    } else {
      const match = await comparePassword(req.body.password, user.password);
      if (!match) {
        res.status(401).send({ message: "Email or password wrong" });
      } else {
        const tokens = getJWTToken({ _id: user._id, email: user.email });
        const token = tokens.replace("Bearer", "");
        res.send({ data: user, token: token, message: "Login successfully." });
      }
    }
  },
};

const findAll = {
  controler: (req, res) => {
    signups
      .find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: "Error", err });
      });
  },
};

const findOne = {
  controler: async (req, res) => {
    await signups
      .findOne({ _id: req.params.id })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: "Error", err });
      });
  },
};

const mail = {
  validator: celebrate({
    body: {
      email: Joi.string().email().required(),
    },
  }),
  controler: async (req, res) => {
    try {
      const user = await signups.findOne({ email: req.body.email });
      console.log(user);

      if (user) {
        const tokens = getJWTToken({ _id: user._id, email: user.email });
        const token = tokens.replace("Bearer", "");
        const link = `http://localhost:3000/change-password/${token}`;
        sendMail(user?.email, "Change forgot password", link);
        return res.status(200).json({
          message: "password reset link has been sent",
        });
      } else {
        return res.status(404).json({ message: "User not register" });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

const changepassword = {
  validator: celebrate({
    body: {
      newPassword: Joi.string().min(6).required(),
      reEnterPassword: Joi.string().min(6).required(),
    },
  }),
  controler: async (req, res) => {
    const tokenwithbearer = req.headers.authorization;
    const tokens = tokenwithbearer.replace("Bearer ", "");
    const token = decodeToken(tokens);
    console.log(token);
    const { _id } = token;
    const id = _id;
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
        })
        .catch(err => {
          res.status(404).json(err);
        });
    }
  },
};

module.exports = {
  createAccount,
  login,
  findAll,
  findOne,
  mail,
  changepassword,
};
