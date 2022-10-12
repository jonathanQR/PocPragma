const {Person} = require('../models/person.model');
const {httpError} =require('../helpers/handleError')


const getAll = async(req,res)=>{
    const response =await Person.findAll();
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
        const response = await Person.findByPk(id);

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
        console.log(document)
        const response = await Person.findAll({where:{document:document}});
        console.log(typeof(response))
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
        const data = req.body;
        data.documentType=data.documentType.toUpperCase();
        const newPersona = await Person.create(req.body);
        res.status(201).json({
            status:201,
            data:newPersona,
            msg:'Persona creada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const update =async(req,res)=>{
    try {
        let id = req.params.id;        
        const oldPerson = await Person.findByPk(id);
        await oldPerson.update(req.body);
        await oldPerson.save();
        res.status(201).json({
            status:201,
            data:oldPerson,
            msg:'Persona modificada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}

const deletePerson = async(req,res)=>{
    try {
        let id = req.params.id;        
        const person = await Person.findByPk(id);
        await person.destroy();
        res.status(201).json({
            status:201,
            data:person,
            msg:'Persona Eliminada satisfactoriamente'
        })
    } catch (error) {
        httpError(res, error);
    }
}
module.exports= {getAll, getPerson,getPersonByDocument, createPerson,update,deletePerson}