const app = require('./server')
const {dbConnectMySQL}=require('./app/Person/db/mysql');
const { dbConnect } = require('./app/Image/db/mongo');


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Servidor iniciado');
});


dbConnectMySQL();
dbConnect();

