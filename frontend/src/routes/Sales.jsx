import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import Header_sales from './components/Header_ventas'
import Sells_table from './components/Sells_table'

const Sales = ({}) => {

    return (
        <div>
            <Header title="Ventas"></Header>
            <Header_sales cajero="prueba"></Header_sales>
            <Sells_table></Sells_table>
        </div>
    )
}

export default Sales