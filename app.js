const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const logger = require('./config/logger');

const ApuError = require('./utils/error');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

app.enable('trust proxy');

require('./routes')(app);

app.use((req, res, next) => {
  next(new ApuError(404, 'Not found'));
});

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.code || 500);
  res.json({
    result: 'error',
    error: err.message || 'Internal Server Error',
  });
});

module.exports = app;
