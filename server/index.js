const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    // useUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log("connected to the database");
  })
  .catch(err => {
    console.log("not connected", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send({ message: "welcome arshad" });
});
require("./routes/routes")(app);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
