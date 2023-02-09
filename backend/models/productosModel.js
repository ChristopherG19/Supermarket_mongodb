const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Productos = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: Text,
        required: true
    },
    categoria: {
        type: Text,
        required: true
    },
    proveedor: {
        type: Text,
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
        type: Text,
        required: true
    }
}, {versionKey: false})

module.exports = mongoose.model('Productos', Productos)