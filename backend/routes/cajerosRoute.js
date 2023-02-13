const express = require('express')
const {
    getCajeros,
    getOneCajero,
    createCajero,
    sizeCollection
} = require('../controllers/cajerosController')

const router = express.Router()

// Obtener todas las compras
router.get('/', getCajeros)

router.get('/count', sizeCollection)
// Obtener una compra
router.get('/:id', getOneCajero)

// Post a new compra
router.post('/', createCajero)


module.exports = router