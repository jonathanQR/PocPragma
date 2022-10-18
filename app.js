require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const {dbConnectMySQL}=require('./app/Person/db/mysql');
const { dbConnect } = require('./app/Image/db/mongo');

const apiRouter = require('./app/routes/index');

const app = express();




const PORT = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log('Servidor iniciado');
});


dbConnectMySQL();
dbConnect();

