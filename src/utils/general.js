const jwt = require("jsonwebtoken");

const ROLES = ["ADMIN", "MANAGER", "EMPLOYEE"];

const standardResponse = (res, message, data, status) => {
  return res.status(status).json({
    message: message,
    data: data,
  });
};

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRECT_KEY,
    {
      expiresIn: "1h",
    }
  );
};

module.exports = { ROLES, standardResponse, generateToken };
