const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book Title is Required"],
    trim: true,
    maxLength: [100, "Book Title cannot be more than 100 characters"],
  },

  author: {
    type: String,
    required: [true, "Author name is Required"],
    trim: true,
  },

  year: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1000, "Year must be at least 1000"],
    max: [new Date().getFullYear(), "Year cannot be from the future"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", BookSchema);
