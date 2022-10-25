const personService = require('../services/person.service')
const {httpError} =require('../../helpers/handleError')
const {Ok,NotFound,SendError }= require('../../shared/http.response')

const getAll = async(req,res)=>{
    
    try{
        const data =await personService.getAll();
        if (data.length === 0) {
            NotFound(res, "No existen usuarios");            
          }
          else{
          Ok(res, data);
        }
    }catch(error){
        SendError(res, error.message)
    }
}

const getPerson = async(req,res)=>{
    try {
        let id = req.params.id;
        const data = await personService.getPerson(id);
        
        if(!data){
            NotFound(res, "No se pudo encontrar la persona"); 
            res.end();
        }else{
            Ok(res, data);
        }
        
    } catch (error) {
        SendError(res, error.message)
    }
}

const getPersonByDocument = async(req,res)=>{
    try {
        let document = req.params.document;
        
        const response = await personService.getPersonByDocument(document);
        
        if(response.length===0){
            NotFound(res, "No se pudo encontrar la persona"); 
            res.end();
            
        }else{
            Ok(res, data);
        }
        
    } catch (error) {
        SendError(res, error.message)
    }
}

const createPerson = async(req,res)=>{    
    try {       
        const data = await personService.createPerson(req.body);
        Ok(res, data);
    } catch (error) {
        SendError(res, error.message)
    }
}

const update =async(req,res)=>{
    try {
        let id = req.params.id;        
        const data = await personService.update(id,req.body)
        Ok(res, data);
    } catch (error) {
        SendError(res, error.message)
    }
}

const deletePerson = async(req,res)=>{
    try {
        let id = req.params.id;        
        const data = await personService.deletePerson(id);
        Ok(res, data);
    } catch (error) {
        SendError(res, error.message)
    }
}

const deletePersonByDocument = async(req,res)=>{
    try {
        let document = req.params.document;        
        const data = await personService.deletePersonByDocuyment(document);
        Ok(res, data);
    } catch (error) {
        SendError(res, error.message)
    }
}

const getByAge = async(req,res)=>{
    try {
        let age = req.params.age;        
        const data = await personService.getByAge(age);
        Ok(res, data);
    } catch (error) {        
        SendError(res, error.message)
    }
}

module.exports= {getAll, getPerson,getPersonByDocument, createPerson,update,deletePerson,deletePersonByDocument,getByAge}