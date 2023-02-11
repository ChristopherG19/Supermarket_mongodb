import React from 'react'
import { Link } from 'react-router-dom'

const Inventory_table_item = ({ id, producto, precio, cantidad }) => {

  return (
    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
      <td class="border-grey-light border hover:bg-gray-100 p-3">
        {id}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">
        {producto}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
        {precio}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        {cantidad}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        <button>Delete</button>
      </td>
    </tr>
  )
}

export default Inventory_table_item