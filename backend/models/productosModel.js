const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductosSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    },
    cantidadDisponible: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {versionKey: false})

module.exports = mongoose.model('Productos', ProductosSchema)