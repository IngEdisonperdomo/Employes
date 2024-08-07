const Employees = require("../models/employees");
const { standardResponse } = require("../utils/general");

const service = {};

service.listEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();

    return standardResponse(res, "Employees list", employees, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employees.findById(id);

    return standardResponse(res, "Employee", employee, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.createEmployee = async (req, res) => {
  try {
    const { name, lastName, phone, email, occupation } = req.body;
    const newEmployee = new Employees({
      name,
      lastName,
      phone,
      email,
      occupation,
    });

    await newEmployee.save();

    return standardResponse(res, "Employee created", newEmployee, 201);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, phone, email, occupation } = req.body;
    const updatedEmployee = await Employees.findByIdAndUpdate(
      id,
      {
        ...(name ? { name } : {}),
        ...(lastName ? { lastName } : {}),
        ...(phone ? { phone } : {}),
        ...(email ? { email } : {}),
        ...(occupation ? { occupation } : {}),
      },
      { new: true }
    );

    return standardResponse(res, "Employee updated", updatedEmployee, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

module.exports = service;
