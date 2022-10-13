const router = require('express').Router();
const {getAll, getPerson,getPersonByDocument, createPerson,update,deletePerson} = require('../controllers/person.Controller');
const {validateCreate,validateUpdate}= require('../validators/person.validator');
const {checkDocument,checkPersonExist} = require('../middleware/person.middleware')

router.get('/',getAll);

router.get('/:id',checkPersonExist,getPerson);

router.get('/document/:document',getPersonByDocument);

router.post('/',validateCreate,checkDocument,createPerson);

router.put('/:id',checkPersonExist,validateUpdate,update);

router.delete('/:id',checkPersonExist,deletePerson);

module.exports=router;