// index.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Import the event routes
const eventRoutes = require('./routes/events');

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection URL (from environment variable)
const dbURL = process.env.DB_URL; // Local or remote DB URL

// Connect to MongoDB
mongoose.connect(dbURL,{
    serverSelectionTimeoutMS: 5000, // Optional: set timeout for server selection
    connectTimeoutMS: 10000, // Optional: set timeout for connection establishment
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use the event routes
app.use('/api', eventRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
