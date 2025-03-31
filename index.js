// index.js

const express = require('express');
const app = express();
const port = 3000;

// Create a router
const router = express.Router();

// Define a simple GET route
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Use the router in the app
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
