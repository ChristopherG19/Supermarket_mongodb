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
    <tr id={item.id}>
      <td>
        {item.id}
      </td>
      <td >
        {item.nombre}
      </td>
      <td>
        {item.proveedor}
      </td>
      <td>
        {item.precio}
      </td>
      <td>
        {item.cantidadDisponible}
      </td>
      <td>
        <button onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Inventory_table_item