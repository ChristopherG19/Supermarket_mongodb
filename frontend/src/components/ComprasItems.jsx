import React from 'react'
import { Link } from 'react-router-dom'

const ComprasItems = ({ item }) => {
    return (
        <tr id={item.id}>
            <td>
                {item.id}
            </td>
            <td >
                {item.metodo_pago}
            </td>
            <td>
                {item.cambio}
            </td>
            <td>
                {item.fecha && new Date(item.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </td>
            <td>
                {item.hora}
            </td>
            <td>
                {item.num_caja}
            </td>
            <td>
                {item.cajero_id}
            </td>
        </tr>
    )
}

export default ComprasItems