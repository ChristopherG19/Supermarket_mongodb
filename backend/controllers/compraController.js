const Compra = require('../models/comprasModel')
const mongoose = require('mongoose')

// get all Compras
const getCompra = async (req, res) => {
    const compras = await Compra.find({}).sort({id: 1}).limit(15)

    res.status(200).json(compras)
}

// get all Compras
const getComprasSortLimit = async (req, res) => {

    const { columna, limit, orden } = req.params
    console.log(columna, limit, orden)
    let AscDes = 1

    if (orden !== 'true'){
        AscDes = -1
    } else {
        AscDes = 1
    }

    console.log("tipo: ",AscDes)

    const compras = await Compra.find({}).sort({[columna]: AscDes}).limit(limit)

    res.status(200).json(compras)
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
const createCompra = async (req, res) => {
    const {id, metodo_pago, cambio, fecha, hora, num_caja, productos_caja, cajero_id} = req.body

    try {
        const compra = await Compra.create({id, metodo_pago, cambio, fecha, hora, num_caja, productos_caja, cajero_id})
        res.status(200).json(compra)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const sizeCollection = async (req, res) => {
    try {
        const countC = await Compra.countDocuments()
        res.status(200).json({ count: countC })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCompra,
    getCompra,
    getOneCompra,
    sizeCollection,
    getComprasSortLimit
}