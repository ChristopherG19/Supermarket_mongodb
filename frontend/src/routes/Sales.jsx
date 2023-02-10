import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Sells_table from '../components/Sells_table'

const Sales = ({}) => {

    return (
        <div>
            <Header title="Ventas"></Header>
            <Sells_table></Sells_table>
        </div>
    )
}

export default Sales