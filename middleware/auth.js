const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({
      msg: "No token, authorization denied"
    });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user; // decoded is the payload we set and it has the user object
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is invalid"
    });
  }
};