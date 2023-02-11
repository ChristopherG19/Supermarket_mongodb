import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Header_sales from './components/Header_ventas'
import Sales_table_item from './components/Sales_table_item'
// import { getOneProducto } from '../../../backend/controllers/productosController'

/**
const addToSale = ({}) => {

  const[producto, setProducto] = useState(null)

  useEffect(() => {
    const fetchProducto = async () => {
      const respone = await fetch('http://localhost:4000/supermarket')
      const json = await respone.json()

      if (respone.ok){
        setProducto(json)
      }
    }

  }, [])

  return (producto)
}

*/


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
        cajero="prueba" 
        date = {fecha}
      />
      {/** Tabla */}
      <body>
        <div class="container">
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
              <Sales_table_item id = "19" producto = "Jábon" precio ="10"/>
              <Sales_table_item id = "20" producto = "esponja" precio ="10"/>
              {productosCompra && productosCompra.map((productoC) => (
                <Sales_table_item 
                  id = {productoC._id}
                  producto = {productoC.nombre}
                  precio = {productoC.precio}
                />
              ))}
            </tbody>
          </table>
        </div>
      </body>
      {/** Footer */}
      <footer>
        <input 
          placeholder='Codigo Producto'
          type='number'
          onChange={event => handleChange(event)}
        >
        </input>
        <button 
          type='submit'
          onClick={handleClickAdd()}
        >
          Añadir a la compra
        </button>
        <h3> Total : {total}</h3>
        <label>
          <input 
              type='checkbox'
              onClick={() => setMetodoPago(!metodopago)}
            ></input>
            <p>{metodopago === true ? "Efectivo": "Tarjeta"}</p>
        </label>
        <button 
          type='submit'
        >
          Finalizar la compra
        </button>
      </footer>
    </div>
  )
}

export default Sales