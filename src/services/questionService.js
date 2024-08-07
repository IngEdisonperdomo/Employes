const Questions = require("../models/question");
const { standardResponse } = require("../utils/general");

const service = {};

service.createQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    const questionData = await Questions.create({
      question,
    });

    return standardResponse(
      res,
      "Question created successfully",
      questionData,
      201
    );
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.getQuestions = async (req, res) => {
  try {
    const questions = await Questions.find();

    return standardResponse(res, "Questions retrieved successfully", questions);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { question } = req.body;

    const questionData = await Questions.findByIdAndUpdate(
      id,
      {
        question,
      },
      {
        new: true,
      }
    );

    return standardResponse(res, "Question updated successfully", questionData);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

module.exports = service;
