module.exports = mongoose => {
  const blog = mongoose.model(
    "blog",
    mongoose.Schema({ title: String, blog: String }, { timestamps: true })
  );
  return blog;
};

module.exports = mongoose => {
  const signup = mongoose.model(
    "signup",
    mongoose.Schema(
      {
        fullname: String,
        email: String,
        password: String,
        comment: String,
        isAdmin: Boolean,
      },
      { timestamps: true }
    )
  );
  return signup;
};
