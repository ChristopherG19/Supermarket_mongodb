import React from 'react'
import { Link } from 'react-router-dom'

const Inventory_table_item = ({ Product, Price, Quantity }) => {

  return (
    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
      <td class="border-grey-light border hover:bg-gray-100 p-3">
        {Product}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
        {Price}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        {Quantity}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        Delete
      </td>
    </tr>
  )
}

export default Inventory_table_item