const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./Config/routes');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

routes(app);

module.exports = app;