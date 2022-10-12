const {persona} = require('../../config/mysql');
const {httpError} =require('../helpers/handleError')


const getPersonas = async(req,res)=>{
    const response =await persona.findAll();
    try{
        res.status(200).json({
            data:response,
            msg:null
        });
    }catch(error){
        httpError(res,error)
    }
}

const getPersona = async(req,res)=>{
    try {
        let id = req.params.id;        
        const response = await persona.findByPk(id);

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

const getPersonaByDocument = async(req,res)=>{
    try {
        let document = req.params.document;
        console.log(document)
        const response = await persona.findAll({where:{document:document}});
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

const createPersona = async(req,res)=>{    
    try {
        const data = req.body;
        data.documentType=data.documentType.toUpperCase();
        const newPersona = await persona.create(req.body);
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
        const oldPerson = await persona.findByPk(id);
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
module.exports= {getPersonas, getPersona,getPersonaByDocument, createPersona,update}