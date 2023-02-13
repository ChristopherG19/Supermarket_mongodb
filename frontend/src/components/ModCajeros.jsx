import React, { useEffect, useState } from 'react'
import Cajeros_table_item from './Cajeros_table_item'
import './css/Inventory.css'

const ModCajeros = () => {

    const[cajeros, setCajeros] = useState([])
    const[columna, setColumna] = useState('id')
    const[limit, setLimit] = useState(10)
    const[orden, setOrden] = useState(true)

    useEffect(() => {
        const fetchCajeros = async () => {
          const response = await fetch('http://localhost:4000/cajeros')
          const json = await response.json()
    
          if (response.ok){
            setCajeros(json)
          }
        }
    
        fetchCajeros()
    }, [])

    const fetchCajeros = async () => {
        const response = await fetch(`http://localhost:4000/cajeros/categoria/${columna}/${limit}/${orden}`)
        const json = await response.json()
  
        if (response.ok){
          setCajeros(json)
        }
    }

    function handleCheckbox(){
        setOrden(!orden)
    }

    function handleChange(event) {
        const value = event.target.value
        setColumna(value)
    }

    function handleLimit(event) {
        setLimit(event.target.value)
    }

    const options = [
        {
          label: "Id",
          value: 'id',
          key: 2
        }, 
        {
          label: "Nombre",
          value: 'nombre',
          key: 3
        },
        {
          label: "DPI",
          value: 'dpi',
          key: 4
        },
        {
          label: "Usuario",
          value: 'usuario',
          key: 5
        },
        {
          label: "Dias de vacaciones",
          value: 'diasVacaciones',
          key: 6
        },
    ]

    return (
        <div className='all'>
            <header className='secondary-header'>
                <label>Sort by:  
                    <select className='column-selector' onChange={handleChange}>
                        {options.map((o) => (
                            <option key={o.key}value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                    <label> Orden: 
                        <input type="checkbox" onClick={handleCheckbox}></input>
                        <label>{orden === true ? "Ascendente": "Descendente"}</label>
                    </label>
                </label>
                <label>
                    Limite: 
                    <input 
                        id='input_limite'
                        type='number'
                        defaultValue={10}
                        min='0'
                        max='20'
                        onChange={handleLimit}
                    />
                </label>
                <button className='refresh-btn' onClick={fetchCajeros}>
                    Buscar
                </button>
            </header>
            <div className='container'>
                <table>
                <thead>
                    <tr>
                    {/** Titles */}
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>DPI</th>
                    <th>Usuario</th>
                    <th>Password</th>
                    <th>Fin de labores</th>
                    <th>Dias de vacaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/** Elementos de la tabla */}
                    {cajeros && cajeros.map((cajero) => (
                    <Cajeros_table_item 
                        item={cajero}
                    />
                    ))}
                </tbody>
                </table>
            </div>
        </div>     
    )
}

export default ModCajeros