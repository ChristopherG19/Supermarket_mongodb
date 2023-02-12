import React from 'react'
import { Link } from 'react-router-dom'

const Sales_table_item = ({ keyT, id, producto, precio, cantidad}) => {

  return (
    <tr key={keyT} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td className="border-grey-light border hover:bg-gray-100 p-3">{id}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{producto}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">{cantidad}</td>
        <td></td>
        <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">${precio}</td>
    </tr>
  )
}

export default Sales_table_item