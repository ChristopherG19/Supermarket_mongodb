import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import Header_sales from './components/Header_ventas'
import Sales_table from './components/Sales_table'

const Sales = ({}) => {

    return (
        <div>
            <Header title="Ventas"></Header>
            <Header_sales cajero="prueba"></Header_sales>
            <Sales_table></Sales_table>
        </div>
    )
}

export default Sales