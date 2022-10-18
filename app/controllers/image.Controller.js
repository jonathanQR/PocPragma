const imageService = require('../services/image.service')
const {httpError} =require('../helpers/handleError')

const showAll = async(req,res)=>{    
    try {       
        const response = await imageService.getAll();
        res.status(201).json({
            status:201,
            data:response,
            msg:'Lista de imagenes'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const createImage = async(req,res)=>{    
    try {       
        const response = await imageService.createImage(req.file,req.body.idPerson);
        res.status(201).json({
            status:201,
            data:response,
            msg:'Imagen guardada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const getById = async(req,res)=>{    
    try {       
        const response = await imageService.getImageById(req.params.id);
        res.status(201).json({
            status:201,
            data:response,
            msg:'Imagen guardada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const getByIdPerson = async(req,res)=>{    
    try {       
        const response = await imageService.getByIdPerson(req.params.idPerson);
        res.status(201).json({
            status:201,
            data:response,
            msg:'Imagen guardada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const deleteByIdPerson = async(req,res)=>{    
    try {  
        console.log(req.params.idPerson)     
        const response = await imageService.deleteByIdPerson(req.params.idPerson);
        
        res.status(201).json({
            status:201,
            data:response,
            msg:'Imagen guardada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}


const updateByIdPerson = async(req,res)=>{    
    try {              
        const response = await imageService.updateByIdPerson(req.file,req.params.idPerson);
        
        res.status(201).json({
            status:201,
            data:response,
            msg:'Imagen guardada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}



module.exports={createImage,showAll,getById,getByIdPerson,deleteByIdPerson,updateByIdPerson}