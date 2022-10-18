const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log("MONGO connected")
        } else {
            console.log("¡ERROR BASE DE DATOS!")
        }
    })
}



module.exports = { dbConnect };