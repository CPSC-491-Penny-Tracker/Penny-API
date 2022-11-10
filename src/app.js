require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const authRoute = require('./route/authorization/authorization-route')
const userRoute = require('./route/user/user-route')
const searchRoute = require('./route/search/search-route')
const summaryRoute = require('./route/summary/summary-route')
const budgetRoute = require('./route/budget/budget-route')
const { NODE_ENV } = require('./config');
const app = express();
const morganOption = (process.env.NODE_ENV === 'production') 
    ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res)=>{
  res.send({'data': 'CPSC-491'});
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/search', searchRoute);
app.use('/api/summary', summaryRoute);
app.use('/api/budget', budgetRoute);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production')
    response = { error: { message: 'server error' } };
  else 
    response = { message: error.message, error };
  res.status(500).json(response);
});

module.exports = app;
