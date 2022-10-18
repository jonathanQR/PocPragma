const personService = require('../services/person.service')
const {httpError} =require('../helpers/handleError')


const getAll = async(req,res)=>{
    const response =await personService.getAll();
    try{
        res.status(200).json({
            data:response,
            msg:null
        });
    }catch(error){
        httpError(res,error)
    }
}

const getPerson = async(req,res)=>{
    try {
        let id = req.params.id;

        const response = await personService.getPerson(id);

        if(!response){
            res.status(404).json({
                status: 404,
                data: null,
                msg: 'No existe la persona con id: '+id
            });
            res.end();
        }else{
            res.json({
                status: 200,
                data: response,
                msg: null
            });
        }
        
    } catch (error) {
        httpError(res, error);
    }
}

const getPersonByDocument = async(req,res)=>{
    try {
        let document = req.params.document;
        
        const response = await personService.getPersonByDocument(document);
        
        if(response.length===0){
            res.status(404).json({
                status: 404,
                data: null,
                msg: 'No existe la persona con documento: '+document
            });
            res.end();
        }else{
            res.json({
                status: 200,
                data: response,
                msg: null
            });
        }
        
    } catch (error) {
        httpError(res, error);
    }
}

const createPerson = async(req,res)=>{    
    try {       
        const response = await personService.createPerson(req.body);
        res.status(201).json({
            status:201,
            data:response,
            msg:'Persona creada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const update =async(req,res)=>{
    try {
        let id = req.params.id;        
        const response = await personService.update(id,req.body)
        res.status(201).json({
            status:201,
            data:response,
            msg:'Persona modificada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const deletePerson = async(req,res)=>{
    try {
        let id = req.params.id;        
        const response = await personService.deletePerson(id);
        res.status(201).json({
            status:201,
            data:response,
            msg:'Persona Eliminada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const deletePersonByDocument = async(req,res)=>{
    try {
        let document = req.params.document;        
        const response = await personService.deletePersonByDocuyment(document);
        res.status(201).json({
            status:201,
            data:response,
            msg:'Persona Eliminada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

module.exports= {getAll, getPerson,getPersonByDocument, createPerson,update,deletePerson,deletePersonByDocument}