const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [50, "Title must be less than 50 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, "Description must be less than 200 characters"],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "in progress", "completed"],
        message: "{VALUE} is not supported",
      },
      default: "pending",
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
