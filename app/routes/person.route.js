const router = require('express').Router();
const {getPersonas, getPersona,getPersonaByDocument, createPersona,update} = require('../controllers/person.Controller');
const {validateCreate,validateUpdate}= require('../validators/person.validator');
const {checkDocument,checkPersonExist} = require('../middleware/person.middleware')

router.get('/',getPersonas);

router.get('/:id',getPersona);

router.get('/document/:document',getPersonaByDocument);

router.post('/',validateCreate,checkDocument,createPersona);

router.put('/:id',checkPersonExist,validateUpdate,update);


module.exports=router;