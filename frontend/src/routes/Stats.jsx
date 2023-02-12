import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import CajasCharts from '../components/CajasCharts'
import ComprasCharts from '../components/ComprasCharts'
import CajerosCharts from '../components/CajerosCharts'
import ProductosCharts from '../components/ProductosCharts'
import '../styles/Routes.css'

const Stats = () => {

    const [selectedCharts, setSelectedCharts] = useState('Compras');

    const btnClick = (charts) => {
        setSelectedCharts(charts)
    }

    return (
        <div className='Content'>
            <div className='StatsHeader'>
                <button className='home' onClick={() => window.location.assign("http://localhost:5173/menu")}>Home</button>
                <div className='title'>Estadísticas</div>
            </div>
            <div className='tools'>
                <button className='btn-coll' onClick={() => btnClick('Cajas')}>Cajas</button>
                <button className='btn-coll' onClick={() => btnClick('Cajeros')}>Cajeros</button>
                <button className='btn-coll' onClick={() => btnClick('Compras')}>Compras</button>
                <button className='btn-coll' onClick={() => btnClick('Productos')}>Productos</button>
            </div>
            <div className='charts-space'>
                {selectedCharts === 'Cajas' && <CajasCharts />}
                {selectedCharts === 'Cajeros' && <CajerosCharts />}
                {selectedCharts === 'Compras' && <ComprasCharts />}
                {selectedCharts === 'Productos' && <ProductosCharts />}
            </div>
        </div>
    )
}

export default Stats