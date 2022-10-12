const { Sequelize } = require("sequelize");

const personaModel= require('../app/models/person.model')

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
});

const persona = personaModel(sequelize,Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas')
})



module.exports = { sequelize, persona };