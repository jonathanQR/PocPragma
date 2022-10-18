const Sequelize = require('sequelize')
const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const Person = sequelize.define(
    'persona',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        names:{
            type: DataTypes.STRING,
            allowNull:false
        },
        lastNames:{
            type: DataTypes.STRING,
            allowNull:false
        },
        documentType:{
            type: DataTypes.ENUM('TI','CC','RC','CE','NIP','NUIP'),
            allowNull:false
        },
        document:{
            type: DataTypes.STRING,
            unique: true,
            allowNull:false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        city:{
            type: DataTypes.STRING,
            allowNull:false
        }
    }
)

module.exports= {Person};

// module.exports=(sequelize,type)=>{
//     return sequelize.define('persona',{
//         id:{
//             type: type.INTEGER,
//             primaryKey:true,
//             autoIncrement:true
//         },
//         names:{
//             type: type.STRING,
//             allowNull:false
//         },
//         lastNames:{
//             type: type.STRING,
//             allowNull:false
//         },
//         documentType:{
//             type: type.ENUM('TI','CC','RC','CE','NIP','NUIP'),
//             allowNull:false
//         },
//         document:{
//             type: type.STRING,
//             unique: true,
//             allowNull:false
//         },
//         age:{
//             type: type.INTEGER,
//             allowNull:false
//         },
//         city:{
//             type: type.STRING,
//             allowNull:false
//         }
//     })
// }