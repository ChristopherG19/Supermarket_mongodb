require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const CajaRoutes = require('./routes/CajasRoute')
const ComprasRoutes = require('./routes/comprasRoute')
const ProductoRoutes = require('./routes/productosRoute')
const cors = require('cors')

// express app
const app = express()

app.use(cors())
// Obtener el path y método que se realiza
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Rutas
app.use('/cajas', CajaRoutes)
app.use('/compras', ComprasRoutes)
app.use('/productos', ProductoRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening port: ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })