const router = require('express').Router();
const {getPersonas, getPersona,getPersonaByDocument} = require('../controllers/persona.Controller');

router.get('/',getPersonas);

router.get('/:id',getPersona);

router.get('/document/:document',getPersonaByDocument);




module.exports=router;