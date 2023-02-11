import React from 'react'
import { Link } from 'react-router-dom'

const Sales_table_item = ({ id, producto, precio}) => {

  return (

    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td class="border-grey-light border hover:bg-gray-100 p-3">{id}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{producto}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">{precio}</td>
    </tr>
  )
}

export default Sales_table_item