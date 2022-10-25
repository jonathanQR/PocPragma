const {Person} = require('../model/person.model');
const {httpError} =require('../../helpers/handleError')
const {Op}= require('sequelize')
exports.getAll = async() =>{
    
    try {
        const response = await Person.findAll();        
        return response;
    } catch (error) {
        throw Error('Error al consultar personas')
        
    }
}

exports.getPerson = async(id) =>{
    try {               
        const response = await Person.findByPk(id);
        return response;        
    } catch (error) {
        throw Error('Error al buscar una persona')
    }
}

exports.getPersonByDocument = async(document) =>{
    try {               
        const response = await Person.findAll({where:{document:document}});
        return response;        
    } catch (error) {
        throw Error('Error al buscar una persona')
    }
}

exports.createPerson = async(person) =>{
    try {
        const response = await Person.create(person);
        return response;        
    } catch (error) {
        throw Error('Error al crear una persona')
    }
}

exports.update = async(id,person) =>{
    try {
        const response = await Person.findByPk(id);
        await response.update(person);
        await response.save();        
        return response;
        
    } catch (error) {
        throw Error('Error al actualizar una persona')
    }
}

exports.deletePerson = async(id) =>{
    try {
        const response = await Person.findByPk(id);
        await response.destroy();
        return response;
        
    } catch (error) {
        throw Error('Error al eliminar una persona')
    }
}

exports.deletePersonByDocuyment = async(document) =>{
    try { 
        const response = await Person.findOne({where:{document:document}});
        await response.destroy();
        return response;
        
    } catch (error) {
        
        throw Error('Error al eliminar una persona por su documento')
    }
}

exports.getByAge = async(age)=>{
    try {
        
        const response= await Person.findAll({where:{age:{ [Op.gte]: age}}})
        return response;
    } catch (error) {
        console.log(error)
        throw Error('Error al consultar personas')
    }
}


exports.getByDocumentType = async(type)=>{
    try {
        
        const response= await Person.findAll({where:{documentType:type}})
        return response;
    } catch (error) {
        console.log(error)
        throw Error('Error al consultar personas')
    }
}

