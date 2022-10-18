const {check} = require('express-validator');
const {validateResult} = require('../../helpers/validateHelper')

const validateCreate =[
    check('names')
    .exists()
    .not()
    .isEmpty(),
    check('lastNames')
    .exists()
    .not()
    .isEmpty(),
    check('documentType')
    .exists()
    .not()
    .isEmpty()
    .custom((value,{req})=>{
        const types = ['TI','CC','RC','CE','NIP','NUIP'];
        if(!types.includes(value.toUpperCase())){
            throw new Error('Tipo de documento invalido');
        }
        return true;
    }),
    check('document')
    .exists()
    .not()
    .isEmpty()
    .matches(/^[0-9]*$/)
    .withMessage('El documento solo debe contener numeros'),
    (req,res,next)=>{
        validateResult(req,res,next)
    }
]

const validateUpdate =[    
    check('id')
    .exists()
    .not()
    .isEmpty(),
    check('names')
    .exists()
    .not()
    .isEmpty(),
    check('lastNames')
    .exists()
    .not()
    .isEmpty(),
    check('documentType')
    .exists()
    .not()
    .isEmpty()
    .custom((value,{req})=>{
        const types = ['TI','CC','RC','CE','NIP','NUIP'];
        if(!types.includes(value.toUpperCase())){
            throw new Error('Tipo de documento invalido');
        }
        return true;
    }),
    check('document')
    .exists()
    .not()
    .isEmpty()
    .matches(/^[0-9]*$/)
    .withMessage('El documento solo debe contener numeros'),
    (req,res,next)=>{      
        validateResult(req,res,next)
    }
]

module.exports={validateCreate,validateUpdate}