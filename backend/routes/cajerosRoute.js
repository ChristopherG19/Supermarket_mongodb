const express = require('express')
const {
    getCajeros,
    getOneCajero,
    createCajero,
    sizeCollection,
    getCajerosActivos,
    getCajerosSortLimit,
    updateCajero,
    updateHorarioCajero
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

// Update a cajero
router.patch('/:id', updateCajero)

// Update a cajeros
router.patch('/horario/:type/:idIn/:idFn', updateHorarioCajero)

module.exports = router