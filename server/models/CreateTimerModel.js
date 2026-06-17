const mongoose = require("mongoose");

const timerTemplate = new mongoose.Schema({
  timerName: {
    type: String,
    required: true,
  },
  workTime: {
    type: Number,
    required: true,
  },
  breakTime: {
    type: Number,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  song: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("timer", timerTemplate);
