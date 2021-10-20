// module.exports = app => {
// const blog = require("../controller/blog");
// const signup = require("../controller/signup");
const {
  createAccount,
  login,
  findAll,
  findOne,
  mail,
  changepassword,
} = require("../controller/signup");
const router = require("express").Router();

// router.post("/create-blog", blog.blogCreate);
// router.get("/blogs", blog.findAll);
// router.get("/blog/:_id", blog.findOne);
// router.post("/blog/:_id", blog.update);
// router.post("/delete-blog/:_id", blog.delete);

// =======  signup ==============
router.post(
  "/create-account",
  createAccount.validator,
  createAccount.controler
);
router.post("/login", login.validator, login.controler);
router.get("/users", findAll.controler);
router.get("/user/:id", findOne.controler);
router.post("/forgot-password", mail.validator, mail.controler);
router.post(
  "/change-password",
  changepassword.validator,
  changepassword.controler
);
// app.use("/api", router);
// };

module.exports = router;
