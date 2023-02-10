import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Inventory_table from '../components/Inventory_table'

const Inventory = ({}) => {

  return (
    <div>
      <Header title="Inventory"></Header>
      <Inventory_table></Inventory_table>
    </div>
  )
}

export default Inventory