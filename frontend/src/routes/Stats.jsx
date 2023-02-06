import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import CajasDetails from './components/CajasDetails'
import './components/cajas.css'

const Stats = () => {

    const[cajas, setCajas] = useState(null)

    useEffect(() => {
        const fetchCajas = async () => {
            const response = await fetch('http://localhost:4000/supermarket')
            const json = await response.json()

            if(response.ok){
                setCajas(json)
            }

        }

        fetchCajas()
    }, [])

    console.log(cajas)

    return (
        <div>
            <Header title="Stats"></Header>
            <div className='cajas'>
                {cajas && cajas.map((caja) => (
                    <CajasDetails key={caja._id} caja={caja} />
                ))}    
            </div>  
        </div>
    )
}

export default Stats