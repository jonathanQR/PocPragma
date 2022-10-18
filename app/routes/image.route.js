const router = require('express').Router();
const {upload} = require('../helpers/handleStore')
const {chechImageExist}= require('../middleware/image.middleware')
const {createImage,showAll,getById,getByIdPerson,deleteByIdPerson,updateByIdPerson}=require('../controllers/image.Controller')


router.get('/',showAll);

router.post('/',upload.single('image'),createImage);

router.get('/:id',getById);

router.get('/person/:idPerson',chechImageExist,getByIdPerson);

router.delete('/person/:idPerson',chechImageExist,deleteByIdPerson);

router.put('/person/:idPerson',upload.single('image'),chechImageExist,updateByIdPerson);

module.exports=router;