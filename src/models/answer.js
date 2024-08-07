const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  idQuestions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
