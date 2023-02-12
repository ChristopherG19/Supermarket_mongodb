import React from 'react'
import { Link } from 'react-router-dom'


const Inventory_table_item = ({ item }) => {

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/productos/' + item._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispach({type: 'Delete_Product', payload: json})
    }

  }

  return (
    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
      <td class="border-grey-light border hover:bg-gray-100 p-3">
        {item.id}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">
        {item.nombre}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">
        {item.proveedor}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
        {item.precio}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        {item.cantidadDisponible}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
        <button onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Inventory_table_item