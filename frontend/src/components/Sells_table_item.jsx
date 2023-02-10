import React from 'react'
import { Link } from 'react-router-dom'

const Sells_table_item = ({ Name, Email, Actions}) => {

  return (

    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td class="border-grey-light border hover:bg-gray-100 p-3">{Name}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{Email}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">{Actions}</td>
    </tr>
  )
}

export default Sells_table_item