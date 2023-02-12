const express = require('express')
const {
    createProducto,
    getProductos,
    getOneProducto,
    deleteProducto, 
    updateProducto,
    getOneProductoByNombre
} = require('../controllers/productosController')

const router = express.Router()

// Obtener todas las cajas
router.get('/', getProductos)

// Obtener una caja
router.get('/:id', getOneProducto)
router.get('/nombre/:nombre', getOneProductoByNombre)

// Post a new caja
router.post('/', createProducto)

// Delete a caja
router.delete('/:id', deleteProducto)

// Update a caja
router.patch('/:nombre', updateProducto)

module.exports = router