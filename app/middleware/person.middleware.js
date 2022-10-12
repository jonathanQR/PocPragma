const {persona} = require('../../config/mysql');
const {handleErrorResponse} = require('../helpers/handleError');


const checkDocument = async (req,res,next)=>{
    try {
        let document = req.body.document;
        const response = await persona.findAll({where:{document:document}});
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
        const response = await persona.findAll({where:{id:id}});
        if(response.length===0){
            httpError(res, error);            
        }else{
            next();
        }
    } catch (error) {
        handleErrorResponse(res,"El id ingresado no fue encontrado",401);
    }
}



module.exports={checkDocument,checkPersonExist}