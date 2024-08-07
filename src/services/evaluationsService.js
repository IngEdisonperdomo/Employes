const Evaluations = require("../models/evaluations");
const { standardResponse } = require("../utils/general");
const service = {};

service.listEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluations.find();

    return standardResponse(res, "Evaluations list", evaluations, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.createEvaluation = async (req, res) => {
  try {
    const { body } = req;
    const evaluation = new Evaluations(body);
    await evaluation.save();

    return standardResponse(res, "Evaluation created", evaluation, 201);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.getEvaluation = async (req, res) => {
  try {
    const { id } = req.params;
    const evaluation = await Evaluations.findById(id);

    return standardResponse(res, "Evaluation found", evaluation, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.updateEvaluation = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const evaluation = await Evaluations.findByIdAndUpdate(id, body, {
      new: true,
    });

    return standardResponse(res, "Evaluation updated", evaluation, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

service.submitEvaluation = async (req, res) => {
  try {
    const { id } = req.params;
    const evaluation = await Evaluations.findByIdAndUpdate(
      id,
      { submitted: true },
      { new: true }
    );

    return standardResponse(res, "Evaluation submitted", evaluation, 200);
  } catch (error) {
    return standardResponse(res, error.message, null, 404);
  }
};

module.exports = service;
