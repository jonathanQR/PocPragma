"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NO_VALID"] = 400] = "NO_VALID";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["ALREADY_EXISTS"] = 409] = "ALREADY_EXISTS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
exports.Ok = function (res, data) {
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        statusMsg: "Success",
        data: data,
    });
};
exports.NotFound = function (res, data) {
    return res.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        statusMsg: "Not Found",
        error: data,
    });
};
exports.Unauthorized = function (res, data) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
        status: HttpStatus.UNAUTHORIZED,
        statusMsg: "Unauthorized",
        error: data,
    });
};
exports.Forbidden = function (res, data) {
    return res.status(HttpStatus.FORBIDDEN).json({
        status: HttpStatus.FORBIDDEN,
        statusMsg: "Forbidden",
        error: data,
    });
};
exports.SendError = function (res, data) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        statusMsg: "Internal server error",
        error: data,
    });
};

exports.AlreadyExists = function (res, data) {
    return res.status(HttpStatus.ALREADY_EXISTS).json({
        status: HttpStatus.ALREADY_EXISTS,
        statusMsg: "Conflict",
        error: data,
    });
};

exports.Invalid = function (res, data) {
    return res.status(HttpStatus.NO_VALID).json({
        status: HttpStatus.NO_VALID,
        statusMsg: "Invalid data",
        error: data,
    });
};
