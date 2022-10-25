const imageService = require('../services/image.service')
const {httpError} =require('../../helpers/handleError')
const {Ok,NotFound,SendError }= require('../../shared/http.response')

const showAll = async(req,res)=>{    
    try {       
        const data = await imageService.getAll();
        if (data.length === 0) {
            NotFound(res, "No existen imagenes");            
          }
          else{
          Ok(res, data);
        }
    } catch (error) {
        SendError(res, error.message)
    }
}

const createImage = async(req,res)=>{    
    try {       
        const data = await imageService.createImage(req.file,req.body.personDocument);
        Ok(res,data);
    } catch (error) {        
        SendError(res, error.message)
    }
}


const getByDocumentPerson = async(req,res)=>{    
    try {       
        const data = await imageService.getByDocumentPerson(req.params.personDocument);
        if(!data){
            NotFound(res, "No se pudo encontrar la imnage"); 
            res.end();            
        }else{
            Ok(res, data);
        }
    } catch (error) {
        SendError(res, error.message)
    }
}

const deleteByDocumentPerson = async(req,res)=>{    
    try {              
        const data = await imageService.deleteByDocument(req.params.personDocument);        
        Ok(res, data);
    } catch (error) {
        SendError(res, error.message)
    }
}


const updateByDocumentPerson = async(req,res)=>{    
    try {              
        const data = await imageService.updateByDocumentPerson(req.file,req.params.personDocument);
        Ok(res, data);
    } catch (error) {
        SendError(res, error.message)
    }
}



module.exports={createImage,showAll,getByDocumentPerson,deleteByDocumentPerson,updateByDocumentPerson}