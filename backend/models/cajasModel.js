const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CajasSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    dinero_caja: {
        type: Number,
        required: true
    },
    cant_transacciones: {
        type: Number,
        required: true
    }
}, {versionKey: false})

module.exports = mongoose.model('Cajas', CajasSchema)
