//#region Imports

const app = require('express')();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const consign = require('consign')();
const monitoring = require('../app/utils/monitoring');
const cors = require('cors');
const express = require('express');
const auth = require('../auth')();
const jwt = require('jwt-simple');
const swagger = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

//#endregion

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    headers: ['Content-Type', 'Authorization', 'token']
}));

app.use(auth.initialize());
app.use('/static', express.static('uploads'));

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));
app.use('/hello', (req, res) => {
    res.send('hello world');
});

app.use((req, res, next) => monitoring.startMonitoring(req, res, next));

consign.include('config/dbConnection.js')
.then('app/controllers')
.then('app/routes')
.into(app);

module.exports = app;
