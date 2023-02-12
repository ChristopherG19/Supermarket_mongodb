import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = ({ title }) => {

  return (
    <header className = 'cabezera'>
      <h1>{title}</h1>
    </header>
  )
}

export default Header