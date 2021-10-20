const jwt = require("express-jwt");
const { jwtSecret } = require("../jwt/jwtSecret");
const router = require("./routes");

exports.setup = app => {
  app.use(
    "/api",
    jwt({ algorithms: ["HS256"], secret: jwtSecret }).unless({
      path: ["/api/create-account", "/api/login", "/api/forgot-password"],
    })
  );
  app.use("/api", router);
};
