require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const apiRouter = require('./app/routes/index');

const app = express();

require('./config/mysql.js');


const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log('Servidor arrancado');
});

