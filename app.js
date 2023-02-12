const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());

const eventRouter = require('./routes/eventRoutes');
const userRouter = require('./routes/userRoutes');


app.use('/api/v1/events', eventRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;