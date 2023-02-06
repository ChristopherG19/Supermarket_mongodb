import './cajas.css'

const CajasDetails = ({ caja }) => {
    return (
       <div className="caja-details">
            <div>{caja.id} | Dinero en caja: {caja.dinero_caja} | Transacciones: {caja.cant_transacciones}</div>
       </div> 
    )
}

export default CajasDetails