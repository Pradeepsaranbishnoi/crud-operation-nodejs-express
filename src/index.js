require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = require('./config/db');

// Routes
app.use('/api', schoolRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
