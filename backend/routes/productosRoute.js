const express = require('express')
const {
    createProducto,
    getProductos,
    getOneProducto,
    deleteProducto, 
    updateProducto,
    findByCategory
} = require('../controllers/productosController')

const router = express.Router()

// Obtener todas las productos
router.get('/', getProductos)

// Obtener una producto
router.get('/:id', getOneProducto)

// Post a new producto
router.post('/', createProducto)

// Delete a producto
router.delete('/:id', deleteProducto)

// Update a producto
router.patch('/:id', updateProducto)

// Get producto by category
router.get('/:categoria', findByCategory)

module.exports = router