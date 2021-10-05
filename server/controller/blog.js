const db = require("../models");

const blogs = db.model;

exports.blogCreate = (req, res) => {
  const blog = new blogs({
    title: req.body.title,
    blog: req.body.blog,
  });
  blog
    .save(blog)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      // console.log();
      res.status(500).send({ message: "Error" || err });
    });
};

exports.findAll = async (req, res) => {
  // const title = req.query.title;
  // var condition = title
  //   ? { title: { $regex: new RegExp(title), $options: "i" } }
  //   : {};

  await blogs
    .find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "error" || err });
    });
};

exports.findOne = (req, res) => {
  const id = req.params._id;
  blogs
    .findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `blog not found with this id=${id} ` });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({ message: "error" || err });
    });
};

// =============== update =============
exports.update = (req, res) => {
  const id = req.params._id;
  const { title, blog } = req.body;
  blogs
    .updateOne(
      { _id: id },
      { title: title, blog: blog },
      { useFindAndModify: false }
    )
    .then(data => {
      if (!title || !blog) {
        res.status(401).send({ message: "fields cannot be empty" });
      }
      // else if (!data.data) {
      //   res.status(404).send({ message: `cannot update blog with this ${id}` });
      // }
      res.send({ data: data, message: "updated successfully" });
    })
    .catch(err => {
      res.status(500).send({ message: "Error", err });
    });
};

// ============== delete ===========
exports.delete = (req, res) => {
  const _id = req.params._id;
  blogs
    .deleteOne({ _id: _id })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `cannot delete blog with this ${id}` });
      } else {
        res.send({ message: "deleted successfully." });
      }
    })
    .catch(err => {
      res.status(401).send({ message: "Error", err });
    });
};
