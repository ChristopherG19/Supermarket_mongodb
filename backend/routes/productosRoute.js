const express = require('express')
const {
    createProducto,
    getProductos,
    getOneProducto,
    deleteProducto, 
    updateProducto,
    getOneProductoByNombre,
    findByCategory
} = require('../controllers/productosController')

const router = express.Router()

// Obtener todas las productos
router.get('/', getProductos)

// Obtener una producto
router.get('/:id', getOneProducto)

// Get producto by category
router.get('/categoria/:categoria/:skip/:limit', findByCategory)

// Get producto by nombre
router.get('/nombre/:nombre', getOneProductoByNombre)

// Post a new producto
router.post('/', createProducto)

// Delete a producto
router.delete('/:id', deleteProducto)

// Update a caja
router.patch('/:nombre', updateProducto)

module.exports = router