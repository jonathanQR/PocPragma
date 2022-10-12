const {Person} = require('../models/person.model');

const showAll = async() =>{
    const response = await Person.findAll();
    return response;
}

module.exports={showAll}