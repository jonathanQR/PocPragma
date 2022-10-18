const image = require('../models/image.model')
const {handleErrorResponse,httpError} = require('../helpers/handleError');

const chechImageExist = async (req,res,next)=>{
    try {
        let idPerson = req.params.idPerson; 
        console.log(idPerson)
        const response = await image.findOne({idPerson:idPerson});        
        if(!response){
            httpError(res, error);            
        }else{
            next();
        }
    } catch (error) {
        handleErrorResponse(res,"El id ingresado no fue encontrado",401);
        console.log(error)
    }
}

module.exports={chechImageExist}