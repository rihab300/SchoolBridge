const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/schoolbridge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
