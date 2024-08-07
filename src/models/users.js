//create model user
const mongoose = require("mongoose");
const { ROLES } = require("../utils/general");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLES[2],
    enum: ROLES,
    required: true,
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
