const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must write name"],
    trim: true,
    maxLength: [20, "name is too large"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = new mongoose.model("Task", TaskSchema);
