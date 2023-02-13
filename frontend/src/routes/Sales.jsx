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

  const[id_cajero, setIdCajero] = useState(1)
  const[id_caja, setIdCaja] = useState(1)
  const[id_cajeroMax, setIdCajeroMax] = useState(0)
  const[id_cajaMax, setIdCajaMax] = useState(0)


  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('http://localhost:4000/cajeros/count')
      const response2 = await fetch('http://localhost:4000/cajas/count')
      const data = await response.json();
      const data2 = await response2.json();

      if(response.ok){
        setIdCajeroMax(data.count)
      }

      if(response2.ok){
        setIdCajaMax(data2.count)
      }
    }

    fetchProductos()
  }, [])

  return (
    <div>
      {/** Headers */}
      <button className='home' onClick={() => window.location.assign("http://localhost:5173/menu")}>Home</button>
      <Header 
        title="Ventas"
      />
      <label>Cajero ID: </label>
      <input 
        placeholder='ID Cajero'
        type='number'
        min='1'
        max={id_cajeroMax}
        onChange={event => setIdCajero(event.target.value)}
        value={id_cajero}
      >
      </input>
      <label> Caja ID: </label>
      <input 
        placeholder='ID Caja'
        type='number'
        min='1'
        max={id_cajaMax}
        onChange={event => setIdCaja(event.target.value)}
        value={id_caja}
      >
      </input>
      <br/>
      <br/>
      <Header_sales 
        date = {fecha}
        hora = {hora}
      />
      <br/>
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