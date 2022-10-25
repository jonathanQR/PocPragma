const image = require('../model/image.model')
const {handleErrorResponse,httpError} = require('../../helpers/handleError');
const {Person} = require('../../Person/model/person.model');
const {Ok,NotFound,SendError,AlreadyExists }= require('../../shared/http.response')
const fs=require('fs-extra');
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)


const chechImageExist = async (req,res,next)=>{
    try {
        let document = req.params.personDocument;
        const response = await image.findOne({personDocument:document});        
        if(!response){
            NotFound(res, "Imagen no existe");        
        }else{
            next();
        }
    } catch (error) {
        SendError(res, Error);
    }
}

const checkPersonExistBydocument = async (req,res,next)=>{
    try {
        let document = req.body.personDocument;        
        const response = await Person.findOne({where:{document:document}});
        
        if(response==null||response.length===0){
            await unlinkFile(req.file.path);
            NotFound(res, "Documento no registrado");            
        }else{
            next();
        }
    } catch (error) {        
        SendError(res, Error);
    }
}

const chechImageExistBydocument = async (req,res,next)=>{
    try {
        let personDocument = req.body.personDocument;
        const response = await image.findOne({personDocument:personDocument});        
        if(response){
            await unlinkFile(req.file.path);
            AlreadyExists(res,"documento ya registrado")          
        }else{
            next();
        }
    } catch (error) {
        SendError(res, error);
    }
}

module.exports={chechImageExist,checkPersonExistBydocument,chechImageExistBydocument}