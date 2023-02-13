import { useEffect, useState } from "react"
import Sales_table_item from './Sales_table_item'

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
            if(parseInt(cantProd) != 0){
                let ingreso = {}

                if(productosC.hasOwnProperty([props.nombre])){
                    ingreso = {
                        id: parseInt(id),
                        precioIn: props.precio,
                        cantidad: productosC[props.nombre].cantidad + (parseInt(cantProd))
                    }
                } else {
                    ingreso = {
                        id: parseInt(id),
                        precioIn: props.precio,
                        cantidad: parseInt(cantProd)
                    }
                }

                setProductosC({...productosC, [props.nombre]:ingreso})

                const totalTemp = total + (ingreso.precioIn*parseInt(cantProd))

                setTotal(totalTemp)
            }
        }
    }

    const eliminarProducto = async () => {
        const keys = Object.keys(productosC)

        if (keys.length == 0 && total > 0){
            setTotal(0)
        }

        if (keys.length > 0){
            const ultimoIngreso = productosC[keys.pop()]
            const response = await fetch(`http://localhost:4000/productos/${ultimoIngreso.id}`)
            const json = await response.json()

            if(response.ok){
                if(total > 0){
                    const totalTemp = total - (ultimoIngreso.precioIn * ultimoIngreso.cantidad)
                    setTotal(totalTemp)
                }
                delete productosC[json.nombre]
                setProductosC({...productosC})

                let totalInCart = 0
                for(const key in productosC){
                    if(key !== 'total'){
                        let suma = productosC[key].cantidad*productosC[key].precioIn
                        totalInCart += suma
                    }
                }

                if(total != totalInCart){
                    setTotal(totalInCart)
                }

            }
        }
    }

    const evalTotal = async (e) => {
        e.preventDefault()
        if(totalRecibido < total){
            setError("Lo sentimos, debes pagar la totalidad de la factura")
            setTotalRecibido(0)
        } else {
            if (Object.keys(productosC).length !== 0){
                setError(null)
                const id = idCompra
                const metodo_pago = metodoPagoC
                const fecha = props.fecha
                const hora = props.hora
                const num_caja = props.cajaId
                const productos_caja = productosC
                productos_caja.total = total
                const cajero_id = props.cajeroId

                setCambioC(totalRecibido - total)
                const cambio = totalRecibido - total
                const compra = {id, metodo_pago, cambio, fecha, hora, num_caja, productos_caja, cajero_id}

                if (cajero_id !== 0){
                    const response = await fetch('http://localhost:4000/compras',{
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
                        console.log("Nueva compra agregada ", json)

                        // Se actualiza colección cajas
                        const dineroEntrante = total - cambio

                        const cajasInfo = await fetch(`http://localhost:4000/cajas/${props.cajaId}`)
                        const jsonInfo = await cajasInfo.json()

                        const changeMoney = jsonInfo.dinero_caja + dineroEntrante
                        const transactions = jsonInfo.cant_transacciones + 1

                        const ingresoCaja = {dinero_caja: changeMoney, cant_transacciones: transactions}

                        const patchCaja = await fetch(`http://localhost:4000/cajas/${props.cajaId}`,{
                            method: 'PATCH',
                            body: JSON.stringify(ingresoCaja),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })

                        if (!patchCaja.ok){
                            setError(patchCaja.error)
                        }
                        
                        if (patchCaja.ok){
                            console.log('Caja modificada correctamente')
                        }

                        // Se actualiza colección productos
                        for(const key in productosC){
                            if(key !== 'total'){
                                const pName = await fetch(`http://localhost:4000/productos/nombre/${key}`)
                                const jsonP = await pName.json()
                                const tempCalc = jsonP.cantidadDisponible - productosC[key].cantidad
                                const nuevo = {cantidadDisponible: tempCalc}

                                const patchR = await fetch(`http://localhost:4000/productos/${key}`,{
                                    method: 'PATCH',
                                    body: JSON.stringify(nuevo),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })

                                if (!patchR.ok){
                                    setError(patchR.error)
                                }
                                
                                if (patchR.ok){
                                    console.log('Cantidad modificada correctamente')
                                }
                            }
                        }

                        // Se reinicia compra
                        setId(1)
                        setIdCompra(0)
                        setCambioC(0)
                        setCantProd(0)
                        setMetodoPago(true)
                        setMetodoPagoC('Efectivo')
                        setProductosC({})
                        setTotal(0)
                        setTotalRecibido(0)
                        setError(null)
                        console.log('Nueva compra agregada', json)
                    }
                }
            } else {
                setError("No puedes dejar el carrito vacío")
            }
        }
    }

    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:4000/productos/${id}`)
        const json = await response.json()

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
        <div>
            <div className="container">
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th></th>
                    <th>Precio Unidad</th>
                </tr>
                </thead>
                <tbody>
                    {Object.keys(productosC).map((key) => {
                        if(key !== 'total'){
                            const { id, precioIn, cantidad } = productosC[key]
                            return (
                            <Sales_table_item 
                                keyT={id}
                                id = {id}
                                producto = {key}
                                precio = {precioIn}
                                cantidad = {cantidad}
                            />
                            )
                        }
                    })}
                </tbody>
            </table>
            </div>
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
                    min='0'
                    onChange={event => setCantProd(event.target.value)}
                    value={cantProd}
                >
                </input>
                <br/>
                <br/>
                <button onClick={fetchProduct}>
                    Agregar producto
                </button>
                <button onClick={eliminarProducto}>
                    Eliminar producto
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
        </div>    
    )
}

export default SalesForm
