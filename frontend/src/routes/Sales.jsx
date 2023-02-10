import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Header_sales from './components/Header_ventas'
import Sales_table from './components/Sales_table'
import Sales_table_item from './components/Sales_table_item'

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

  const[total, setTotal] = useState(0)
  const[newProduct, setNewProduct] = useState(0)
  const fecha = getCurrentDate()

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
              <Sales_table_item Name = "19" Email = "Jábon" Actions="10"/>
              <Sales_table_item Name = "20" Email = "esponja" Actions="10"/>
            </tbody>
          </table>
        </div>
      </body>
      {/** Footer */}
      <footer>
        <input placeholder='Codigo Producto'></input>
        <button type='submit'>Añadir a la compra</button>
        <h3> Total : {total}</h3>
        <button type='submit'>Finalizar la compra</button>
      </footer>
    </div>
  )
}

export default Sales