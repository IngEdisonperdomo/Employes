const mongoose = require("mongoose");
const { ROLES } = require("../utils/general");

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLES[2],
    required: true,
  },
});

const employees = mongoose.model("Employees", employeesSchema);

module.exports = employees;
