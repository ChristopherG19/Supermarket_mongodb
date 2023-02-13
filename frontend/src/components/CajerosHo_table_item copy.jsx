import React from 'react'
import { Link } from 'react-router-dom'


const Horario_item = ({ item }) => {

    const { horario, id } = item

    const horarioLunes = horario.Lunes ? `${horario.Lunes[0]} - ${horario.Lunes[1]}` : ""
    const horarioMartes = horario.Martes ? `${horario.Martes[0]} - ${horario.Martes[1]}` : ""
    const horarioMiercoles = horario.Miércoles ? `${horario.Miércoles[0]} - ${horario.Miércoles[1]}` : ""
    const horarioJueves = horario.Jueves ? `${horario.Jueves[0]} - ${horario.Jueves[1]}` : ""
    const horarioViernes = horario.Viernes ? `${horario.Viernes[0]} - ${horario.Viernes[1]}` : ""
    const horarioSabado = horario.Sabado ? `${horario.Sabado[0]} - ${horario.Sabado[1]}` : ""
    const horarioDomingo = horario.Domingo ? `${horario.Domingo[0]} - ${horario.Domingo[1]}` : ""

    return (

        <tr id={item.id}>
            <td>{item.id}</td>
            <td>{horarioLunes}</td>
            <td>{horarioMartes}</td>
            <td>{horarioMiercoles}</td>
            <td>{horarioJueves}</td>
            <td>{horarioViernes}</td>
            <td>{horarioSabado}</td>
            <td>{horarioDomingo}</td>
        </tr>
    )
}

export default Horario_item