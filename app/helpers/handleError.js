const res = require("express/lib/response")

const httpError = (res, err) => {
    console.log(err)
    res.status(500).json({
        data: "Error WEYYYYYYY",
        error: err
    })
}

const handleErrorResponse = (res, message = "Algo ocurrio", code = 401) => {
    console.log("Error", message);
    res.status(code);
    res.send({ error: message });
  };

module.exports = { httpError, handleErrorResponse }