const router = require('express').Router();
const {getAll, getPerson,getPersonByDocument, createPerson,update,deletePerson,deletePersonByDocument,getByAge,getByDocumentType} = require('../controllers/person.Controller');
const {validateCreate,validateUpdate}= require('../validators/person.validator');
const {checkDocument,checkPersonExist,checkPersonExistBydocument} = require('../middleware/person.middleware')

router.get('/',getAll);

router.get('/:id',checkPersonExist,getPerson);

router.get('/document/:document',checkPersonExistBydocument,getPersonByDocument);

router.post('/',validateCreate,checkDocument,createPerson);

router.put('/:id',checkPersonExist,validateUpdate,update);

router.delete('/:id',checkPersonExist,deletePerson);

router.delete('/document/:document',checkPersonExistBydocument,deletePersonByDocument);

router.get('/age/:age',getByAge);

router.get('/typedocument/:type',getByDocumentType)
module.exports=router;