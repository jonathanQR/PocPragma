module.exports=(sequelize,type)=>{
    return sequelize.define('persona',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        names:{
            type: type.STRING,
            allowNull:false
        },
        lastNames:{
            type: type.STRING,
            allowNull:false
        },
        documentType:{
            type: type.STRING,
            allowNull:false
        },
        document:{
            type: type.STRING,
            allowNull:false
        },
        age:{
            type: type.INTEGER,
            allowNull:false
        },
        city:{
            type: type.STRING,
            allowNull:false
        },
        img:{
            type: type.BLOB,
            allowNull:false
        }
    })
}