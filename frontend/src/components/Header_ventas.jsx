import React from 'react'
import { Link } from 'react-router-dom'

const Header_sales = ({ date, hora }) => {
  return (
    <div>
      <div>
        <h2>Fecha y hora: { date }, { hora }</h2>
        {/* Aquí sería bueno poner el logo o algo*/}
      </div>
    </div>
  )
}

export default Header_sales