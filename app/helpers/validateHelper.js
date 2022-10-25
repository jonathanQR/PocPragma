const {validationResult} = require('express-validator');
const {SendError,Invalid }= require('../shared/http.response')
const validateResult = (req,res,next)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        // res.status(403)
        // console.log(error)
        // res.send({errors: error.array()})
        let details = error.mapped && error.mapped()
  let errorsParam = []
  if (details) {
    for (let param of Object.keys(details)) {
      errorsParam.push({ param, msg: details[param].msg, value: details[param].value })
    }
     }
     Invalid(res,errorsParam)
}
}

module.exports={validateResult}