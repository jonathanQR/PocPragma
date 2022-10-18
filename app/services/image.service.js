const image = require('../models/image.model')
const{uploadFile,deleteFile}= require('../storage/uploadS3');
const fs=require('fs-extra');
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

exports.getAll = async() =>{
    try {        
        const response = await image.find({});        
        return response
    } catch (error) {
        throw Error(error)
    }
}

exports.createImage = async(file,idPerson) =>{
    try {        
        const result = await uploadFile(file);
        const response= await image.create({idPerson,Key:result.Key,Location:result.Location});
        await unlinkFile(file.path);
        return response;
    } catch (error) {
        throw Error(error)
    }
}

exports.getImageById = async(id) =>{
    try {
        const response = await image.findOne({_id:id});
        return response;        
    } catch (error) {
        throw Error('Sandia')
    }
}

exports.getByIdPerson = async(id) =>{
    try {
        const response = await image.findOne({idPerson:id});
        return response;        
    } catch (error) {
        throw Error('Sandia')
    }
}

exports.deleteById = async(id) =>{
    try {
        const imageData = await image.findOne({_id:id});
        deleteFile(imageData.Key);
        const response = image.deleteOne({idPerson:imageData.idPerson})
        return response;        
    } catch (error) {
        throw Error('Sandia')
    }
}

exports.deleteByIdPerson = async(id) =>{
    try {
        const imageData = await image.findOne({idPerson:id});
        deleteFile(imageData.Key);
        const response = image.deleteOne({idPerson:imageData.idPerson})
        return response;        
    } catch (error) {
        throw Error('Sandia')
    }
}

exports.updateByIdPerson = async(file,idPerson) =>{
    try {
        const imageData = await image.findOne({idPerson:idPerson});
        deleteFile(imageData.Key);
        const result = await uploadFile(file);          
        imageData.save();      
        const response = image.findOneAndUpdate({idPerson:idPerson},{idPerson,Key:result.Key,Location:result.Location})
        return response;        
    } catch (error) {
        throw Error(error)
    }
}



