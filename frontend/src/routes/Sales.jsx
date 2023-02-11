import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Header_sales from './components/Header_ventas'
import Sales_table_item from './components/Sales_table_item'
import SalesForm from './components/SalesForm'
// import { getOneProducto } from '../../../backend/controllers/productosController'

const Sales = ({}) => {

  function getCurrentDate(separator = '/') {
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    let hour = newDate.getHours()
    let minutes = newDate.getMinutes()

    return `${date} / ${month<10?`0${month}`:`${month}`} / ${year} , ${hour}:${minutes}`
  }

  const fecha = getCurrentDate()

  const[productos, setProductos] = useState(null)

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('http://localhost:4000/productos')
      const json = await response.json()

      if (response.ok){
        setProductos(json)
      }
    }

    fetchProductos()
  }, [])

  const[total, setTotal] = useState(0) // total de la compra
  const[newProduct, setNewProduct] = useState(null) // producto a agregar (json)
  const[newProductC, setNewProductC] = useState(null) // producto a agregar (código)
  const[metodopago, setMetodoPago] = useState(false) // false: efectivo, true: tarjeta
  const id_cajero = 1
  const id_caja = 1

  const[compra, setCompra] = useState([]) // Infomración de la venta
  const[productosCompra, setProductoCompra] = useState([]) // Listado de productos


  const handleChange = (codigo) => {
    setNewProductC(codigo)
  }

  const handleClickAdd = () => {
    // getOneProducto(newProductC)
    // setProductoCompra(productosCompra.push(getOneProducto(newProduct)))
    
  }

  return (
    <div>
      {/** Headers */}
      <Header 
        title="Ventas"
      />
      <Header_sales 
        cajero={id_cajero}
        date = {fecha}
      />
      {/** Tabla */}
      <body>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>
              {/** Elementos de la tabla */}
              {productos && productos.map((productoC) => (
                <Sales_table_item 
                  id = {productoC.id}
                  producto = {productoC.nombre}
                  precio = {productoC.precio}
                />
              ))}
            </tbody>
          </table>
        </div>
      </body>
      <SalesForm/>
    </div>
  )
}

export default Sales