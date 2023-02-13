import React, { useEffect , useState } from 'react'
import ModCajeros from '../components/ModCajeros';
import '../styles/Routes.css'

const Modifications = () => {
    return (
        <div className='Content'>
            <div className='ModHeader'>
                <button className='home' onClick={() => window.location.assign("http://localhost:5173/menu")}>Home</button>
                <div className='title'>Información cajeros</div>
            </div>
            <div className='cajeros-mod'>
                <ModCajeros />
            </div>
        </div>
    )
}

export default Modifications