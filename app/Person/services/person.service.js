const {Person} = require('../model/person.model');
const {httpError} =require('../../helpers/handleError')

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
        throw Error('Error al consultar personas')
    }
}

exports.getPersonByDocument = async(document) =>{
    try {               
        const response = await Person.findAll({where:{document:document}});
        return response;        
    } catch (error) {
        throw Error('Error al consultar personas')
    }
}

exports.createPerson = async(person) =>{
    try {
        const response = await Person.create(person);
        return response;        
    } catch (error) {
        throw Error('Error al consultar personas')
    }
}

exports.update = async(id,person) =>{
    try {
        const response = await Person.findByPk(id);
        await response.update(person);
        await response.save();        
        return response;
        
    } catch (error) {
        throw Error('Error al consultar personas')
    }
}

exports.deletePerson = async(id) =>{
    try {
        const response = await Person.findByPk(id);
        await response.destroy();
        return response;
        
    } catch (error) {
        throw Error('Error al consultar personas')
    }
}

exports.deletePersonByDocuyment = async(document) =>{
    try {
        const response = await Person.findOne({document:document});
        await response.destroy();
        return response;
        
    } catch (error) {
        throw Error('Error al consultar personas')
    }
}

