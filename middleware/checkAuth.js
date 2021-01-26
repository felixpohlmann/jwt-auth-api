const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");

function checkAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.send("Unauthorized: No token provided!").status("401");
  } else {
    jwt.verify(token, authConfig.tokenSecret, (err, decoded) => {
      if (err) {
        res.send("Invalid token!");
      } else {
        next();
      }
    });
  }
}

module.exports = checkAuth;