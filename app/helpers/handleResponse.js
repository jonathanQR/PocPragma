const magic = require('../util/magic');
const enum_ = require('../util/enum');

exports.responseHandle=async(response)=>{
    let status = 'Success', errorCode ='', message='', data='', statusCode=0, resp={};
    if(response.err){
        status = 'Failure', errorCode = respOrm.err.code, message = respOrm.err.messsage, statusCode = enum_.CODE_BAD_REQUEST;
    }else{
        message = 'Success Response', data = response, statusCode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT;
    }
    resp = await magic.ResponseService(status,errorCode,message,data);
    return resp;
}