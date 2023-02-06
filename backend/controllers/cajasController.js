const Cajas = require('../models/cajasModel')
const mongoose = require('mongoose')

// get all Cajas
const getCajas = async (req, res) => {
    const cajas = await Cajas.find({}).sort({id: 1})

    res.status(200).json(cajas)
}

// get a single Caja
const getSingleCaja = async (req, res) => {
    const { id } = req.params

    const caja = await Cajas.find({id: id})

    if(caja.length == 0){
        res.status(400).json({error: 'No hay coincidencias'})
    }

    res.status(200).json(caja[0])
}

// create new Caja
const createCaja = async (req, res) => {
    const {id, dinero_caja, cant_transacciones} = req.body

    try{
        const Caja = await Cajas.create({id, dinero_caja, cant_transacciones})
        res.status(200).json(Caja)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete a Caja
const deleteCaja = async (req, res) => {
    const { id } = req.params

    const caja = await Cajas.findOneAndDelete({id: id})

    if(caja == null){
        res.status(400).json({error: 'No hay coincidencias'})
    }

    res.status(200).json(caja)
}

// update a Caja
const updateCaja = async (req, res) => {
    const { id } = req.params

    const caja = await Cajas.findOneAndUpdate({id: id}, {
        ...req.body
    })

    if(caja.length == 0){
        res.status(400).json({error: 'No hay coincidencias'})
    }

    res.status(200).json(caja[0])
}

module.exports = {
    createCaja,
    getCajas,
    getSingleCaja,
    deleteCaja,
    updateCaja
}