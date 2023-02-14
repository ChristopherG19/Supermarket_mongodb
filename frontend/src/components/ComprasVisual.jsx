import React, { useEffect , useState } from 'react'
import '../styles/Routes.css'
import Cajeros_table_item from './Cajeros_table_item'
import Header from './Header'
import './css/Inventory.css'
import ComprasItems from './ComprasItems'

const ComprasVisual = () => {

    const[compras, setCompras] = useState([])
    const[columna, setColumna] = useState('id')
    const[limit, setLimit] = useState(15)
    const[orden, setOrden] = useState(true)

    useEffect(() => {
        const fetchCompras = async () => {
          const response = await fetch('http://localhost:4000/compras')
          const json = await response.json()
    
          if (response.ok){
            setCompras(json)
          }
        }
    
        fetchCompras()
    }, [])

    const fetchCompras = async () => {
        const response = await fetch(`http://localhost:4000/compras/vista/${columna}/${limit}/${orden}`)
        const json = await response.json()
  
        if (response.ok){
          setCompras(json)
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
          key: 1
        }, 
        {
          label: "Metodo Pago",
          value: 'metodo_pago',
          key: 2
        },
        {
          label: "Cambio",
          value: 'cambio',
          key: 3
        },
        {
          label: "Fecha",
          value: 'fecha',
          key: 4
        },
        {
          label: "Hora",
          value: 'hora',
          key: 5
        },
        {
            label: "ID Caja",
            value: 'num_caja',
            key: 6
        },
        {
            label: "ID Cajero",
            value: 'cajero_id',
            key: 7
        },
    ]

    return (
        <div className='allCaj'>
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
                        defaultValue={15}
                        min='0'
                        onChange={handleLimit}
                    />
                </label>
                <button className='refresh-btn' onClick={fetchCompras}>
                    Buscar
                </button>
            </header>
            <div className='containerCompras'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Metodo Pago</th>
                            <th>Cambio</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>ID Caja</th>
                            <th>ID Cajero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/** Elementos de la tabla */}
                        {compras && compras.map((compra) => (
                        <ComprasItems item={compra}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>     
    )
}

export default ComprasVisual