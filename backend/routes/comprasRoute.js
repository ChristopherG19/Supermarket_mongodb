const express = require('express')
const {
    createCompra,
    getCompra,
    getOneCompra,
    sizeCollection,
    getComprasSortLimit
} = require('../controllers/compraController')

const router = express.Router()

// Obtener todas las compras
router.get('/', getCompra)

// Obtener cantidad de documentos
router.get('/count', sizeCollection)

// Obtener una compra
router.get('/:id', getOneCompra)

// Obtener compras sort and limit
router.get('/vista/:columna/:limit/:orden', getComprasSortLimit)

// Post a new compra
router.post('/', createCompra)


module.exports = router