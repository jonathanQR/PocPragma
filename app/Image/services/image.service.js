const image = require('../model/image.model')
const{uploadFile,deleteFile}= require('../../storage/uploadS3');
const fs=require('fs-extra');
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

exports.getAll = async() =>{
    try {        
        const response = await image.find({});        
        return response
    } catch (error) {
        throw Error("Error al Consultar imagenes")
    }
}

exports.createImage = async(file,personDocument) =>{
    try {      
        const result = await uploadFile(file);
        const response= await image.create({personDocument,Key:result.Key,Location:result.Location});
        await unlinkFile(file.path);
        return response;
    } catch (error) {
        throw Error("Erro al crear una imagen")
    }
}


exports.getByDocumentPerson = async(document) =>{
    try {
        const response = await image.findOne({personDocument:document});
        return response;        
    } catch (error) {
        throw Error('Error al consultar imagen')
    }
}

exports.deleteByDocument = async(document) =>{
    try {
        const imageData = await image.findOne({personDocument:document});
        deleteFile(imageData.Key);
        const response = image.deleteOne({personDocument:imageData.personDocument})
        return response;        
    } catch (error) {
        throw Error('Error al eliminar imagen')
    }
}

exports.updateByDocumentPerson = async(file,personDocument) =>{
    try {
        const imageData = await image.findOne({personDocument:personDocument});
        deleteFile(imageData.Key);
        const result = await uploadFile(file);          
        imageData.save();      
        const response = image.findOneAndUpdate({personDocument:personDocument},{personDocument,Key:result.Key,Location:result.Location})
        return response;        
    } catch (error) {
        throw Error("Error al actualizar imagen")
    }
}



