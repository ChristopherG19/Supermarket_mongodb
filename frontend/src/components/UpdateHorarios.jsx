import React, { useEffect, useState } from 'react'
import '../styles/Routes.css'

const UpdateHorarios = () => {

    const[horario, setHorario] = useState('A')
    const[dia, setDia] = useState('Lunes')
    const[newIn, setNewIn] = useState('')
    const[newFn, setNewFn] = useState('')
    const[error, setError] = useState(null)
    const[estado, setEstado] = useState(null)
    const[cajeros, setCajeros] = useState([])

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

    function handleChangeHorario(event) {
        const value = event.target.value
        setHorario(value)
    }

    function handleChangeDia(event) {
        const value = event.target.value
        setDia(value)
    }

    function handleSubmitIn(event) {
        const value = event.target.value
        setNewIn(value)
    }

    function handleSubmitFn(event) {
        const value = event.target.value
        setNewFn(value)
    }

    const options = [
        {
          label: "Vendedores A (Jornada Matutina)",
          value: 'A',
          key: 1
        },
        {
            label: "Vendedores B (Jornada Vespertina)",
            value: 'B',
            key: 2
        },
        {
            label: "Vendedores C (Todo el día)",
            value: 'C',
            key: 3
        },
    ]

    const options2 = [
        {
            label: "Lunes y Viernes",
            value: 'Lunes',
            key: 1
        },
        {
            label: "Martes a Jueves",
            value: 'Martes',
            key: 2
        },
        {
            label: "Sábado y Domingo",
            value: 'Sabado',
            key: 3
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(newIn !== "" && newFn !== ""){

            let type = "A"
            let idIn = ""
            let idFn = ""

            let p = {}

            if(horario === 'A' && dia === 'Lunes'){
                const Newhorario = Object.assign({}, cajeros[0].horario, {
                    'Lunes': [newIn, newFn], 
                    'Viernes': [newIn, newFn],
                })

                type = "A"
                idIn = cajeros[0].id
                idFn = cajeros[4].id
    
                p = {horario: Newhorario}
    
            } else if(horario === 'A' && dia === 'Martes'){
                const Newhorario = Object.assign({}, cajeros[0].horario, {
                    'Martes': [newIn, newFn], 
                    'Miércoles': [newIn, newFn], 
                    'Jueves': [newIn, newFn]
                })
    
                type = "A"
                idIn = cajeros[0].id
                idFn = cajeros[4].id
    
                p = {horario: Newhorario}
    
            } else if (horario === 'A' && dia === 'Sabado'){
                const Newhorario = Object.assign({}, cajeros[0].horario, {
                    'Sabado': [newIn, newFn], 
                    'Domingo': [newIn, newFn]
                })
    
                type = "A"
                idIn = cajeros[0].id
                idFn = cajeros[4].id
    
                p = {horario: Newhorario}

            } else if(horario === 'B' && dia === 'Lunes'){
                const Newhorario = Object.assign({}, cajeros[6].horario, {
                    'Lunes': [newIn, newFn], 
                    'Viernes': [newIn, newFn],
                })
    
                type = "B"
                idIn = cajeros[5].id
                idFn = cajeros[7].id
    
                p = {horario: Newhorario}
    
            } else if(horario === 'B' && dia === 'Martes'){
                const Newhorario = Object.assign({}, cajeros[6].horario, {
                    'Martes': [newIn, newFn], 
                    'Miércoles': [newIn, newFn], 
                    'Jueves': [newIn, newFn]
                })
    
                type = "B"
                idIn = cajeros[5].id
                idFn = cajeros[7].id
    
                p = {horario: Newhorario}
    
            } else if (horario === 'B' && dia === 'Sabado'){
                const Newhorario = Object.assign({}, cajeros[6].horario, {
                    'Sabado': [newIn, newFn], 
                    'Domingo': [newIn, newFn]
                })
    
                type = "B"
                idIn = cajeros[5].id
                idFn = cajeros[7].id
    
                p = {horario: Newhorario}

            } else if(horario === 'C' && dia === 'Lunes'){
                const Newhorario = Object.assign({}, cajeros[8].horario, {
                    'Lunes': [newIn, newFn], 
                    'Viernes': [newIn, newFn],
                })
    
                type = "C"
                idIn = cajeros[8].id
                idFn = cajeros[9].id
    
                p = {horario: Newhorario}
    
            } else if(horario === 'C' && dia === 'Martes'){
                const Newhorario = Object.assign({}, cajeros[8].horario, {
                    'Martes': [newIn, newFn], 
                    'Miércoles': [newIn, newFn], 
                    'Jueves': [newIn, newFn]
                })
    
                type = "C"
                idIn = cajeros[8].id
                idFn = cajeros[9].id
    
                p = {horario: Newhorario}
    
            } else if (horario === 'C' && dia === 'Sabado'){
                const Newhorario = Object.assign({}, cajeros[8].horario, {
                    'Sabado': [newIn, newFn], 
                    'Domingo': [newIn, newFn]
                })
    
                type = "C"
                idIn = cajeros[8].id
                idFn = cajeros[9].id
    
                p = {horario: Newhorario}
            }

            const response = await fetch(`http://localhost:4000/cajeros/horario/${type}/${idIn}/${idFn}`,{
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
                setNewIn("")
                setNewFn("")
            }

        } else {
            setError('No pueden haber campos vacíos')
            alert('No pueden haber campos vacíos')
        }
    }

    return (
        <div>
            <h2>Modificacion horarios</h2>
            <br/>
            <div>
                <label>Horario a modificar:  
                    <select className='column-selector' onChange={handleChangeHorario}>
                        {options.map((o) => (
                            <option key={o.key}value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br/>
                <label>Días a modificar:  
                    <select className='column-selector' onChange={handleChangeDia}>
                        {options2.map((o) => (
                            <option key={o.key}value={o.value}>
                                {o.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br/>
                <label> Ingreso: 
                    <input 
                        id='newValue'
                        type="text" 
                        className='inputCajero'
                        onChange={handleSubmitIn}
                        value={newIn}
                    />
                </label>
                <br/>
                <label> Salida: 
                    <input 
                        id='newValue'
                        type="text" 
                        className='inputCajero'
                        onChange={handleSubmitFn}
                        value={newFn}
                    />
                </label>
                {estado && <div className="estado">{estado}</div>}
                <br/>
            </div> 
            <br/>
            <button className='update-btn'type = "submit" onClick={handleSubmit}>
                Modificar Horario
            </button>
        </div> 
    )
}

export default UpdateHorarios