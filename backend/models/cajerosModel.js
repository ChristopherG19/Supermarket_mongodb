const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CajeroSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre : {
        type: String,
        required: true
    },
    dpi : {
        type: String,
        required: true
    },
    usuario : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    birthdayDate : {
        type: Date,
        required : true
    }, 
    startWork : {
        type: Date,
        required : true
    }, 
    finishWork : {
        type: Date || String,
        required : true
    }, 
    diasVacaciones : {
        type: Number,
        required: true
    }, 
    horario : {
        type: Object,
        required: true
    }
}, {versionKey: false})

module.exports = mongoose.model('Cajero', CajeroSchema)
