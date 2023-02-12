const express = require('express');
const morgan = require('morgan');

const app = express();

const eventRouter = require('./routes/eventRoutes');
// const userRouter = require('./routes/userRoutes');


app.use('/api/v1/events', eventRouter);

module.exports = app;