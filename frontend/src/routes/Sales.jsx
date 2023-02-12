import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Header_sales from '../components/Header_ventas'
import SalesForm from '../components/SalesForm'
// import { getOneProducto } from '../../../backend/controllers/productosController'

const Sales = ({}) => {

  function getCurrentDate(separator = '/') {
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()

    return `${date}/${month<10?`0${month}`:`${month}`}/${year}`
  }

  function getCurrentHour() {
    let newDate = new Date()
    let hour = newDate.getHours()
    let minutes = newDate.getMinutes()

    return `${hour}:${minutes}`
  }
  
  const fecha = getCurrentDate()
  const hora = getCurrentHour()

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

  const id_cajero = 1
  const id_caja = 1

  return (
    <div>
      {/** Headers */}
      <Header 
        title="Ventas"
      />
      <Header_sales 
        cajero={id_cajero}
        caja={id_caja}
        date = {fecha}
        hora = {hora}
      />
      {/** Tabla */}
      <SalesForm 
        fecha={fecha}
        hora={hora}
        cajeroId={id_cajero}
        cajaId={id_caja}
      />
    </div>
  )
}

export default Sales