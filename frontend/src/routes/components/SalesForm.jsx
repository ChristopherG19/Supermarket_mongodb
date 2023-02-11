import { useEffect, useState } from "react"

const SalesForm = () => {

    const[id, setId] = useState(1)
    const[metodoPago, setMetodoPago] = useState('')
    const[cambio, setCambio] = useState(0)
    const[fecha, setFecha] = useState('')
    const[hora, setHora] = useState('')
    const[numCaja, setNumCaja] = useState(0)
    const[productosC, setProductosC] = useState({})
    const[cajeroId, setCajeroId] = useState(1)
    const[error, setError] = useState(null)

    const[product, setProduct] = useState(null)

    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:4000/productos/${id}`)
        const json = await response.json()

        if(response.ok){
            setProduct(json)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const compra = {id, metodoPago, cambio, fecha, hora, numCaja, productosC, cajeroId}
        fetchProduct()
        
        const response = await fetch('/compras',{
            method: 'POST',
            body: JSON.stringify(compra),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        
        if (response.ok){
            setId('')
            setMetodoPago('')
            setCambio(0)
            setFecha('')
            setHora('')
            setNumCaja(0)
            setProductosC({})
            setCajeroId(1)
            setError(null)
            console.log('Nueva compra agregada', json)
        }
    }

    return (
        <form className="createProduct" onSubmit={handleSubmit}>
            <h3>Agregar producto al carrito</h3>
            <label>Id del producto: </label>
            <input 
                placeholder='Codigo Producto'
                type='number'
                min='1'
                onChange={event => setId(event.target.value)}
                value={id}
            >
            </input>
            <button onClick={console.log(product)}>
                Agregar producto
            </button>
            <br/>
            <br/>
            <label>Método de pago: </label>
            <input 
                type='checkbox'
                onClick={() => setMetodoPago(!metodoPago)}
            ></input>
            <p>{metodoPago === true ? "Efectivo": "Tarjeta"}</p>
            <button>
                Finalizar la compra
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SalesForm
