const feedBack = require("../models/feedback");

const service = {};

service.createFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const feedback = await feedBack.create({
      name,
      email,
      message,
    });

    return standardResponse(
      res,
      "Feedback created successfully",
      feedback,
      201
    );
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

module.exports = service;
