const jwt = require("jsonwebtoken");
require("dotenv").config();
const { standardResponse } = require("../utils/general");

const verifyToken = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    return standardResponse(
      res,
      "Access denied. No token provided.",
      null,
      401
    );
  }
  const token = req.headers["authorization"].split(" ")[1];

  return await jwt.verify(token, process.env.JWT_SECRECT_KEY, (error, data) => {
    if (error) {
      return standardResponse(res, "Access denied. Invalid token.", null, 401);
    }
    req.user = data;
    return next();
  });
};

module.exports = verifyToken;
