const bcrypt = require("bcrypt");
const Users = require("../models/users");
const { standardResponse, generateToken } = require("../utils/general");
const jwt = require("jsonwebtoken");

const service = {};

service.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      firstName,
      lastName,
      email: email,
      password: hashedPassword,
    });

    //delete password from response
    delete user._doc.password;

    const token = generateToken(user);

    return standardResponse(
      res,
      "User registered successfully",
      { user, token },
      201
    );
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return standardResponse(res, "User not found", null, 404);
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return standardResponse(res, "Invalid password", null, 404);
    }

    //delete password from response
    delete user._doc.password;

    const token = generateToken(user);

    return standardResponse(
      res,
      "User logged in successfully",
      { user, token },
      200
    );
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

module.exports = service;
