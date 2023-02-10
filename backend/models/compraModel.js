const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CompraSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    metodo_pago : {
        type: Text,
        required: true
    },
    cambio : {
        type: Number,
        required : true
    },
    fecha : {
        type: Date,
        required : true
    }, 
    hora: {
        type: Date,
        required : true
    },
    num_caja : {
        type: Number,
        required: true
    }, 
    productos_caja : {
        type: Array,
        required: true
    },
    cajero_id: {
        type: Number,
        required: true
    }
}, {versionKey: false})

module.exports = mongoose.model('Compra', CompraSchema)
