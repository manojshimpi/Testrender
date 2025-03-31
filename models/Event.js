// models/Event.js

const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name of the event is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
  date: {
    type: Date,
    required: true, // Event date is required
  },
  location: {
    type: String,
    required: true, // Location is required
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the event is created
  }
});

// Create a model based on the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
