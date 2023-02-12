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

// Get producto by category
router.get('/:categoria/:skip', findByCategory)

// Obtener una producto
router.get('/:id', getOneProducto)

// Post a new producto
router.post('/', createProducto)

// Delete a producto
router.delete('/:id', deleteProducto)

// Update a producto
router.patch('/:id', updateProducto)

module.exports = router