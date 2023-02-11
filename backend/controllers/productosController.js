const Productos = require('../models/productosModel')
const mongoose = require('mongoose')

// get all Producto
const getProductos = async (req, res) => {
    const productos = await Productos.find({}).sort({id: 1}).limit(10)

    res.status(200).json(productos)
}

// get a single Producto
const getOneProducto = async (req, res) => {

    const { id } = req.params

    const producto = await Productos.find({id: id})

    if (producto.length == 0){
        res.status(400).json({error: 'No se ha encontrado el producto especificado'})
    }

    res.status(200).json(producto[0])
}

const createProducto = async (req, res) => {
    const { id, nombre, categoria, proveedor, cantidadDisponible, precio, descripcion } = req.body

    try {
        const Producto = await Productos.create({
            id, nombre, categoria, proveedor,  cantidadDisponible, precio, description
        })
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const deleteProducto = async (req, res) => {
    const { id } = req.params

    const producto = await productosModel.findOneAndDelete({id: id})

    if(producto == null){
        res.status(400).json({error: 'No se ha encontrado el producto especificado'})
    }

    res.status(200).json()
}

const updateProducto = async (req, res) => {
    const { id } = req.params

    const producto = await Productos.findOneAndUpdate({id: id}, {
        ...req.body
    })

    if (producto.length == 0){
        res.status(400).json({error: 'No se ha encontrado el producto espeficado'})
    }

    res.status(200).json(producto[0])
}

module.exports = {
    createProducto,
    getProductos,
    getOneProducto,
    deleteProducto, 
    updateProducto
}