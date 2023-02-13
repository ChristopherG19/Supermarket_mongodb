const Cajero = require('../models/cajerosModel')
const mongoose = require('mongoose')

// get all Compras
const getCajeros= async (req, res) => {
    const cajeros = await Cajero.find({}).sort({id: 1}) 

    res.status(200).json(cajeros)
}

// get una sola compra
const getOneCajero = async (req, res) => {
    const { id } = req.params

    const cajero = await Cajero.find({id: id})

    if(cajero.length == 0){
        res.status(400).json({error: "No se ha encontrado la compra solicitada"})
    }

    res.status(200).json(cajero[0])
}

// crear nueva Compra
const createCajero = async (req, res) => {
    const {id, nombre, dpi, usuario, password, birthdayDate, startWork, finishWork, diasVacaciones, horario} = req.body

    try {
        const cajero = await Cajero.create({id, nombre, dpi, usuario, password, birthdayDate, startWork, finishWork, diasVacaciones, horario})
        res.status(200).json(cajero)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const sizeCollection = async (req, res) => {
    try {
        const countC = await Cajero.countDocuments()
        res.status(200).json({ count: countC })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCajeros,
    getOneCajero,
    createCajero,
    sizeCollection
}