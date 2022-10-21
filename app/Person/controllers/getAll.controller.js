// const personService = require('../services/person.service')
// const {httpError} =require('../../helpers/handleError')


// exports.getAll = async(req,res)=>{
//     const response =await personService.getAll();
//     try{
//         res.status(200).json({
//             data:response,
//             msg:null
//         });
//     }catch(error){
//         httpError(res,error)
//     }
// }