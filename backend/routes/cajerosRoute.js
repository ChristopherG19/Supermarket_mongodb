const express = require('express')
const {
    getCajeros,
    getOneCajero,
    createCajero,
    sizeCollection,
    getCajerosActivos,
    getCajerosSortLimit
} = require('../controllers/cajerosController')

const router = express.Router()

// Obtener todas las compras
router.get('/', getCajeros)

// Obtener cantidad de documentos
router.get('/count', sizeCollection)

// Obtener cajeros activos
router.get('/active', getCajerosActivos)

// Obtener un cajero
router.get('/:id', getOneCajero)

// Obtener cajeros sort and limit
router.get('/categoria/:columna/:limit/:orden', getCajerosSortLimit)

// Post a new cajero
router.post('/', createCajero)


module.exports = router