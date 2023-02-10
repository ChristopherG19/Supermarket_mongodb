const Compra = require('../models/compraModel')
const mongoose = require('mongoose')

// get all Compras
const getCompra = async (req, res) => {
    const compras = await Compra.find({}).sort({id: 1}) 

    res.status(200).jscon(compras)
}

// get una sola compra
const getOneCompra = async (req, res) => {
    const { id } = req.params

    const compra = await Compra.find({id: id})

    if(compra.length == 0){
        res.status(400).json({error: "No se ha encontrado la compra solicitada"})
    }

    res.status(200).json(compra[0])
}

// crear nueva Compra
const createCompra = async (rqu, res) => {
    const {id, metodo_pago, cambio, fecha, hora, num_caja, productos_comprados, cajero_id} = req.params

    try {
        const compra = await Compra.create({id, metodo_pago, cambio, fecha, hora, num_caja, productos_comprados, cajero_id})
        res.status(200).json(compra)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createCompra,
    getCompra,
    getOneCompra,
}