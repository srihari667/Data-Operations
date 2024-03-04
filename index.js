// index.js
const express = require('express');
const bodyParser = require('body-parser');
const departmentRoutes = require('./routes/departmentRoutes');
const db = require('./db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/department', departmentRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
