const express = require('express')
const {
    createCaja,
    getCajas,
    getSingleCaja,
    deleteCaja,
    updateCaja,
    sizeCollection
} = require('../controllers/cajasController')

const router = express.Router()

// Obtener todas las cajas
router.get('/', getCajas)

router.get('/count', sizeCollection)

// Obtener una caja
router.get('/:id', getSingleCaja)

// Post a new caja
router.post('/', createCaja)

// Delete a caja
router.delete('/:id', deleteCaja)

// Update a caja
router.patch('/:id', updateCaja)

module.exports = router