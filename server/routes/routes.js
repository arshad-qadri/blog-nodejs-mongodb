module.exports = app => {
  const blog = require("../controller/blog");
  const signup = require("../controller/signup");

  const router = require("express").Router();

  router.post("/create-blog", blog.blogCreate);
  router.get("/blogs", blog.findAll);
  router.get("/blog/:_id", blog.findOne);
  router.post("/blog/:_id", blog.update);
  router.post("/delete-blog/:_id", blog.delete);

  // =======  signup ==============
  router.post("/create-account", signup.ceateAccount);
  router.post("/login", signup.login);
  router.get("/users", signup.findAll);
  router.get("/user/:id", signup.findOne);
  router.post("/forgot-password", signup.mail);
  router.post("/change-password/:id", signup.changePassword);
  app.use("/api", router);
};
