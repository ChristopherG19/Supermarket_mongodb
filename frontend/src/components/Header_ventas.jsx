import React from 'react'

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