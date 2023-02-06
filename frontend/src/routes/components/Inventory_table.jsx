import React from 'react'
import { Link } from 'react-router-dom'
import Inventory_table_item from './Inventory_table_item'

const get_Data = ({}) => {
  
  return (
    <div></div>
  )
}


const Inventory_table = ({}) => {

  return (
    <div>
      <body class="flex items-center justify-center">
        <div class="container">
          <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead class="text-white">
              <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">Producto</th>
              <th class="p-3 text-left">Precio</th>
              <th class="p-3 text-left">Existencias</th>
              <th class="p-3 text-left" width="110px">Actions</th>
              </tr>
            </thead>
            <tbody class="flex-1 sm:flex-none">
              <Inventory_table_item Product="Nombre producto" Price= "10" Quantity="10"></Inventory_table_item>
            </tbody>
          </table>
        </div>
      </body>
    </div>
  )
}

export default Inventory_table