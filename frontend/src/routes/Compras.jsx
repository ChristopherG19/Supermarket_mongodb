import React, { useEffect , useState } from 'react'
import '../styles/Routes.css'
import Cajeros_table_item from '../components/Cajeros_table_item'
import Header from '../components/Header'
import '../components/css/Inventory.css'
import ComprasVisual from '../components/ComprasVisual'

const Compras = () => {

    const[compras, setCompras] = useState([])
    const[columna, setColumna] = useState('id')
    const[limit, setLimit] = useState(10)
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
        <div className='Content'>
            <div className='ModHeader'>
                <button className='home' onClick={() => window.location.assign("http://localhost:5173/menu")}>Home</button>
                <div className='title'>Información Compras</div>
            </div>    
            <div className='visual'>
                <ComprasVisual />
            </div>
        </div>
    )
}

export default Compras