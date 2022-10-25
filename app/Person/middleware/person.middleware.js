const {Person} = require('../model/person.model');
const {handleErrorResponse,httpError} = require('../../helpers/handleError');
const {Ok,NotFound,SendError,AlreadyExists }= require('../../shared/http.response')

const checkDocument = async (req,res,next)=>{
    try {
        let document = req.body.document;
        const response = await Person.findAll({where:{document:document}});
        if(response.length===0){
            next();
        }else{
            AlreadyExists(res,"documento ya registrado")
        }
    } catch (error) {
        SendError(res, error);
    }
}

const checkPersonExist = async (req,res,next)=>{
    try {
        let id = req.params.id;
        const response = await Person.findByPk(id);        
        if(response==null||response.length===0){
            NotFound(res, "ID no registrado");           
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        SendError(res, error);
    }
}

const checkPersonExistBydocument = async (req,res,next)=>{
    try {
        let document = req.params.document;
        console.log(document)
        const response = await Person.findOne({where:{document:document}});
        
        if(response==null||response.length===0){
            NotFound(res, "Documento no registrado");            
        }else{
            next();
        }
    } catch (error) {
        SendError(res, Error);
    }
}



module.exports={checkDocument,checkPersonExist,checkPersonExistBydocument}