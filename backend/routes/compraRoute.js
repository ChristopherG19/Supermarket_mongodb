const express = require('express')
const {
    createCompra,
    getCompra,
    getOneCompra,
} = require('../controllers/compraController')

const router = express.Router()

// Obtener todas las compras
router.get('/', getCompra)

// Obtener una compra
router.get('/:id', getOneCompra)

// Post a new compra
router.post('/', createCompra)

module.exports = router