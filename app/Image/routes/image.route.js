const router = require('express').Router();
const {upload} = require('../../helpers/handleStore')
const {chechImageExist,checkPersonExistBydocument,chechImageExistBydocument}= require('../middleware/image.middleware')
const {createImage,showAll,getByDocumentPerson,deleteByDocumentPerson,updateByDocumentPerson}=require('../controllers/image.Controller')


router.get('/',showAll);

router.post('/',upload.single('image'),checkPersonExistBydocument,chechImageExistBydocument,createImage);

router.get('/person/:personDocument',chechImageExist,getByDocumentPerson);

router.delete('/person/:personDocument',chechImageExist,deleteByDocumentPerson);

router.put('/:personDocument',upload.single('image'),chechImageExist,updateByDocumentPerson);

module.exports=router;