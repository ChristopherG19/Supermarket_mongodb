import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sales_table_item from './Sales_table_item'


const Sales_table = ({}) => {

  const[items, setitems] = useState(null)

  return (
    <body>
        <div class="container">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>
                <Sales_table_item Name = "19" Email = "Jábon" Actions="10"/>
                <Sales_table_item Name = "20" Email = "esponja" Actions="10"/>
            </tbody>
          </table>
        </div>
    </body>
  )
}

export default Sales_table