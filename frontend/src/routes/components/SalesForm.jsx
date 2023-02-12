import { useEffect, useState } from "react"

const SalesForm = (props) => {

    // Almacena el id del producto
    const[id, setId] = useState(1)
    // Se verifica si es pago con tarjeta o efectivo
    const[metodoPago, setMetodoPago] = useState(true)

    // Se almacen la información de la compra
    const[idCompra, setIdCompra] = useState(0)
    const[cantProd, setCantProd] = useState(0)
    const[metodoPagoC, setMetodoPagoC] = useState('Efectivo')
    const[cambioC, setCambioC] = useState(0)
    const[productosC, setProductosC] = useState({})
    
    // Se almacenan los posibles errores en los response
    const[error, setError] = useState(null)
    
    const[totalRecibido, setTotalRecibido] = useState(0)
    const[total, setTotal] = useState(0)

    const agregarProducto = (props) => {
        if(props != null){
            const ingreso = {
                id: parseInt(id),
                precioIn: props.precio,
                cantidad: parseInt(cantProd)
            }

            setProductosC({...productosC, [props.nombre]:ingreso})

            const totalTemp = total + (ingreso.precioIn*ingreso.cantidad)

            setTotal(totalTemp)
        }
    }

    const evalTotal = async () => {
        if(totalRecibido < total){
            setError("Lo sentimos, debes pagar la totalidad de la factura")
            setTotalRecibido(0)
        } else {
            setError(null)
            const fecha = props.fecha
            const hora = props.hora
            const cajeroId = props.cajeroId
            const cajaId = props.cajaId

            setCambioC(totalRecibido - total)
            const cambio = totalRecibido - total
            const compra = {idCompra, metodoPagoC, cambio, fecha, hora, cajaId, productosC, cajeroId}
            console.log(compra)
        }

        /*
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
            setNumCaja(0)
            setProductosC({})
            setError(null)
            console.log('Nueva compra agregada', json)
        }*/
    }

    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:4000/productos/${id}`)
        const json = await response.json()

        console.log("json: ",json)

        if(response.ok){
            agregarProducto(json)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:4000/compras/count')
        const data = await response.json();

        if(response.ok){
            setIdCompra(data.count+1)
        }

        if(metodoPago === true){
            setMetodoPagoC("Efectivo")
        } else {
            setMetodoPagoC("Tarjeta")
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
            <br/>
            <label>Cantidad del producto: </label>
            <input 
                placeholder='Cantidad Producto'
                type='number'
                onChange={event => setCantProd(event.target.value)}
                value={cantProd}
            >
            </input>
            <br/>
            <br/>
            <button onClick={fetchProduct}>
                Agregar producto
            </button>
            <br/>
            <br/>
            <label>Método de pago: </label>
            <input 
                type='checkbox'
                onClick={() => setMetodoPago(!metodoPago)}
            ></input>
            <label>{metodoPago === true ? "Efectivo": "Tarjeta"}</label>
            <br/>
            <label>El total es: ${total}</label>
            <br/>
            <br/>
            <label>Dinero recibido: </label>
            <input 
                type='number'
                onChange={event => setTotalRecibido(event.target.value)}
                value={totalRecibido}
            ></input>
            <br/>
            <br/>
            {error && <div className="error">{error}</div>}
            <button onClick={evalTotal}>
                Finalizar la compra
            </button>
            <br/>
            <label>El cambio es: ${cambioC}</label>
        </form>
    )
}

export default SalesForm
