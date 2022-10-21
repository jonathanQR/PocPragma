require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')



const apiRouter = require('../app/routes/');

const app = express();





app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',apiRouter);

module.exports = app;