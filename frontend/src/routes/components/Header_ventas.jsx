import React from 'react'
import { Link } from 'react-router-dom'

const Header_sales = ({ cajero, date }) => {

  function getCurrentDate(separator = '/') {
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    let hour = newDate.getHours()
    let minutes = newDate.getMinutes()

    return `${date} / ${month<10?`0${month}`:`${month}`} / ${year}, ${hour}:${minutes}`
  }

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