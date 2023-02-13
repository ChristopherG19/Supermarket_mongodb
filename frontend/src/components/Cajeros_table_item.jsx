import React from 'react'
import { Link } from 'react-router-dom'


const Cajeros_table_item = ({ item }) => {

    return (
        <tr id={item.id}>
        <td>
            {item.id}
        </td>
        <td >
            {item.nombre}
        </td>
        <td>
            {item.dpi}
        </td>
        <td>
            {item.usuario}
        </td>
        <td>
            {item.password}
        </td>
        <td>
            {item.finishWork && new Date(item.finishWork).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </td>
        <td>
            {item.diasVacaciones}
        </td>
        </tr>
    )
}

export default Cajeros_table_item