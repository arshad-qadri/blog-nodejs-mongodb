const express = require("express");
const app = express();
const { errors } = require("celebrate");
const cors = require("cors");

const db = require("./models/index");
const { setup } = require("./routes/index");
app.use(express.json());

var corsoptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsoptions));
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
// require("./routes/routes")(app);
setup(app);
app.use(errors());

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
