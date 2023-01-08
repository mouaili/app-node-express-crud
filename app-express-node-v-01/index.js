const bodyParser = require('body-parser');
const morgan = require('morgan');
const { response } = require('express');
const { request } = require('http');
const express = require('express');
const sequelize = require('./views/db/sequelize');

const app = express();
const port = 8000;
// Body-parser middleware
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'));

sequelize.initDB();

//The App's endpoints
require('./routes/findAllUsers')(app);
require('./routes/findUserByPk')(app);
require('./routes/createUser')(app);
require('./routes/updateUser')(app);
require('./routes/deleteUser')(app);

app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>');
});

app.listen(port, (request, response) => {
  console.log(`This app is running on http://localhost:${port}`);
});
