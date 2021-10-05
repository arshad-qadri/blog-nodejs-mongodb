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
        first_name: String,
        last_name: String,
        email: String,
        contact: Number,
        password: String,
      },
      { timestamps: true }
    )
  );
  return signup;
};
