const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// DB Connect
require('./config/dbconnect');

// Mongoose Config
require('./config/mongoose');

// Routes
app.use('/info', (req, res) => res.send('Nigeria Telemedicine App API'));
// app.use('/api/submission', require('./routes/submission'));

const port = process.env.PORT || 3700;

app.listen(port, () => console.log(`Server started on port ${port}`));

// To push to heroku, we just do 'git push heroku master' from the backend
