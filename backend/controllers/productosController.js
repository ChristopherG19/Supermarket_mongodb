const Productos = require('../models/productosModel')
const mongoose = require('mongoose')
const productosModel = require('../models/productosModel')

// get all Producto
const getProductos = async (req, res) => {

    const { categoria, skip, orden } = req.params

    const productos = await Productos.find({}).sort({id: 1}).skip(0).limit(20)
    //const productos = await Productos.find({categoria: cat}).sort({id: 1}).skip(page).limit(20)
    //const productos = await Productos.find({}).sort({id: 1}).limit(10)

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

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No existe el producto que desea eliminar"})
    }

    const producto = await productosModel.findOneAndDelete({_id: id})

    if (!producto) {
        return res.status(400).json({error: "No existe el producto que desea eliminar"})
    }

    res.status(200).json(producto)
}

const findByCategory = async (req, res) => {

    const { categoria } = req.categoria

    const productos = await Productos.find({categoria: categoria}).sort({id: 1}).skip(0).limit(20)

    if (producto.length == 0){
        res.status(400).json({error: 'No se ha encontrado el producto especificado'})
    }

    res.status(200).json(producto[0])
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
    updateProducto,
    findByCategory
}