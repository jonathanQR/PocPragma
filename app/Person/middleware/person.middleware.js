const {Person} = require('../model/person.model');
const {handleErrorResponse,httpError} = require('../../helpers/handleError');


const checkDocument = async (req,res,next)=>{
    try {
        let document = req.body.document;
        const response = await Person.findAll({where:{document:document}});
        if(response.length===0){
            next();
        }else{
            httpError(res, error);
        }
    } catch (error) {
        handleErrorResponse(res,"El Documento ya esta registrado",401);
    }
}

const checkPersonExist = async (req,res,next)=>{
    try {
        let id = req.params.id;
        console.log(id)
        const response = await Person.findByPk(id);
        
        if(response.length===0){
            httpError(res, error);            
        }else{
            next();
        }
    } catch (error) {
        handleErrorResponse(res,"El id ingresado no fue encontrado",401);
    }
}

const checkPersonExistBydocument = async (req,res,next)=>{
    try {
        let document = req.params.document;
        console.log(document)
        const response = await Person.findOne({where:{document:document}});
        
        if(response.length===0){
            httpError(res, error);            
        }else{
            next();
        }
    } catch (error) {
        handleErrorResponse(res,"El id ingresado no fue encontrado",401);
    }
}



module.exports={checkDocument,checkPersonExist,checkPersonExistBydocument}