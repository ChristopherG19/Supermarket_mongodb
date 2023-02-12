import React from 'react'
import { Link } from 'react-router-dom'

const Header_sales = ({ cajero, date }) => {

  return (
    <div>
      <div>
        <h2>Cajero ID: { cajero }</h2>
        <h2>Fecha y hora: { date }</h2>
        {/* Aquí sería bueno poner el logo o algo*/}
      </div>
    </div>
  )
}

export default Header_sales