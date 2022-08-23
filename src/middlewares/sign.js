const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {
  try {
    const token = await req.headers.authorization;

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if (decoded) {
      next();
    }
  } catch (err) {
    next();
  }
}; 

module.exports = {
  loginRequired,
}