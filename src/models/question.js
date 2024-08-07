const mongoose = require("mongoose");
const { options } = require("../controllers/questionsController");

const questionSchema = new mongoose.Schema({
  idEvaluations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Evaluations",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Questions", questionSchema);

module.exports = Question;
