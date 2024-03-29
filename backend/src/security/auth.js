const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from header (x-auth-token)
  const token = req.header("x-auth-token");

  //check if the token is valid
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecretKey"));

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: "Invalid token, authorization denied" });
  }
};
