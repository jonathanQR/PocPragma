const express = require('express')
const router = express.Router()
// const fs = require('fs')
const personRouter =require('../Person/routes/person.route');
const imageRouter= require('../Image/routes/image.route');


router.use('/person',personRouter);
router.use('/image',imageRouter);

// const pathRouter = `${__dirname}`

// const removeExtension = (fileName) => {
//     return fileName.split('.').shift()
// }

// fs.readdirSync(pathRouter).filter((file) => {
//     const fileWithOutExt = removeExtension(file)
//     const skip = ['index'].includes(fileWithOutExt)
//     if (!skip) {
//         router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}.route`))
//         console.log('---->', fileWithOutExt)
//     }
// })

// router.get('*', (req, res) => {
//     res.status(404)
//     res.send({ error: 'Url Not found' })
// })

module.exports = router