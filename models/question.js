const mongoose = require("mongoose"); // Database

// No image
// Unlimited answers
// Answer order is fixede
// Only one correct answer
const QuestionSchema = new mongoose.Schema({
  "text": {
    "type": String,
    "required": true
  },
  "answers": [
    {
      "type": String
    },
  ],
  "correctAnswer": {
    "type": Number,
    "required": true
  }
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;

module.exports.addQuestion = function(question, callback){

}

module.exports.getQuestion = function(callback){

}
