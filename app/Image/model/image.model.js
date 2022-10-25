const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    personDocument:{
        type: String,
        required: true,
        unique:true
    },
    Key: {
        type: String
    },
    Location: {
        type: String
    }
})

module.exports = mongoose.model('Images', ImageSchema);