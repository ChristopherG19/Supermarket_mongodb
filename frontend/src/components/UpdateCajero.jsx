import React, { useEffect, useState } from 'react'
import '../styles/Routes.css'

const UpdateCajero = () => {

    const[columna, setColumna] = useState('nombre')
    const[newInfo, setNewInfo] = useState('')
    const[id_cajeroMax, setIdCajeroMax] = useState(0)
    const[id_cajero, setIdCajero] = useState(0)
    const[error, setError] = useState(null)
    const[estado, setEstado] = useState(null)

    useEffect(() => {
        const fetchCajeros = async () => {
            const response = await fetch('http://localhost:4000/cajeros/count')
            const data = await response.json();
            if(response.ok){
                setIdCajeroMax(data.count)
            }

        }
        fetchCajeros()
    }, [])

    function handleChange(event) {
        const value = event.target.value
        setColumna(value)
    }

    const options = [
        {
          label: "Nombre",
          value: 'nombre',
          key: 1
        },
        {
          label: "DPI",
          value: 'dpi',
          key: 2
        },
        {
          label: "Usuario",
          value: 'usuario',
          key: 3
        },
        {
            label: "Password",
            value: 'password',
            key: 4
        },
        {
            label: "Cumpleaños",
            value: 'birthdayDate',
            key: 5
        },
        {
            label: "Fin de labores",
            value: 'finishWork',
            key: 6
        },
        {
            label: "Dias de vacaciones",
            value: 'diasVacaciones',
            key: 7
        },
    ]

    const handleSubmit = async (e) => {
        setEstado('')
        e.preventDefault()
        if(columna && newInfo && id_cajero) {
            setError(null)

            const id = id_cajero
            const campo = columna
            const newValue = newInfo

            const p = {[campo]: newValue}

            const response = await fetch(`http://localhost:4000/cajeros/${id}`,{
                method: 'PATCH',
                body: JSON.stringify(p),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json()

            if (!response.ok){
                setError(json.error)
            }
            
            if (response.ok){
                setEstado('Cambios realizados con éxito')
                setColumna('nombre')
                setNewInfo('')
                setIdCajero(1)
            }

        } else {
            setError('No pueden haber campos vacíos')
            alert('No pueden haber campos vacíos')
        }
    }

    return (
        <div>
            <h2>Modificacion cajeros</h2>
            <br/>
            <div>
                <label> Id del cajero: 
                    <input 
                        id='idCajero'
                        type="number" 
                        className='inputCajero'
                        min='1'
                        max={id_cajeroMax}
                        onChange={event => setIdCajero(event.target.value)}
                        value={id_cajero}
                    />
                </label>
                <br/>
                <label>Campo a modificar:  
                    <select className='column-selector' onChange={handleChange}>
                        {options.map((o) => (
                            <option key={o.key}value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br/>
                <label> Nuevo valor: 
                    <input 
                        id='newValue'
                        type="text" 
                        className='inputCajero'
                        onChange={event => setNewInfo(event.target.value)}
                        value={newInfo}
                    />
                </label>
                {estado && <div className="estado">{estado}</div>}
                <br/>
          </div> 
          <br/>
          <button className='update-btn'type = "submit" onClick={handleSubmit}>Modificar cajero</button>
        </div> 
    )
}

export default UpdateCajero