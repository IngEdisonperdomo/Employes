const { standardResponse } = require("../utils/general");

const service = {};

service.getEmployeeReport = async (req, res) => {
  try {
    return standardResponse(
      res,
      "Employee report retrieved successfully",
      null
    );
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.getDepartmentReport = async (req, res) => {
  try {
    return standardResponse(
      res,
      "Department report retrieved successfully",
      null
    );
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

module.exports = service;
